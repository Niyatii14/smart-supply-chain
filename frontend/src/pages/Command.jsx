import MapView from "../components/MapView";
import ShipmentsTable from "../components/ShipmentsTable";

// Dummy data
const ACTIVE_SHIPMENTS = [
  {
    id: "#AG-88219",
    origin: "Singapore (SIN)",
    destination: "Rotterdam (ROT)",
    eta: "14:20 UTC",
    efficiency: 82,
    priority: "CRITICAL",
    priorityClass: "priority-critical",
    status: "In Transit",
    statusClass: "status-transit",
  },
  {
    id: "#AG-90422",
    origin: "Shanghai (SHA)",
    destination: "Long Beach (LGB)",
    eta: "02:15 UTC",
    efficiency: 100,
    priority: "STANDARD",
    priorityClass: "priority-standard",
    status: "Docked",
    statusClass: "status-docked",
  },
  {
    id: "#AG-77210",
    origin: "Dubai (DXB)",
    destination: "Hamburg (HAM)",
    eta: "08:45 UTC",
    efficiency: 64,
    priority: "HIGH",
    priorityClass: "priority-high",
    status: "Delayed",
    statusClass: "status-delayed",
  },
];

const ALERT_STREAM = [
  { title: "Typhoon Warning", sub: "South China Sea Sector 4" },
  { title: "New Route Optimized", sub: "#AG-88219 (Save 4.2h)" },
];

// Efficiency bar
function EffBar({ pct }) {
  const color =
    pct >= 90 ? "var(--c-cyan)" :
    pct >= 70 ? "var(--c-cyan)" :
    "var(--c-warn)";

  return (
    <div className="eff-bar-wrap">
      <div className="eff-bar-track">
        <div
          className="eff-bar-fill"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
      <span className="eff-label" style={{ color }}>{pct}%</span>
    </div>
  );
}

export default function Command({
  source,
  destination,
  setSource,
  setDestination,
  onAnalyze,
  result
}) {

  return (
    <>
      {/* INPUT PANEL */}
      <div className="panel input-panel">
        <p className="panel-title">ROUTE ANALYSIS</p>

        <div className="input-row">
          <input
            className="input-box"
            placeholder="Enter Source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />

          <input
            className="input-box"
            placeholder="Enter Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />

          <button className="analyze-btn" onClick={onAnalyze}>
            ANALYZE
          </button>
        </div>
      </div>

      {/* TOP ROW */}
      <div className="top-row">
        
        {/* Fleet */}
        <div className="panel fleet-panel">
          <p className="panel-title">FLEET STATUS</p>
          <p>Operational Capacity: 92%</p>
        </div>

        {/* Map */}
        <div className="panel map-panel">
          <MapView source={source} destination={destination} triggered={true} />
        </div>

        {/* Alerts */}
        <div className="panel">
          <p className="panel-title">ALERT STREAM</p>
          {ALERT_STREAM.map((a, i) => (
            <p key={i}>{a.title} - {a.sub}</p>
          ))}
        </div>
      </div>

      {/* AI PANEL */}
      <div className="panel ai-panel">
        <p className="panel-title">AI RECOMMENDATION</p>

        {result ? (
          <p>
            🚀 {source} → {destination}<br />
            📏 {result.distance} km<br />
            ⏱ {result.eta}<br />
            ⚠ {result.risk}
          </p>
        ) : (
          <p>Run analysis to get AI insights...</p>
        )}
      </div>

      {/* SHIPMENTS TABLE (NOW COMPONENT) */}
      <ShipmentsTable shipments={ACTIVE_SHIPMENTS} />
    </>
  );
}