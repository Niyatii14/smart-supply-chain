// import Sidebar from '../components/Sidebar';
// import Topbar from '../components/Topbar';

// const kpis = [
//   { label: 'On-Time Delivery', value: '94.2%', change: '+2.1%', up: true,  color: '#00f2ff',  icon: 'task_alt',    sub: 'Last 30 days' },
//   { label: 'Avg Delay',        value: '2.3h',  change: '-0.8h', up: true,  color: '#e8c423',  icon: 'schedule',    sub: 'Per delayed shipment' },
//   { label: 'Cost Saved',       value: '₹2.1L', change: '+₹0.4L',up: true, color: '#00dbe7',  icon: 'savings',     sub: 'Rerouting gains' },
//   { label: 'Routes Optimised', value: '47',    change: '+12',   up: true,  color: '#adc6ff',  icon: 'alt_route',   sub: 'This month' },
// ];

// const routes = [
//   { route: 'DEL → MUM', shipments: 142, onTime: '96%', avgDelay: '1.2h', efficiency: 96 },
//   { route: 'BLR → HYD', shipments: 98,  onTime: '91%', avgDelay: '2.1h', efficiency: 91 },
//   { route: 'MUM → GWL', shipments: 73,  onTime: '88%', avgDelay: '3.4h', efficiency: 88 },
//   { route: 'CHN → BLR', shipments: 115, onTime: '94%', avgDelay: '1.8h', efficiency: 94 },
//   { route: 'DEL → KOL', shipments: 62,  onTime: '82%', avgDelay: '4.2h', efficiency: 82 },
// ];

// const weeklyRisk = [30, 45, 38, 62, 55, 48, 70];
// const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
// const maxRisk = Math.max(...weeklyRisk);

// const deliveryData = [88, 91, 93, 90, 94, 92, 95];

// export default function Performance() {
//   return (
//     <div style={{ display: 'flex', minHeight: '100vh', background: '#0d1515' }}>
//       <Sidebar />
//       <div style={{ marginLeft: 256, flex: 1 }}>
//         <Topbar pageTitle="Performance" />
//         <main style={{ marginTop: 64, padding: 24, overflowY: 'auto' }}>

//           {/* Header */}
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
//             <div>
//               <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 24, fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>Performance Analytics</h1>
//               <p style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>Operational KPIs and Efficiency Metrics</p>
//             </div>
//             <div style={{ display: 'flex', gap: 10 }}>
//               <select style={{ background: '#151d1e', border: '1px solid rgba(58,73,75,0.8)', borderRadius: 8, padding: '8px 14px', fontSize: 12, color: '#94a3b8', cursor: 'pointer' }}>
//                 <option>Last 30 Days</option><option>Last 7 Days</option><option>Last Quarter</option>
//               </select>
//               <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', background: '#00f2ff', color: '#002022', border: 'none', borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: 'pointer' }}>
//                 <span className="material-symbols-outlined" style={{ fontSize: 15 }}>download</span>
//                 Export Report
//               </button>
//             </div>
//           </div>

//           {/* KPI Cards */}
//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 24 }}>
//             {kpis.map(k => (
//               <div key={k.label} style={{ background: '#151d1e', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: 20, borderTop: `3px solid ${k.color}` }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
//                   <p style={{ fontSize: 9, color: '#6b7280', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700 }}>{k.label}</p>
//                   <div style={{ background: k.color + '18', borderRadius: 6, padding: 7 }}>
//                     <span className="material-symbols-outlined" style={{ color: k.color, fontSize: 18 }}>{k.icon}</span>
//                   </div>
//                 </div>
//                 <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 28, fontWeight: 700, color: k.color, marginBottom: 6 }}>{k.value}</h3>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
//                   <span style={{ fontSize: 10, fontWeight: 700, color: k.up ? '#00f2ff' : '#ffb4ab' }}>↑ {k.change}</span>
//                   <span style={{ fontSize: 10, color: '#4b5563' }}>{k.sub}</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Charts Row */}
//           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>

//             {/* Weekly Risk Trend */}
//             <div style={{ background: '#151d1e', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: 20 }}>
//               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
//                 <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 13, fontWeight: 700 }}>Weekly Risk Trend</h3>
//                 <div style={{ display: 'flex', gap: 6 }}>
//                   {['Predictive', 'Historical'].map((t, i) => (
//                     <button key={t} style={{ padding: '4px 10px', fontSize: 10, fontWeight: 700, borderRadius: 5, border: 'none', cursor: 'pointer', background: i === 0 ? 'rgba(0,242,255,0.15)' : 'transparent', color: i === 0 ? '#00f2ff' : '#6b7280' }}>{t}</button>
//                   ))}
//                 </div>
//               </div>
//               {/* SVG Bar chart */}
//               <svg viewBox="0 0 300 120" style={{ width: '100%', height: 140 }}>
//                 <defs>
//                   <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="0%" stopColor="#00f2ff" stopOpacity="0.9" />
//                     <stop offset="100%" stopColor="#0566d9" stopOpacity="0.6" />
//                   </linearGradient>
//                 </defs>
//                 {/* Target line */}
//                 <line x1="0" y1="50" x2="300" y2="50" stroke="#ffb4ab" strokeWidth="0.8" strokeDasharray="4,3" />
//                 <text x="302" y="53" fill="#ffb4ab" fontSize="7">Target</text>
//                 {weeklyRisk.map((v, i) => {
//                   const h = (v / maxRisk) * 90;
//                   const x = i * 40 + 10;
//                   return (
//                     <g key={i}>
//                       <rect x={x} y={110 - h} width={22} height={h} fill="url(#barGrad)" rx={3} opacity={i === 6 ? 1 : 0.75} />
//                       <text x={x + 11} y={118} textAnchor="middle" fill="#4b5563" fontSize="8">{days[i]}</text>
//                       <text x={x + 11} y={107 - h} textAnchor="middle" fill="#00f2ff" fontSize="7">{v}</text>
//                     </g>
//                   );
//                 })}
//               </svg>
//             </div>

//             {/* Delivery Performance */}
//             <div style={{ background: '#151d1e', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: 20 }}>
//               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
//                 <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 13, fontWeight: 700 }}>Delivery Performance</h3>
//                 <span style={{ fontSize: 10, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.08em' }}>% On-Time</span>
//               </div>
//               <svg viewBox="0 0 300 120" style={{ width: '100%', height: 140 }}>
//                 <defs>
//                   <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="0%" stopColor="#00f2ff" stopOpacity="0.3" />
//                     <stop offset="100%" stopColor="#00f2ff" stopOpacity="0" />
//                   </linearGradient>
//                 </defs>
//                 {/* Area fill */}
//                 <path
//                   d={`M 10 ${110 - (deliveryData[0] - 80) * 5} ${deliveryData.map((v, i) => `L ${i * 44 + 10} ${110 - (v - 80) * 5}`).join(' ')} L ${(deliveryData.length - 1) * 44 + 10} 110 L 10 110 Z`}
//                   fill="url(#lineGrad)"
//                 />
//                 {/* Line */}
//                 <polyline
//                   points={deliveryData.map((v, i) => `${i * 44 + 10},${110 - (v - 80) * 5}`).join(' ')}
//                   fill="none" stroke="#00f2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
//                 />
//                 {/* Dots */}
//                 {deliveryData.map((v, i) => (
//                   <circle key={i} cx={i * 44 + 10} cy={110 - (v - 80) * 5} r={3} fill="#00f2ff" stroke="#0d1515" strokeWidth={1.5} />
//                 ))}
//                 {days.map((d, i) => (
//                   <text key={d} x={i * 44 + 10} y={118} textAnchor="middle" fill="#4b5563" fontSize="8">{d}</text>
//                 ))}
//               </svg>
//             </div>
//           </div>

//           {/* Route Performance Table */}
//           <div style={{ background: '#151d1e', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, overflow: 'hidden' }}>
//             <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//               <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 14, fontWeight: 700 }}>Performance by Route</h3>
//               <span style={{ fontSize: 11, color: '#6b7280' }}>Click column headers to sort</span>
//             </div>
//             <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//               <thead>
//                 <tr style={{ background: 'rgba(46,54,55,0.4)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
//                   {['Route', 'Shipments', 'On-Time %', 'Avg Delay', 'Efficiency Score'].map(h => (
//                     <th key={h} style={{ padding: '12px 20px', fontSize: 10, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.08em', textAlign: 'left', fontWeight: 700, cursor: 'pointer' }}>{h} ↕</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {routes.map((r, i) => (
//                   <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', transition: 'background 0.15s' }}
//                     onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.025)'}
//                     onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
//                   >
//                     <td style={{ padding: '13px 20px', fontFamily: 'Space Grotesk', fontSize: 13, fontWeight: 700, color: '#fff' }}>{r.route}</td>
//                     <td style={{ padding: '13px 20px', fontSize: 13, color: '#94a3b8' }}>{r.shipments}</td>
//                     <td style={{ padding: '13px 20px' }}>
//                       <span style={{ fontSize: 13, fontWeight: 700, color: r.efficiency >= 93 ? '#00f2ff' : r.efficiency >= 88 ? '#e8c423' : '#ffb4ab' }}>{r.onTime}</span>
//                     </td>
//                     <td style={{ padding: '13px 20px', fontSize: 13, color: '#94a3b8' }}>{r.avgDelay}</td>
//                     <td style={{ padding: '13px 20px' }}>
//                       <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
//                         <div style={{ flex: 1, height: 5, background: 'rgba(255,255,255,0.06)', borderRadius: 3, overflow: 'hidden' }}>
//                           <div style={{ height: '100%', width: `${r.efficiency}%`, background: r.efficiency >= 93 ? '#00f2ff' : r.efficiency >= 88 ? '#e8c423' : '#ffb4ab', borderRadius: 3 }} />
//                         </div>
//                         <span style={{ fontSize: 11, fontWeight: 700, color: r.efficiency >= 93 ? '#00f2ff' : r.efficiency >= 88 ? '#e8c423' : '#ffb4ab', width: 36, textAlign: 'right' }}>{r.efficiency}%</span>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const kpis = [
  { label: 'On-Time Delivery', value: '94.2%', change: '+2.1%', up: true,  color: '#00e5ff', icon: 'task_alt',   sub: 'Last 30 days' },
  { label: 'Avg Delay',        value: '2.3h',  change: '-0.8h', up: true,  color: '#ffb300', icon: 'schedule',   sub: 'Per delayed shipment' },
  { label: 'Cost Saved',       value: '₹2.1L', change: '+₹0.4L',up: true, color: '#00e676', icon: 'savings',    sub: 'Rerouting gains' },
  { label: 'Routes Optimised', value: '47',    change: '+12',   up: true,  color: '#c084fc', icon: 'alt_route',  sub: 'This month' },
];

const routes = [
  { route: 'DEL → MUM', shipments: 142, onTime: '96%', avgDelay: '1.2h', efficiency: 96,  color: '#00e5ff' },
  { route: 'BLR → HYD', shipments: 98,  onTime: '91%', avgDelay: '2.1h', efficiency: 91,  color: '#00e676' },
  { route: 'MUM → GWL', shipments: 73,  onTime: '88%', avgDelay: '3.4h', efficiency: 88,  color: '#ffb300' },
  { route: 'CHN → BLR', shipments: 115, onTime: '94%', avgDelay: '1.8h', efficiency: 94,  color: '#00e676' },
  { route: 'DEL → KOL', shipments: 62,  onTime: '82%', avgDelay: '4.2h', efficiency: 82,  color: '#ff6b6b' },
];

const weeklyRisk = [30, 45, 38, 62, 55, 48, 70];
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const maxRisk = Math.max(...weeklyRisk);
const deliveryData = [88, 91, 93, 90, 94, 92, 95];
const maxDelivery = Math.max(...deliveryData);

export default function Performance() {
  const [activeView, setActiveView] = useState('Predictive');
  const [sortBy, setSortBy] = useState('efficiency');
  const [sortDir, setSortDir] = useState('desc');

  const sorted = [...routes].sort((a, b) => {
    const val = sortBy === 'route' ? a.route.localeCompare(b.route) : b[sortBy] - a[sortBy];
    return sortDir === 'asc' ? -val : val;
  });

  const handleSort = col => {
    if (sortBy === col) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortBy(col); setSortDir('desc'); }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-deep)' }}>
      <Sidebar />
      <div style={{ marginLeft: 240, flex: 1 }}>
        <Topbar />
        <main style={{ marginTop: 60, padding: '24px 28px', animation: 'fadeIn 0.4s ease' }}>

          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>Performance Analytics</h1>
              <p style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 4 }}>Operational KPIs and Efficiency Metrics</p>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <select style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, padding: '8px 14px', fontSize: 11, color: 'var(--text-secondary)', cursor: 'pointer', outline: 'none', fontFamily: 'var(--font-body)' }}>
                <option>Last 30 Days</option><option>Last 7 Days</option><option>Last Quarter</option>
              </select>
              <button className="btn-primary" style={{ padding: '8px 16px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 15 }}>download</span>
                Export Report
              </button>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid-4" style={{ marginBottom: 24 }}>
            {kpis.map(k => (
              <div key={k.label} className="card" style={{ padding: 18 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                  <p className="label">{k.label}</p>
                  <div style={{ background: k.color + '15', borderRadius: 7, padding: 6, border: `1px solid ${k.color}22` }}>
                    <span className="material-symbols-outlined" style={{ color: k.color, fontSize: 16 }}>{k.icon}</span>
                  </div>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 800, color: k.color, letterSpacing: '-0.02em' }}>{k.value}</h3>
                <p style={{ fontSize: 10, color: k.up ? 'var(--cyan)' : '#ff6b6b', marginTop: 6 }}>
                  {k.up ? '↑' : '↓'} {k.change} <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>{k.sub}</span>
                </p>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid-2" style={{ marginBottom: 24 }}>
            {/* Weekly Risk Trend - Bar Chart */}
            <div className="card" style={{ padding: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700 }}>Weekly Risk Trend</h3>
                <div style={{ display: 'flex', gap: 6 }}>
                  {['Predictive', 'Historical'].map(v => (
                    <button key={v} onClick={() => setActiveView(v)} style={{
                      padding: '4px 10px', fontSize: 10, fontWeight: 600, borderRadius: 5, border: 'none', cursor: 'pointer',
                      fontFamily: 'var(--font-mono)',
                      background: activeView === v ? 'var(--cyan)' : 'rgba(255,255,255,0.05)',
                      color: activeView === v ? '#001a22' : 'var(--text-muted)',
                    }}>{v}</button>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 140, paddingTop: 10, position: 'relative' }}>
                {/* Target line */}
                <div style={{ position: 'absolute', left: 0, right: 0, bottom: `${(50/maxRisk)*100}%`, borderTop: '1px dashed rgba(255,107,107,0.5)', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 8, color: '#ff6b6b', fontFamily: 'var(--font-mono)', marginRight: 4, marginTop: -9 }}>Target</span>
                </div>
                {weeklyRisk.map((val, i) => (
                  <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                    <span style={{ fontSize: 9, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{val}</span>
                    <div style={{
                      width: '100%', height: `${(val/maxRisk)*100}%`,
                      background: val > 50 ? 'linear-gradient(to top, #0077cc, #00e5ff)' : 'linear-gradient(to top, #005577, #00b4cc)',
                      borderRadius: '4px 4px 0 0',
                      boxShadow: val > 50 ? '0 0 12px rgba(0,229,255,0.25)' : 'none',
                      transition: 'all 0.3s',
                      cursor: 'pointer',
                    }}
                      onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.3)'}
                      onMouseLeave={e => e.currentTarget.style.filter = 'none'}
                    />
                    <span className="label" style={{ fontSize: 9 }}>{days[i]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Performance - Line Chart */}
            <div className="card" style={{ padding: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700 }}>Delivery Performance</h3>
                <span className="label">% On-Time</span>
              </div>
              <div style={{ height: 140, position: 'relative', overflow: 'visible' }}>
                <svg width="100%" height="100%" viewBox="0 0 400 140" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="perf-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#00e5ff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Fill */}
                  <polyline
                    points={deliveryData.map((v, i) => `${(i/(deliveryData.length-1))*400},${140 - (v/maxDelivery)*120}`).join(' ') + ` ${400},140 0,140`}
                    fill="url(#perf-grad)"
                  />
                  {/* Line */}
                  <polyline
                    points={deliveryData.map((v, i) => `${(i/(deliveryData.length-1))*400},${140 - (v/maxDelivery)*120}`).join(' ')}
                    fill="none" stroke="#00e5ff" strokeWidth="2.5"
                    strokeLinejoin="round" strokeLinecap="round"
                  />
                  {/* Dots */}
                  {deliveryData.map((v, i) => (
                    <circle key={i}
                      cx={(i/(deliveryData.length-1))*400}
                      cy={140 - (v/maxDelivery)*120}
                      r="4" fill="#00e5ff" stroke="#070c0f" strokeWidth="2"
                    />
                  ))}
                </svg>
                {/* Day labels */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
                  {days.map(d => <span key={d} className="label" style={{ fontSize: 9 }}>{d}</span>)}
                </div>
              </div>
            </div>
          </div>

          {/* Performance by Route Table */}
          <div className="card" style={{ overflow: 'hidden' }}>
            <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.02)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700 }}>Performance by Route</h3>
              <span className="label">Click column headers to sort</span>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)' }}>
                  {[
                    { label: 'Route', col: 'route' },
                    { label: 'Shipments', col: 'shipments' },
                    { label: 'On-Time %', col: 'onTime' },
                    { label: 'Avg Delay', col: 'avgDelay' },
                    { label: 'Efficiency Score', col: 'efficiency' },
                  ].map(h => (
                    <th key={h.col} onClick={() => handleSort(h.col)} style={{
                      padding: '12px 18px', fontSize: 9, color: sortBy === h.col ? 'var(--cyan)' : 'var(--text-secondary)',
                      letterSpacing: '0.1em', textTransform: 'uppercase', textAlign: h.col === 'efficiency' ? 'right' : 'left',
                      fontFamily: 'var(--font-mono)', fontWeight: 700, cursor: 'pointer', userSelect: 'none',
                      transition: 'color 0.2s',
                    }}>
                      {h.label} {sortBy === h.col ? (sortDir === 'asc' ? '↑' : '↓') : ''}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sorted.map((r, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)', transition: 'background 0.2s', cursor: 'pointer' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <td style={{ padding: '13px 18px', fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, color: 'var(--text-primary)' }}>{r.route}</td>
                    <td style={{ padding: '13px 18px', fontSize: 12, color: 'var(--text-secondary)' }}>{r.shipments}</td>
                    <td style={{ padding: '13px 18px', fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, color: r.color }}>{r.onTime}</td>
                    <td style={{ padding: '13px 18px', fontSize: 12, color: 'var(--text-secondary)' }}>{r.avgDelay}</td>
                    <td style={{ padding: '13px 18px', textAlign: 'right' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'flex-end' }}>
                        <div style={{ width: 100, height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden' }}>
                          <div style={{ height: '100%', width: `${r.efficiency}%`, background: r.color, borderRadius: 2, boxShadow: `0 0 6px ${r.color}66`, transition: 'width 0.6s ease' }} />
                        </div>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, color: r.color, minWidth: 36 }}>{r.efficiency}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
