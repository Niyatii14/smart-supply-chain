import requests

def get_weather(city):
    API_KEY = "AIzaSyCyJVt91drBHB-3O573ukAUQrg1a4eu5rU"  # free at openweathermap.org
    url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}"
    try:
        r = requests.get(url).json()
        cond = r["weather"][0]["main"].lower()
        if "storm" in cond or "thunder" in cond: return "storm"
        if "rain" in cond or "drizzle" in cond: return "rain"
        return "clear"
    except:
        return "clear"