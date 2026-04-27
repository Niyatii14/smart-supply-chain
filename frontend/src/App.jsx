import { useState, useEffect, useRef } from "react";
import "./App.css";
import MapView from "./components/MapView";
import { predictRoute } from "./services/api";

const CARGO_TYPES = [
  { value: "general", label: "General Goods", icon: "📦" },
  { value: "perishable", label: "Perishable / Cold Chain", icon: "🧊" },
  { value: "hazmat", label: "Hazardous Materials", icon: "⚠️" },
  { value: "pharma", label: "Pharmaceuticals", icon: "💊" },
  { value: "electronics", label: "Electronics", icon: "💻" },
];

const ACTIVE_SHIPMENTS = [
  { id: "LM-0041", route: "DEL → MUM", status: "in-transit", eta: "6h 20m" },
  { id: "LM-0038", route: "MUM → BLR", status: "on-time", eta: "11h 10m" },
  { id: "LM-0035", route: "HYD → CHN", status: "delayed", eta: "4h 45m" },
  { id: "LM-0031", route: "PNE → GWL", status: "on-time", eta: "8h 05m" },
];

const STATIC_ALERTS = [
  { type: "warn", text: "Heavy fog on NH-48 near Gurugram. Visibility < 100m.", time: "12 min ago", tag: "Weather" },
  { type: "danger", text: "Road closure Mumbai–Pune Expressway km 74 due to accident.", time: "38 min ago", tag: "Traffic" },
  { type: "info", text: "Port congestion at JNPT easing — dwell time down 18%.", time: "1 hr ago", tag: "Port" },
  { type: "warn", text: "Cyclone alert coastal AP & Odisha — reroute via NH-16.", time: "2 hr ago", tag: "Weather" },
];

function useClockTick() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return time.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}

function RiskBadge({ risk }) {
  const map = { Low: "badge-low", Medium: "badge-medium", High: "badge-high" };
  return <span className={`chip ${map[risk] || ""}`}>{risk}</span>;
}

function ProbBar({ prob, risk }) {
  const color = risk === "Low" ? "var(--c-success)" : risk === "Medium" ? "var(--c-warn)" : "var(--c-danger)";
  return (
    <div className="prob-bar">
      <div className="prob-fill" style={{ width: `${(prob * 100).toFixed(0)}%`, background: color }} />
    </div>
  );
}

export default function App() {
  const clock = useClockTick();
  const [source, setSource] = useState("Delhi");
  const [destination, setDestination] = useState("Mumbai");
  const [cargoType, setCargoType] = useState("general");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [alerts, setAlerts] = useState(STATIC_ALERTS);
  const [selectedRoute, setSelectedRoute] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");
  const resultRef = useRef(null);

  const handleAnalyze = async () => {
    if (!source.trim() || !destination.trim()) {
      alert("Enter source and destination");
      return;
    }
    setLoading(true);
    setResult(null);
    try {
      const data = await predictRoute({ source, destination, cargo_type: cargoType });
      setResult(data);
      setSelectedRoute(0);
      // inject live alert
      if (data.weather === "storm" || data.weather === "rain" || data.traffic === "high") {
        const msg =
          data.weather === "storm"
            ? `Storm warning on route to ${destination}. Secure or reroute.`
            : data.weather === "rain"
            ? `Heavy rainfall near ${destination} — 15–30% speed reduction expected.`
            : `High traffic on ${source}→${destination} corridor detected.`;
        setAlerts((prev) => [
          { type: "danger", text: "⚡ NEW: " + msg, time: "Just now", tag: "AI Alert" },
          ...prev.slice(0, 4),
        ]);
      }
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }), 100);
    } catch (e) {
      console.error(e);
      alert("Prediction failed. Is the backend running at http://127.0.0.1:8000 ?");
    } finally {
      setLoading(false);
    }
  };

  const useGPS = () => {
    if (!navigator.geolocation) { alert("Geolocation not supported"); return; }
    navigator.geolocation.getCurrentPosition(
      (p) => setSource(`${p.coords.latitude.toFixed(4)}, ${p.coords.longitude.toFixed(4)}`),
      () => setSource("Indore")
    );
  };

  const swap = () => { setSource(destination); setDestination(source); };

  const riskColor = result
    ? result.risk === "Low" ? "var(--c-success)" : result.risk === "Medium" ? "var(--c-warn)" : "var(--c-danger)"
    : "var(--c-text2)";

  return (
    <div className="shell">
      {/* ── TOPBAR ── */}
      <header className="topbar">
        <div className="logo">
          <div className="logo-icon">🚚</div>
          <span className="logo-name">Logistics Mitra</span>
          <span className="logo-sub">/ Supply Chain Intelligence</span>
        </div>
        <div className="topbar-right">
          <div className="status-pill">
            <div className="status-dot" />
            Systems Operational
          </div>
          <span className="clock">{clock}</span>
        </div>
      </header>

      {/* ── BODY ── */}
      <div className="body-grid">
        {/* ── SIDEBAR ── */}
        <aside className="sidebar">
          {/* Route Input */}
          <div className="card">
            <p className="card-title">Route Analysis</p>

            <div className="input-group">
              <label className="input-label">Origin</label>
              <div className="input-row">
                <input
                  className="text-input"
                  placeholder="e.g. Delhi, Mumbai, Gwalior"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAnalyze()}
                />
                <button className="btn btn-icon" title="Use GPS" onClick={useGPS}>📍</button>
              </div>
            </div>

            <div className="swap-row">
              <div className="divider-line" />
              <button className="btn-swap" onClick={swap}>⇅</button>
              <div className="divider-line" />
            </div>

            <div className="input-group">
              <label className="input-label">Destination</label>
              <input
                className="text-input"
                placeholder="e.g. Bangalore, Chennai"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAnalyze()}
              />
            </div>

            <div className="input-group">
              <label className="input-label">Cargo Type</label>
              <select
                className="select-input"
                value={cargoType}
                onChange={(e) => setCargoType(e.target.value)}
              >
                {CARGO_TYPES.map((c) => (
                  <option key={c.value} value={c.value}>{c.icon} {c.label}</option>
                ))}
              </select>
            </div>

            <button className="btn btn-primary btn-full" onClick={handleAnalyze} disabled={loading}>
              {loading ? <><span className="btn-spinner" /> Analyzing…</> : "Analyze Route & Predict Risk"}
            </button>
          </div>

          {/* Quick Stats */}
          {result && (
            <div className="card fade-up" ref={resultRef}>
              <p className="card-title">Route Summary</p>
              <div className="metrics-row">
                <div className="metric">
                  <p className="metric-label">Distance</p>
                  <p className="metric-val">{result.distance}</p>
                  <p className="metric-sub">km</p>
                </div>
                <div className="metric">
                  <p className="metric-label">ETA</p>
                  <p className="metric-val metric-val-sm">{result.eta}</p>
                  <p className="metric-sub">estimated</p>
                </div>
                <div className="metric">
                  <p className="metric-label">Risk</p>
                  <p className="metric-val metric-val-sm" style={{ color: riskColor }}>{result.risk}</p>
                  <p className="metric-sub">{(result.delay_probability * 100).toFixed(0)}% prob</p>
                </div>
              </div>
            </div>
          )}

          {/* Risk Panel */}
          {result && (
            <div className={`risk-banner risk-${result.risk.toLowerCase()} fade-up`}>
              <div className="risk-circle">
                {result.risk === "Low" ? "✓" : result.risk === "Medium" ? "!" : "✕"}
              </div>
              <div className="risk-content">
                <p className="risk-label" style={{ color: riskColor }}>
                  {result.risk} Risk — {(result.delay_probability * 100).toFixed(0)}% Delay Probability
                </p>
                <p className="risk-sugg">{result.suggestion}</p>
                <ProbBar prob={result.delay_probability} risk={result.risk} />
              </div>
            </div>
          )}

          {/* Risk Factors */}
          {result && (
            <div className="card fade-up">
              <p className="card-title">Risk Factors</p>
              {[
                { icon: "☁️", name: "Weather at destination", val: result.weather, raw: result.weather },
                { icon: "🚦", name: "Traffic congestion", val: result.traffic, raw: result.traffic },
                { icon: "📏", name: "Route distance", val: `${result.distance} km`, raw: result.distance > 800 ? "high" : result.distance > 300 ? "medium" : "low" },
                { icon: "📦", name: "Cargo sensitivity", val: cargoType, raw: ["hazmat"].includes(cargoType) ? "high" : ["perishable","pharma","electronics"].includes(cargoType) ? "medium" : "low" },
              ].map((f, i) => {
                const level = ["storm","high"].includes(f.raw) ? "high" : ["rain","medium","smog","cloudy"].includes(f.raw) ? "medium" : "low";
                const pct = level === "high" ? 100 : level === "medium" ? 55 : 18;
                const col = level === "high" ? "var(--c-danger)" : level === "medium" ? "var(--c-warn)" : "var(--c-success)";
                return (
                  <div key={i} className="factor-row">
                    <span className="factor-icon">{f.icon}</span>
                    <span className="factor-name">{f.name}</span>
                    <div className="factor-bar-wrap"><div className="factor-bar" style={{ width: `${pct}%`, background: col }} /></div>
                    <span className="factor-val" style={{ color: col }}>{f.val}</span>
                  </div>
                );
              })}
            </div>
          )}

          {/* Active Shipments */}
          <div className="card">
            <p className="card-title">Active Shipments</p>
            <table className="ship-table">
              <thead>
                <tr>
                  <th>ID</th><th>Route</th><th>Status</th><th>ETA</th>
                </tr>
              </thead>
              <tbody>
                {ACTIVE_SHIPMENTS.map((s) => (
                  <tr key={s.id}>
                    <td className="ship-id">#{s.id}</td>
                    <td className="ship-route">{s.route}</td>
                    <td>
                      <span className={`chip ${s.status === "on-time" ? "badge-low" : s.status === "in-transit" ? "badge-medium" : "badge-high"}`}>
                        {s.status === "on-time" ? "On Time" : s.status === "in-transit" ? "In Transit" : "Delayed"}
                      </span>
                    </td>
                    <td className="ship-eta">{s.eta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </aside>

        {/* ── MAIN CONTENT ── */}
        <main className="content">
          {/* Map */}
          <div className="map-card">
            <MapView source={source} destination={destination} triggered={!!result} />
          </div>

          {/* Route Options */}
          {result && result.alternatives && (
            <div className="fade-up">
              <p className="section-label">Alternative Routes</p>
              <div className="route-grid">
                {result.alternatives.map((alt, i) => (
                  <div
                    key={i}
                    className={`route-option${alt.recommended ? " recommended" : ""}${selectedRoute === i ? " selected" : ""}`}
                    onClick={() => setSelectedRoute(i)}
                  >
                    <div className="route-header">
                      <span className="route-name">{alt.name}</span>
                      <RiskBadge risk={alt.risk} />
                    </div>
                    <ProbBar prob={alt.prob} risk={alt.risk} />
                    <p className="route-prob-text">{(alt.prob * 100).toFixed(0)}% delay probability</p>
                    <div className="route-stats">
                      <div className="route-stat"><strong>{alt.distance} km</strong><span>Distance</span></div>
                      <div className="route-stat"><strong>{alt.eta}</strong><span>ETA</span></div>
                      <div className="route-stat"><strong>{alt.toll}</strong><span>Toll</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Row */}
          <div className="bottom-grid">
            {/* Alerts */}
            <div className="card">
              <div className="card-header-row">
                <p className="card-title" style={{ margin: 0 }}>Live Disruption Alerts</p>
                <div className="status-pill"><div className="status-dot" />Live</div>
              </div>
              <div className="alerts-list">
                {alerts.map((a, i) => (
                  <div key={i} className={`alert-item alert-${a.type}`}>
                    <div className={`alert-dot dot-${a.type}`} />
                    <div>
                      <p className="alert-text">{a.text}</p>
                      <p className="alert-meta">{a.time} · {a.tag}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Analytics */}
            <div className="card">
              <p className="card-title">Performance Analytics</p>
              <div className="analytics-grid">
                <div className="metric"><p className="metric-label">On-Time Rate</p><p className="metric-val" style={{ color: "var(--c-success)" }}>91.4%</p><p className="metric-sub">last 30 days</p></div>
                <div className="metric"><p className="metric-label">Avg Delay</p><p className="metric-val" style={{ color: "var(--c-warn)" }}>2.3h</p><p className="metric-sub">when delayed</p></div>
                <div className="metric"><p className="metric-label">Routes Saved</p><p className="metric-val" style={{ color: "var(--c-accent)" }}>47</p><p className="metric-sub">this month</p></div>
                <div className="metric"><p className="metric-label">Cost Saved</p><p className="metric-val metric-val-sm" style={{ color: "var(--c-accent2)" }}>₹2.1L</p><p className="metric-sub">rerouting gains</p></div>
              </div>
              <p className="card-title" style={{ marginTop: "16px" }}>Weekly Risk Trend</p>
              <svg viewBox="0 0 280 80" width="100%" style={{ display: "block", marginTop: "6px" }}>
                <defs>
                  <linearGradient id="cg" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity=".45" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,60 L40,45 L80,55 L120,30 L160,40 L200,20 L240,35 L280,25 L280,80 L0,80 Z" fill="url(#cg)" />
                <polyline points="0,60 40,45 80,55 120,30 160,40 200,20 240,35 280,25" fill="none" stroke="#3b82f6" strokeWidth="2" />
                {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d, i) => (
                  <text key={d} x={i * 40} y="78" fill="#64748b" fontSize="8" fontFamily="inherit">{d}</text>
                ))}
              </svg>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
