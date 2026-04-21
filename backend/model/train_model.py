import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import joblib

# Load dataset
df = pd.read_csv('../data/dataset.csv')

# Encode categorical values
df['weather'] = df['weather'].map({'clear':0, 'rain':1, 'storm':2})
df['traffic'] = df['traffic'].map({'low':0, 'medium':1, 'high':2})

# Features & target
X = df[['distance', 'weather', 'traffic']]
y = df['delay']

# Train model
model = RandomForestClassifier()
model.fit(X, y)

# Save model
joblib.dump(model, 'model.pkl')

print("✅ Model trained and saved as model.pkl")

model = joblib.load('model.pkl')

input_data = pd.DataFrame([[200, 1, 2]], columns=['distance', 'weather', 'traffic'])
print(model.predict(input_data))

@app.post("/predict")
def predict(data: dict):
    distance = data["distance"]
    weather = data["weather"]
    traffic = data["traffic"]

    prediction = model.predict([[distance, weather, traffic]])

    return {"delay": int(prediction[0])}