// import { useState, useEffect } from "react";
// import "./App.css";

// import Command from "./pages/Command";
// import Shipments from "./pages/Shipments";
// import Risk from "./pages/Risk";
// import Fleet from "./pages/Fleet";

// import { predictRoute } from "./services/api";

// // Navigation
// const NAV_ITEMS = [
//   { id: "command", label: "COMMAND", icon: "⊞" },
//   { id: "fleet", label: "FLEET", icon: "🚢" },
//   { id: "logistics", label: "LOGISTICS", icon: "📍" },
//   { id: "intelligence", label: "INTELLIGENCE", icon: "📈" },
// ];

// // Clock Hook
// function useClockTick() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const id = setInterval(() => setTime(new Date()), 1000);
//     return () => clearInterval(id);
//   }, []);

//   return time.toLocaleTimeString();
// }

// export default function App() {
//   const clock = useClockTick();

//   const [activeNav, setActiveNav] = useState("command");
//   const [source, setSource] = useState("Singapore");
//   const [destination, setDestination] = useState("Rotterdam");
//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState(null);

//   // AI Call
//   const handleNewAnalysis = async () => {
//     setLoading(true);
//     try {
//       const data = await predictRoute({
//         source,
//         destination,
//         cargo_type: "general",
//       });
//       setResult(data);
//     } catch (e) {
//       console.error(e);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Correct page switch
//   function renderPage() {
//     switch (activeNav) {
//       case "command":
//         return (
//           <Command
//             source={source}
//             destination={destination}
//             setSource={setSource}
//             setDestination={setDestination}
//             onAnalyze={handleNewAnalysis}
//             result={result}
//           />
//         );

//       case "fleet":
//         return <Fleet />;

//       case "logistics":
//         return <Shipments />;

//       case "intelligence":
//         return <Risk />;

//       default:
//         return <Command />;
//     }
//   }

//   return (
//     <div className="shell">
//       {/* TOPBAR */}
//       <header className="topbar">
//         <div className="topbar-left">
//           <span className="logo-text">LOGISTICS MITRA</span>
//           <span className="clock">{clock}</span>
//         </div>

//         <div className="topbar-right">
//           <button className="icon-btn">🔔</button>
//           <button className="icon-btn">⚙</button>
//         </div>
//       </header>

//       <div className="body-layout">
//         {/* SIDEBAR */}
//         <aside className="sidebar">
//           <button
//             className="new-analysis-btn"
//             onClick={handleNewAnalysis}
//           >
//             {loading ? "Analyzing..." : "NEW ANALYSIS"}
//           </button>

//           <nav className="sidebar-nav">
//             {NAV_ITEMS.map((item) => (
//               <button
//                 key={item.id}
//                 className={`nav-item ${
//                   activeNav === item.id ? "nav-active" : ""
//                 }`}
//                 onClick={() => setActiveNav(item.id)}
//               >
//                 <span className="nav-icon">{item.icon}</span>
//                 <span>{item.label}</span>
//               </button>
//             ))}
//           </nav>
//         </aside>

//         {/* MAIN */}
//         <main className="content">
//           {renderPage()}
//         </main>
//       </div>
//     </div>
//   );
// }

// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import './App.css';
// import RouteAnalysis from './pages/RouteAnalysis';
// import Shipments     from './pages/Shipments';
// import FleetMap      from './pages/FleetMap';
// import Risk          from './pages/Risk';
// import Performance   from './pages/Performance';

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/"                index element={<Navigate to="/route-analysis" replace />} />
//         <Route path="/route-analysis"  element={<RouteAnalysis />} />
//         <Route path="/shipments"       element={<Shipments />} />
//         <Route path="/fleet-map"       element={<FleetMap />} />
//         <Route path="/risk"            element={<Risk />} />
//         <Route path="/performance"     element={<Performance />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import RouteAnalysis from './pages/RouteAnalysis';
import Shipments     from './pages/Shipments';
import FleetMap      from './pages/FleetMap';
import Risk          from './pages/Risk';
import Performance   from './pages/Performance';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"                index element={<Navigate to="/route-analysis" replace />} />
        <Route path="/route-analysis"  element={<RouteAnalysis />} />
        <Route path="/shipments"       element={<Shipments />} />
        <Route path="/fleet-map"       element={<FleetMap />} />
        <Route path="/risk"            element={<Risk />} />
        <Route path="/performance"     element={<Performance />} />
      </Routes>
    </BrowserRouter>
  );
}
