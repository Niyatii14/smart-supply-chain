import EffBar from "./EffBar";

export default function ShipmentsTable({ shipments }) {
  return (
    <div className="panel shipments-panel">
      <div className="shipments-header">
        <span className="panel-title">ACTIVE SHIPMENTS</span>

        <div className="shipments-actions">
          <button className="action-btn">Export CSV</button>
          <button className="action-btn action-btn-outline">
            Filter View
          </button>
        </div>
      </div>

      <table className="ship-table">
        <thead>
          <tr>
            <th>CARGO ID</th>
            <th>ORIGIN</th>
            <th>DESTINATION</th>
            <th>ETA</th>
            <th>EFFICIENCY</th>
            <th>PRIORITY</th>
            <th>STATUS</th>
          </tr>
        </thead>

        <tbody>
          {shipments.map((s) => (
            <tr key={s.id} className="ship-row">
              <td className="cargo-id">{s.id}</td>
              <td>{s.origin}</td>
              <td>{s.destination}</td>
              <td>{s.eta}</td>

              <td>
                <EffBar pct={s.efficiency} />
              </td>

              <td>
                <span className={`priority-badge ${s.priorityClass}`}>
                  {s.priority}
                </span>
              </td>

              <td>
                <span className={`status-badge ${s.statusClass}`}>
                  {s.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}