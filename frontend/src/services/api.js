import axios from "axios";

const BASE = "http://127.0.0.1:8000";

export const predictRoute = async (data) => {
  const res = await axios.post(`${BASE}/predict`, data);
  return res.data;
};

export const getShipments = async () => {
  const res = await axios.get(`${BASE}/shipments`);
  return res.data;
};

export const getAlerts = async () => {
  const res = await axios.get(`${BASE}/alerts`);
  return res.data;
};

export const getAnalytics = async () => {
  const res = await axios.get(`${BASE}/analytics`);
  return res.data;
};