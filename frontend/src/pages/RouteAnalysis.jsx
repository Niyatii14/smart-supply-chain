// import Sidebar from '../components/Sidebar';
// import Topbar from '../components/Topbar';

// const kpis = [
//   { label: 'Total Shipments', value: '4,821', change: '+12%', changeDir: 'up', sub: 'vs last month', icon: 'inventory_2', color: '#00f2ff' },
//   { label: 'In Transit',      value: '1,402', change: '+4.2%', changeDir: 'up', sub: 'active flows', icon: 'moving',     color: '#00f2ff' },
//   { label: 'Delayed / At Risk', value: '24',   change: '-8%',  changeDir: 'down', sub: 'improvement', icon: 'warning',   color: '#ffb4ab' },
//   { label: 'Delivered Today',  value: '312',   change: '+5%',  changeDir: 'up', sub: 'throughput',   icon: 'task_alt',   color: '#e8c423' },
// ];

// const shipments = [
//   { id: '#LM-7729-QX', type: 'Priority Cargo', from: 'SIN', to: 'RTM', carrier: 'Maersk Global',      score: 98,  eta: 'Oct 14–Oct 16', etaStatus: 'On Schedule',  status: 'In Transit',  statusColor: '#00f2ff' },
//   { id: '#LM-9102-WB', type: 'Bulk Logistics', from: 'SZX', to: 'LAX', carrier: 'MSC Mediterranean',   score: 42,  eta: 'Oct 12 (Past)',  etaStatus: '+48h Delay',   status: 'Delayed',     statusColor: '#ffb4ab' },
//   { id: '#LM-5541-ZZ', type: 'Standard Air',   from: 'DXB', to: 'LHR', carrier: 'DHL Express',         score: 85,  eta: 'Oct 14 14:30',  etaStatus: 'On Schedule',  status: 'Dispatched',  statusColor: '#0566d9' },
//   { id: '#LM-2209-MK', type: 'Refrigerated',   from: 'HAM', to: 'OSL', carrier: 'Hapag-Lloyd',          score: 100, eta: 'Oct 13 Arrived', etaStatus: 'Completed',  status: 'Delivered',   statusColor: '#e8c423' },
// ];

// const alerts = [
//   { title: 'Severe Weather: Port of LA', body: 'Incoming cyclone predicted. Expect 24–48h processing delays for all Pacific routes.', level: 'error', action: 'Reroute Ships' },
//   { title: 'Carrier Update: Maersk',     body: 'Labor negotiations affecting Northern European terminals. Monitor SIN-RTM routes.',    level: 'amber', action: 'View Details' },
// ];

// export default function RouteAnalysis() {
//   return (
//     <div style={{ display: 'flex', minHeight: '100vh', background: '#0d1515' }}>
//       <Sidebar />
//       <div style={{ marginLeft: 256, flex: 1, display: 'flex', flexDirection: 'column' }}>
//         <Topbar pageTitle="Route Analysis" />
//         <main style={{ marginTop: 64, padding: 24, overflowY: 'auto' }}>

//           {/* KPI Row */}
//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, marginBottom: 24 }}>
//             {kpis.map(k => (
//               <div key={k.label} style={{
//                 background: '#151d1e', border: '1px solid rgba(255,255,255,0.07)',
//                 borderRadius: 12, padding: 20, position: 'relative', overflow: 'hidden',
//                 transition: 'border-color 0.3s',
//               }}
//                 onMouseEnter={e => e.currentTarget.style.borderColor = k.color + '44'}
//                 onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
//               >
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
//                   <div>
//                     <p style={{ fontSize: 10, color: '#6b7280', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 6 }}>{k.label}</p>
//                     <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 30, fontWeight: 700, color: k.color === '#00f2ff' && k.label === 'Total Shipments' ? '#fff' : k.color }}>{k.value}</h3>
//                     <p style={{ fontSize: 10, fontWeight: 700, color: k.changeDir === 'up' ? '#00f2ff' : '#ffb4ab', marginTop: 4 }}>
//                       {k.changeDir === 'up' ? '↑' : '↓'} {k.change} <span style={{ color: '#6b7280', fontWeight: 400 }}>{k.sub}</span>
//                     </p>
//                   </div>
//                   <div style={{ background: k.color + '18', borderRadius: 8, padding: 8 }}>
//                     <span className="material-symbols-outlined" style={{ color: k.color, fontSize: 22 }}>{k.icon}</span>
//                   </div>
//                 </div>
//                 {/* Hover bottom line */}
//                 <div style={{ position: 'absolute', bottom: 0, left: 0, height: 2, width: '100%', background: `linear-gradient(to right, transparent, ${k.color}55, transparent)` }} />
//               </div>
//             ))}
//           </div>

//           {/* Map + Alerts Row */}
//           <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20, marginBottom: 24 }}>
//             {/* Map */}
//             <div style={{ background: '#151d1e', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: 20 }}>
//               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
//                 <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8 }}>
//                   <span className="material-symbols-outlined" style={{ color: '#00f2ff', fontSize: 18 }}>auto_graph</span>
//                   Global Logistics Density
//                 </h3>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
//                   <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00f2ff', display: 'inline-block' }} />
//                   <span style={{ fontSize: 10, color: '#6b7280', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Real-Time Telemetry</span>
//                 </div>
//               </div>
//               <div style={{ height: 260, borderRadius: 8, overflow: 'hidden', position: 'relative', background: '#080f10', border: '1px solid rgba(255,255,255,0.04)' }}>
//                 <img
//                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWOuKWwguC2IpHUQ9NuSHAMOL18QdD2RnzkPEW6sZW3LUMNInaMp_8gZFRRJGdmraz9_BdvpV3qdYfzZ5Qaq5HFQxmcPrEGulJpEpKLYuRk7Q2zfFLnM7rKDFi_ZsDVzo4Ckwh_Ng18_g03JkrcSdiosePtNpVmvb4K90p0txFlLgwId1xZZExJEsX1stCT0e_XlEOqwsIAQiKJ2-AHT4QQv9TjHjl8VyAn0pwWuI8AwKqGkTsJhYrgsOrZNSZVl_BNL2oNegFoAA"
//                   alt="Global map"
//                   style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
//                 />
//                 <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0d1515cc, transparent)' }} />
//                 <div style={{
//                   position: 'absolute', bottom: 16, left: 16,
//                   background: 'rgba(11,14,20,0.9)', border: '1px solid rgba(255,255,255,0.1)',
//                   backdropFilter: 'blur(8px)', borderRadius: 8, padding: '10px 14px',
//                 }}>
//                   <p style={{ fontSize: 9, color: '#6b7280', letterSpacing: '0.08em', marginBottom: 2 }}>TRAFFIC LOAD</p>
//                   <p style={{ fontFamily: 'Space Grotesk', fontSize: 18, fontWeight: 700, color: '#00f2ff' }}>
//                     HIGH <span style={{ fontSize: 11, color: '#6b7280', fontWeight: 400 }}>+12.4% vs Avg</span>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Critical Alerts */}
//             <div style={{ background: '#151d1e', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: 20 }}>
//               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
//                 <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8 }}>
//                   <span className="material-symbols-outlined" style={{ color: '#ffb4ab', fontSize: 18 }}>gpp_maybe</span>
//                   Critical Risk Alerts
//                 </h3>
//                 <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffb4ab', display: 'inline-block', animation: 'ping 1s infinite' }} />
//               </div>
//               <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
//                 {alerts.map((a, i) => (
//                   <div key={i} style={{
//                     padding: 12,
//                     background: a.level === 'error' ? 'rgba(255,180,171,0.05)' : 'rgba(254,216,58,0.04)',
//                     borderLeft: `2px solid ${a.level === 'error' ? '#ffb4ab' : '#fed83a'}`,
//                     borderRadius: '0 6px 6px 0',
//                   }}>
//                     <p style={{ fontSize: 11, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{a.title}</p>
//                     <p style={{ fontSize: 10, color: '#6b7280', lineHeight: 1.5, marginBottom: 8 }}>{a.body}</p>
//                     <button style={{
//                       fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em',
//                       color: a.level === 'error' ? '#ffb4ab' : '#e8c423',
//                       background: 'none', border: 'none', cursor: 'pointer', padding: 0,
//                     }}>{a.action}</button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Active Shipments Table */}
//           <div style={{ background: '#151d1e', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, overflow: 'hidden' }}>
//             {/* Table header */}
//             <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.03)' }}>
//               <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
//                 <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 15, fontWeight: 700 }}>Active Shipments</h3>
//                 <div style={{ display: 'flex', background: '#080f10', border: '1px solid rgba(58,73,75,0.8)', borderRadius: 6, padding: 4, gap: 2 }}>
//                   {['ALL', 'AIR', 'OCEAN', 'ROAD'].map((t, i) => (
//                     <button key={t} style={{
//                       padding: '4px 12px', fontSize: 10, fontWeight: 700, borderRadius: 4, border: 'none', cursor: 'pointer',
//                       background: i === 0 ? '#00f2ff' : 'transparent',
//                       color: i === 0 ? '#002022' : '#6b7280',
//                     }}>{t}</button>
//                   ))}
//                 </div>
//               </div>
//               <div style={{ display: 'flex', gap: 8 }}>
//                 {[{ icon: 'filter_list', label: 'Advanced Filters' }, { icon: 'download', label: 'Export Data' }].map(btn => (
//                   <button key={btn.label} style={{
//                     display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px',
//                     background: 'none', border: '1px solid rgba(58,73,75,0.8)', borderRadius: 6,
//                     color: '#94a3b8', fontSize: 11, cursor: 'pointer',
//                   }}>
//                     <span className="material-symbols-outlined" style={{ fontSize: 15 }}>{btn.icon}</span>
//                     {btn.label}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Table */}
//             <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//               <thead>
//                 <tr style={{ background: 'rgba(46,54,55,0.4)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
//                   {['Shipment ID', 'Route & Carrier', 'Efficiency Score', 'ETA Window', 'Status', 'Actions'].map(h => (
//                     <th key={h} style={{ padding: '14px 20px', fontSize: 10, color: '#6b7280', letterSpacing: '0.08em', textTransform: 'uppercase', textAlign: h === 'Actions' ? 'right' : h === 'Efficiency Score' ? 'center' : 'left', fontWeight: 700 }}>{h}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {shipments.map((s, i) => (
//                   <tr key={i} style={{
//                     borderBottom: '1px solid rgba(255,255,255,0.04)',
//                     borderLeft: `3px solid ${s.statusColor}`,
//                     transition: 'background 0.2s',
//                   }}
//                     onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.025)'}
//                     onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
//                   >
//                     <td style={{ padding: '14px 20px' }}>
//                       <div style={{ fontFamily: 'Space Grotesk', fontSize: 13, fontWeight: 700, color: '#fff' }}>{s.id}</div>
//                       <div style={{ fontSize: 9, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 2 }}>{s.type}</div>
//                     </td>
//                     <td style={{ padding: '14px 20px' }}>
//                       <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700 }}>
//                         <span style={{ color: '#fff' }}>{s.from}</span>
//                         <span className="material-symbols-outlined" style={{ fontSize: 12, color: s.statusColor }}>arrow_forward</span>
//                         <span style={{ color: '#fff' }}>{s.to}</span>
//                       </div>
//                       <div style={{ fontSize: 10, color: '#6b7280', marginTop: 3 }}>{s.carrier}</div>
//                     </td>
//                     <td style={{ padding: '14px 20px', textAlign: 'center' }}>
//                       <div style={{ fontSize: 10, fontWeight: 700, color: s.statusColor, marginBottom: 4 }}>{s.score}%</div>
//                       <div style={{ width: 80, height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2, margin: '0 auto', overflow: 'hidden' }}>
//                         <div style={{ height: '100%', width: `${s.score}%`, background: s.statusColor, borderRadius: 2 }} />
//                       </div>
//                     </td>
//                     <td style={{ padding: '14px 20px' }}>
//                       <div style={{ fontSize: 11, fontWeight: 700, color: s.status === 'Delayed' ? '#ffb4ab' : '#fff' }}>{s.eta}</div>
//                       <div style={{ fontSize: 10, color: s.statusColor, marginTop: 2 }}>{s.etaStatus}</div>
//                     </td>
//                     <td style={{ padding: '14px 20px' }}>
//                       <span className="badge" style={{
//                         background: s.statusColor + '18', borderColor: s.statusColor + '44', color: s.statusColor,
//                         display: 'inline-flex', alignItems: 'center', gap: 5, padding: '3px 10px',
//                         borderRadius: 9999, fontSize: 10, fontWeight: 700, border: '1px solid',
//                       }}>
//                         <span style={{ width: 5, height: 5, borderRadius: '50%', background: s.statusColor, boxShadow: `0 0 6px ${s.statusColor}` }} />
//                         {s.status}
//                       </span>
//                     </td>
//                     <td style={{ padding: '14px 20px', textAlign: 'right' }}>
//                       <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 6 }}>
//                         {s.status === 'Delayed' ? (
//                           <button style={{ padding: '4px 10px', fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', background: '#ffb4ab', color: '#690005', border: 'none', borderRadius: 4, cursor: 'pointer' }}>Reroute</button>
//                         ) : null}
//                         <button style={{ padding: '4px 10px', fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', background: 'none', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8', borderRadius: 4, cursor: 'pointer' }}>Track</button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             {/* Pagination */}
//             <div style={{ padding: '14px 20px', borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(46,54,55,0.25)' }}>
//               <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
//                 <span style={{ fontSize: 12, color: '#6b7280' }}>Showing 1 to 4 of 4,821 results</span>
//                 <select style={{ background: '#080f10', border: '1px solid rgba(58,73,75,0.8)', color: '#94a3b8', fontSize: 10, padding: '4px 8px', borderRadius: 4 }}>
//                   <option>10</option><option>25</option><option>50</option>
//                 </select>
//               </div>
//               <div style={{ display: 'flex', gap: 6 }}>
//                 {['chevron_left', null, null, null, 'chevron_right'].map((v, i) => (
//                   <button key={i} style={{
//                     width: 32, height: 32, borderRadius: 6, border: i === 1 ? 'none' : '1px solid rgba(58,73,75,0.8)',
//                     background: i === 1 ? '#00f2ff' : 'none', color: i === 1 ? '#002022' : '#6b7280',
//                     fontSize: i !== 0 && i !== 4 ? 12 : 12, fontWeight: 700, cursor: 'pointer',
//                     display: 'flex', alignItems: 'center', justifyContent: 'center',
//                   }}>
//                     {v ? <span className="material-symbols-outlined" style={{ fontSize: 16 }}>{v}</span> : i}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import { predictRoute } from '../services/api';

const CARGO_TYPES = ['General', 'Electronics', 'Pharmaceuticals', 'Perishables', 'Automotive', 'Chemicals', 'Textiles'];

const RISK_CONFIG = {
  Low:      { color: '#00e676', bg: 'rgba(0,230,118,0.08)', border: 'rgba(0,230,118,0.25)', icon: 'check_circle', label: 'LOW RISK' },
  Medium:   { color: '#ffb300', bg: 'rgba(255,179,0,0.08)',  border: 'rgba(255,179,0,0.25)',  icon: 'warning',      label: 'MEDIUM RISK' },
  High:     { color: '#ff6b6b', bg: 'rgba(255,107,107,0.08)',border: 'rgba(255,107,107,0.25)',icon: 'dangerous',    label: 'HIGH RISK' },
  Critical: { color: '#ff2d55', bg: 'rgba(255,45,85,0.1)',   border: 'rgba(255,45,85,0.3)',   icon: 'emergency',    label: 'CRITICAL' },
};

const staticKpis = [
  { label: 'Total Shipments', value: '4,821', change: '+12%', up: true, sub: 'vs last month', icon: 'inventory_2', color: '#00e5ff' },
  { label: 'In Transit',      value: '1,402', change: '+4.2%', up: true, sub: 'active flows', icon: 'moving', color: '#00e5ff' },
  { label: 'Delayed / At Risk', value: '24', change: '-8%', up: false, sub: 'improvement',   icon: 'warning', color: '#ff6b6b' },
  { label: 'Delivered Today',  value: '312',  change: '+5%', up: true, sub: 'throughput',    icon: 'task_alt', color: '#ffb300' },
];

const staticShipments = [
  { id: '#LM-7729-QX', type: 'Priority Cargo', from: 'SIN', to: 'RTM', carrier: 'Maersk Global',    score: 98, eta: 'Oct 14–Oct 16', etaStatus: 'On Schedule', status: 'In Transit', statusColor: '#00e5ff' },
  { id: '#LM-9102-WB', type: 'Bulk Logistics',  from: 'SZX', to: 'LAX', carrier: 'MSC Mediterranean', score: 42, eta: 'Oct 12 (Past)',  etaStatus: '+48h Delay',  status: 'Delayed',    statusColor: '#ff6b6b' },
  { id: '#LM-5541-ZZ', type: 'Standard Air',    from: 'DXB', to: 'LHR', carrier: 'DHL Express',       score: 85, eta: 'Oct 14 14:30',  etaStatus: 'On Schedule', status: 'Dispatched', statusColor: '#0077cc' },
  { id: '#LM-2209-MK', type: 'Refrigerated',    from: 'HAM', to: 'OSL', carrier: 'Hapag-Lloyd',        score: 100,eta: 'Oct 13 Arrived',etaStatus: 'Completed',  status: 'Delivered',  statusColor: '#ffb300' },
];

const alerts = [
  { title: 'Severe Weather: Port of LA', body: 'Incoming cyclone predicted. Expect 24–48h processing delays for all Pacific routes.', level: 'error', action: 'Reroute Ships' },
  { title: 'Carrier Update: Maersk', body: 'Labor negotiations affecting Northern European terminals. Monitor SIN-RTM routes.', level: 'amber', action: 'View Details' },
];

export default function RouteAnalysis() {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [cargoType, setCargoType] = useState('General');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState('ALL');

  const handlePredict = async () => {
    if (!source.trim() || !destination.trim()) {
      setError('Please enter both source and destination.');
      return;
    }
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const data = await predictRoute({ source: source.trim(), destination: destination.trim(), cargo_type: cargoType });
      setResult(data);
    } catch (e) {
      setError(e.message || 'Failed to connect to backend. Ensure server is running at localhost:8000.');
    } finally {
      setLoading(false);
    }
  };

  const risk = result ? (RISK_CONFIG[result.risk_level] || RISK_CONFIG.Medium) : null;

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-deep)' }}>
      <Sidebar />
      <div style={{ marginLeft: 240, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Topbar />
        <main style={{ marginTop: 60, padding: '24px 28px', overflowY: 'auto', animation: 'fadeIn 0.4s ease' }}>

          {/* ── KPI Row ── */}
          <div className="grid-4" style={{ marginBottom: 24 }}>
            {staticKpis.map((k, i) => (
              <div key={k.label} className="card" style={{
                padding: 20,
                position: 'relative', overflow: 'hidden',
                animationDelay: `${i * 0.05}s`,
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = k.color + '33'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                  <p className="label" style={{ marginBottom: 8 }}>{k.label}</p>
                  <div style={{ background: k.color + '15', borderRadius: 8, padding: 7, border: `1px solid ${k.color}22` }}>
                    <span className="material-symbols-outlined" style={{ color: k.color, fontSize: 18 }}>{k.icon}</span>
                  </div>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 800, color: k.label === 'Total Shipments' ? 'var(--text-primary)' : k.color, letterSpacing: '-0.02em' }}>{k.value}</h3>
                <p style={{ fontSize: 10, fontWeight: 600, color: k.up ? 'var(--cyan)' : '#ff6b6b', marginTop: 6 }}>
                  {k.up ? '↑' : '↓'} {k.change} <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>{k.sub}</span>
                </p>
                <div style={{ position: 'absolute', bottom: 0, left: 0, height: 2, width: '100%', background: `linear-gradient(to right, transparent, ${k.color}44, transparent)` }} />
              </div>
            ))}
          </div>

          {/* ── Route Predictor ── */}
          <div className="card" style={{ padding: 24, marginBottom: 24, background: 'rgba(10,16,20,0.95)', borderColor: 'rgba(0,229,255,0.12)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{ padding: 8, background: 'rgba(0,229,255,0.1)', borderRadius: 8, border: '1px solid rgba(0,229,255,0.2)' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--cyan)', fontSize: 18 }}>route</span>
              </div>
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: 'var(--text-primary)' }}>Route Risk Predictor</h2>
                <p style={{ fontSize: 11, color: 'var(--text-secondary)' }}>AI-powered analysis via backend API</p>
              </div>
            </div>

            {/* Inputs */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr auto', gap: 12, alignItems: 'end' }}>
              <div>
                <label className="label" style={{ display: 'block', marginBottom: 6 }}>📍 Source Location</label>
                <div style={{ position: 'relative' }}>
                  <span className="material-symbols-outlined" style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: 'var(--cyan)', fontSize: 16, pointerEvents: 'none' }}>my_location</span>
                  <input
                    className="input-field"
                    style={{ paddingLeft: 34 }}
                    placeholder="e.g. Mumbai, Chennai, Delhi..."
                    value={source}
                    onChange={e => setSource(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handlePredict()}
                  />
                </div>
              </div>

              <div>
                <label className="label" style={{ display: 'block', marginBottom: 6 }}>📍 Destination</label>
                <div style={{ position: 'relative' }}>
                  <span className="material-symbols-outlined" style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#ff6b6b', fontSize: 16, pointerEvents: 'none' }}>location_on</span>
                  <input
                    className="input-field"
                    style={{ paddingLeft: 34 }}
                    placeholder="e.g. Kolkata, Pune, Hyderabad..."
                    value={destination}
                    onChange={e => setDestination(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handlePredict()}
                  />
                </div>
              </div>

              <div>
                <label className="label" style={{ display: 'block', marginBottom: 6 }}>📦 Cargo Type</label>
                <select
                  className="input-field"
                  value={cargoType}
                  onChange={e => setCargoType(e.target.value)}
                  style={{ cursor: 'pointer' }}
                >
                  {CARGO_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <button
                className="btn-primary"
                onClick={handlePredict}
                disabled={loading}
                style={{ height: 42, whiteSpace: 'nowrap', paddingLeft: 20, paddingRight: 20 }}
              >
                {loading ? (
                  <><span className="spinner" style={{ width: 14, height: 14, borderWidth: 2 }} /> Analyzing...</>
                ) : (
                  <><span className="material-symbols-outlined" style={{ fontSize: 16 }}>analytics</span> Analyze Route & Predict Risk</>
                )}
              </button>
            </div>

            {/* Error */}
            {error && (
              <div style={{
                marginTop: 16, padding: '12px 16px',
                background: 'rgba(255,107,107,0.08)',
                border: '1px solid rgba(255,107,107,0.25)',
                borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10,
                animation: 'fadeIn 0.3s ease',
              }}>
                <span className="material-symbols-outlined" style={{ color: '#ff6b6b', fontSize: 18 }}>error</span>
                <p style={{ fontSize: 12, color: '#ff6b6b' }}>{error}</p>
              </div>
            )}

            {/* Result */}
            {result && risk && (
              <div style={{ marginTop: 20, animation: 'fadeIn 0.4s ease' }}>
                <div style={{ height: 1, background: 'var(--border)', marginBottom: 20 }} />

                {/* Risk banner */}
                <div style={{
                  padding: '14px 18px',
                  background: risk.bg,
                  border: `1px solid ${risk.border}`,
                  borderRadius: 10,
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  marginBottom: 16,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span className="material-symbols-outlined" style={{ color: risk.color, fontSize: 24 }}>{risk.icon}</span>
                    <div>
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, color: risk.color, letterSpacing: '0.1em' }}>{risk.label}</p>
                      <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 2 }}>
                        {source} → {destination} · {cargoType}
                      </p>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p className="label">Delay Probability</p>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, color: risk.color }}>
                      {typeof result.delay_probability === 'number' ? `${Math.round(result.delay_probability * 100)}%` : result.delay_probability}
                    </p>
                  </div>
                </div>

                {/* Stats row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 16 }}>
                  {[
                    { label: 'Distance', value: result.distance ? `${result.distance} km` : '—', icon: 'straighten', color: 'var(--cyan)' },
                    { label: 'Estimated ETA', value: result.eta_hours ? `${result.eta_hours}h` : (result.eta || '—'), icon: 'schedule', color: '#ffb300' },
                    { label: 'Risk Score', value: result.risk_score || result.risk_level || '—', icon: 'assessment', color: risk.color },
                  ].map(s => (
                    <div key={s.label} style={{
                      padding: '14px 16px',
                      background: 'rgba(255,255,255,0.025)',
                      border: '1px solid var(--border)',
                      borderRadius: 8,
                      display: 'flex', alignItems: 'center', gap: 12,
                    }}>
                      <span className="material-symbols-outlined" style={{ color: s.color, fontSize: 20 }}>{s.icon}</span>
                      <div>
                        <p className="label" style={{ marginBottom: 3 }}>{s.label}</p>
                        <p style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: s.color }}>{s.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Alternative routes */}
                {result.alternative_routes && result.alternative_routes.length > 0 && (
                  <div>
                    <p className="label" style={{ marginBottom: 10 }}>Alternative Routes</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {result.alternative_routes.map((alt, i) => {
                        const altRisk = RISK_CONFIG[alt.risk_level] || RISK_CONFIG.Low;
                        return (
                          <div key={i} style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            padding: '10px 14px',
                            background: 'rgba(255,255,255,0.02)',
                            border: '1px solid var(--border)',
                            borderRadius: 8,
                            transition: 'all 0.2s',
                            cursor: 'pointer',
                          }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = altRisk.color + '44'; e.currentTarget.style.background = altRisk.bg; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                              <span className="material-symbols-outlined" style={{ color: 'var(--text-muted)', fontSize: 16 }}>route</span>
                              <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{alt.name || alt.route || `Route ${i + 1}`}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                              {alt.distance && <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{alt.distance} km</span>}
                              {alt.eta_hours && <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{alt.eta_hours}h</span>}
                              <span className="badge" style={{
                                background: altRisk.bg, borderColor: altRisk.border, color: altRisk.color,
                              }}>
                                <span style={{ width: 5, height: 5, borderRadius: '50%', background: altRisk.color }} />
                                {alt.risk_level || 'Unknown'}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* ── Map + Alerts ── */}
          <div className="grid-2" style={{ marginBottom: 24, gridTemplateColumns: '2fr 1fr' }}>
            {/* Map */}
            <div className="card" style={{ padding: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--cyan)', fontSize: 16 }}>auto_graph</span>
                  Global Logistics Density
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--cyan)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                  <span className="label">Real-Time Telemetry</span>
                </div>
              </div>
              <div style={{ height: 240, borderRadius: 8, overflow: 'hidden', position: 'relative', background: '#040a0d' }}>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWOuKWwguC2IpHUQ9NuSHAMOL18QdD2RnzkPEW6sZW3LUMNInaMp_8gZFRRJGdmraz9_BdvpV3qdYfzZ5Qaq5HFQxmcPrEGulJpEpKLYuRk7Q2zfFLnM7rKDFi_ZsDVzo4Ckwh_Ng18_g03JkrcSdiosePtNpVmvb4K90p0txFlLgwId1xZZExJEsX1stCT0e_XlEOqwsIAQiKJ2-AHT4QQv9TjHjl8VyAn0pwWuI8AwKqGkTsJhYrgsOrZNSZVl_BNL2oNegFoAA"
                  alt="Global logistics map"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,12,15,0.8), transparent 60%)' }} />
                {result && (
                  <div style={{
                    position: 'absolute', top: 12, left: 12,
                    background: 'rgba(0,229,255,0.15)',
                    border: '1px solid rgba(0,229,255,0.3)',
                    borderRadius: 6, padding: '6px 10px',
                    backdropFilter: 'blur(8px)',
                    animation: 'fadeIn 0.5s ease',
                  }}>
                    <p style={{ fontSize: 10, color: 'var(--cyan)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                      🗺 ROUTE ACTIVE: {source.toUpperCase()} → {destination.toUpperCase()}
                    </p>
                  </div>
                )}
                <div style={{
                  position: 'absolute', bottom: 14, left: 14,
                  background: 'rgba(7,12,15,0.9)', border: '1px solid var(--border)',
                  backdropFilter: 'blur(8px)', borderRadius: 8, padding: '10px 14px',
                }}>
                  <p className="label" style={{ marginBottom: 2 }}>Traffic Load</p>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: 'var(--cyan)' }}>
                    HIGH <span style={{ fontSize: 10, color: 'var(--text-muted)', fontWeight: 400 }}>+12.4% vs Avg</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Alerts */}
            <div className="card" style={{ padding: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span className="material-symbols-outlined" style={{ color: '#ff6b6b', fontSize: 16 }}>gpp_maybe</span>
                  Critical Risk Alerts
                </h3>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#ff6b6b', display: 'inline-block', animation: 'pulse 1.5s infinite' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {alerts.map((a, i) => (
                  <div key={i} style={{
                    padding: 12,
                    background: a.level === 'error' ? 'rgba(255,107,107,0.05)' : 'rgba(255,179,0,0.04)',
                    borderLeft: `2px solid ${a.level === 'error' ? '#ff6b6b' : '#ffb300'}`,
                    borderRadius: '0 8px 8px 0',
                    transition: 'all 0.2s',
                    cursor: 'pointer',
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = a.level === 'error' ? 'rgba(255,107,107,0.09)' : 'rgba(255,179,0,0.08)'}
                    onMouseLeave={e => e.currentTarget.style.background = a.level === 'error' ? 'rgba(255,107,107,0.05)' : 'rgba(255,179,0,0.04)'}
                  >
                    <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>{a.title}</p>
                    <p style={{ fontSize: 10, color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: 8 }}>{a.body}</p>
                    <button style={{
                      fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em',
                      color: a.level === 'error' ? '#ff6b6b' : '#ffb300',
                      background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'var(--font-mono)',
                    }}>{a.action} →</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Active Shipments ── */}
          <div className="card" style={{ overflow: 'hidden' }}>
            <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.02)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700 }}>Active Shipments</h3>
                <div style={{ display: 'flex', background: 'rgba(7,12,15,0.9)', border: '1px solid var(--border)', borderRadius: 6, padding: 3, gap: 2 }}>
                  {['ALL', 'AIR', 'OCEAN', 'ROAD'].map((t, i) => (
                    <button key={t} onClick={() => setActiveFilter(t)} style={{
                      padding: '4px 12px', fontSize: 10, fontWeight: 700, borderRadius: 4, border: 'none', cursor: 'pointer',
                      fontFamily: 'var(--font-mono)',
                      background: activeFilter === t ? 'var(--cyan)' : 'transparent',
                      color: activeFilter === t ? '#001a22' : 'var(--text-muted)',
                      transition: 'all 0.2s',
                    }}>{t}</button>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                {[{ icon: 'filter_list', label: 'Filters' }, { icon: 'download', label: 'Export' }].map(btn => (
                  <button key={btn.label} className="btn-ghost" style={{ fontSize: 11 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 14 }}>{btn.icon}</span>
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)' }}>
                  {['Shipment ID', 'Route & Carrier', 'Efficiency Score', 'ETA Window', 'Status', 'Actions'].map(h => (
                    <th key={h} style={{
                      padding: '12px 18px', fontSize: 9, color: 'var(--text-secondary)',
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      textAlign: h === 'Actions' ? 'right' : h === 'Efficiency Score' ? 'center' : 'left',
                      fontFamily: 'var(--font-mono)', fontWeight: 600, cursor: 'pointer',
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {staticShipments.map((s, i) => (
                  <tr key={i} style={{
                    borderBottom: '1px solid rgba(255,255,255,0.03)',
                    borderLeft: `3px solid ${s.statusColor}`,
                    transition: 'background 0.2s',
                    cursor: 'pointer',
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <td style={{ padding: '13px 18px' }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, color: 'var(--cyan)' }}>{s.id}</div>
                      <div className="label" style={{ marginTop: 2 }}>{s.type}</div>
                    </td>
                    <td style={{ padding: '13px 18px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 600 }}>
                        <span style={{ color: 'var(--text-primary)' }}>{s.from}</span>
                        <span className="material-symbols-outlined" style={{ fontSize: 12, color: s.statusColor }}>arrow_forward</span>
                        <span style={{ color: 'var(--text-primary)' }}>{s.to}</span>
                      </div>
                      <div style={{ fontSize: 10, color: 'var(--text-muted)', marginTop: 3 }}>{s.carrier}</div>
                    </td>
                    <td style={{ padding: '13px 18px', textAlign: 'center' }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: s.statusColor, marginBottom: 4, fontFamily: 'var(--font-mono)' }}>{s.score}%</div>
                      <div style={{ width: 80, height: 3, background: 'rgba(255,255,255,0.06)', borderRadius: 2, margin: '0 auto', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${s.score}%`, background: s.statusColor, borderRadius: 2 }} />
                      </div>
                    </td>
                    <td style={{ padding: '13px 18px' }}>
                      <div style={{ fontSize: 11, fontWeight: 600, color: s.status === 'Delayed' ? '#ff6b6b' : 'var(--text-primary)' }}>{s.eta}</div>
                      <div style={{ fontSize: 10, color: s.statusColor, marginTop: 2 }}>{s.etaStatus}</div>
                    </td>
                    <td style={{ padding: '13px 18px' }}>
                      <span className="badge" style={{ background: s.statusColor + '15', borderColor: s.statusColor + '40', color: s.statusColor }}>
                        <span style={{ width: 5, height: 5, borderRadius: '50%', background: s.statusColor }} />
                        {s.status}
                      </span>
                    </td>
                    <td style={{ padding: '13px 18px', textAlign: 'right' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 6 }}>
                        {s.status === 'Delayed' && (
                          <button style={{ padding: '4px 10px', fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', background: 'rgba(255,107,107,0.15)', color: '#ff6b6b', border: '1px solid rgba(255,107,107,0.3)', borderRadius: 5, cursor: 'pointer', fontFamily: 'var(--font-mono)' }}>Reroute</button>
                        )}
                        <button className="btn-ghost" style={{ padding: '4px 10px', fontSize: 9, fontFamily: 'var(--font-mono)' }}>Track</button>
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
