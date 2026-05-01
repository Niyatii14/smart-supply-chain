export default function InputPanel({
  source,
  destination,
  setSource,
  setDestination,
  onAnalyze
}) {
  return (
    <div className="panel input-panel">
      <p className="panel-title">ROUTE ANALYSIS</p>

      <div className="input-row">
        <input
          className="input-box"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          placeholder="Enter Source"
        />

        <input
          className="input-box"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Enter Destination"
        />

        <button className="analyze-btn" onClick={onAnalyze}>
          ANALYZE
        </button>
      </div>
    </div>
  );
}