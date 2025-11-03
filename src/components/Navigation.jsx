import React from 'react';
import { Heart, User, LogOut, Settings, BarChart3, ChefHat } from 'lucide-react';

export const Navigation = ({ currentUser, onLogout, onOpenSettings, onOpenAnalytics, onOpenRecipes }) => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-r from-pink-400 to-purple-400 rounded-full p-2 animate-pulse">
            <Heart className="w-6 h-6 text-white" fill="currentColor" />
          </div>
          <h1 className="text-2xl font-bold text-pink-600">🍓 FoodyWoody</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 bg-pink-100 px-4 py-2 rounded-full">
            <User className="w-4 h-4 text-pink-600" />
            <span className="text-pink-600 font-semibold">{currentUser}</span>
          </div>
          <button
            onClick={onOpenRecipes}
            className="bg-green-400 text-white p-2 rounded-full hover:bg-green-500 transition-all transform hover:scale-110"
            title="Recipes"
          >
            <ChefHat className="w-5 h-5" />
          </button>
          <button
            onClick={onOpenAnalytics}
            className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition-all transform hover:scale-110"
            title="Analytics"
          >
            <BarChart3 className="w-5 h-5" />
          </button>
          <button
            onClick={onOpenSettings}
            className="bg-purple-400 text-white p-2 rounded-full hover:bg-purple-500 transition-all transform hover:scale-110"
            title="Settings"
          >
            <Settings className="w-5 h-5" />
          </button>
          <button
            onClick={onLogout}
            className="bg-pink-400 text-white p-2 rounded-full hover:bg-pink-500 transition-all transform hover:scale-110"
            title="Logout"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};