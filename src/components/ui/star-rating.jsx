import React from 'react';
import { Star } from 'lucide-react';

export function StarRating({ rating, size = 'w-4 h-4', showNumber = false }) {
  const fullStars = Math.floor(rating);
  const partialStar = rating % 1;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="flex items-center gap-1">
      {/* Full stars */}
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className={`${size} text-amber-400 fill-amber-400`} />
      ))}
      
      {/* Partial star */}
      {partialStar > 0 && (
        <div className="relative">
          <Star className={`${size} text-slate-200 fill-slate-200`} />
          <div 
            className="absolute top-0 left-0 overflow-hidden"
            style={{ width: `${partialStar * 100}%` }}
          >
            <Star className={`${size} text-amber-400 fill-amber-400`} />
          </div>
        </div>
      )}
      
      {/* Empty stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className={`${size} text-slate-200 fill-slate-200`} />
      ))}
      
      {showNumber && (
        <span className="text-sm font-medium text-slate-700 ml-1">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}