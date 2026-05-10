import pandas as pd
import os
import math
import random

# Correct path to CSV
DATA_PATH = os.path.join(
    os.path.dirname(__file__),
    "..",
    "data",
    # "DataCoSupplyChainDataset.csv"
    "sample.csv"
)
# DATA_PATH = "backend/sample.csv"

# Load dataset once
df = pd.read_csv(DATA_PATH, encoding="latin1")

# ✅ Haversine formula
def calculate_distance(lat1, lon1, lat2, lon2):
    R = 6371
    lat1, lon1, lat2, lon2 = map(math.radians, [lat1, lon1, lat2, lon2])
    dlat = lat2 - lat1
    dlon = lon2 - lon1
    a = math.sin(dlat/2)**2 + math.cos(lat1)*math.cos(lat2)*math.sin(dlon/2)**2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))
    return R * c

# def get_distance_from_data(source, destination):
#     try:
#         src = df[df["Order City"].str.lower().str.contains(source.lower())]
#         dst = df[df["Customer City"].str.lower().str.contains(destination.lower())]

#         if len(src) == 0 or len(dst) == 0:
#             raise Exception("City not found")

#         import random
#         base = random.randint(100, 1500)

#         return base

#     except Exception as e:
#         print("DATASET FAILED:", e)

#         import random
#         return random.randint(200, 1200)

def get_distance_from_data(source, destination):
    try:
        # City coordinates se actual distance calculate karo
        from services.map_service import CITY_COORDS, get_coords
        
        src_coords = get_coords(source)
        dst_coords = get_coords(destination)
        
        if src_coords and dst_coords:
            # Haversine distance
            dist = calculate_distance(
                src_coords[1], src_coords[0],  # lat, lon
                dst_coords[1], dst_coords[0]
            )
            # Road distance ~1.3x straight line
            return round(dist * 1.3, 2)
        
        raise Exception("Coords not found")
        
    except Exception as e:
        print("DATASET FAILED:", e)
        # Last resort fallback
        return random.randint(200, 800)
    
# ✅ Function 1: Get random route
def get_random_route():
    row = df.sample(1).iloc[0]

    source = str(row.get("Order City", "Delhi"))
    destination = str(row.get("Customer City", "Mumbai"))

    return source, destination


# ✅ Function 2: Get dataset info (optional)
def get_dataset_info():
    return {
        "total_rows": len(df),
        "columns": list(df.columns)
    }

def get_route_from_data():
    row = df.sample(1).iloc[0]

    return {
        "source": row.get("Order City"),
        "destination": row.get("Customer City"),
        "distance": row.get("Order Item Quantity", 500)  # placeholder logic
    }


