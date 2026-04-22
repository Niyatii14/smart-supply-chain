import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [distance, setDistance] = useState("");
  const [weather, setWeather] = useState("");
  const [traffic, setTraffic] = useState("");
  const [result, setResult] = useState(null);

  const handlePredict = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/predict", {
        distance: Number(distance),
        weather: Number(weather),
        traffic: Number(traffic),
      });

      setResult(response.data);
    } catch (error) {
      alert("Backend not running!");
    }
  };

  return (
    <div className="container">
      <h1>Smart Supply Chain Dashboard</h1>

      <div className="card">
        <input
          type="number"
          placeholder="Enter Distance (km)"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />

        <select onChange={(e) => setWeather(e.target.value)}>
          <option>Select Weather</option>
          <option value="0">Clear</option>
          <option value="1">Rain</option>
          <option value="2">Storm</option>
        </select>

        <select onChange={(e) => setTraffic(e.target.value)}>
          <option>Select Traffic</option>
          <option value="0">Low</option>
          <option value="1">Medium</option>
          <option value="2">High</option>
        </select>

        <button onClick={handlePredict}>Predict Risk</button>

        {result && (
          <div className="result">
            <h2>Risk: {result.risk_level}</h2>
            <p>Delay Probability: {result.delay_probability}</p>
            <p>{result.suggestion}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;