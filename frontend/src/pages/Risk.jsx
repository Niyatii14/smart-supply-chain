// export default function Risk() {
//   return (
//     <>
//       <div className="stats-grid">
//         <div className="panel">Risk Score: 24</div>
//         <div className="panel">Weather Impact: 42</div>
//         <div className="panel">Route Congestion: 18</div>
//         <div className="panel">Port Latency: 88</div>
//       </div>

//       <div className="panel">
//         <p className="panel-title">ACTIVE HAZARDS</p>
//         <ul>
//           <li>Typhoon Vayu (95%)</li>
//           <li>JNPT Congestion (80%)</li>
//           <li>Worker Strike (45%)</li>
//         </ul>
//       </div>

//       <div className="panel">
//         <p className="panel-title">AI RECOMMENDATION</p>
//         <p>Redirect shipments via alternate route → save 4.5h</p>
//       </div>
//     </>
//   );
// }

// import Sidebar from '../components/Sidebar';
// import Topbar from '../components/Topbar';

// const riskCards = [
//   { label: 'Overall Risk Score', value: 24,  color: '#00f2ff',  status: 'Minimal',  icon: 'shield_with_heart', border: '#00f2ff' },
//   { label: 'Weather Impact',     value: 42,  color: '#fed83a',  status: 'Advisory', icon: 'storm',             border: '#fed83a' },
//   { label: 'Route Congestion',   value: 18,  color: '#00dbe7',  status: 'Flowing',  icon: 'traffic',           border: '#00dbe7' },
//   { label: 'Port Latency',       value: 88,  color: '#ffb4ab',  status: 'Critical', icon: 'anchor',            border: '#ffb4ab' },
// ];

// const hazards = [
//   { title: "Typhoon 'Vayu'",   sub: 'Impact: High | Probability: 95%', color: '#ffb4ab', action: 'Reroute Affected' },
//   { title: 'JNPT Congestion',  sub: 'Berthing Queue: 42 vessels',      color: '#fed83a', action: 'View Alternatives' },
//   { title: 'NH-44 Roadblock',  sub: 'Est. Clearance: 6 hours',         color: '#fed83a', action: 'Reroute Road' },
//   { title: 'Port Strike: HKG', sub: 'Duration: Unknown',               color: '#ffb4ab', action: 'Escalate Alert' },
// ];

// const recommendations = [
//   { text: 'Divert 12 SIN→LAX shipments via HNL hub to avoid typhoon corridor', priority: 'High', color: '#ffb4ab' },
//   { text: 'Pre-clear customs at alternate JNPT berths to reduce dwell time by est. 40%', priority: 'Medium', color: '#fed83a' },
//   { text: 'Switch 3 road shipments on NH-44 to NH-8 bypass via Jaipur', priority: 'Medium', color: '#fed83a' },
//   { text: 'Book emergency charter capacity for HKG-LHR pharma shipments', priority: 'Low', color: '#00f2ff' },
// ];

// export default function Risk() {
//   return (
//     <div style={{ display: 'flex', minHeight: '100vh', background: '#080f10' }}>
//       <Sidebar />
//       <div style={{ marginLeft: 256, flex: 1 }}>
//         <Topbar pageTitle="Risk Intelligence" />
//         <main style={{ marginTop: 64, padding: 24, overflowY: 'auto' }}>

//           {/* Page title */}
//           <div style={{ marginBottom: 20 }}>
//             <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 24, fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>Risk Intelligence</h1>
//             <p style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>AI-Powered Supply Chain Risk Detection</p>
//           </div>

//           {/* Risk Score Cards */}
//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 24 }}>
//             {riskCards.map(r => (
//               <div key={r.label} style={{
//                 background: 'rgba(11,14,20,0.8)', backdropFilter: 'blur(12px)',
//                 border: '1px solid rgba(255,255,255,0.08)',
//                 borderLeft: `4px solid ${r.border}`,
//                 borderRadius: 8, padding: 18, position: 'relative', overflow: 'hidden',
//               }}>
//                 <div style={{ position: 'absolute', top: 0, right: 0, width: 80, height: 80, borderRadius: '50%', background: `radial-gradient(circle, ${r.color}15, transparent)`, marginRight: -40, marginTop: -40 }} />
//                 <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
//                   <p style={{ fontSize: 9, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>{r.label}</p>
//                   <span className="material-symbols-outlined" style={{ color: r.color, fontSize: 20, animation: r.value > 80 ? 'pulse 2s infinite' : 'none' }}>{r.icon}</span>
//                 </div>
//                 <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 32, fontWeight: 700, color: r.color }}>
//                   {r.value}<span style={{ fontSize: 14, color: '#4b5563', fontWeight: 400 }}>/100</span>
//                 </h2>
//                 <p style={{ fontSize: 10, fontWeight: 700, color: r.color, textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 6 }}>Status: {r.status}</p>
//               </div>
//             ))}
//           </div>

//           {/* Map + Side Panel */}
//           <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20, marginBottom: 20, height: 420 }}>
//             {/* Risk Map */}
//             <div style={{ background: 'rgba(11,14,20,0.8)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, position: 'relative', overflow: 'hidden' }}>
//               <div style={{ position: 'absolute', top: 16, left: 16, zIndex: 10, display: 'flex', gap: 8 }}>
//                 {['Global View', 'India Focus'].map((b, i) => (
//                   <button key={b} style={{ padding: '6px 12px', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', background: i === 1 ? '#00f2ff' : 'rgba(35,43,44,0.9)', color: i === 1 ? '#002022' : '#fff', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4, cursor: 'pointer' }}>{b}</button>
//                 ))}
//               </div>
//               <div style={{ position: 'absolute', top: 16, right: 16, zIndex: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
//                 {[{ color: '#ffb4ab', label: 'High Risk Zone' }, { color: '#fed83a', label: 'Moderate Risk' }].map(l => (
//                   <div key={l.label} style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)', padding: '6px 10px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4, display: 'flex', alignItems: 'center', gap: 8 }}>
//                     <span style={{ width: 10, height: 10, borderRadius: '50%', background: l.color, boxShadow: `0 0 8px ${l.color}` }} />
//                     <span style={{ fontSize: 10, fontWeight: 700, color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{l.label}</span>
//                   </div>
//                 ))}
//               </div>
//               <img
//                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzhSx6FX5S8S52DDQx6eQ6d9fAXK5hAvkkeY6haCyTT1IkpKACDOIFE8qqJVUHPZTg56CSxrYTr2LTV9BT9bddoT8pP3VycIu_O_TZE_tEVWpTaAYjLD5cfdZwp-qWqfvbF5WdXFWhJZ5s8DrfWweWsS01v2J2vLwbAsSmDwrJCztVRUmzBpbvwo1mU2X8CoTW0tG3LESeur0FzERM0LMbJHyhmXHLSXYlEkRn5cwcFquiXxDD2fMB2fE7uXTBMgkQ93PI5-OymUg"
//                 alt="Risk Map"
//                 style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5, filter: 'grayscale(30%) contrast(1.2)' }}
//               />
//               {/* HUD overlays */}
//               <div style={{ position: 'absolute', top: '45%', left: '42%', width: 60, height: 60, background: 'rgba(255,180,171,0.3)', borderRadius: '50%', filter: 'blur(16px)', animation: 'pulse 2s infinite' }} />
//               <div style={{ position: 'absolute', top: '60%', left: '52%', width: 80, height: 80, background: 'rgba(254,216,58,0.2)', borderRadius: '50%', filter: 'blur(24px)' }} />
//               {[{ top: '52%', left: '45%', name: 'JNPT' }, { top: '40%', left: '38%', name: 'Mundra' }].map(p => (
//                 <div key={p.name} style={{ position: 'absolute', top: p.top, left: p.left, fontSize: 10, fontWeight: 700, color: '#fff', background: 'rgba(0,0,0,0.5)', padding: '1px 5px', borderRadius: 3, border: '1px solid rgba(255,255,255,0.1)' }}>{p.name}</div>
//               ))}
//             </div>

//             {/* Active Hazards */}
//             <div style={{ background: 'rgba(11,14,20,0.8)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, padding: 18, display: 'flex', flexDirection: 'column' }}>
//               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
//                 <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 14, fontWeight: 700 }}>Active Hazards</h3>
//                 <span style={{ fontSize: 10, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{hazards.length} Alerts</span>
//               </div>
//               <div style={{ display: 'flex', flexDirection: 'column', gap: 10, overflowY: 'auto', flex: 1 }}>
//                 {hazards.map((h, i) => (
//                   <div key={i} style={{ background: h.color + '08', borderLeft: `2px solid ${h.color}`, borderRadius: '0 6px 6px 0', padding: 12, cursor: 'pointer' }}>
//                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
//                       <p style={{ fontSize: 11, fontWeight: 700, color: h.color, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{h.title}</p>
//                       <span className="material-symbols-outlined" style={{ color: h.color, fontSize: 14 }}>warning</span>
//                     </div>
//                     <p style={{ fontSize: 10, color: '#6b7280', marginBottom: 8 }}>{h.sub}</p>
//                     <button style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4, padding: '3px 8px', cursor: 'pointer' }}>{h.action}</button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* AI Recommendations */}
//           <div style={{ background: 'rgba(11,14,20,0.8)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, padding: 20 }}>
//             <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 14, fontWeight: 700, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
//               <span className="material-symbols-outlined" style={{ color: '#00f2ff', fontSize: 18 }}>auto_awesome</span>
//               AI Recommendations
//             </h3>
//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 12 }}>
//               {recommendations.map((r, i) => (
//                 <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: 14, background: 'rgba(255,255,255,0.03)', borderRadius: 6, border: '1px solid rgba(255,255,255,0.06)' }}>
//                   <span style={{ width: 8, height: 8, borderRadius: '50%', background: r.color, flexShrink: 0, marginTop: 4 }} />
//                   <div>
//                     <p style={{ fontSize: 12, color: '#94a3b8', lineHeight: 1.5 }}>{r.text}</p>
//                     <span style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: r.color, marginTop: 6, display: 'inline-block' }}>Priority: {r.priority}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const riskCards = [
  { label: 'Overall Risk Score', value: 24, color: '#00e676', status: 'Minimal',  icon: 'shield_with_heart' },
  { label: 'Weather Impact',     value: 42, color: '#ffb300', status: 'Advisory', icon: 'storm' },
  { label: 'Route Congestion',   value: 18, color: '#00e5ff', status: 'Flowing',  icon: 'traffic' },
  { label: 'Port Latency',       value: 88, color: '#ff6b6b', status: 'Critical', icon: 'anchor' },
];

const hazards = [
  { title: "Typhoon 'Vayu'",   sub: 'Impact: High | Probability: 95%', color: '#ff6b6b', action: 'Reroute Affected' },
  { title: 'JNPT Congestion',  sub: 'Berthing Queue: 42 vessels',      color: '#ffb300', action: 'View Alternatives' },
  { title: 'NH-44 Roadblock',  sub: 'Est. Clearance: 6 hours',         color: '#ffb300', action: 'Reroute Road' },
  { title: 'Port Strike: HKG', sub: 'Duration: Unknown',               color: '#ff6b6b', action: 'Escalate Alert' },
];

const recommendations = [
  { text: 'Divert 12 SIN→LAX shipments via HNL hub to avoid typhoon corridor', priority: 'High',   color: '#ff6b6b' },
  { text: 'Pre-clear customs at alternate JNPT berths to reduce dwell time by est. 40%', priority: 'Medium', color: '#ffb300' },
  { text: 'Switch 3 road shipments on NH-44 to NH-8 bypass via Jaipur', priority: 'Medium', color: '#ffb300' },
  { text: 'Book emergency charter capacity for HKG-LHR pharma shipments', priority: 'Low',    color: '#00e5ff' },
];

export default function Risk() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-deep)' }}>
      <Sidebar />
      <div style={{ marginLeft: 240, flex: 1 }}>
        <Topbar />
        <main style={{ marginTop: 60, padding: '24px 28px', animation: 'fadeIn 0.4s ease' }}>

          <div style={{ marginBottom: 20 }}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>Risk Intelligence</h1>
            <p style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 4 }}>AI-Powered Supply Chain Risk Detection</p>
          </div>

          {/* Risk Score Cards */}
          <div className="grid-4" style={{ marginBottom: 24 }}>
            {riskCards.map(r => (
              <div key={r.label} className="card" style={{
                padding: 18,
                borderLeft: `3px solid ${r.color}`,
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', top: -20, right: -20, width: 80, height: 80, borderRadius: '50%', background: `radial-gradient(circle, ${r.color}18, transparent)` }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
                  <p className="label">{r.label}</p>
                  <span className="material-symbols-outlined" style={{ color: r.color, fontSize: 20, animation: r.value > 80 ? 'pulse 2s infinite' : 'none' }}>{r.icon}</span>
                </div>
                <div style={{ marginBottom: 10 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 800, color: r.color }}>{r.value}</span>
                  <span style={{ fontSize: 12, color: 'var(--text-muted)', marginLeft: 2 }}>/100</span>
                </div>
                {/* Progress arc via bar */}
                <div style={{ height: 3, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${r.value}%`, background: r.color, borderRadius: 2, boxShadow: `0 0 8px ${r.color}88` }} />
                </div>
                <p style={{ fontSize: 9, fontWeight: 700, color: r.color, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 8, fontFamily: 'var(--font-mono)' }}>STATUS: {r.status}</p>
              </div>
            ))}
          </div>

          {/* Map + Hazards */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20, marginBottom: 20 }}>
            <div className="card" style={{ height: 400, position: 'relative', overflow: 'hidden', padding: 0 }}>
              {/* Tab buttons */}
              <div style={{ position: 'absolute', top: 14, left: 14, zIndex: 10, display: 'flex', gap: 6 }}>
                {['Global View', 'India Focus'].map((b, i) => (
                  <button key={b} style={{
                    padding: '6px 12px', fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em',
                    background: i === 1 ? 'var(--cyan)' : 'rgba(10,16,20,0.9)',
                    color: i === 1 ? '#001a22' : 'var(--text-primary)',
                    border: '1px solid var(--border)', borderRadius: 5, cursor: 'pointer',
                    fontFamily: 'var(--font-mono)',
                  }}>{b}</button>
                ))}
              </div>
              {/* Legend */}
              <div style={{ position: 'absolute', top: 14, right: 14, zIndex: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {[{ color: '#ff6b6b', label: 'High Risk Zone' }, { color: '#ffb300', label: 'Moderate Risk' }].map(l => (
                  <div key={l.label} style={{ background: 'rgba(7,12,15,0.9)', backdropFilter: 'blur(8px)', padding: '5px 10px', border: '1px solid var(--border)', borderRadius: 5, display: 'flex', alignItems: 'center', gap: 7 }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: l.color, boxShadow: `0 0 6px ${l.color}` }} />
                    <span className="label">{l.label}</span>
                  </div>
                ))}
              </div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzhSx6FX5S8S52DDQx6eQ6d9fAXK5hAvkkeY6haCyTT1IkpKACDOIFE8qqJVUHPZTg56CSxrYTr2LTV9BT9bddoT8pP3VycIu_O_TZE_tEVWpTaAYjLD5cfdZwp-qWqfvbF5WdXFWhJZ5s8DrfWweWsS01v2J2vLwbAsSmDwrJCztVRUmzBpbvwo1mU2X8CoTW0tG3LESeur0FzERM0LMbJHyhmXHLSXYlEkRn5cwcFquiXxDD2fMB2fE7uXTBMgkQ93PI5-OymUg"
                alt="Risk map"
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5, filter: 'saturate(0.8) contrast(1.2)' }}
              />
              {/* HUD overlays */}
              <div style={{ position: 'absolute', top: '45%', left: '42%', width: 60, height: 60, background: 'rgba(255,107,107,0.35)', borderRadius: '50%', filter: 'blur(16px)', animation: 'pulse 2s infinite' }} />
              <div style={{ position: 'absolute', top: '60%', left: '52%', width: 80, height: 80, background: 'rgba(255,179,0,0.2)', borderRadius: '50%', filter: 'blur(24px)' }} />
              {[{ top: '52%', left: '45%', name: 'JNPT' }, { top: '40%', left: '38%', name: 'Mundra' }].map(p => (
                <div key={p.name} style={{ position: 'absolute', top: p.top, left: p.left, fontSize: 9, fontWeight: 700, color: '#fff', background: 'rgba(0,0,0,0.6)', padding: '2px 6px', borderRadius: 3, border: '1px solid rgba(255,255,255,0.12)', fontFamily: 'var(--font-mono)' }}>{p.name}</div>
              ))}
            </div>

            {/* Active Hazards */}
            <div className="card" style={{ padding: 18, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700 }}>Active Hazards</h3>
                <span className="badge" style={{ background: 'rgba(255,107,107,0.1)', borderColor: 'rgba(255,107,107,0.3)', color: '#ff6b6b' }}>
                  {hazards.length} ALERTS
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
                {hazards.map((h, i) => (
                  <div key={i} style={{
                    background: h.color + '08', borderLeft: `2px solid ${h.color}`,
                    borderRadius: '0 8px 8px 0', padding: 12, cursor: 'pointer', transition: 'all 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = h.color + '14'}
                    onMouseLeave={e => e.currentTarget.style.background = h.color + '08'}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: h.color, fontFamily: 'var(--font-mono)', letterSpacing: '0.02em' }}>{h.title}</p>
                      <span className="material-symbols-outlined" style={{ color: h.color, fontSize: 13 }}>warning</span>
                    </div>
                    <p style={{ fontSize: 10, color: 'var(--text-secondary)', marginBottom: 8 }}>{h.sub}</p>
                    <button style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-primary)', background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border)', borderRadius: 4, padding: '3px 8px', cursor: 'pointer', fontFamily: 'var(--font-mono)' }}>{h.action}</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Recommendations */}
          <div className="card" style={{ padding: 20 }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="material-symbols-outlined" style={{ color: 'var(--cyan)', fontSize: 18 }}>auto_awesome</span>
              AI Recommendations
              <span style={{ marginLeft: 6, fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--cyan)', background: 'rgba(0,229,255,0.1)', border: '1px solid rgba(0,229,255,0.2)', padding: '2px 8px', borderRadius: 4 }}>POWERED BY AI</span>
            </h3>
            <div className="grid-2" style={{ gap: 10 }}>
              {recommendations.map((r, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 12,
                  padding: 14, background: 'rgba(255,255,255,0.025)',
                  borderRadius: 8, border: '1px solid var(--border)',
                  transition: 'all 0.2s', cursor: 'pointer',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = r.color + '33'; e.currentTarget.style.background = r.color + '06'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'rgba(255,255,255,0.025)'; }}
                >
                  <div style={{ width: 28, height: 28, borderRadius: 7, background: r.color + '18', border: `1px solid ${r.color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontSize: 8, fontWeight: 800, fontFamily: 'var(--font-mono)', color: r.color }}>{r.priority[0]}</span>
                  </div>
                  <div>
                    <p style={{ fontSize: 11.5, color: 'var(--text-secondary)', lineHeight: 1.55 }}>{r.text}</p>
                    <span style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: r.color, marginTop: 6, display: 'inline-block', fontFamily: 'var(--font-mono)' }}>Priority: {r.priority}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
