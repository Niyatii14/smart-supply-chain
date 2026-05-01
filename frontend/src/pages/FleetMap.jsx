// import MapView from "../components/MapView";

// export default function Fleet() {
//   return (
//     <>
//       <div className="panel">
//         <p className="panel-title">ACTIVE FLEET</p>

//         <div className="fleet-list">
//           <div>LM-TRK-8821 → Moving</div>
//           <div>LM-CON-0429 → Idle</div>
//           <div>LM-TRK-1102 → Delayed</div>
//         </div>
//       </div>

//       <div className="panel map-panel">
//         <MapView />
//       </div>

//       <div className="stats-grid">
//         <div className="panel">Active Vehicles: 1,402</div>
//         <div className="panel">Avg Speed: 72.4 km/h</div>
//         <div className="panel">Coverage: 99.2%</div>
//       </div>
//     </>
//   );
// }

// import Sidebar from '../components/Sidebar';
// import Topbar from '../components/Topbar';

// const vehicles = [
//   { id: 'TRK-001', route: 'DEL → MUM', status: 'Moving',  statusColor: '#00f2ff',  speed: '72 km/h', eta: '6h 20m' },
//   { id: 'TRK-002', route: 'BLR → HYD', status: 'Moving',  statusColor: '#00f2ff',  speed: '65 km/h', eta: '3h 45m' },
//   { id: 'CON-088', route: 'MUM → GWL', status: 'Idle',    statusColor: '#e8c423',  speed: '0 km/h',  eta: 'N/A'    },
//   { id: 'TRK-045', route: 'CHN → BLR', status: 'Delayed', statusColor: '#ffb4ab',  speed: '42 km/h', eta: '+2h'    },
//   { id: 'CON-012', route: 'DEL → KOL', status: 'Moving',  statusColor: '#00f2ff',  speed: '80 km/h', eta: '9h 10m' },
// ];

// const mapStats = [
//   { label: 'Active Vehicles', value: '428', icon: 'local_shipping', color: '#00f2ff' },
//   { label: 'Avg Speed',       value: '68 km/h', icon: 'speed',         color: '#00dbe7' },
//   { label: 'Coverage',        value: '14,200 km', icon: 'route',       color: '#e8c423' },
// ];

// export default function FleetMap() {
//   return (
//     <div style={{ display: 'flex', minHeight: '100vh', background: '#0d1515' }}>
//       <Sidebar />
//       <div style={{ marginLeft: 256, flex: 1 }}>
//         <Topbar pageTitle="Fleet Map" />
//         <main style={{ marginTop: 64, height: 'calc(100vh - 64px)', display: 'flex', flexDirection: 'column' }}>

//           {/* Map Area */}
//           <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
//             <img
//               src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5NcDvHU2Conl2EDhYFOe-CkgFFS7xGK-y4vc3zEwWy7FFatGW3_WvUp40_AnFBjsEQGD-7EwUACHs9ocx7cTvNPPMbE8paBl63bgjELzum7HaYR54iXUBbqgAz6v-QACSAMXPHqBXuesH92NyRUMYIyr9Al7VImAA9CdP58hewH6ajc9FgG-s8-VvoaHtH631hqeXy67HvdgZRB_ggZHSV1MOfzO6htVchTIMrxcbGgqucsClhP2In7a3UmuF8zPpAv-ghiUeTj0"
//               alt="Fleet Map"
//               style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55, filter: 'grayscale(30%) brightness(0.5)' }}
//             />
//             <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, #0d1515)' }} />

//             {/* Top controls */}
//             <div style={{ position: 'absolute', top: 20, left: 20, display: 'flex', gap: 8 }}>
//               {['All Vehicles', 'Trucks', 'Containers', 'Express'].map((f, i) => (
//                 <button key={f} style={{
//                   padding: '7px 14px', fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
//                   background: i === 0 ? '#00f2ff' : 'rgba(11,14,20,0.85)',
//                   color: i === 0 ? '#002022' : '#94a3b8',
//                   border: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.1)',
//                   borderRadius: 6, cursor: 'pointer', backdropFilter: 'blur(8px)',
//                 }}>{f}</button>
//               ))}
//             </div>

//             {/* Legend */}
//             <div style={{ position: 'absolute', top: 20, right: 20, background: 'rgba(11,14,20,0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: 14, backdropFilter: 'blur(12px)' }}>
//               <p style={{ fontSize: 9, color: '#6b7280', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 10 }}>Vehicle Status</p>
//               {[{ label: 'Moving', color: '#00f2ff' }, { label: 'Idle', color: '#e8c423' }, { label: 'Delayed', color: '#ffb4ab' }].map(l => (
//                 <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
//                   <span style={{ width: 8, height: 8, borderRadius: '50%', background: l.color, boxShadow: `0 0 6px ${l.color}` }} />
//                   <span style={{ fontSize: 11, color: '#94a3b8' }}>{l.label}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Pulsing markers (decorative) */}
//             {[[35, 40], [48, 60], [42, 55], [55, 35]].map(([top, left], i) => (
//               <div key={i} style={{ position: 'absolute', top: `${top}%`, left: `${left}%` }}>
//                 <div style={{ width: 12, height: 12, borderRadius: '50%', background: ['#00f2ff','#00f2ff','#ffb4ab','#e8c423'][i], opacity: 0.8, position: 'relative' }}>
//                   <div style={{ position: 'absolute', inset: -4, borderRadius: '50%', border: `2px solid ${['#00f2ff','#00f2ff','#ffb4ab','#e8c423'][i]}`, opacity: 0.4, animation: 'ping 2s infinite' }} />
//                 </div>
//               </div>
//             ))}

//             {/* Map zoom controls */}
//             <div style={{ position: 'absolute', bottom: 40, right: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
//               {['+', '−', '⊕'].map(c => (
//                 <button key={c} style={{ width: 36, height: 36, background: 'rgba(11,14,20,0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, color: '#94a3b8', fontSize: 18, cursor: 'pointer', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{c}</button>
//               ))}
//             </div>

//             {/* Stats overlay */}
//             <div style={{ position: 'absolute', bottom: 20, left: 20, display: 'flex', gap: 12 }}>
//               {mapStats.map(s => (
//                 <div key={s.label} style={{ background: 'rgba(11,14,20,0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '10px 16px', backdropFilter: 'blur(12px)' }}>
//                   <p style={{ fontSize: 9, color: '#6b7280', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>{s.label}</p>
//                   <p style={{ fontFamily: 'Space Grotesk', fontSize: 18, fontWeight: 700, color: s.color }}>{s.value}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Bottom vehicle list */}
//           <div style={{ background: '#0f1623', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '16px 24px' }}>
//             <div style={{ display: 'flex', gap: 12, overflowX: 'auto' }}>
//               {vehicles.map(v => (
//                 <div key={v.id} style={{
//                   background: '#151d1e', border: '1px solid rgba(255,255,255,0.07)',
//                   borderRadius: 8, padding: '12px 16px', minWidth: 180, flexShrink: 0,
//                   borderTop: `2px solid ${v.statusColor}`,
//                 }}>
//                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
//                     <span style={{ fontFamily: 'Space Grotesk', fontSize: 12, fontWeight: 700, color: '#fff' }}>{v.id}</span>
//                     <span style={{ width: 7, height: 7, borderRadius: '50%', background: v.statusColor, boxShadow: `0 0 6px ${v.statusColor}` }} />
//                   </div>
//                   <p style={{ fontSize: 11, color: '#6b7280', marginBottom: 4 }}>{v.route}</p>
//                   <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//                     <span style={{ fontSize: 10, color: v.statusColor, fontWeight: 700 }}>{v.status}</span>
//                     <span style={{ fontSize: 10, color: '#4b5563' }}>ETA: {v.eta}</span>
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

import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const vehicles = [
  { id: 'TRK-001', route: 'DEL → MUM', status: 'Moving',  color: '#00e5ff', eta: '6h 20m', type: 'truck' },
  { id: 'TRK-002', route: 'BLR → HYD', status: 'Moving',  color: '#00e5ff', eta: '3h 45m', type: 'truck' },
  { id: 'CON-088', route: 'MUM → GWL', status: 'Idle',    color: '#ffb300', eta: 'N/A',    type: 'container' },
  { id: 'TRK-045', route: 'CHN → BLR', status: 'Delayed', color: '#ff6b6b', eta: '+2h',    type: 'truck' },
  { id: 'CON-012', route: 'DEL → KOL', status: 'Moving',  color: '#00e5ff', eta: '9h 10m', type: 'container' },
  { id: 'EXP-007', route: 'MUM → DEL', status: 'Moving',  color: '#00e5ff', eta: '5h 00m', type: 'express' },
];

const FILTER_TABS = ['ALL VEHICLES', 'TRUCKS', 'CONTAINERS', 'EXPRESS'];

export default function FleetMap() {
  const [activeTab, setActiveTab] = useState('ALL VEHICLES');
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const filtered = vehicles.filter(v => {
    if (activeTab === 'ALL VEHICLES') return true;
    if (activeTab === 'TRUCKS') return v.type === 'truck';
    if (activeTab === 'CONTAINERS') return v.type === 'container';
    if (activeTab === 'EXPRESS') return v.type === 'express';
    return true;
  });

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-deep)' }}>
      <Sidebar />
      <div style={{ marginLeft: 240, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Topbar />
        <main style={{ marginTop: 60, display: 'flex', flexDirection: 'column', height: 'calc(100vh - 60px)', overflow: 'hidden', animation: 'fadeIn 0.4s ease' }}>

          {/* Filter tabs */}
          <div style={{ padding: '14px 28px', display: 'flex', gap: 4, borderBottom: '1px solid var(--border)', background: 'rgba(7,12,15,0.8)', flexShrink: 0 }}>
            {FILTER_TABS.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{
                padding: '7px 16px',
                fontSize: 10, fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.06em',
                border: '1px solid',
                borderColor: activeTab === tab ? 'rgba(0,229,255,0.4)' : 'var(--border)',
                borderRadius: 6,
                background: activeTab === tab ? 'rgba(0,229,255,0.1)' : 'transparent',
                color: activeTab === tab ? 'var(--cyan)' : 'var(--text-muted)',
                cursor: 'pointer', transition: 'all 0.2s',
              }}>{tab}</button>
            ))}
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 16 }}>
              {[{ color: '#00e5ff', label: 'Moving' }, { color: '#ffb300', label: 'Idle' }, { color: '#ff6b6b', label: 'Delayed' }].map(s => (
                <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: s.color, boxShadow: `0 0 6px ${s.color}` }} />
                  <span className="label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map area */}
          <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWOuKWwguC2IpHUQ9NuSHAMOL18QdD2RnzkPEW6sZW3LUMNInaMp_8gZFRRJGdmraz9_BdvpV3qdYfzZ5Qaq5HFQxmcPrEGulJpEpKLYuRk7Q2zfFLnM7rKDFi_ZsDVzo4Ckwh_Ng18_g03JkrcSdiosePtNpVmvb4K90p0txFlLgwId1xZZExJEsX1stCT0e_XlEOqwsIAQiKJ2-AHT4QQv9TjHjl8VyAn0pwWuI8AwKqGkTsJhYrgsOrZNSZVl_BNL2oNegFoAA"
              alt="Fleet map"
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4, filter: 'brightness(0.7) saturate(0.5)' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 40%, rgba(7,12,15,0.5))' }} />

            {/* Vehicle dots */}
            {[
              { x: '53%', y: '34%', color: '#00e5ff', id: 'TRK-001' },
              { x: '63%', y: '46%', color: '#ff6b6b', id: 'TRK-045' },
              { x: '66%', y: '38%', color: '#00e5ff', id: 'CON-012' },
              { x: '48%', y: '55%', color: '#ffb300', id: 'CON-088' },
            ].map(dot => (
              <div key={dot.id} onClick={() => setSelectedVehicle(dot.id === selectedVehicle ? null : dot.id)} style={{
                position: 'absolute', left: dot.x, top: dot.y,
                width: 14, height: 14, borderRadius: '50%',
                background: dot.color,
                boxShadow: `0 0 12px ${dot.color}, 0 0 20px ${dot.color}66`,
                cursor: 'pointer', transition: 'all 0.2s',
                transform: selectedVehicle === dot.id ? 'scale(1.5)' : 'scale(1)',
                border: selectedVehicle === dot.id ? '2px solid white' : 'none',
              }} />
            ))}

            {/* Stats overlay */}
            <div style={{
              position: 'absolute', bottom: 24, left: 28,
              display: 'flex', gap: 12,
            }}>
              {[
                { label: 'Active Vehicles', value: '428', color: 'var(--cyan)' },
                { label: 'Avg Speed', value: '68 km/h', color: 'var(--text-primary)' },
                { label: 'Coverage', value: '14,200 km', color: '#ffb300' },
              ].map(s => (
                <div key={s.label} style={{
                  padding: '12px 16px',
                  background: 'rgba(7,12,15,0.9)',
                  border: '1px solid var(--border)',
                  borderRadius: 8, backdropFilter: 'blur(12px)',
                }}>
                  <p className="label" style={{ marginBottom: 4 }}>{s.label}</p>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 800, color: s.color }}>{s.value}</p>
                </div>
              ))}
            </div>

            {/* Zoom controls */}
            <div style={{ position: 'absolute', bottom: 24, right: 28, display: 'flex', flexDirection: 'column', gap: 4 }}>
              {['+', '−', '⊕'].map((z, i) => (
                <button key={i} style={{
                  width: 34, height: 34,
                  background: 'rgba(7,12,15,0.9)',
                  border: '1px solid var(--border)',
                  borderRadius: 6, color: 'var(--text-secondary)',
                  fontSize: 14, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.color = 'var(--cyan)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                >{z}</button>
              ))}
            </div>
          </div>

          {/* Vehicle cards */}
          <div style={{ padding: '16px 28px', borderTop: '1px solid var(--border)', background: 'rgba(7,12,15,0.9)', display: 'flex', gap: 12, overflowX: 'auto', flexShrink: 0 }}>
            {filtered.map(v => (
              <div key={v.id} onClick={() => setSelectedVehicle(v.id === selectedVehicle ? null : v.id)} style={{
                minWidth: 160,
                padding: '12px 14px',
                background: selectedVehicle === v.id ? `${v.color}12` : 'var(--bg-card)',
                border: `1px solid ${selectedVehicle === v.id ? v.color + '44' : 'var(--border)'}`,
                borderRadius: 10,
                cursor: 'pointer', transition: 'all 0.2s', flexShrink: 0,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, color: 'var(--text-primary)' }}>{v.id}</span>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: v.color, boxShadow: `0 0 6px ${v.color}` }} />
                </div>
                <p style={{ fontSize: 10, color: 'var(--text-secondary)', marginBottom: 4 }}>{v.route}</p>
                <p style={{ fontSize: 10, fontWeight: 600, color: v.color, marginBottom: 4 }}>{v.status}</p>
                <p style={{ fontSize: 9, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>ETA: {v.eta}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
