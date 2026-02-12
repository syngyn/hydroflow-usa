import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Loader2 } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { hardnessData } from './MapInterface';

export default function LocationSearch({ onLocationSelect }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Calculate distance between two coordinates (Haversine formula)
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const handleSearch = async (value) => {
    setSearchTerm(value);
    
    if (value.length >= 2) {
      // First try exact matches
      let filtered = hardnessData.filter(location => 
        location.city.toLowerCase().includes(value.toLowerCase()) ||
        location.state.toLowerCase().includes(value.toLowerCase()) ||
        location.zip.includes(value)
      );

      // If searching by zip and no exact match, find nearest location
      if (filtered.length === 0 && /^\d{5}$/.test(value.trim())) {
        setIsSearching(true);
        try {
          // Use geocoding to get coordinates for the zip code
          const response = await fetch(`https://nominatim.openstreetmap.org/search?postalcode=${value}&country=US&format=json&limit=1`);
          const data = await response.json();
          
          if (data && data.length > 0) {
            const zipLat = parseFloat(data[0].lat);
            const zipLon = parseFloat(data[0].lon);
            
            // Find nearest location in our database
            const locationsWithDistance = hardnessData.map(location => ({
              ...location,
              distance: calculateDistance(zipLat, zipLon, location.lat, location.lng)
            }));
            
            // Sort by distance and take the 5 nearest
            filtered = locationsWithDistance
              .sort((a, b) => a.distance - b.distance)
              .slice(0, 5);
          }
        } catch (error) {
          console.error('Geocoding error:', error);
        } finally {
          setIsSearching(false);
        }
      }
      
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelectLocation = (location) => {
    setSearchTerm(`${location.city}, ${location.state}`);
    setSuggestions([]);
    onLocationSelect(location);
  };

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <Input
          type="text"
          placeholder="Enter city, state, or zip code..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-12 pr-4 py-6 text-lg rounded-2xl border-2 border-slate-200 focus:border-cyan-500 transition-all"
        />
      </div>

      {/* Suggestions Dropdown */}
      {(suggestions.length > 0 || isSearching) && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden z-[1001]"
        >
          {isSearching && (
            <div className="px-6 py-4 flex items-center gap-3 justify-center">
              <Loader2 className="w-5 h-5 text-cyan-500 animate-spin" />
              <span className="text-slate-600">Finding nearest location...</span>
            </div>
          )}
          {!isSearching && suggestions.length > 0 && (
            <>
          {suggestions.map((location, index) => (
            <button
              key={index}
              onClick={() => handleSelectLocation(location)}
              className="w-full px-6 py-4 text-left hover:bg-cyan-50 transition-colors flex items-center gap-3 border-b last:border-b-0"
            >
              <MapPin className="w-5 h-5 text-cyan-500" />
              <div className="flex-1">
                <div className="font-medium text-slate-900">
                  {location.city}, {location.state}
                </div>
                <div className="text-sm text-slate-500">
                  {location.zip} • Hardness: {location.hardness} mg/L
                  {location.distance && ` • ${Math.round(location.distance)} km away`}
                </div>
              </div>
            </button>
          ))}
          </>
          )}
        </motion.div>
      )}
    </div>
  );
}