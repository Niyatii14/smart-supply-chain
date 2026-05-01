// export default function Shipments() {
//   return (
//     <>
//       <div className="stats-grid">
//         <div className="panel">Total Shipments: 4,821</div>
//         <div className="panel">In Transit: 1,402</div>
//         <div className="panel">Delayed: 24</div>
//         <div className="panel">Delivered Today: 312</div>
//       </div>

//       <div className="panel">
//         <p className="panel-title">GLOBAL LOGISTICS DENSITY</p>
//         <div style={{ height: "220px", background: "#000" }}>
//           🌍 Map Placeholder
//         </div>
//       </div>

//       <div className="panel">
//         <p className="panel-title">ACTIVE SHIPMENTS</p>
//         {/* reuse your table component */}
//       </div>
//     </>
//   );
// }

// import { useState } from 'react';
// import Sidebar from '../components/Sidebar';
// import Topbar from '../components/Topbar';

// const stats = [
//   { label: 'Total Shipments', value: '1,248', change: '+12%', up: true,  icon: 'inventory_2',     color: '#00f2ff',  barColor: '#00f2ff' },
//   { label: 'In Transit',      value: '432',   change: 'Stable', up: null, icon: 'local_shipping',  color: '#00dbe7',  barColor: '#00dbe7' },
//   { label: 'Delayed',         value: '18',    change: '+4',   up: false, icon: 'warning',          color: '#ffb4ab',  barColor: '#ffb4ab' },
//   { label: 'Delivered Today', value: '84',    change: '98% KPI', up: true, icon: 'task_alt',       color: '#e8c423',  barColor: '#e8c423' },
// ];

// const shipments = [
//   { id: '#LM-0041', origin: 'Mumbai, IN',    dest: 'Dubai, UAE',      cargo: 'Electronics',    status: 'IN TRANSIT', statusColor: '#00f2ff',  eta: 'Oct 24, 14:00', driver: 'K. Aryan',  delayed: false },
//   { id: '#LM-0038', origin: 'Singapore, SG', dest: 'Rotterdam, NL',   cargo: 'Textiles',       status: 'DELAYED',    statusColor: '#ffb4ab',  eta: 'Oct 23, 09:30', driver: 'J. Miller', delayed: true  },
//   { id: '#LM-0044', origin: 'Berlin, DE',    dest: 'Warsaw, PL',      cargo: 'Automotive',     status: 'DELIVERED',  statusColor: '#e8c423',  eta: 'Oct 22, 18:15', driver: 'S. Weber',  delayed: false },
//   { id: '#LM-0045', origin: 'Chennai, IN',   dest: 'Colombo, LK',     cargo: 'Pharma',         status: 'PENDING',    statusColor: '#adc6ff',  eta: 'Oct 25, 08:00', driver: 'V. Rao',    delayed: false },
//   { id: '#LM-0046', origin: 'Shanghai, CN',  dest: 'Long Beach, US',  cargo: 'Consumer Goods', status: 'IN TRANSIT', statusColor: '#00f2ff',  eta: 'Oct 28, 06:00', driver: 'T. Wang',   delayed: false },
// ];

// export default function Shipments() {
//   const [search, setSearch] = useState('');
//   const [showAlert, setShowAlert] = useState(true);

//   const filtered = shipments.filter(s =>
//     s.id.includes(search) || s.dest.toLowerCase().includes(search.toLowerCase()) || s.driver.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div style={{ display: 'flex', minHeight: '100vh', background: '#0d1515' }}>
//       <Sidebar />
//       <div style={{ marginLeft: 256, flex: 1 }}>
//         <Topbar pageTitle="Shipments" />
//         <main style={{ marginTop: 64, padding: 28 }}>

//           {/* Page Title */}
//           <div style={{ marginBottom: 24 }}>
//             <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 26, fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>Shipments</h1>
//             <p style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>All Active & Historical Shipments</p>
//           </div>

//           {/* Stat Cards */}
//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 24 }}>
//             {stats.map(s => (
//               <div key={s.label} style={{
//                 background: '#151d1e', border: '1px solid rgba(255,255,255,0.07)',
//                 borderRadius: 12, padding: 18, position: 'relative', overflow: 'hidden',
//               }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
//                   <p style={{ fontSize: 9, color: '#6b7280', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700 }}>{s.label}</p>
//                   <div style={{ background: s.color + '18', borderRadius: 6, padding: 6 }}>
//                     <span className="material-symbols-outlined" style={{ color: s.color, fontSize: 18 }}>{s.icon}</span>
//                   </div>
//                 </div>
//                 <div style={{ fontFamily: 'Space Grotesk', fontSize: 28, fontWeight: 700, color: s.label === 'Delayed' ? s.color : '#fff', marginBottom: 4 }}>{s.value}</div>
//                 <p style={{ fontSize: 10, fontWeight: 700, color: s.up === true ? '#00f2ff' : s.up === false ? '#ffb4ab' : '#6b7280' }}>
//                   {s.up === true ? '↑ ' : s.up === false ? '↑ ' : ''}{s.change}
//                 </p>
//                 <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: s.barColor + '33' }}>
//                   <div style={{ height: '100%', width: '65%', background: s.barColor, borderRadius: 2 }} />
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Filters */}
//           <div style={{ display: 'flex', gap: 12, marginBottom: 16, alignItems: 'center' }}>
//             <div style={{ position: 'relative', flex: 1, maxWidth: 500 }}>
//               <span className="material-symbols-outlined" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#6b7280', fontSize: 16 }}>search</span>
//               <input
//                 type="text"
//                 placeholder="Search by Shipment ID, Destination or Driver..."
//                 value={search}
//                 onChange={e => setSearch(e.target.value)}
//                 style={{ width: '100%', background: '#151d1e', border: '1px solid rgba(58,73,75,0.8)', borderRadius: 8, padding: '9px 16px 9px 40px', fontSize: 12, color: '#dce4e4', outline: 'none' }}
//               />
//             </div>
//             <select style={{ background: '#151d1e', border: '1px solid rgba(58,73,75,0.8)', borderRadius: 8, padding: '9px 14px', fontSize: 12, color: '#94a3b8', cursor: 'pointer' }}>
//               <option>All Statuses</option><option>In Transit</option><option>Delayed</option><option>Delivered</option>
//             </select>
//             <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 16px', background: '#00f2ff', color: '#002022', border: 'none', borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: 'pointer' }}>
//               <span className="material-symbols-outlined" style={{ fontSize: 15 }}>download</span>
//               Export CSV
//             </button>
//           </div>

//           {/* Quick filter chips */}
//           <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
//             {['All', 'In Transit', 'Delayed', 'Delivered', 'Pending'].map((chip, i) => (
//               <button key={chip} style={{
//                 padding: '5px 14px', borderRadius: 9999, fontSize: 11, fontWeight: 600, cursor: 'pointer',
//                 background: i === 0 ? 'rgba(0,242,255,0.15)' : 'rgba(255,255,255,0.04)',
//                 border: i === 0 ? '1px solid rgba(0,242,255,0.4)' : '1px solid rgba(255,255,255,0.08)',
//                 color: i === 0 ? '#00f2ff' : '#6b7280',
//               }}>{chip}</button>
//             ))}
//           </div>

//           {/* Table */}
//           <div style={{ background: '#151d1e', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, overflow: 'hidden', position: 'relative' }}>
//             <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//               <thead>
//                 <tr style={{ background: 'rgba(46,54,55,0.4)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
//                   {['Shipment ID', 'Origin', 'Destination', 'Cargo Type', 'Status', 'ETA', 'Driver', 'Actions'].map(h => (
//                     <th key={h} style={{ padding: '13px 18px', fontSize: 10, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.08em', textAlign: 'left', fontWeight: 700 }}>{h}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {filtered.map((s, i) => (
//                   <tr key={i} style={{
//                     borderBottom: '1px solid rgba(255,255,255,0.04)',
//                     borderLeft: `3px solid ${s.statusColor}`,
//                     background: s.delayed ? 'rgba(255,180,171,0.025)' : 'transparent',
//                     transition: 'background 0.15s',
//                   }}
//                     onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
//                     onMouseLeave={e => e.currentTarget.style.background = s.delayed ? 'rgba(255,180,171,0.025)' : 'transparent'}
//                   >
//                     <td style={{ padding: '14px 18px' }}>
//                       <span style={{ color: '#60a5fa', fontSize: 13, fontWeight: 700, fontFamily: 'Space Grotesk', cursor: 'pointer' }}>{s.id}</span>
//                     </td>
//                     <td style={{ padding: '14px 18px', fontSize: 13, color: '#94a3b8' }}>{s.origin}</td>
//                     <td style={{ padding: '14px 18px', fontSize: 13, color: '#94a3b8' }}>{s.dest}</td>
//                     <td style={{ padding: '14px 18px', fontSize: 13, color: '#94a3b8' }}>{s.cargo}</td>
//                     <td style={{ padding: '14px 18px' }}>
//                       <span style={{
//                         display: 'inline-flex', alignItems: 'center', gap: 5,
//                         padding: '3px 10px', borderRadius: 9999, fontSize: 10, fontWeight: 700,
//                         background: s.statusColor + '18', border: `1px solid ${s.statusColor}44`, color: s.statusColor,
//                       }}>
//                         <span style={{ width: 5, height: 5, borderRadius: '50%', background: s.statusColor }} />
//                         {s.status}
//                       </span>
//                     </td>
//                     <td style={{ padding: '14px 18px', fontSize: 12, color: s.delayed ? '#ffb4ab' : '#94a3b8', fontWeight: s.delayed ? 700 : 400 }}>{s.eta}</td>
//                     <td style={{ padding: '14px 18px' }}>
//                       <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
//                         <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'rgba(0,242,255,0.1)', border: '1px solid rgba(0,242,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700, color: '#00f2ff' }}>
//                           {s.driver.split(' ').map(n => n[0]).join('')}
//                         </div>
//                         <span style={{ fontSize: 12, color: '#94a3b8' }}>{s.driver}</span>
//                       </div>
//                     </td>
//                     <td style={{ padding: '14px 18px' }}>
//                       <button style={{ background: 'none', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4, padding: '4px 6px', color: '#6b7280', cursor: 'pointer', display: 'flex' }}>
//                         <span className="material-symbols-outlined" style={{ fontSize: 16 }}>more_vert</span>
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             {/* Disruption Alert Toast */}
//             {showAlert && (
//               <div style={{
//                 position: 'absolute', bottom: 60, right: 20,
//                 background: '#151d1e', border: '1px solid rgba(255,180,171,0.3)',
//                 borderRadius: 10, padding: 16, maxWidth: 320,
//                 boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
//                 borderLeft: '3px solid #ffb4ab',
//               }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
//                   <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
//                     <span className="material-symbols-outlined" style={{ color: '#e8c423', fontSize: 18 }}>warning</span>
//                     <span style={{ fontFamily: 'Space Grotesk', fontSize: 12, fontWeight: 700, color: '#fff' }}>Disruption Alert</span>
//                   </div>
//                   <button onClick={() => setShowAlert(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6b7280' }}>
//                     <span className="material-symbols-outlined" style={{ fontSize: 16 }}>close</span>
//                   </button>
//                 </div>
//                 <p style={{ fontSize: 11, color: '#94a3b8', lineHeight: 1.5, marginBottom: 12 }}>
//                   Typhoon nearing Shanghai Port. Shipment #LM-0046 may face a 48h delay.
//                 </p>
//                 <div style={{ display: 'flex', gap: 8 }}>
//                   <button style={{ padding: '5px 12px', background: '#00f2ff', color: '#002022', border: 'none', borderRadius: 5, fontSize: 10, fontWeight: 700, cursor: 'pointer' }}>View Mitigation</button>
//                   <button onClick={() => setShowAlert(false)} style={{ padding: '5px 12px', background: 'none', border: '1px solid rgba(255,255,255,0.15)', color: '#94a3b8', borderRadius: 5, fontSize: 10, fontWeight: 700, cursor: 'pointer' }}>Dismiss</button>
//                 </div>
//               </div>
//             )}

//             {/* Pagination */}
//             <div style={{ padding: '13px 18px', borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(46,54,55,0.2)' }}>
//               <span style={{ fontSize: 12, color: '#6b7280' }}>Showing 1 to {filtered.length} of 1,248 shipments</span>
//               <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
//                 <button style={{ width: 30, height: 30, borderRadius: 6, border: '1px solid rgba(58,73,75,0.8)', background: 'none', color: '#6b7280', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                   <span className="material-symbols-outlined" style={{ fontSize: 16 }}>chevron_left</span>
//                 </button>
//                 {[1, 2, 3, '...', 250].map((p, i) => (
//                   <button key={i} style={{ width: 30, height: 30, borderRadius: 6, border: i === 0 ? 'none' : '1px solid rgba(58,73,75,0.8)', background: i === 0 ? '#00f2ff' : 'none', color: i === 0 ? '#002022' : '#6b7280', fontSize: 11, fontWeight: 700, cursor: 'pointer' }}>{p}</button>
//                 ))}
//                 <button style={{ width: 30, height: 30, borderRadius: 6, border: '1px solid rgba(58,73,75,0.8)', background: 'none', color: '#6b7280', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                   <span className="material-symbols-outlined" style={{ fontSize: 16 }}>chevron_right</span>
//                 </button>
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

const shipments = [
  { id: '#LM-0041', origin: 'Mumbai, IN',    dest: 'Dubai, UAE',       cargo: 'Electronics',    status: 'IN TRANSIT', statusColor: '#00e5ff', eta: 'Oct 24, 14:00', driver: 'K. Aryan' },
  { id: '#LM-0038', origin: 'Singapore, SG', dest: 'Rotterdam, NL',    cargo: 'Textiles',       status: 'DELAYED',    statusColor: '#ff6b6b', eta: 'Oct 23, 09:30', driver: 'J. Miller' },
  { id: '#LM-0044', origin: 'Berlin, DE',    dest: 'Warsaw, PL',       cargo: 'Automotive',     status: 'DELIVERED',  statusColor: '#ffb300', eta: 'Oct 22, 18:15', driver: 'S. Weber' },
  { id: '#LM-0045', origin: 'Chennai, IN',   dest: 'Colombo, LK',      cargo: 'Pharma',         status: 'PENDING',    statusColor: '#94a3b8', eta: 'Oct 25, 10:00', driver: 'R. Kumar' },
  { id: '#LM-0046', origin: 'Shanghai, CN',  dest: 'Long Beach, US',   cargo: 'Consumer Goods', status: 'IN TRANSIT', statusColor: '#00e5ff', eta: 'Oct 28, 06:00', driver: 'M. Chen' },
  { id: '#LM-0047', origin: 'Hamburg, DE',   dest: 'New York, US',     cargo: 'Machinery',      status: 'IN TRANSIT', statusColor: '#00e5ff', eta: 'Oct 26, 20:00', driver: 'A. Schulz' },
  { id: '#LM-0048', origin: 'Tokyo, JP',     dest: 'Sydney, AU',       cargo: 'Electronics',    status: 'DELIVERED',  statusColor: '#ffb300', eta: 'Oct 21, 12:00', driver: 'H. Tanaka' },
];

const kpis = [
  { label: 'Total Shipments', value: '1,248', change: '+12%', icon: 'inventory_2', color: '#00e5ff', sub: 'Active & Historical' },
  { label: 'In Transit',      value: '432',   change: 'Stable', icon: 'local_shipping', color: '#00e5ff', sub: 'Active flows' },
  { label: 'Delayed',         value: '18',    change: '+4',  icon: 'warning', color: '#ff6b6b', sub: 'Need attention' },
  { label: 'Delivered Today', value: '84',    change: '98% KPI', icon: 'task_alt', color: '#ffb300', sub: 'On target' },
];

export default function Shipments() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [dismissed, setDismissed] = useState(false);

  const filters = ['All', 'In Transit', 'Delayed', 'Delivered', 'Pending'];
  const filtered = shipments.filter(s => {
    const matchFilter = filter === 'All' || s.status.toLowerCase().replace(/ /g,'_') === filter.toLowerCase().replace(/ /g,'_') || s.status.includes(filter.toUpperCase().replace(' ','_'));
    const matchSearch = !search || s.id.toLowerCase().includes(search.toLowerCase()) || s.origin.toLowerCase().includes(search.toLowerCase()) || s.dest.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-deep)' }}>
      <Sidebar />
      <div style={{ marginLeft: 240, flex: 1 }}>
        <Topbar />
        <main style={{ marginTop: 60, padding: '24px 28px', animation: 'fadeIn 0.4s ease' }}>

          <div style={{ marginBottom: 20 }}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>Shipments</h1>
            <p style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 4 }}>All Active & Historical Shipments</p>
          </div>

          {/* KPIs */}
          <div className="grid-4" style={{ marginBottom: 24 }}>
            {kpis.map(k => (
              <div key={k.label} className="card" style={{ padding: 18 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <p className="label">{k.label}</p>
                  <span className="material-symbols-outlined" style={{ color: k.color, fontSize: 18, opacity: 0.8 }}>{k.icon}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 800, color: k.label === 'Total Shipments' ? 'var(--text-primary)' : k.color }}>{k.value}</h3>
                <div style={{ height: 2, background: 'var(--border)', borderRadius: 2, marginTop: 10, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '60%', background: `linear-gradient(to right, ${k.color}44, ${k.color})`, borderRadius: 2 }} />
                </div>
              </div>
            ))}
          </div>

          {/* Filters + Search */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1 }}>
              <div style={{ position: 'relative', flex: 1, maxWidth: 380 }}>
                <span className="material-symbols-outlined" style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', fontSize: 16 }}>search</span>
                <input
                  className="input-field"
                  style={{ paddingLeft: 32 }}
                  placeholder="Search by Shipment ID, Origin or Driver..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
              <div style={{ display: 'flex', background: 'rgba(7,12,15,0.9)', border: '1px solid var(--border)', borderRadius: 8, padding: 3, gap: 2 }}>
                {filters.map(f => (
                  <button key={f} onClick={() => setFilter(f)} style={{
                    padding: '5px 12px', fontSize: 10, fontWeight: 600, borderRadius: 5, border: 'none', cursor: 'pointer',
                    background: filter === f ? 'var(--cyan)' : 'transparent',
                    color: filter === f ? '#001a22' : 'var(--text-muted)',
                    transition: 'all 0.15s',
                    fontFamily: 'var(--font-mono)',
                  }}>{f}</button>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <select style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-secondary)', fontSize: 11, padding: '8px 12px', borderRadius: 8, cursor: 'pointer', fontFamily: 'var(--font-body)', outline: 'none' }}>
                <option>All Statuses</option>
              </select>
              <button className="btn-primary" style={{ padding: '8px 16px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 15 }}>download</span>
                Export CSV
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="card" style={{ overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)' }}>
                  {['Shipment ID', 'Origin', 'Destination', 'Cargo Type', 'Status', 'ETA', 'Driver', 'Actions'].map(h => (
                    <th key={h} style={{ padding: '12px 16px', fontSize: 9, color: 'var(--text-secondary)', letterSpacing: '0.1em', textTransform: 'uppercase', textAlign: 'left', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((s, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)', borderLeft: `3px solid ${s.statusColor}`, cursor: 'pointer', transition: 'background 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.025)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <td style={{ padding: '13px 16px' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, color: 'var(--cyan)' }}>{s.id}</span>
                    </td>
                    <td style={{ padding: '13px 16px', fontSize: 12, color: 'var(--text-primary)' }}>{s.origin}</td>
                    <td style={{ padding: '13px 16px', fontSize: 12, color: 'var(--text-primary)' }}>{s.dest}</td>
                    <td style={{ padding: '13px 16px' }}>
                      <span className="label">{s.cargo}</span>
                    </td>
                    <td style={{ padding: '13px 16px' }}>
                      <span className="badge" style={{ background: s.statusColor + '14', borderColor: s.statusColor + '40', color: s.statusColor }}>
                        <span style={{ width: 5, height: 5, borderRadius: '50%', background: s.statusColor }} />
                        {s.status}
                      </span>
                    </td>
                    <td style={{ padding: '13px 16px', fontFamily: 'var(--font-mono)', fontSize: 11, color: s.status === 'DELAYED' ? '#ff6b6b' : 'var(--text-primary)' }}>{s.eta}</td>
                    <td style={{ padding: '13px 16px', fontSize: 11, color: 'var(--text-secondary)' }}>{s.driver}</td>
                    <td style={{ padding: '13px 16px' }}>
                      <button className="btn-ghost" style={{ padding: '4px 10px', fontSize: 9, fontFamily: 'var(--font-mono)' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 13 }}>more_vert</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Disruption alert */}
          {!dismissed && (
            <div style={{
              position: 'fixed', bottom: 28, right: 28,
              background: 'rgba(10,16,20,0.97)',
              border: '1px solid rgba(255,179,0,0.3)',
              borderRadius: 12, padding: '16px 20px',
              width: 320, backdropFilter: 'blur(16px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,179,0,0.1)',
              animation: 'fadeIn 0.4s ease',
              zIndex: 100,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span className="material-symbols-outlined" style={{ color: '#ffb300', fontSize: 18 }}>warning</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700 }}>Disruption Alert</span>
                </div>
                <button onClick={() => setDismissed(true)} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: 14 }}>✕</button>
              </div>
              <p style={{ fontSize: 11, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 14 }}>
                Typhoon nearing Shanghai Port. Shipment #LM-0046 may face a 48h delay.
              </p>
              <div style={{ display: 'flex', gap: 8 }}>
                <button className="btn-primary" style={{ flex: 1, padding: '7px 12px', fontSize: 10, justifyContent: 'center' }}>View Mitigation</button>
                <button className="btn-ghost" onClick={() => setDismissed(true)} style={{ padding: '7px 12px', fontSize: 10 }}>Dismiss</button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
