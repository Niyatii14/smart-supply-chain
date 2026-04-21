from fastapi import FastAPI
import joblib

app = FastAPI()

model = joblib.load("model/model.pkl")

@app.get("/")
def home():
    return {"message": "API is working"}

@app.post("/predict")
def predict(data: dict):
    distance = data["distance"]
    weather = data["weather"]
    traffic = data["traffic"]

    prediction = model.predict([[distance, weather, traffic]])

    return {"delay": int(prediction[0])}