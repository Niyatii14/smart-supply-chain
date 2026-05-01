// import { Link, useLocation } from 'react-router-dom';

// const navItems = [
//   { path: '/route-analysis', label: 'Route Analysis', icon: 'alt_route' },
//   { path: '/shipments',      label: 'Shipments',      icon: 'local_shipping' },
//   { path: '/fleet-map',      label: 'Fleet Map',      icon: 'map' },
//   { path: '/risk',           label: 'Risk Intelligence', icon: 'gpp_maybe' },
//   { path: '/performance',    label: 'Performance',    icon: 'insights' },
// ];

// export default function Sidebar() {
//   const { pathname } = useLocation();

//   return (
//     <nav style={{
//       width: 256,
//       height: '100vh',
//       position: 'fixed',
//       left: 0,
//       top: 0,
//       background: 'rgba(11, 14, 20, 0.92)',
//       backdropFilter: 'blur(20px)',
//       borderRight: '1px solid rgba(255,255,255,0.08)',
//       display: 'flex',
//       flexDirection: 'column',
//       padding: '24px 0',
//       zIndex: 50,
//     }}>
//       {/* Logo */}
//       <div style={{ padding: '0 24px', marginBottom: 40 }}>
//         <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
//           <div style={{
//             width: 36, height: 36,
//             background: 'rgba(0,242,255,0.15)',
//             borderRadius: 10,
//             display: 'flex', alignItems: 'center', justifyContent: 'center',
//             boxShadow: '0 0 20px rgba(0,242,255,0.3)',
//             border: '1px solid rgba(0,242,255,0.3)',
//           }}>
//             <span className="material-symbols-outlined" style={{ color: '#00f2ff', fontSize: 20 }}>local_shipping</span>
//           </div>
//           <div>
//             <h1 style={{
//               fontFamily: 'Space Grotesk',
//               fontSize: 18,
//               fontWeight: 700,
//               color: '#00f2ff',
//               letterSpacing: '-0.02em',
//               textShadow: '0 0 12px rgba(0,242,255,0.5)',
//             }}>Logistics Mitra</h1>
//             <p style={{ fontSize: 9, color: '#4b5563', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700 }}>
//               Global Command
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Nav Items */}
//       <div style={{ flex: 1, padding: '0 12px', display: 'flex', flexDirection: 'column', gap: 2 }}>
//         {navItems.map(item => {
//           const active = pathname === item.path;
//           return (
//             <Link key={item.path} to={item.path} style={{
//               display: 'flex',
//               alignItems: 'center',
//               gap: 12,
//               padding: '11px 16px',
//               borderRadius: 8,
//               textDecoration: 'none',
//               transition: 'all 0.2s',
//               background: active ? 'rgba(0,242,255,0.08)' : 'transparent',
//               color: active ? '#00f2ff' : '#94a3b8',
//               borderRight: active ? '2px solid #00f2ff' : '2px solid transparent',
//               boxShadow: active ? '0 0 20px rgba(0,242,255,0.08)' : 'none',
//               fontFamily: 'Space Grotesk',
//               fontSize: 13,
//               fontWeight: 500,
//               letterSpacing: '-0.01em',
//             }}>
//               <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{item.icon}</span>
//               {item.label}
//             </Link>
//           );
//         })}
//       </div>

//       {/* Bottom Section */}
//       <div style={{ padding: '16px 16px 0' }}>
//         <Link to="/route-analysis">
//           <button style={{
//             width: '100%',
//             background: 'linear-gradient(135deg, #00f2ff, #0566d9)',
//             color: '#002022',
//             fontFamily: 'Space Grotesk',
//             fontSize: 12,
//             fontWeight: 700,
//             letterSpacing: '0.05em',
//             textTransform: 'uppercase',
//             padding: '12px 16px',
//             borderRadius: 8,
//             border: 'none',
//             cursor: 'pointer',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             gap: 8,
//             boxShadow: '0 4px 24px rgba(0,242,255,0.2)',
//             transition: 'all 0.2s',
//           }}>
//             <span className="material-symbols-outlined" style={{ fontSize: 16 }}>add</span>
//             New Analysis
//           </button>
//         </Link>

//         <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
//           {[{ icon: 'help', label: 'Support' }, { icon: 'terminal', label: 'Logs' }].map(item => (
//             <button key={item.label} style={{
//               display: 'flex', alignItems: 'center', gap: 10,
//               width: '100%', padding: '8px 4px',
//               background: 'none', border: 'none', cursor: 'pointer',
//               color: '#4b5563', fontSize: 12, fontFamily: 'Space Grotesk',
//               transition: 'color 0.2s',
//             }}>
//               <span className="material-symbols-outlined" style={{ fontSize: 16 }}>{item.icon}</span>
//               {item.label}
//             </button>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }

// import { Link, useLocation } from 'react-router-dom';

// const navItems = [
//   { path: '/route-analysis', label: 'Route Analysis', icon: 'alt_route' },
//   { path: '/shipments',      label: 'Shipments',      icon: 'local_shipping' },
//   { path: '/fleet-map',      label: 'Fleet Map',      icon: 'map' },
//   { path: '/risk',           label: 'Risk Intelligence', icon: 'gpp_maybe' },
//   { path: '/performance',    label: 'Performance',    icon: 'insights' },
// ];

// export default function Sidebar() {
//   const { pathname } = useLocation();

//   return (
//     <nav style={{
//       width: 256,
//       height: '100vh',
//       position: 'fixed',
//       left: 0,
//       top: 0,
//       background: 'rgba(11, 14, 20, 0.92)',
//       backdropFilter: 'blur(20px)',
//       borderRight: '1px solid rgba(255,255,255,0.08)',
//       display: 'flex',
//       flexDirection: 'column',
//       padding: '24px 0',
//       zIndex: 50,
//     }}>
//       {/* Logo */}
//       <div style={{ padding: '0 24px', marginBottom: 40 }}>
//         <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
//           <div style={{
//             width: 36, height: 36,
//             background: 'rgba(0,242,255,0.15)',
//             borderRadius: 10,
//             display: 'flex', alignItems: 'center', justifyContent: 'center',
//             boxShadow: '0 0 20px rgba(0,242,255,0.3)',
//             border: '1px solid rgba(0,242,255,0.3)',
//           }}>
//             <span className="material-symbols-outlined" style={{ color: '#00f2ff', fontSize: 20 }}>local_shipping</span>
//           </div>
//           <div>
//             <h1 style={{
//               fontFamily: 'Space Grotesk',
//               fontSize: 18,
//               fontWeight: 700,
//               color: '#00f2ff',
//               letterSpacing: '-0.02em',
//               textShadow: '0 0 12px rgba(0,242,255,0.5)',
//             }}>Logistics Mitra</h1>
//             <p style={{ fontSize: 9, color: '#4b5563', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700 }}>
//               Global Command
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Nav Items */}
//       <div style={{ flex: 1, padding: '0 12px', display: 'flex', flexDirection: 'column', gap: 2 }}>
//         {navItems.map(item => {
//           const active = pathname === item.path;
//           return (
//             <Link key={item.path} to={item.path} style={{
//               display: 'flex',
//               alignItems: 'center',
//               gap: 12,
//               padding: '11px 16px',
//               borderRadius: 8,
//               textDecoration: 'none',
//               transition: 'all 0.2s',
//               background: active ? 'rgba(0,242,255,0.08)' : 'transparent',
//               color: active ? '#00f2ff' : '#94a3b8',
//               borderRight: active ? '2px solid #00f2ff' : '2px solid transparent',
//               boxShadow: active ? '0 0 20px rgba(0,242,255,0.08)' : 'none',
//               fontFamily: 'Space Grotesk',
//               fontSize: 13,
//               fontWeight: 500,
//               letterSpacing: '-0.01em',
//             }}>
//               <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{item.icon}</span>
//               {item.label}
//             </Link>
//           );
//         })}
//       </div>

//       {/* Bottom Section */}
//       <div style={{ padding: '16px 16px 0' }}>
//         <Link to="/route-analysis">
//           <button style={{
//             width: '100%',
//             background: 'linear-gradient(135deg, #00f2ff, #0566d9)',
//             color: '#002022',
//             fontFamily: 'Space Grotesk',
//             fontSize: 12,
//             fontWeight: 700,
//             letterSpacing: '0.05em',
//             textTransform: 'uppercase',
//             padding: '12px 16px',
//             borderRadius: 8,
//             border: 'none',
//             cursor: 'pointer',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             gap: 8,
//             boxShadow: '0 4px 24px rgba(0,242,255,0.2)',
//             transition: 'all 0.2s',
//           }}>
//             <span className="material-symbols-outlined" style={{ fontSize: 16 }}>add</span>
//             New Analysis
//           </button>
//         </Link>

//         <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
//           {[{ icon: 'help', label: 'Support' }, { icon: 'terminal', label: 'Logs' }].map(item => (
//             <button key={item.label} style={{
//               display: 'flex', alignItems: 'center', gap: 10,
//               width: '100%', padding: '8px 4px',
//               background: 'none', border: 'none', cursor: 'pointer',
//               color: '#4b5563', fontSize: 12, fontFamily: 'Space Grotesk',
//               transition: 'color 0.2s',
//             }}>
//               <span className="material-symbols-outlined" style={{ fontSize: 16 }}>{item.icon}</span>
//               {item.label}
//             </button>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }

import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/route-analysis', label: 'Route Analysis',    icon: 'alt_route' },
  { path: '/shipments',      label: 'Shipments',         icon: 'local_shipping' },
  { path: '/fleet-map',      label: 'Fleet Map',         icon: 'map' },
  { path: '/risk',           label: 'Risk Intelligence', icon: 'gpp_maybe' },
  { path: '/performance',    label: 'Performance',       icon: 'insights' },
];

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <nav style={{
      width: 240,
      height: '100vh',
      position: 'fixed',
      left: 0, top: 0,
      background: 'rgba(7,12,15,0.97)',
      backdropFilter: 'blur(24px)',
      borderRight: '1px solid rgba(255,255,255,0.06)',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 0',
      zIndex: 50,
    }}>
      {/* Logo */}
      <div style={{ padding: '0 20px', marginBottom: 36 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 34, height: 34,
            background: 'linear-gradient(135deg, rgba(0,229,255,0.2), rgba(0,119,204,0.2))',
            borderRadius: 9,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '1px solid rgba(0,229,255,0.25)',
            boxShadow: '0 0 16px rgba(0,229,255,0.15)',
          }}>
            <span className="material-symbols-outlined" style={{ color: 'var(--cyan)', fontSize: 18 }}>local_shipping</span>
          </div>
          <div>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 16, fontWeight: 800, color: 'var(--cyan)',
              letterSpacing: '-0.01em',
              textShadow: '0 0 12px rgba(0,229,255,0.4)',
            }}>Logistics Mitra</h1>
            <p style={{ fontSize: 8, color: 'var(--text-muted)', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}>
              Global Command
            </p>
          </div>
        </div>
      </div>

      {/* Divider label */}
      <p style={{ padding: '0 20px', fontSize: 8, color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 8 }}>
        Navigation
      </p>

      {/* Nav */}
      <div style={{ flex: 1, padding: '0 10px', display: 'flex', flexDirection: 'column', gap: 2 }}>
        {navItems.map(item => {
          const active = pathname === item.path || pathname.startsWith(item.path + '/');
          return (
            <Link key={item.path} to={item.path} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '10px 14px',
              borderRadius: 8,
              textDecoration: 'none',
              transition: 'all 0.2s',
              background: active ? 'rgba(0,229,255,0.08)' : 'transparent',
              color: active ? 'var(--cyan)' : 'var(--text-secondary)',
              borderLeft: active ? '2px solid var(--cyan)' : '2px solid transparent',
              boxShadow: active ? 'inset 0 0 12px rgba(0,229,255,0.04)' : 'none',
              fontFamily: 'var(--font-body)',
              fontSize: 12.5, fontWeight: active ? 600 : 400,
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18, opacity: active ? 1 : 0.6 }}>{item.icon}</span>
              {item.label}
              {active && (
                <span style={{ marginLeft: 'auto', width: 4, height: 4, borderRadius: '50%', background: 'var(--cyan)', boxShadow: '0 0 6px var(--cyan-glow)' }} />
              )}
            </Link>
          );
        })}
      </div>

      {/* CTA */}
      <div style={{ padding: '16px 10px 0' }}>
        <Link to="/route-analysis">
          <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>add</span>
            New Analysis
          </button>
        </Link>

        <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--border)' }}>
          {[{ icon: 'help_outline', label: 'Support' }, { icon: 'terminal', label: 'Logs' }].map(item => (
            <button key={item.label} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              width: '100%', padding: '8px 4px',
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--text-muted)', fontSize: 11.5,
              fontFamily: 'var(--font-body)',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text-secondary)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 15 }}>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
