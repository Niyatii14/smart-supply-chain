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

const BASE_URL = 'http://localhost:8000';

/**
 * POST /predict
 * Body: { source, destination, cargo_type }
 * Returns: { distance, eta_hours, risk_level, delay_probability, alternative_routes }
 */
export async function predictRoute({ source, destination, cargo_type = 'General' }) {
  const response = await fetch(`${BASE_URL}/predict`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ source, destination, cargo_type }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(err || `HTTP ${response.status}`);
  }

  return response.json();
}

/**
 * GET /shipments
 */
export async function getShipments() {
  const response = await fetch(`${BASE_URL}/shipments`);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

/**
 * GET /fleet
 */
export async function getFleet() {
  const response = await fetch(`${BASE_URL}/fleet`);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

/**
 * GET /risks
 */
export async function getRisks() {
  const response = await fetch(`${BASE_URL}/risks`);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

/**
 * GET /performance
 */
export async function getPerformance() {
  const response = await fetch(`${BASE_URL}/performance`);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}
