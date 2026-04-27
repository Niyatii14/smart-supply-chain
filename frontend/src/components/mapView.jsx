import { useEffect, useRef } from "react";

// City coordinates database
const CITY_COORDS = {
  "delhi": [28.6139, 77.2090], "new delhi": [28.6139, 77.2090],
  "mumbai": [19.0760, 72.8777], "bombay": [19.0760, 72.8777],
  "bangalore": [12.9716, 77.5946], "bengaluru": [12.9716, 77.5946],
  "hyderabad": [17.3850, 78.4867],
  "chennai": [13.0827, 80.2707], "madras": [13.0827, 80.2707],
  "kolkata": [22.5726, 88.3639], "calcutta": [22.5726, 88.3639],
  "pune": [18.5204, 73.8567],
  "ahmedabad": [23.0225, 72.5714],
  "jaipur": [26.9124, 75.7873],
  "lucknow": [26.8467, 80.9462],
  "nagpur": [21.1458, 79.0882],
  "indore": [22.7196, 75.8577],
  "bhopal": [23.2599, 77.4126],
  "gwalior": [26.2183, 78.1828],
  "shivpuri": [25.4231, 77.6594],
  "agra": [27.1767, 78.0081],
  "surat": [21.1702, 72.8311],
  "kanpur": [26.4499, 80.3319],
  "patna": [25.5941, 85.1376],
  "bhubaneswar": [20.2961, 85.8245],
  "visakhapatnam": [17.6868, 83.2185], "vizag": [17.6868, 83.2185],
  "coimbatore": [11.0168, 76.9558],
  "kochi": [9.9312, 76.2673], "cochin": [9.9312, 76.2673],
  "chandigarh": [30.7333, 76.7794],
  "amritsar": [31.6340, 74.8723],
  "ranchi": [23.3441, 85.3096],
  "vadodara": [22.3072, 73.1812],
  "ludhiana": [30.9010, 75.8573],
  "nashik": [19.9975, 73.7898],
  "meerut": [28.9845, 77.7064],
  "varanasi": [25.3176, 82.9739],
  "dehradun": [30.3165, 78.0322],
};

function resolveCoords(input) {
  if (!input) return null;
  const latLng = input.match(/^(-?\d+\.?\d*),\s*(-?\d+\.?\d*)$/);
  if (latLng) return [parseFloat(latLng[1]), parseFloat(latLng[2])];
  const key = input.trim().toLowerCase();
  if (CITY_COORDS[key]) return CITY_COORDS[key];
  for (const [city, coords] of Object.entries(CITY_COORDS)) {
    if (key.includes(city) || city.includes(key)) return coords;
  }
  return null;
}

let leafletLoaded = false;
let leafletLoading = false;
const leafletCallbacks = [];

function loadLeaflet(cb) {
  if (leafletLoaded) { cb(); return; }
  leafletCallbacks.push(cb);
  if (leafletLoading) return;
  leafletLoading = true;

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
  document.head.appendChild(link);

  const script = document.createElement("script");
  script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
  script.onload = () => {
    leafletLoaded = true;
    leafletCallbacks.forEach((fn) => fn());
    leafletCallbacks.length = 0;
  };
  document.head.appendChild(script);
}

function generateCurve(A, M, B, steps) {
  const pts = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps, t1 = 1 - t;
    pts.push([
      t1*t1*A[0] + 2*t1*t*M[0] + t*t*B[0],
      t1*t1*A[1] + 2*t1*t*M[1] + t*t*B[1],
    ]);
  }
  return pts;
}

export default function MapView({ source, destination, triggered }) {
  const containerRef = useRef(null);
  const mapRef       = useRef(null);
  const layersRef    = useRef([]);

  useEffect(() => {
    loadLeaflet(() => {
      if (mapRef.current) return;
      const L = window.L;
      mapRef.current = L.map(containerRef.current, {
        center: [22.5, 80.0], zoom: 5,
        zoomControl: true, attributionControl: true,
      });
      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        attribution: '© <a href="https://carto.com/">CARTO</a>',
        subdomains: "abcd", maxZoom: 19,
      }).addTo(mapRef.current);
    });
    return () => { if (mapRef.current) { mapRef.current.remove(); mapRef.current = null; } };
  }, []);

  useEffect(() => {
    if (!triggered || !source || !destination) return;
    loadLeaflet(() => {
      const L = window.L;
      const map = mapRef.current;
      if (!map) return;

      layersRef.current.forEach((l) => map.removeLayer(l));
      layersRef.current = [];

      const srcCoords = resolveCoords(source);
      const dstCoords = resolveCoords(destination);
      if (!srcCoords || !dstCoords) return;

      const mid = [(srcCoords[0]+dstCoords[0])/2+1.5, (srcCoords[1]+dstCoords[1])/2];
      const altMid = [(srcCoords[0]+dstCoords[0])/2-0.5, (srcCoords[1]+dstCoords[1])/2+2.5];

      const routeLine = L.polyline(generateCurve(srcCoords, mid, dstCoords, 40), {
        color: "#3b82f6", weight: 4, opacity: 0.9, dashArray: "8 4",
      }).addTo(map);

      const altLine = L.polyline(generateCurve(srcCoords, altMid, dstCoords, 40), {
        color: "#10b981", weight: 2.5, opacity: 0.5, dashArray: "5 6",
      }).addTo(map);

      const mkIcon = (color) => L.divIcon({
        className: "",
        html: `<div style="width:14px;height:14px;border-radius:50%;background:${color};border:3px solid #070c17;box-shadow:0 0 0 2px ${color}"></div>`,
        iconSize: [14,14], iconAnchor: [7,7],
      });
      const lblIcon = (label, color) => L.divIcon({
        className: "",
        html: `<div style="background:#0c1425;border:1px solid ${color}44;color:${color};font-size:11px;font-weight:600;padding:3px 8px;border-radius:6px;white-space:nowrap;font-family:DM Sans,sans-serif;margin-top:4px">${label}</div>`,
        iconAnchor: [-4, 14],
      });

      const layers = [
        routeLine, altLine,
        L.marker(srcCoords, { icon: mkIcon("#10b981") }).addTo(map),
        L.marker(dstCoords, { icon: mkIcon("#ef4444") }).addTo(map),
        L.marker(srcCoords, { icon: lblIcon(source.split(",")[0], "#10b981") }).addTo(map),
        L.marker(dstCoords, { icon: lblIcon(destination.split(",")[0], "#ef4444") }).addTo(map),
      ];
      layersRef.current = layers;
      map.fitBounds([srcCoords, dstCoords], { padding: [50, 50] });
    });
  }, [triggered, source, destination]);

  return (
    <div style={{ position:"relative", width:"100%", height:"100%", minHeight:"300px" }}>
      <div ref={containerRef} style={{ width:"100%", height:"100%", minHeight:"300px" }} />
      {!triggered && (
        <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", pointerEvents:"none", zIndex:5, background:"rgba(7,12,23,0.55)" }}>
          <span style={{ fontSize:"26px" }}>🗺️</span>
          <span style={{ fontSize:"12px", color:"#475569", marginTop:"8px", fontFamily:"DM Sans,sans-serif" }}>Enter source & destination, then click Analyze</span>
        </div>
      )}
    </div>
  );
}