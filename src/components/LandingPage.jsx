import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { BackgroundHearts } from './BackgroundHearts';

export const LandingPage = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 flex items-center justify-center p-4">
      <BackgroundHearts />
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full transform hover:scale-105 transition-all duration-300 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-r from-pink-400 to-purple-400 rounded-full p-6 mb-4 animate-bounce">
            <Heart className="w-16 h-16 text-white" fill="currentColor" />
          </div>
          <h1 className="text-4xl font-bold text-pink-600 mb-2">🍓 FoodyWoody 🍓</h1>
          <p className="text-gray-600">Track your wellness journey with cuteness! ✨</p>
        </div>
        <button
          onClick={onGetStarted}
          className="w-full bg-gradient-to-r from-pink-400 to-pink-500 text-white py-4 rounded-full font-semibold hover:from-pink-500 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
        >
          <Sparkles className="w-5 h-5" />
          Get Started
        </button>
      </div>
    </div>
  );
};