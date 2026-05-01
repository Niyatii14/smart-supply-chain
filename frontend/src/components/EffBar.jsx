export default function EffBar({ pct }) {
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
      <span className="eff-label" style={{ color }}>
        {pct}%
      </span>
    </div>
  );
}