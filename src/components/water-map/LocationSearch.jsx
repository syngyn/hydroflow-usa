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

  const handleSearch = (value) => {
    setSearchTerm(value);
    
    if (value.length >= 2) {
      const filtered = hardnessData.filter(location => 
        location.city.toLowerCase().includes(value.toLowerCase()) ||
        location.state.toLowerCase().includes(value.toLowerCase()) ||
        location.zip.includes(value)
      );
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
      {suggestions.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden z-50"
        >
          {suggestions.map((location, index) => (
            <button
              key={index}
              onClick={() => handleSelectLocation(location)}
              className="w-full px-6 py-4 text-left hover:bg-cyan-50 transition-colors flex items-center gap-3 border-b last:border-b-0"
            >
              <MapPin className="w-5 h-5 text-cyan-500" />
              <div>
                <div className="font-medium text-slate-900">
                  {location.city}, {location.state}
                </div>
                <div className="text-sm text-slate-500">
                  {location.zip} • Hardness: {location.hardness} mg/L
                </div>
              </div>
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}