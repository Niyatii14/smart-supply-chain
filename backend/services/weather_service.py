import requests
import os
from dotenv import load_dotenv

load_dotenv()



def get_weather(city):
    API_KEY = os.getenv("WEATHER_API_KEY")  # free at openweathermap.org
    url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}"
    try:
        r = requests.get(url).json()
        cond = r["weather"][0]["main"].lower()
        if "storm" in cond or "thunder" in cond: return "storm"
        if "rain" in cond or "drizzle" in cond: return "rain"
        return "clear"
    except:
        return "clear"