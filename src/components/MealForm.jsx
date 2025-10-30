import React from 'react';
import { Apple, Sparkles } from 'lucide-react';

export const MealForm = ({ mealName, mealCalories, mealType, onNameChange, onCaloriesChange, onTypeChange, onSubmit }) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-6">
      <h2 className="text-2xl font-bold text-pink-600 mb-4 flex items-center gap-2">
        <Apple className="w-6 h-6" />
        Log Your Meal
      </h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Meal name (e.g., Strawberry Salad)"
          value={mealName}
          onChange={(e) => onNameChange(e.target.value)}
          className="w-full px-4 py-3 border-2 border-pink-200 rounded-full focus:border-pink-400 focus:outline-none transition-all"
        />
        <input
          type="number"
          placeholder="Calories"
          value={mealCalories}
          onChange={(e) => onCaloriesChange(e.target.value)}
          className="w-full px-4 py-3 border-2 border-pink-200 rounded-full focus:border-pink-400 focus:outline-none transition-all"
        />
        <select
          value={mealType}
          onChange={(e) => onTypeChange(e.target.value)}
          className="w-full px-4 py-3 border-2 border-pink-200 rounded-full focus:border-pink-400 focus:outline-none transition-all bg-white"
        >
          <option value="breakfast">🌅 Breakfast</option>
          <option value="lunch">☀️ Lunch</option>
          <option value="dinner">🌙 Dinner</option>
          <option value="snack">🍪 Snack</option>
        </select>
        <button
          onClick={onSubmit}
          className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
        >
          <Sparkles className="w-5 h-5" />
          Add Meal
        </button>
      </div>
    </div>
  );
};