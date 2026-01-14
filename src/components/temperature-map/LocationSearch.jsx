import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LocationSearch({ type = 'temperature' }) {
  const [zipCode, setZipCode] = useState('');

  const handleSearch = () => {
    if (zipCode.length === 5) {
      alert(`Searching for ${type} data near ZIP code: ${zipCode}`);
    } else {
      alert('Please enter a valid 5-digit ZIP code');
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
      <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
        <Search className="w-5 h-5 text-orange-600" />
        Find the Closest Location
      </h3>
      <div className="flex gap-3">
        <Input
          type="text"
          placeholder="Enter 5-digit ZIP code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          className="rounded-xl"
          maxLength={5}
        />
        <Button 
          onClick={handleSearch}
          className="bg-orange-600 hover:bg-orange-700 text-white rounded-xl px-6"
        >
          Go
        </Button>
      </div>
      <p className="text-xs text-slate-500 mt-2">
        Enter your ZIP code to find the nearest groundwater temperature data
      </p>
    </div>
  );
}