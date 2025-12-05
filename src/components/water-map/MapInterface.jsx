import React, { useState } from 'react';
import { MapContainer, TileLayer, Circle, Popup, useMap } from 'react-leaflet';
import { motion } from 'framer-motion';
import 'leaflet/dist/leaflet.css';

// Sample water hardness data for major US cities
const hardnessData = [
  { city: 'Phoenix', state: 'AZ', zip: '85001', lat: 33.4484, lng: -112.0740, hardness: 285, level: 'very_hard' },
  { city: 'Los Angeles', state: 'CA', zip: '90001', lat: 34.0522, lng: -118.2437, hardness: 215, level: 'hard' },
  { city: 'San Francisco', state: 'CA', zip: '94102', lat: 37.7749, lng: -122.4194, hardness: 85, level: 'moderate' },
  { city: 'Seattle', state: 'WA', zip: '98101', lat: 47.6062, lng: -122.3321, hardness: 22, level: 'soft' },
  { city: 'Denver', state: 'CO', zip: '80202', lat: 39.7392, lng: -104.9903, hardness: 180, level: 'hard' },
  { city: 'Dallas', state: 'TX', zip: '75201', lat: 32.7767, lng: -96.7970, hardness: 195, level: 'hard' },
  { city: 'Houston', state: 'TX', zip: '77002', lat: 29.7604, lng: -95.3698, hardness: 140, level: 'hard' },
  { city: 'Chicago', state: 'IL', zip: '60601', lat: 41.8781, lng: -87.6298, hardness: 135, level: 'hard' },
  { city: 'New York', state: 'NY', zip: '10001', lat: 40.7128, lng: -74.0060, hardness: 65, level: 'moderate' },
  { city: 'Miami', state: 'FL', zip: '33101', lat: 25.7617, lng: -80.1918, hardness: 215, level: 'hard' },
  { city: 'Las Vegas', state: 'NV', zip: '89101', lat: 36.1699, lng: -115.1398, hardness: 278, level: 'very_hard' },
  { city: 'San Antonio', state: 'TX', zip: '78201', lat: 29.4241, lng: -98.4936, hardness: 285, level: 'very_hard' },
  { city: 'Indianapolis', state: 'IN', zip: '46201', lat: 39.7684, lng: -86.1581, hardness: 275, level: 'very_hard' },
  { city: 'Minneapolis', state: 'MN', zip: '55401', lat: 44.9778, lng: -93.2650, hardness: 165, level: 'hard' },
  { city: 'Redmond', state: 'WA', zip: '98052', lat: 47.6740, lng: -122.1215, hardness: 18, level: 'soft' }
];

const getHardnessColor = (level) => {
  const colors = {
    soft: '#10b981',
    moderate: '#fbbf24',
    hard: '#f97316',
    very_hard: '#ef4444'
  };
  return colors[level] || '#6b7280';
};

const getHardnessRadius = (hardness) => {
  return Math.max(30000, hardness * 200);
};

function MapUpdater({ center, zoom }) {
  const map = useMap();
  React.useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

export default function MapInterface({ selectedLocation, onLocationClick }) {
  const [mapCenter, setMapCenter] = useState([39.8283, -98.5795]); // Center of US
  const [mapZoom, setMapZoom] = useState(5);

  React.useEffect(() => {
    if (selectedLocation) {
      setMapCenter([selectedLocation.lat, selectedLocation.lng]);
      setMapZoom(10);
    }
  }, [selectedLocation]);

  return (
    <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
      <MapContainer
        center={mapCenter}
        zoom={mapZoom}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <MapUpdater center={mapCenter} zoom={mapZoom} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {hardnessData.map((location, index) => (
          <Circle
            key={index}
            center={[location.lat, location.lng]}
            radius={getHardnessRadius(location.hardness)}
            pathOptions={{
              fillColor: getHardnessColor(location.level),
              fillOpacity: 0.3,
              color: getHardnessColor(location.level),
              weight: 2
            }}
            eventHandlers={{
              click: () => onLocationClick(location)
            }}
          >
            <Popup>
              <div className="text-center">
                <h3 className="font-bold text-slate-900">{location.city}, {location.state}</h3>
                <p className="text-sm text-slate-600">Hardness: {location.hardness} mg/L</p>
                <p className="text-xs text-slate-500 capitalize">{location.level.replace('_', ' ')}</p>
              </div>
            </Popup>
          </Circle>
        ))}
      </MapContainer>

      {/* Legend */}
      <div className="absolute bottom-6 right-6 bg-white rounded-xl shadow-lg p-4 z-[1000]">
        <h4 className="font-semibold text-slate-900 mb-3 text-sm">Water Hardness</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500" />
            <span className="text-xs text-slate-600">Soft (0-60)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-amber-400" />
            <span className="text-xs text-slate-600">Moderate (61-120)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-orange-500" />
            <span className="text-xs text-slate-600">Hard (121-180)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-red-500" />
            <span className="text-xs text-slate-600">Very Hard (180+)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export { hardnessData };