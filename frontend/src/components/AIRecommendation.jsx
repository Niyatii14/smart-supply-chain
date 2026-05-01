export default function AIRecommendation({ source, destination, result }) {
  return (
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
  );
}