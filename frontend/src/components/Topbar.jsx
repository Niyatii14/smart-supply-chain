// import { useState, useEffect } from 'react';

// export default function Topbar({ pageTitle = 'Operations Dashboard' }) {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const t = setInterval(() => setTime(new Date()), 1000);
//     return () => clearInterval(t);
//   }, []);

//   const utc = time.toISOString().slice(11, 19) + ' UTC';

//   return (
//     <header style={{
//       height: 64,
//       position: 'fixed',
//       top: 0,
//       right: 0,
//       left: 256,
//       background: 'rgba(11, 14, 20, 0.85)',
//       backdropFilter: 'blur(16px)',
//       borderBottom: '1px solid rgba(255,255,255,0.08)',
//       zIndex: 40,
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       padding: '0 32px',
//     }}>
//       {/* Left: Search + Status */}
//       <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
//         <div style={{ position: 'relative' }}>
//           <span className="material-symbols-outlined" style={{
//             position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)',
//             color: '#6b7280', fontSize: 16,
//           }}>search</span>
//           <input
//             type="text"
//             placeholder="Track shipment ID or Route..."
//             style={{
//               background: 'rgba(8,15,16,0.8)',
//               border: '1px solid rgba(58,73,75,0.8)',
//               borderRadius: 9999,
//               padding: '7px 16px 7px 38px',
//               fontSize: 12,
//               color: '#dce4e4',
//               width: 320,
//               outline: 'none',
//               fontFamily: 'Inter',
//               transition: 'border-color 0.2s',
//             }}
//             onFocus={e => e.target.style.borderColor = 'rgba(0,242,255,0.5)'}
//             onBlur={e => e.target.style.borderColor = 'rgba(58,73,75,0.8)'}
//           />
//         </div>
//         <div style={{ width: 1, height: 20, background: 'rgba(255,255,255,0.08)' }} />
//         <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
//           <span style={{
//             width: 8, height: 8, borderRadius: '50%',
//             background: '#00f2ff',
//             boxShadow: '0 0 8px rgba(0,242,255,0.8)',
//             display: 'inline-block',
//             animation: 'pulse 2s infinite',
//           }} />
//           <span style={{
//             fontFamily: 'Space Grotesk', fontSize: 10, fontWeight: 700,
//             letterSpacing: '0.1em', textTransform: 'uppercase', color: '#00f2ff',
//           }}>System Status: Nominal</span>
//         </div>
//         <div style={{ color: '#4b5563', fontSize: 11, fontFamily: 'Space Grotesk', letterSpacing: '0.05em' }}>
//           {utc}
//         </div>
//       </div>

//       {/* Right: Actions + Profile */}
//       <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
//         {['notifications', 'settings'].map(icon => (
//           <button key={icon} style={{
//             width: 36, height: 36, borderRadius: '50%',
//             background: 'none', border: 'none', cursor: 'pointer',
//             display: 'flex', alignItems: 'center', justifyContent: 'center',
//             color: '#6b7280', transition: 'all 0.2s', position: 'relative',
//           }}>
//             <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{icon}</span>
//             {icon === 'notifications' && (
//               <span style={{
//                 position: 'absolute', top: 4, right: 4,
//                 width: 8, height: 8, borderRadius: '50%',
//                 background: '#ffb4ab', border: '1.5px solid #080f10',
//               }} />
//             )}
//           </button>
//         ))}

//         <div style={{ width: 1, height: 20, background: 'rgba(255,255,255,0.08)' }} />

//         <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
//           <div style={{ textAlign: 'right' }}>
//             <p style={{
//               fontFamily: 'Space Grotesk', fontSize: 11, fontWeight: 700,
//               color: '#fff', letterSpacing: '-0.01em',
//             }}>R. Sharma</p>
//             <p style={{ fontSize: 9, color: '#4b5563', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
//               Fleet Manager
//             </p>
//           </div>
//           <div style={{
//             width: 36, height: 36, borderRadius: '50%',
//             background: 'linear-gradient(135deg, #00f2ff22, #0566d922)',
//             border: '1.5px solid rgba(0,242,255,0.4)',
//             display: 'flex', alignItems: 'center', justifyContent: 'center',
//             fontFamily: 'Space Grotesk', fontSize: 13, fontWeight: 700, color: '#00f2ff',
//           }}>RS</div>
//         </div>
//       </div>
//     </header>
//   );
// }

import { useState, useEffect } from 'react';

export default function Topbar() {
  const [time, setTime] = useState(new Date());
  const [searchVal, setSearchVal] = useState('');

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const utc = time.toISOString().slice(11, 19) + ' UTC';

  return (
    <header style={{
      height: 60,
      position: 'fixed',
      top: 0, right: 0, left: 240,
      background: 'rgba(7,12,15,0.9)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      zIndex: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
    }}>
      {/* Left */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <div style={{ position: 'relative' }}>
          <span className="material-symbols-outlined" style={{
            position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)',
            color: 'var(--text-muted)', fontSize: 15,
          }}>search</span>
          <input
            type="text"
            value={searchVal}
            onChange={e => setSearchVal(e.target.value)}
            placeholder="Track shipment ID or route..."
            className="input-field"
            style={{ paddingLeft: 32, width: 280, borderRadius: 999, fontSize: 12, height: 36 }}
          />
        </div>

        <div style={{ height: 20, width: 1, background: 'rgba(255,255,255,0.06)' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{
            width: 7, height: 7, borderRadius: '50%',
            background: 'var(--cyan)',
            boxShadow: '0 0 8px var(--cyan-glow)',
            display: 'inline-block',
            animation: 'pulse 2s infinite',
          }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', color: 'var(--cyan)' }}>
            SYSTEM STATUS: NOMINAL
          </span>
        </div>

        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
          {utc}
        </span>
      </div>

      {/* Right */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {['notifications', 'settings'].map(icon => (
          <button key={icon} style={{
            width: 34, height: 34, borderRadius: '50%',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid var(--border)',
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--text-secondary)',
            transition: 'all 0.2s',
            position: 'relative',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.color = 'var(--cyan)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{icon}</span>
            {icon === 'notifications' && (
              <span style={{
                position: 'absolute', top: 6, right: 6,
                width: 6, height: 6, borderRadius: '50%',
                background: 'var(--rose)', border: '1.5px solid var(--bg-deep)',
              }} />
            )}
          </button>
        ))}

        <div style={{ height: 20, width: 1, background: 'rgba(255,255,255,0.06)' }} />

        {/* Anonymous avatar */}
        <div style={{
          width: 34, height: 34, borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(0,229,255,0.15), rgba(0,119,204,0.15))',
          border: '1px solid rgba(0,229,255,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,229,255,0.5)'; e.currentTarget.style.boxShadow = '0 0 12px rgba(0,229,255,0.2)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,229,255,0.25)'; e.currentTarget.style.boxShadow = 'none'; }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 18, color: 'var(--cyan)' }}>person</span>
        </div>
      </div>
    </header>
  );
}
