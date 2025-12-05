import React, { useState } from 'react';
import { MapContainer, TileLayer, Circle, Popup, useMap } from 'react-leaflet';
import { motion } from 'framer-motion';
import 'leaflet/dist/leaflet.css';

// Comprehensive water hardness data from all state water hardness reports
const hardnessData = [
  // California cities
  { city: 'Anaheim', state: 'CA', zip: '92804', lat: 33.8366, lng: -117.9143, hardness: 127, level: 'hard' },
  { city: 'Bakersfield', state: 'CA', zip: '93307', lat: 35.3733, lng: -119.0187, hardness: 80, level: 'moderate' },
  { city: 'Burbank', state: 'CA', zip: '91501', lat: 34.1808, lng: -118.3090, hardness: 271, level: 'very_hard' },
  { city: 'Corona', state: 'CA', zip: '92882', lat: 33.8753, lng: -117.5664, hardness: 353, level: 'very_hard' },
  { city: 'Fresno', state: 'CA', zip: '93722', lat: 36.7378, lng: -119.7871, hardness: 123, level: 'hard' },
  { city: 'Fullerton', state: 'CA', zip: '92833', lat: 33.8704, lng: -117.9242, hardness: 254, level: 'very_hard' },
  { city: 'Glendale', state: 'CA', zip: '91205', lat: 34.1425, lng: -118.2551, hardness: 259, level: 'very_hard' },
  { city: 'Huntington Beach', state: 'CA', zip: '92647', lat: 33.6603, lng: -117.9992, hardness: 240, level: 'very_hard' },
  { city: 'Inglewood', state: 'CA', zip: '90301', lat: 33.9617, lng: -118.3531, hardness: 293, level: 'very_hard' },
  { city: 'Irvine', state: 'CA', zip: '92620', lat: 33.6846, lng: -117.8265, hardness: 152, level: 'hard' },
  { city: 'Long Beach', state: 'CA', zip: '90805', lat: 33.7701, lng: -118.1937, hardness: 137, level: 'hard' },
  { city: 'Los Angeles', state: 'CA', zip: '90011', lat: 34.0522, lng: -118.2437, hardness: 127, level: 'hard' },
  { city: 'Mecca', state: 'CA', zip: '92254', lat: 33.5731, lng: -116.0772, hardness: 393, level: 'very_hard' },
  { city: 'Modesto', state: 'CA', zip: '95355', lat: 37.6391, lng: -120.9969, hardness: 224, level: 'very_hard' },
  { city: 'Newport Beach', state: 'CA', zip: '92603', lat: 33.6189, lng: -117.9289, hardness: 274, level: 'very_hard' },
  { city: 'Oakland', state: 'CA', zip: '94601', lat: 37.8044, lng: -122.2712, hardness: 140, level: 'hard' },
  { city: 'Oceanside', state: 'CA', zip: '92057', lat: 33.1959, lng: -117.3795, hardness: 168, level: 'hard' },
  { city: 'Oxnard', state: 'CA', zip: '93033', lat: 34.1975, lng: -119.1771, hardness: 285, level: 'very_hard' },
  { city: 'Palm Desert', state: 'CA', zip: '92210', lat: 33.7222, lng: -116.3745, hardness: 361, level: 'very_hard' },
  { city: 'Pasadena', state: 'CA', zip: '91104', lat: 34.1478, lng: -118.1445, hardness: 255, level: 'very_hard' },
  { city: 'Redding', state: 'CA', zip: '96003', lat: 40.5865, lng: -122.3917, hardness: 31, level: 'soft' },
  { city: 'Redondo Beach', state: 'CA', zip: '90277', lat: 33.8492, lng: -118.3884, hardness: 370, level: 'very_hard' },
  { city: 'Riverside', state: 'CA', zip: '92503', lat: 33.9533, lng: -117.3962, hardness: 71, level: 'moderate' },
  { city: 'Sacramento', state: 'CA', zip: '95823', lat: 38.5816, lng: -121.4944, hardness: 150, level: 'hard' },
  { city: 'San Bernardino', state: 'CA', zip: '92407', lat: 34.1083, lng: -117.2898, hardness: 249, level: 'very_hard' },
  { city: 'San Diego', state: 'CA', zip: '92154', lat: 32.7157, lng: -117.1611, hardness: 241, level: 'very_hard' },
  { city: 'San Francisco', state: 'CA', zip: '94112', lat: 37.7749, lng: -122.4194, hardness: 47, level: 'soft' },
  { city: 'San Jose', state: 'CA', zip: '95123', lat: 37.3382, lng: -121.8863, hardness: 132, level: 'hard' },
  { city: 'Santa Barbara', state: 'CA', zip: '93101', lat: 34.4208, lng: -119.6982, hardness: 391, level: 'very_hard' },
  { city: 'Santa Maria', state: 'CA', zip: '93453', lat: 34.9530, lng: -120.4357, hardness: 235, level: 'very_hard' },
  { city: 'Stockton', state: 'CA', zip: '95206', lat: 37.9577, lng: -121.2908, hardness: 194, level: 'hard' },
  { city: 'Sunnyvale', state: 'CA', zip: '94087', lat: 37.3688, lng: -122.0363, hardness: 300, level: 'very_hard' },
  { city: 'Ventura', state: 'CA', zip: '93001', lat: 34.2746, lng: -119.2290, hardness: 666, level: 'very_hard' },
  
  // Texas cities
  { city: 'Amarillo', state: 'TX', zip: '79101', lat: 35.2220, lng: -101.8313, hardness: 248, level: 'very_hard' },
  { city: 'Abilene', state: 'TX', zip: '79601', lat: 32.4487, lng: -99.7331, hardness: 284, level: 'very_hard' },
  { city: 'Arlington', state: 'TX', zip: '76001', lat: 32.7357, lng: -97.1081, hardness: 94, level: 'moderate' },
  { city: 'Austin', state: 'TX', zip: '78703', lat: 30.2672, lng: -97.7431, hardness: 184, level: 'hard' },
  { city: 'Beaumont', state: 'TX', zip: '77701', lat: 30.0802, lng: -94.1266, hardness: 31, level: 'soft' },
  { city: 'Corpus Christi', state: 'TX', zip: '78401', lat: 27.8006, lng: -97.3964, hardness: 227, level: 'very_hard' },
  { city: 'Dallas', state: 'TX', zip: '75201', lat: 32.7767, lng: -96.7970, hardness: 140, level: 'hard' },
  { city: 'El Paso', state: 'TX', zip: '79901', lat: 31.7619, lng: -106.4850, hardness: 119, level: 'hard' },
  { city: 'Fort Worth', state: 'TX', zip: '76102', lat: 32.7555, lng: -97.3308, hardness: 140, level: 'hard' },
  { city: 'Galveston', state: 'TX', zip: '77550', lat: 29.3013, lng: -94.7977, hardness: 200, level: 'hard' },
  { city: 'Houston', state: 'TX', zip: '77002', lat: 29.7604, lng: -95.3698, hardness: 135, level: 'hard' },
  { city: 'Laredo', state: 'TX', zip: '78040', lat: 27.5306, lng: -99.4803, hardness: 260, level: 'very_hard' },
  { city: 'Lubbock', state: 'TX', zip: '79401', lat: 33.5779, lng: -101.8552, hardness: 243, level: 'very_hard' },
  { city: 'McAllen', state: 'TX', zip: '78501', lat: 26.2034, lng: -98.2300, hardness: 243, level: 'very_hard' },
  { city: 'Midland', state: 'TX', zip: '79701', lat: 31.9973, lng: -102.0779, hardness: 500, level: 'very_hard' },
  { city: 'Odessa', state: 'TX', zip: '79761', lat: 31.8457, lng: -102.3676, hardness: 360, level: 'very_hard' },
  { city: 'Plano', state: 'TX', zip: '75023', lat: 33.0198, lng: -96.6989, hardness: 146, level: 'hard' },
  { city: 'San Antonio', state: 'TX', zip: '78201', lat: 29.4241, lng: -98.4936, hardness: 357, level: 'very_hard' },
  { city: 'San Angelo', state: 'TX', zip: '76901', lat: 31.4638, lng: -100.4370, hardness: 428, level: 'very_hard' },
  { city: 'Waco', state: 'TX', zip: '76701', lat: 31.5493, lng: -97.1467, hardness: 41, level: 'soft' },
  
  // Arizona cities
  { city: 'Bullhead City', state: 'AZ', zip: '86429', lat: 35.1478, lng: -114.5683, hardness: 615, level: 'very_hard' },
  { city: 'Chandler', state: 'AZ', zip: '85225', lat: 33.3062, lng: -111.8413, hardness: 292, level: 'very_hard' },
  { city: 'Gilbert', state: 'AZ', zip: '85233', lat: 33.3528, lng: -111.7890, hardness: 215, level: 'hard' },
  { city: 'Glendale', state: 'AZ', zip: '85301', lat: 33.5387, lng: -112.1860, hardness: 291, level: 'very_hard' },
  { city: 'Lake Havasu City', state: 'AZ', zip: '86403', lat: 34.4839, lng: -114.3224, hardness: 323, level: 'very_hard' },
  { city: 'Mesa', state: 'AZ', zip: '85204', lat: 33.4152, lng: -111.8315, hardness: 292, level: 'very_hard' },
  { city: 'Phoenix', state: 'AZ', zip: '85003', lat: 33.4484, lng: -112.0740, hardness: 225, level: 'very_hard' },
  { city: 'Scottsdale', state: 'AZ', zip: '85254', lat: 33.4942, lng: -111.9261, hardness: 343, level: 'very_hard' },
  { city: 'Tempe', state: 'AZ', zip: '85281', lat: 33.4255, lng: -111.9400, hardness: 210, level: 'hard' },
  { city: 'Tucson', state: 'AZ', zip: '85746', lat: 32.2226, lng: -110.9747, hardness: 211, level: 'hard' },
  { city: 'Yuma', state: 'AZ', zip: '85364', lat: 32.6927, lng: -114.6277, hardness: 370, level: 'very_hard' },
  
  // Florida cities
  { city: 'Boca Raton', state: 'FL', zip: '33428', lat: 26.3683, lng: -80.1289, hardness: 189, level: 'hard' },
  { city: 'Cape Coral', state: 'FL', zip: '33904', lat: 26.5629, lng: -81.9495, hardness: 85, level: 'moderate' },
  { city: 'Clearwater', state: 'FL', zip: '33755', lat: 27.9659, lng: -82.8001, hardness: 178, level: 'hard' },
  { city: 'Coral Springs', state: 'FL', zip: '33065', lat: 26.2709, lng: -80.2706, hardness: 298, level: 'very_hard' },
  { city: 'Fort Lauderdale', state: 'FL', zip: '33309', lat: 26.1224, lng: -80.1373, hardness: 157, level: 'hard' },
  { city: 'Gainesville', state: 'FL', zip: '32601', lat: 29.6516, lng: -82.3248, hardness: 140, level: 'hard' },
  { city: 'Hialeah', state: 'FL', zip: '33010', lat: 25.8576, lng: -80.2781, hardness: 290, level: 'very_hard' },
  { city: 'Jacksonville', state: 'FL', zip: '32202', lat: 30.3322, lng: -81.6557, hardness: 154, level: 'hard' },
  { city: 'Lakeland', state: 'FL', zip: '33801', lat: 28.0395, lng: -81.9498, hardness: 180, level: 'hard' },
  { city: 'Miami', state: 'FL', zip: '33101', lat: 25.7617, lng: -80.1918, hardness: 219, level: 'hard' },
  { city: 'Orlando', state: 'FL', zip: '32801', lat: 28.5383, lng: -81.3792, hardness: 129, level: 'hard' },
  { city: 'St. Petersburg', state: 'FL', zip: '33701', lat: 27.7676, lng: -82.6403, hardness: 161, level: 'hard' },
  { city: 'Tampa', state: 'FL', zip: '33602', lat: 27.9506, lng: -82.4572, hardness: 220, level: 'very_hard' },
  { city: 'Tallahassee', state: 'FL', zip: '32301', lat: 30.4383, lng: -84.2807, hardness: 126, level: 'hard' },
  { city: 'West Palm Beach', state: 'FL', zip: '33401', lat: 26.7153, lng: -80.0534, hardness: 317, level: 'very_hard' },
  
  // Washington cities
  { city: 'Seattle', state: 'WA', zip: '98101', lat: 47.6062, lng: -122.3321, hardness: 22, level: 'soft' },
  { city: 'Spokane', state: 'WA', zip: '99201', lat: 47.6588, lng: -117.4260, hardness: 218, level: 'very_hard' },
  { city: 'Tacoma', state: 'WA', zip: '98402', lat: 47.2529, lng: -122.4443, hardness: 15, level: 'soft' },
  { city: 'Vancouver', state: 'WA', zip: '98660', lat: 45.6387, lng: -122.6615, hardness: 96, level: 'moderate' },
  { city: 'Bellevue', state: 'WA', zip: '98004', lat: 47.6101, lng: -122.2015, hardness: 25, level: 'soft' },
  { city: 'Everett', state: 'WA', zip: '98201', lat: 47.9790, lng: -122.2021, hardness: 12, level: 'soft' },
  { city: 'Redmond', state: 'WA', zip: '98052', lat: 47.6740, lng: -122.1215, hardness: 18, level: 'soft' },
  { city: 'Olympia', state: 'WA', zip: '98501', lat: 47.0379, lng: -122.9007, hardness: 83, level: 'moderate' },
  { city: 'Bellingham', state: 'WA', zip: '98225', lat: 48.7519, lng: -122.4787, hardness: 24, level: 'soft' },
  { city: 'Yakima', state: 'WA', zip: '98901', lat: 46.6021, lng: -120.5059, hardness: 87, level: 'moderate' },
  
  // New York cities
  { city: 'New York City', state: 'NY', zip: '10001', lat: 40.7128, lng: -74.0060, hardness: 65, level: 'moderate' },
  { city: 'Buffalo', state: 'NY', zip: '14201', lat: 42.8864, lng: -78.8784, hardness: 135, level: 'hard' },
  { city: 'Rochester', state: 'NY', zip: '14604', lat: 43.1566, lng: -77.6088, hardness: 118, level: 'hard' },
  { city: 'Albany', state: 'NY', zip: '12202', lat: 42.6526, lng: -73.7562, hardness: 54, level: 'soft' },
  { city: 'Syracuse', state: 'NY', zip: '13202', lat: 43.0481, lng: -76.1474, hardness: 120, level: 'hard' },
  { city: 'Yonkers', state: 'NY', zip: '10701', lat: 40.9312, lng: -73.8987, hardness: 100, level: 'moderate' },
  
  // Pennsylvania cities
  { city: 'Philadelphia', state: 'PA', zip: '19120', lat: 39.9526, lng: -75.1652, hardness: 149, level: 'hard' },
  { city: 'Pittsburgh', state: 'PA', zip: '15237', lat: 40.4406, lng: -79.9959, hardness: 136, level: 'hard' },
  { city: 'Allentown', state: 'PA', zip: '18102', lat: 40.6023, lng: -75.4714, hardness: 176, level: 'hard' },
  { city: 'Erie', state: 'PA', zip: '16509', lat: 42.1292, lng: -80.0851, hardness: 160, level: 'hard' },
  { city: 'Reading', state: 'PA', zip: '19606', lat: 40.3356, lng: -75.9269, hardness: 265, level: 'very_hard' },
  { city: 'Scranton', state: 'PA', zip: '18505', lat: 41.4090, lng: -75.6624, hardness: 280, level: 'very_hard' },
  { city: 'Harrisburg', state: 'PA', zip: '17112', lat: 40.2732, lng: -76.8867, hardness: 160, level: 'hard' },
  
  // Michigan cities
  { city: 'Detroit', state: 'MI', zip: '48201', lat: 42.3314, lng: -83.0458, hardness: 104, level: 'moderate' },
  { city: 'Grand Rapids', state: 'MI', zip: '49503', lat: 42.9634, lng: -85.6681, hardness: 380, level: 'very_hard' },
  { city: 'Ann Arbor', state: 'MI', zip: '48103', lat: 42.2808, lng: -83.7430, hardness: 129, level: 'hard' },
  { city: 'Flint', state: 'MI', zip: '48502', lat: 43.0125, lng: -83.6875, hardness: 242, level: 'very_hard' },
  { city: 'Lansing', state: 'MI', zip: '48906', lat: 42.7325, lng: -84.5555, hardness: 99, level: 'moderate' },
  { city: 'Kalamazoo', state: 'MI', zip: '49001', lat: 42.2917, lng: -85.5872, hardness: 115, level: 'hard' },
  
  // Other major cities
  { city: 'Denver', state: 'CO', zip: '80202', lat: 39.7392, lng: -104.9903, hardness: 180, level: 'hard' },
  { city: 'Chicago', state: 'IL', zip: '60601', lat: 41.8781, lng: -87.6298, hardness: 135, level: 'hard' },
  { city: 'Las Vegas', state: 'NV', zip: '89101', lat: 36.1699, lng: -115.1398, hardness: 278, level: 'very_hard' },
  { city: 'Indianapolis', state: 'IN', zip: '46201', lat: 39.7684, lng: -86.1581, hardness: 275, level: 'very_hard' },
  { city: 'Minneapolis', state: 'MN', zip: '55401', lat: 44.9778, lng: -93.2650, hardness: 165, level: 'hard' },
  { city: 'Portland', state: 'OR', zip: '97201', lat: 45.5152, lng: -122.6784, hardness: 33, level: 'soft' },
  { city: 'Atlanta', state: 'GA', zip: '30303', lat: 33.7490, lng: -84.3880, hardness: 65, level: 'moderate' },
  { city: 'Boston', state: 'MA', zip: '02101', lat: 42.3601, lng: -71.0589, hardness: 8, level: 'soft' },
  { city: 'Baltimore', state: 'MD', zip: '21201', lat: 39.2904, lng: -76.6122, hardness: 110, level: 'hard' },
  { city: 'Columbus', state: 'OH', zip: '43215', lat: 39.9612, lng: -82.9988, hardness: 375, level: 'very_hard' },
  { city: 'Milwaukee', state: 'WI', zip: '53202', lat: 43.0389, lng: -87.9065, hardness: 125, level: 'hard' },
  { city: 'Nashville', state: 'TN', zip: '37201', lat: 36.1627, lng: -86.7816, hardness: 75, level: 'moderate' },
  { city: 'Louisville', state: 'KY', zip: '40202', lat: 38.2527, lng: -85.7585, hardness: 172, level: 'hard' },
  { city: 'Charlotte', state: 'NC', zip: '28202', lat: 35.2271, lng: -80.8431, hardness: 42, level: 'soft' },
  { city: 'Albuquerque', state: 'NM', zip: '87102', lat: 35.0844, lng: -106.6504, hardness: 126, level: 'hard' },
  { city: 'Salt Lake City', state: 'UT', zip: '84101', lat: 40.7608, lng: -111.8910, hardness: 278, level: 'very_hard' }
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