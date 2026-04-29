import pandas as pd

def preprocess(distance, weather, traffic):
    weather_map = {"clear": 0, "rain": 1, "storm": 2}
    traffic_map = {"low": 0, "medium": 1, "high": 2}

    return pd.DataFrame([[
        distance,
        weather_map[weather],
        traffic_map[traffic]
    ]], columns=["distance", "weather", "traffic"])