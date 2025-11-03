import React, { useState } from 'react';
import { ChefHat, Heart, Clock, Flame, Search } from 'lucide-react';

export const Recipes = ({ onBack, onAddMeal }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const recipes = [
    {
      id: 1,
      name: 'Strawberry Smoothie Bowl',
      category: 'breakfast',
      calories: 280,
      time: '10 min',
      difficulty: 'Easy',
      image: '🍓',
      ingredients: ['Strawberries', 'Banana', 'Greek Yogurt', 'Granola', 'Honey'],
      instructions: 'Blend frozen strawberries with banana and yogurt. Top with granola and fresh berries.'
    },
    {
      id: 2,
      name: 'Avocado Toast',
      category: 'breakfast',
      calories: 320,
      time: '5 min',
      difficulty: 'Easy',
      image: '🥑',
      ingredients: ['Whole grain bread', 'Avocado', 'Egg', 'Cherry tomatoes', 'Salt & pepper'],
      instructions: 'Toast bread, mash avocado on top, add a fried egg and sliced tomatoes.'
    },
    {
      id: 3,
      name: 'Greek Salad',
      category: 'lunch',
      calories: 250,
      time: '15 min',
      difficulty: 'Easy',
      image: '🥗',
      ingredients: ['Cucumber', 'Tomatoes', 'Feta cheese', 'Olives', 'Olive oil'],
      instructions: 'Chop vegetables, add feta and olives, drizzle with olive oil and lemon.'
    },
    {
      id: 4,
      name: 'Grilled Chicken Bowl',
      category: 'lunch',
      calories: 450,
      time: '25 min',
      difficulty: 'Medium',
      image: '🍗',
      ingredients: ['Chicken breast', 'Brown rice', 'Broccoli', 'Carrots', 'Teriyaki sauce'],
      instructions: 'Grill chicken, steam vegetables, serve over brown rice with sauce.'
    },
    {
      id: 5,
      name: 'Salmon with Vegetables',
      category: 'dinner',
      calories: 420,
      time: '30 min',
      difficulty: 'Medium',
      image: '🐟',
      ingredients: ['Salmon fillet', 'Asparagus', 'Bell peppers', 'Lemon', 'Garlic'],
      instructions: 'Bake salmon at 400°F for 15 min, roast vegetables alongside.'
    },
    {
      id: 6,
      name: 'Vegetable Stir Fry',
      category: 'dinner',
      calories: 320,
      time: '20 min',
      difficulty: 'Easy',
      image: '🥘',
      ingredients: ['Mixed vegetables', 'Tofu', 'Soy sauce', 'Ginger', 'Rice'],
      instructions: 'Stir fry vegetables and tofu in a wok, season with soy sauce and ginger.'
    },
    {
      id: 7,
      name: 'Berry Yogurt Parfait',
      category: 'snack',
      calories: 180,
      time: '5 min',
      difficulty: 'Easy',
      image: '🫐',
      ingredients: ['Greek yogurt', 'Mixed berries', 'Granola', 'Honey'],
      instructions: 'Layer yogurt with berries and granola, drizzle with honey.'
    },
    {
      id: 8,
      name: 'Apple with Almond Butter',
      category: 'snack',
      calories: 200,
      time: '2 min',
      difficulty: 'Easy',
      image: '🍎',
      ingredients: ['Apple', 'Almond butter', 'Cinnamon'],
      instructions: 'Slice apple, spread with almond butter, sprinkle with cinnamon.'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Recipes', emoji: '🍽️' },
    { id: 'breakfast', name: 'Breakfast', emoji: '🌅' },
    { id: 'lunch', name: 'Lunch', emoji: '☀️' },
    { id: 'dinner', name: 'Dinner', emoji: '🌙' },
    { id: 'snack', name: 'Snacks', emoji: '🍪' }
  ];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddRecipeToMeals = (recipe) => {
    onAddMeal(recipe.name, recipe.calories, recipe.category);
    alert(`${recipe.name} added to your meals! 🍓`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-pink-400 to-purple-400 rounded-full p-3">
                <ChefHat className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-pink-600">Healthy Recipes</h1>
                <p className="text-gray-500 text-sm">Discover delicious and nutritious meals</p>
              </div>
            </div>
            <button
              onClick={onBack}
              className="bg-pink-400 text-white px-6 py-2 rounded-full hover:bg-pink-500 transition-all transform hover:scale-105"
            >
              Back to Dashboard
            </button>
          </div>

          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-pink-200 rounded-full focus:border-pink-400 focus:outline-none transition-all"
              />
            </div>
          </div>

          <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-lg'
                    : 'bg-pink-50 text-pink-600 hover:bg-pink-100'
                }`}
              >
                {category.emoji} {category.name}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map(recipe => (
              <div key={recipe.id} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-5 hover:shadow-lg transition-all transform hover:scale-105">
                <div className="text-center mb-3">
                  <div className="text-6xl mb-2">{recipe.image}</div>
                  <h3 className="text-lg font-bold text-gray-800">{recipe.name}</h3>
                </div>

                <div className="flex items-center justify-between mb-3 text-sm">
                  <div className="flex items-center gap-1 text-pink-600">
                    <Flame className="w-4 h-4" />
                    <span className="font-semibold">{recipe.calories} cal</span>
                  </div>
                  <div className="flex items-center gap-1 text-purple-600">
                    <Clock className="w-4 h-4" />
                    <span className="font-semibold">{recipe.time}</span>
                  </div>
                </div>

                <div className="mb-3">
                  <p className="text-xs font-semibold text-gray-600 mb-1">Ingredients:</p>
                  <div className="flex flex-wrap gap-1">
                    {recipe.ingredients.slice(0, 3).map((ingredient, idx) => (
                      <span key={idx} className="text-xs bg-white px-2 py-1 rounded-full text-gray-600">
                        {ingredient}
                      </span>
                    ))}
                    {recipe.ingredients.length > 3 && (
                      <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-600">
                        +{recipe.ingredients.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => handleAddRecipeToMeals(recipe)}
                  className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white py-2 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4" />
                  Add to Meals
                </button>
              </div>
            ))}
          </div>

          {filteredRecipes.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              <ChefHat className="w-16 h-16 mx-auto mb-3 opacity-50" />
              <p>No recipes found matching your search</p>
              <p className="text-sm">Try a different search term or category</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};