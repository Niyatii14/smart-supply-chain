# def get_traffic(source, destination):
#     route = (source + destination).lower()

#     if "delhi" in route:
#         return "high"
#     elif "shivpuri" in route:
#         return "low"
#     elif "mumbai" in route:
#         return "high"
#     else:
#         return "medium"
    

    
# import random

# HIGH_TRAFFIC_CITIES = [
#     "delhi", "mumbai", "bangalore", "bengaluru", "kolkata", "chennai",
#     "hyderabad", "pune", "ahmedabad", "surat", "jaipur", "lucknow",
#     "nagpur", "indore", "bhopal", "patna", "vadodara", "agra", "gurgaon",
#     "noida", "gurugram", "faridabad", "ghaziabad", "meerut", "nashik",
#     "thane", "pimpri", "kalyan", "vasai"
# ]

# LOW_TRAFFIC_CITIES = [
#     "shivpuri", "tikamgarh", "damoh", "panna", "mandla", "seoni",
#     "balaghat", "umaria", "anuppur", "dindori", "shahdol", "sidhi",
#     "singrauli", "katni", "narsinghpur", "hoshangabad", "raisen",
#     "sehore", "vidisha", "guna", "ashok nagar", "sheopur"
# ]

# def get_traffic(source, destination):
#     route = (source + " " + destination).lower()

#     high_count = sum(1 for city in HIGH_TRAFFIC_CITIES if city in route)
#     low_count = sum(1 for city in LOW_TRAFFIC_CITIES if city in route)

#     if high_count >= 2:
#         return "high"
#     elif high_count == 1 and low_count == 0:
#         # One major city — 60% high, 40% medium
#         return random.choices(["high", "medium"], weights=[60, 40])[0]
#     elif low_count >= 1 and high_count == 0:
#         return "low"
#     else:
#         # Unknown cities — medium by default
#         return random.choices(["low", "medium", "high"], weights=[25, 55, 20])[0]

import random

HIGH_TRAFFIC_CITIES = [
    "delhi", "mumbai", "bangalore", "bengaluru", "kolkata", "chennai",
    "hyderabad", "pune", "ahmedabad", "surat", "jaipur", "lucknow",
    "nagpur", "indore", "bhopal", "patna", "vadodara", "agra", "gurgaon",
    "noida", "gurugram", "faridabad", "ghaziabad", "meerut", "nashik",
    "thane", "pimpri", "kalyan", "vasai"
]

LOW_TRAFFIC_CITIES = [
    "shivpuri", "tikamgarh", "damoh", "panna", "mandla", "seoni",
    "balaghat", "umaria", "anuppur", "dindori", "shahdol", "sidhi",
    "singrauli", "katni", "narsinghpur", "hoshangabad", "raisen",
    "sehore", "vidisha", "guna", "ashok nagar", "sheopur"
]

def get_traffic(source, destination):
    src = source.lower().strip()
    dst = destination.lower().strip()

    # ✅ Exact word match — fixes "indore" matching inside "dindori"
    src_high = src in HIGH_TRAFFIC_CITIES
    dst_high = dst in HIGH_TRAFFIC_CITIES
    src_low  = src in LOW_TRAFFIC_CITIES
    dst_low  = dst in LOW_TRAFFIC_CITIES

    high_count = sum([src_high, dst_high])
    low_count  = sum([src_low,  dst_low])

    if high_count == 2:
        return "high"
    elif high_count == 1 and low_count == 1:
        return "medium"
    elif high_count == 1:
        return "medium"
    elif low_count == 2:
        return "low"
    elif low_count == 1:
        return "low"
    else:
        return "medium"  # unknown cities — safe default