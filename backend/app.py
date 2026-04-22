from fastapi import FastAPI
import joblib

app = FastAPI()

model = joblib.load("backend/model/model.pkl")

@app.get("/")
def home():
    return {"message": "API is working"}

@app.post("/predict")
def predict(data: dict):
    distance = data["distance"]
    weather = data["weather"]
    traffic = data["traffic"]

    input_data = [[distance, weather, traffic]]

    prediction = model.predict(input_data)
    probability = model.predict_proba(input_data)[0][1]

    if probability < 0.4:
        risk = "Low"
    elif probability < 0.7:
        risk = "Medium"
    else:
        risk = "High"

    if risk == "Low":
        suggestion = "Continue normal route"
    elif risk == "Medium":
        suggestion = "Monitor shipment and prepare backup route"
    else:
        suggestion = "Dispatch early or reroute immediately"

    return {
        "delay": int(prediction[0]),
        "delay_probability": round(float(probability), 2),
        "risk_level": risk,
        "suggestion": suggestion
    }