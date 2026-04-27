def get_traffic(source, destination):
    route = (source + destination).lower()

    if "delhi" in route:
        return "high"
    elif "shivpuri" in route:
        return "low"
    elif "mumbai" in route:
        return "high"
    else:
        return "medium"