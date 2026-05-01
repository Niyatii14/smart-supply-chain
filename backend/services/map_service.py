# import requests
# import os
# from dotenv import load_dotenv
# from services.data_service import get_distance_from_data

# load_dotenv()

# GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")

# def get_distance_eta(source, destination):
#     # Try Google Maps API first
#     try:
#         url = "https://maps.googleapis.com/maps/api/directions/json"
#         params = {
#             "origin": f"{source}, India",
#             "destination": f"{destination}, India",
#             "key": GOOGLE_API_KEY
#         }

#         res = requests.get(url, params=params, timeout=5).json()

#         if res["status"] == "OK":
#             leg = res["routes"][0]["legs"][0]
#             distance = round(leg["distance"]["value"] / 1000, 2)
#             eta = leg["duration"]["text"]
#             print(f"✅ Google API: {source} → {destination} = {distance}km, {eta}")
#             return distance, eta
#         else:
#             print(f"⚠️ Google API status: {res['status']} | {res.get('error_message', 'No message')}")

#     except Exception as e:
#         print(f"❌ Google API exception: {e}")

#     # Fallback: dataset-based random distance
#     distance = get_distance_from_data(source, destination)
#     # Assume avg speed 60 km/h on Indian highways
#     total_minutes = int((distance / 60) * 60)
#     eta = f"{total_minutes // 60} hr {total_minutes % 60} min"
#     print(f"⚠️ Using dataset fallback: {distance}km, {eta}")
#     return distance, eta

import requests
import os
from dotenv import load_dotenv
from services.data_service import get_distance_from_data

load_dotenv()

ORS_API_KEY = os.getenv("ORS_API_KEY")

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
    "katni": (80.3953, 23.8333),
    "rewa": (81.2962, 24.5362),
    "satna": (80.8322, 24.5694),
    "ujjain": (75.7885, 23.1765),
    "sagar": (78.7378, 23.8388),
    "dewas": (76.0519, 22.9623),
    "ratlam": (75.0367, 23.3315),
    "burhanpur": (76.2309, 21.3100),
    "khandwa": (76.3529, 21.8264),
    "chhindwara": (78.9395, 22.0574),
    "seoni": (79.5401, 22.0868),
    "mandla": (80.3739, 22.5983),
    "balaghat": (80.1863, 21.8135),
    "damoh": (79.4416, 23.8328),
    "tikamgarh": (78.8306, 24.7431),
    "chhatarpur": (79.5941, 24.9170),
    "panna": (80.1833, 24.7167),
    "shahdol": (81.3561, 23.2974),
    "umaria": (80.8378, 23.5243),
    "anuppur": (81.6853, 23.1032),
}

# def get_coords(city_name):
#     return CITY_COORDS.get(city_name.lower().strip())

def get_coords(city_name):
    # First check hardcoded dict for speed
    hardcoded = CITY_COORDS.get(city_name.lower().strip())
    if hardcoded:
        return hardcoded
    
    # Otherwise geocode it using ORS (free, covers all India)
    try:
        url = "https://api.openrouteservice.org/geocode/search"
        headers = {"Authorization": ORS_API_KEY}
        params = {
            "text": f"{city_name}, India",
            "size": 1,
            "boundary.country": "IN"
        }
        res = requests.get(url, headers=headers, params=params, timeout=5).json()
        coords = res["features"][0]["geometry"]["coordinates"]
        print(f"📍 Geocoded {city_name}: {coords}")
        return (coords[0], coords[1])  # (lon, lat)
    except Exception as e:
        print(f"❌ Geocoding failed for {city_name}: {e}")
        return None

def get_distance_eta(source, destination):
    try:
        src_coords = get_coords(source)
        dst_coords = get_coords(destination)

        if not src_coords or not dst_coords:
            raise Exception(f"Coordinates not found for {source} or {destination}")

        # url = "https://api.heigit.org/v2/directions/driving-car"
        url = "https://api.openrouteservice.org/v2/directions/driving-car"
        headers = {"Authorization": ORS_API_KEY}
        # headers = {"Authorization": f"Bearer {ORS_API_KEY}"}
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

    distance = get_distance_from_data(source, destination)
    total_minutes = int((distance / 60) * 60)
    eta = f"{total_minutes // 60} hr {total_minutes % 60} min"
    print(f"⚠️ Using fallback: {distance}km")
    return distance, eta