// import axios from "axios";

// // const BASE = "https://logistic-mitra.onrender.com";
// const BASE = "http://localhost:8000";

// export const predictRoute = async (data) => {
//   const res = await axios.post(`${BASE}/predict`, data);
//   return res.data;
// };

// export const getShipments = async () => {
//   const res = await axios.get(`${BASE}/shipments`);
//   return res.data;
// };

// export const getAlerts = async () => {
//   const res = await axios.get(`${BASE}/alerts`);
//   return res.data;
// };

// export const getAnalytics = async () => {
//   const res = await axios.get(`${BASE}/analytics`);
//   return res.data;
// };

// const BASE_URL = 'http://localhost:8000';

/**
 * POST /predict
 * Body: { source, destination, cargo_type }
 * Returns: { distance, eta_hours, risk_level, delay_probability, alternative_routes }
 */
// export async function predictRoute({ source, destination, cargo_type = 'General' }) {
//   const response = await fetch(`${BASE_URL}/predict`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ source, destination, cargo_type }),
//   });

//   if (!response.ok) {
//     const err = await response.text();
//     throw new Error(err || `HTTP ${response.status}`);
//   }

//   return response.json();
// }

// export async function predictRoute({ source, destination, cargo_type = 'General' }) {
//   // Pehle Node.js server try karo (Gemini AI)
//   const response = await fetch('http://localhost:3001/api/analyze-route', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ 
//       src: source, 
//       dst: destination, 
//       cargo: cargo_type 
//     }),
//   });

//   if (!response.ok) {
//     const err = await response.text();
//     throw new Error(err || `HTTP ${response.status}`);
//   }

//   const data = await response.json();
  
//   // Gemini ka response format karo UI ke liye
//   const text = data.result || '';
//   const lower = text.toLowerCase();
  
//   let risk_level = 'Low';
//   if (lower.includes('critical')) risk_level = 'Critical';
//   else if (lower.includes('high')) risk_level = 'High';
//   else if (lower.includes('medium') || lower.includes('moderate')) risk_level = 'Medium';

//   return {
//     risk_level,
//     delay_probability: risk_level === 'Critical' ? 0.9 : risk_level === 'High' ? 0.7 : risk_level === 'Medium' ? 0.4 : 0.15,
//     distance: null,
//     eta_hours: null,
//     risk_score: risk_level,
//     alternative_routes: [],
//     summary: text
//   };
// }

// /**
//  * GET /shipments
//  */
// export async function getShipments() {
//   const response = await fetch(`${BASE_URL}/shipments`);
//   if (!response.ok) throw new Error(`HTTP ${response.status}`);
//   return response.json();
// }

// /**
//  * GET /fleet
//  */
// export async function getFleet() {
//   const response = await fetch(`${BASE_URL}/fleet`);
//   if (!response.ok) throw new Error(`HTTP ${response.status}`);
//   return response.json();
// }

// /**
//  * GET /risks
//  */
// export async function getRisks() {
//   const response = await fetch(`${BASE_URL}/risks`);
//   if (!response.ok) throw new Error(`HTTP ${response.status}`);
//   return response.json();
// }

// /**
//  * GET /performance
//  */
// export async function getPerformance() {
//   const response = await fetch(`${BASE_URL}/performance`);
//   if (!response.ok) throw new Error(`HTTP ${response.status}`);
//   return response.json();
// }

const BASE_URL = 'http://localhost:8000'; // ← yeh mat chhuona

export async function predictRoute({ source, destination, cargo_type = 'General' }) {
  const [aiRes, distRes] = await Promise.allSettled([
    fetch('http://localhost:3001/api/analyze-route', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ src: source, dst: destination, cargo: cargo_type })
    }),
    fetch(`${BASE_URL}/predict`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ source, destination, cargo_type })
    })
  ])

  const aiData = aiRes.status === 'fulfilled' ? await aiRes.value.json() : {}
  const distData = distRes.status === 'fulfilled' ? await distRes.value.json() : {}

  const text = aiData.result || ''
  const lower = text.toLowerCase()
  
  let risk_level = 'Low'
  if (lower.includes('critical')) risk_level = 'Critical'
  else if (lower.includes('high')) risk_level = 'High'
  else if (lower.includes('medium') || lower.includes('moderate')) risk_level = 'Medium'

  return {
    risk_level,
    delay_probability: risk_level === 'Critical' ? 0.9 : risk_level === 'High' ? 0.7 : risk_level === 'Medium' ? 0.4 : 0.15,
    distance: distData.distance || null,
    eta_hours: distData.eta || distData.eta_hours || null,
    risk_score: risk_level,
    alternative_routes: distData.alternative_routes || [],
    summary: text
  }
}

// ── Baaki sab same ── ✅
export async function getShipments() {
  const response = await fetch(`${BASE_URL}/shipments`);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

export async function getFleet() {
  const response = await fetch(`${BASE_URL}/fleet`);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

export async function getRisks() {
  const response = await fetch(`${BASE_URL}/risks`);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

export async function getPerformance() {
  const response = await fetch(`${BASE_URL}/performance`);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}