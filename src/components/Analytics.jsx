import React, { useMemo } from 'react';
import { BarChart3, TrendingUp, Calendar, Award, Target, Flame } from 'lucide-react';

export const Analytics = ({ meals, waterIntake, stats, onBack }) => {
  // Calculate analytics
  const analytics = useMemo(() => {
    const mealsByType = {
      breakfast: meals.filter(m => m.type === 'breakfast').length,
      lunch: meals.filter(m => m.type === 'lunch').length,
      dinner: meals.filter(m => m.type === 'dinner').length,
      snack: meals.filter(m => m.type === 'snack').length
    };

    const caloriesByType = {
      breakfast: meals.filter(m => m.type === 'breakfast').reduce((sum, m) => sum + m.calories, 0),
      lunch: meals.filter(m => m.type === 'lunch').reduce((sum, m) => sum + m.calories, 0),
      dinner: meals.filter(m => m.type === 'dinner').reduce((sum, m) => sum + m.calories, 0),
      snack: meals.filter(m => m.type === 'snack').reduce((sum, m) => sum + m.calories, 0)
    };

    const avgCaloriesPerMeal = meals.length > 0 ? Math.round(stats.totalCalories / meals.length) : 0;
    const waterPercentage = Math.round((waterIntake / 8) * 100);

    return { mealsByType, caloriesByType, avgCaloriesPerMeal, waterPercentage };
  }, [meals, waterIntake, stats]);

  const getMealTypeEmoji = (type) => {
    switch(type) {
      case 'breakfast': return '🌅';
      case 'lunch': return '☀️';
      case 'dinner': return '🌙';
      case 'snack': return '🍪';
      default: return '🍽️';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-pink-400 to-purple-400 rounded-full p-3">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-pink-600">Analytics</h1>
                <p className="text-gray-500 text-sm">Track your progress and insights</p>
              </div>
            </div>
            <button
              onClick={onBack}
              className="bg-pink-400 text-white px-6 py-2 rounded-full hover:bg-pink-500 transition-all transform hover:scale-105"
            >
              Back to Dashboard
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl p-4">
              <Flame className="w-8 h-8 text-pink-600 mb-2" />
              <p className="text-sm text-pink-700 font-semibold">Avg Calories/Meal</p>
              <p className="text-3xl font-bold text-pink-600">{analytics.avgCaloriesPerMeal}</p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-4">
              <Calendar className="w-8 h-8 text-purple-600 mb-2" />
              <p className="text-sm text-purple-700 font-semibold">Total Meals</p>
              <p className="text-3xl font-bold text-purple-600">{stats.mealsLogged}</p>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-4">
              <Target className="w-8 h-8 text-blue-600 mb-2" />
              <p className="text-sm text-blue-700 font-semibold">Water Goal</p>
              <p className="text-3xl font-bold text-blue-600">{analytics.waterPercentage}%</p>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-4">
              <Award className="w-8 h-8 text-green-600 mb-2" />
              <p className="text-sm text-green-700 font-semibold">Streak Days</p>
              <p className="text-3xl font-bold text-green-600">{stats.streak}</p>
            </div>
          </div>

          {/* Meals by Type */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Meals by Type</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {Object.entries(analytics.mealsByType).map(([type, count]) => (
                <div key={type} className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl">{getMealTypeEmoji(type)}</span>
                    <span className="text-2xl font-bold text-pink-600">{count}</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-700 capitalize">{type}</p>
                  <p className="text-xs text-gray-500">{analytics.caloriesByType[type]} cal</p>
                </div>
              ))}
            </div>
          </div>

          {/* Calorie Distribution */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Calorie Distribution</h2>
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6">
              {Object.entries(analytics.caloriesByType).map(([type, calories]) => {
                const percentage = stats.totalCalories > 0 ? (calories / stats.totalCalories) * 100 : 0;
                return (
                  <div key={type} className="mb-4 last:mb-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span>{getMealTypeEmoji(type)}</span>
                        <span className="font-semibold text-gray-700 capitalize">{type}</span>
                      </div>
                      <span className="text-sm font-semibold text-pink-600">{calories} cal ({percentage.toFixed(0)}%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-pink-400 to-purple-400 h-full rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recent Meals */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Meals (Last 5)</h2>
            <div className="space-y-3">
              {meals.slice(-5).reverse().map((meal) => (
                <div key={meal.id} className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-800">{meal.name}</p>
                      <p className="text-sm text-gray-500">{meal.date} • {meal.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-pink-600">{meal.calories}</p>
                      <p className="text-xs text-gray-500">calories</p>
                    </div>
                  </div>
                </div>
              ))}
              {meals.length === 0 && (
                <div className="text-center py-8 text-gray-400">
                  <p>No meals logged yet!</p>
                  <p className="text-sm">Start tracking to see your analytics 📊</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};