import React from 'react';
import { Coffee, Salad, Apple, Cookie } from 'lucide-react';

export const MealItem = ({ meal }) => {
  const getMealIcon = (type) => {
    switch(type) {
      case 'breakfast': return <Coffee className="w-5 h-5" />;
      case 'lunch': return <Salad className="w-5 h-5" />;
      case 'dinner': return <Apple className="w-5 h-5" />;
      default: return <Cookie className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-2xl hover:shadow-md transition-all transform hover:scale-102">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-pink-200 p-2 rounded-full">
            {getMealIcon(meal.type)}
          </div>
          <div>
            <p className="font-semibold text-gray-800">{meal.name}</p>
            <p className="text-sm text-gray-500 capitalize">{meal.type}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-bold text-pink-600">{meal.calories}</p>
          <p className="text-xs text-gray-500">cal</p>
        </div>
      </div>
    </div>
  );
};