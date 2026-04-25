from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import joblib
from services.maps_service import get_distance
from services.weather_service import get_weather
from services.traffic_service import get_traffic
from utils.preprocess import preprocess

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = joblib.load("model/model.pkl")


@app.post("/predict")
def predict(data: dict):
    source = data["source"]
    destination = data["destination"]

    # 🔹 Get real/simulated data
    distance = get_distance(source, destination)
    weather = get_weather(destination)
    traffic = get_traffic(source, destination)

    # 🔹 Preprocess
    input_data = preprocess(distance, weather, traffic)

    # 🔹 ML prediction
    prediction = model.predict(input_data)
    probability = model.predict_proba(input_data)[0][1]

    # 🔹 Risk logic
    if probability < 0.4:
        risk = "Low"
        suggestion = "Continue normal route"
    elif probability < 0.7:
        risk = "Medium"
        suggestion = "Monitor route"
    else:
        risk = "High"
        suggestion = "Reroute or dispatch early"

    return {
        "distance": distance,
        "weather": weather,
        "traffic": traffic,
        "delay_probability": round(float(probability), 2),
        "risk": risk,
        "suggestion": suggestion
    }