import React from 'react';
import { Salad, Cookie } from 'lucide-react';
import { MealItem } from './MealItem';

export const MealsList = ({ meals }) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-6">
      <h2 className="text-2xl font-bold text-pink-600 mb-4 flex items-center gap-2">
        <Salad className="w-6 h-6" />
        Today's Meals
      </h2>
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {meals.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            <Cookie className="w-16 h-16 mx-auto mb-2 opacity-50" />
            <p>No meals logged yet!</p>
            <p className="text-sm">Start tracking your yummy food! 🍓</p>
          </div>
        ) : (
          meals.map((meal) => <MealItem key={meal.id} meal={meal} />)
        )}
      </div>
    </div>
  );
};