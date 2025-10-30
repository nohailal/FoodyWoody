import React from 'react';
import { Heart, Star } from 'lucide-react';

export const StatsCard = ({ icon, title, value, bgColor, children }) => {
  const IconComponent = icon;
  
  return (
    <div className={`bg-gradient-to-br ${bgColor} rounded-3xl p-6 text-white shadow-xl transform hover:scale-105 transition-all duration-300`}>
      <div className="flex items-center justify-between mb-2">
        <IconComponent className="w-8 h-8" />
        {title === 'Water Glasses' ? (
          <span className="text-3xl">💧</span>
        ) : title === 'Total Calories' ? (
          <Star className="w-6 h-6" fill="currentColor" />
        ) : (
          <Heart className="w-6 h-6" fill="currentColor" />
        )}
      </div>
      <p className="text-sm mb-1 opacity-90">{title}</p>
      <p className="text-4xl font-bold">{value}</p>
      {children}
    </div>
  );
};