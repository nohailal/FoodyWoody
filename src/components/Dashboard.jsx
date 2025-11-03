import React from 'react';
import { TrendingUp, Calendar, Sparkles } from 'lucide-react';
import { Navigation } from './Navigation';
import { StatsCard } from './StatsCard';
import { MealForm } from './MealForm';
import { MealsList } from './MealsList';

export const Dashboard = ({ currentUser, stats, waterIntake, meals, mealForm, onLogout, onAddWater, onAddMeal, onOpenSettings, onOpenAnalytics, onOpenRecipes }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100">
      <Navigation 
        currentUser={currentUser} 
        onLogout={onLogout} 
        onOpenSettings={onOpenSettings}
        onOpenAnalytics={onOpenAnalytics}
        onOpenRecipes={onOpenRecipes}
      />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <StatsCard
            icon={TrendingUp}
            title="Total Calories"
            value={stats.totalCalories}
            bgColor="from-pink-400 to-pink-500"
          />
          
          <StatsCard
            icon={Calendar}
            title="Meals Logged"
            value={stats.mealsLogged}
            bgColor="from-purple-400 to-purple-500"
          />
          
          <StatsCard
            icon={Sparkles}
            title="Water Glasses"
            value={`${waterIntake}/8`}
            bgColor="from-blue-400 to-blue-500"
          >
            <button
              onClick={onAddWater}
              className="mt-3 w-full bg-white text-blue-500 py-2 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            >
              Add Water
            </button>
          </StatsCard>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <MealForm
            mealName={mealForm.name}
            mealCalories={mealForm.calories}
            mealType={mealForm.type}
            onNameChange={mealForm.onNameChange}
            onCaloriesChange={mealForm.onCaloriesChange}
            onTypeChange={mealForm.onTypeChange}
            onSubmit={onAddMeal}
          />
          
          <MealsList meals={meals} />
        </div>
      </div>
    </div>
  );
};