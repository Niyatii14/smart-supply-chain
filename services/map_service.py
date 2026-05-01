# import random

# def get_distance_eta(source, destination):
#     distance = random.randint(100, 1500)
#     eta = f"{distance // 60} hr {distance % 60} min"
#     return distance, eta

import requests
import os
from dotenv import load_dotenv
from services.data_service import get_distance_from_data

load_dotenv()

ORS_API_KEY = os.getenv("ORS_API_KEY")

# City name to coordinates (add more as needed)
CITY_COORDS = {
    "bhopal": (77.4126, 23.2599),
    "jabalpur": (79.9864, 23.1815),
    "delhi": (77.1025, 28.7041),
    "mumbai": (72.8777, 19.0760),
    "bangalore": (77.5946, 12.9716),
    "hyderabad": (78.4867, 17.3850),
    "chennai": (80.2707, 13.0827),
    "kolkata": (88.3639, 22.5726),
    "pune": (73.8567, 18.5204),
    "ahmedabad": (72.5714, 23.0225),
    "jaipur": (75.7873, 26.9124),
    "surat": (72.8311, 21.1702),
    "lucknow": (80.9462, 26.8467),
    "nagpur": (79.0882, 21.1458),
    "indore": (75.8577, 22.7196),
    "patna": (85.1376, 25.5941),
    "vadodara": (73.1812, 22.3072),
    "agra": (78.0081, 27.1767),
    "nashik": (73.7898, 19.9975),
    "gwalior": (78.1828, 26.2183),
}

def get_coords(city_name):
    return CITY_COORDS.get(city_name.lower().strip())

def get_distance_eta(source, destination):
    try:
        src_coords = get_coords(source)
        dst_coords = get_coords(destination)

        if not src_coords or not dst_coords:
            raise Exception(f"Coordinates not found for {source} or {destination}")

        url = "https://api.heigit.org/v2/directions/driving-car"
        headers = {"Authorization": ORS_API_KEY}
        params = {
            "start": f"{src_coords[0]},{src_coords[1]}",
            "end": f"{dst_coords[0]},{dst_coords[1]}"
        }

        res = requests.get(url, headers=headers, params=params, timeout=5).json()

        segment = res["features"][0]["properties"]["segments"][0]
        distance = round(segment["distance"] / 1000, 2)
        duration_min = int(segment["duration"] / 60)
        eta = f"{duration_min // 60} hr {duration_min % 60} min"

        print(f"✅ ORS API: {source} → {destination} = {distance}km, {eta}")
        return distance, eta

    except Exception as e:
        print(f"❌ ORS API failed: {e}")

    # Fallback
    distance = get_distance_from_data(source, destination)
    total_minutes = int((distance / 60) * 60)
    eta = f"{total_minutes // 60} hr {total_minutes % 60} min"
    print(f"⚠️ Using fallback: {distance}km")
    return distance, eta