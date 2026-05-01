from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import joblib
import os

def load_dotenv(path: str = ".env"):
    if not os.path.isfile(path):
        return
    with open(path, encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            if "=" not in line:
                continue
            key, value = line.split("=", 1)
            key = key.strip()
            value = value.strip().strip('"').strip("'")
            if key and key not in os.environ:
                os.environ[key] = value

load_dotenv()
# try:
#     # For Render (inside backend)
#     from services.map_service import get_distance_eta
#     from services.weather_service import get_weather
#     from services.traffic_service import get_traffic
#     from utils.preprocess import preprocess
# except:
#     # For local (from project root)
#     from services.map_service import get_distance_eta
#     from services.weather_service import get_weather
#     from services.traffic_service import get_traffic
#     from utils.preprocess import preprocess

from services.data_service import get_random_route
from services.map_service import get_distance_eta
from services.weather_service import get_weather
from services.traffic_service import get_traffic
from utils.preprocess import preprocess

app = FastAPI(title="Logistics Mitra API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load ML model once at startup
MODEL_PATH = os.path.join(os.path.dirname(__file__), "model", "model.pkl")
model = None
try:
    model = joblib.load(MODEL_PATH)
    print("✅ ML model loaded")
except Exception as e:
    print(f"⚠️  Model not found, using rule-based fallback: {e}")


@app.get("/")
def home():
    return {"message": "Logistics Mitra Running ✅"}


@app.post("/predict")
def predict(data: dict):
    
    from services.data_service import get_random_route   # 👈 add here

    try:
        if not data.get("source") or not data.get("destination"):
            source, destination = get_random_route()
        else:
            source = data.get("source")
            destination = data.get("destination")
    except:
        source, destination = "Delhi", "Mumbai"

    cargo_type = data.get("cargo_type", "general")

    # ── Real API calls ──
    distance, eta = get_distance_eta(source, destination)
    weather       = get_weather(destination)
    traffic       = get_traffic(source, destination)

    # ── Cargo sensitivity score ──
    cargo_scores = {
        "general": 0, "perishable": 1,
        "hazmat": 2, "pharma": 1, "electronics": 1,
    }
    cargo_score = cargo_scores.get(cargo_type, 0)

    # ── ML model prediction ──
    ml_prob = None
    if model:
        try:
            features = preprocess(distance, weather, traffic)
            ml_prob  = float(model.predict_proba(features)[0][1])
        except Exception as e:
            print(f"ML predict error: {e}")

    # ── Rule-based risk score ──
    score = 0
    score += (2 if distance > 800 else 1 if distance > 300 else 0)
    score += (2 if weather in ("storm",) else 1 if weather in ("rain", "smog") else 0)
    score += (2 if traffic == "high" else 1 if traffic == "medium" else 0)
    score += cargo_score

    if score <= 1:
        risk = "Low"
        rule_prob = 0.14
        suggestion = "Route is clear. Proceed normally and monitor en-route."
    elif score <= 3:
        risk = "Medium"
        rule_prob = 0.52
        suggestion = "Elevated risk. Maintain backup route and buffer inventory."
    else:
        risk = "High"
        rule_prob = 0.84
        suggestion = "Critical risk. Reroute immediately or dispatch 6+ hours early."

    # Blend ML prob with rule prob if available
    delay_probability = round((ml_prob * 0.65 + rule_prob * 0.35) if ml_prob is not None else rule_prob, 3)

    # ── Alternative Routes ──
    import math, random
    random.seed(len(source) + len(destination))  # deterministic per route pair

    def adj_eta(base_eta: str, delta_min: int) -> str:
        """Add/subtract minutes from an ETA string like '6 hr 20 min'."""
        import re
        m = re.search(r"(\d+)\s*hr\s*(\d+)\s*min", base_eta)
        if not m:
            return base_eta
        total = int(m.group(1)) * 60 + int(m.group(2)) + delta_min
        total = max(5, total)
        return f"{total // 60} hr {total % 60} min"

    alt1_prob = max(0.08, delay_probability - 0.22 - random.uniform(0, 0.05))
    alt2_prob = min(0.97, delay_probability + 0.10 + random.uniform(0, 0.05))

    def prob_to_risk(p):
        return "Low" if p < 0.35 else "Medium" if p < 0.65 else "High"

    alternatives = [
        {
            "name": "Primary Route (NH Corridor)",
            "distance": distance,
            "eta": eta,
            "risk": risk,
            "prob": delay_probability,
            "toll": "₹340",
            "recommended": risk == "Low",
        },
        {
            "name": "Alt Route (State Highway)",
            "distance": round(distance * 1.13),
            "eta": adj_eta(eta, +22),
            "risk": prob_to_risk(alt1_prob),
            "prob": round(alt1_prob, 3),
            "toll": "₹120",
            "recommended": risk == "High",
        },
        {
            "name": "Express Corridor",
            "distance": round(distance * 0.94),
            "eta": adj_eta(eta, -12),
            "risk": prob_to_risk(alt2_prob),
            "prob": round(alt2_prob, 3),
            "toll": "₹680",
            "recommended": False,
        },
    ]

    return {
        "source":            source,
        "destination":       destination,
        "distance":          distance,
        "eta":               eta,
        "weather":           weather,
        "traffic":           traffic,
        "cargo_type":        cargo_type,
        "risk":              risk,
        "delay_probability": delay_probability,
        "suggestion":        suggestion,
        "ml_used":           ml_prob is not None,
        "alternatives":      alternatives,
    }

@app.get("/test-data")
def test_data():
    from services.data_service import get_dataset_info
    return get_dataset_info()

@app.get("/alerts")
def get_alerts():
    return {
        "alerts": [
            {"type": "warn",   "text": "Heavy fog on NH-48 near Gurugram. Visibility < 100m.", "time": "12 min ago", "tag": "Weather"},
            {"type": "danger", "text": "Road closure Mumbai–Pune Expressway km 74.", "time": "38 min ago", "tag": "Traffic"},
            {"type": "info",   "text": "JNPT port congestion easing — dwell time down 18%.", "time": "1 hr ago",  "tag": "Port"},
        ]
    }


@app.get("/analytics")
def get_analytics():
    return {
        "on_time_rate": 91.4,
        "avg_delay_hours": 2.3,
        "routes_saved": 47,
        "cost_saved_inr": 210000,
    }


@app.get("/shipments")
def get_shipments():
    return {
        "shipments": [
            {"id": "LM-0041", "route": "DEL → MUM", "status": "in-transit", "eta": "6h 20m"},
            {"id": "LM-0038", "route": "MUM → BLR", "status": "on-time",    "eta": "11h 10m"},
            {"id": "LM-0035", "route": "HYD → CHN", "status": "delayed",    "eta": "4h 45m"},
            {"id": "LM-0031", "route": "PNE → GWL", "status": "on-time",    "eta": "8h 05m"},
        ]
    }

from services.data_service import get_route_from_data

data_sample = get_route_from_data()

source = data_sample["source"]
destination = data_sample["destination"]

@app.get("/sample-data")
def sample_data():
    from services.data_service import get_random_route
    source, destination = get_random_route()
    return {
        "source": source,
        "destination": destination
    }