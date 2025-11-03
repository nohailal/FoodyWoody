import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Apple, TrendingUp, Users, Award, ChefHat, Droplets, Calendar } from 'lucide-react';
import { BackgroundHearts } from './BackgroundHearts';

export const LandingPage = ({ onGetStarted }) => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [stats, setStats] = useState({ users: 0, meals: 0, calories: 0 });

  const features = [
    { icon: <Apple className="w-6 h-6" />, title: 'Track Meals', description: 'Log your daily meals and calories' },
    { icon: <Droplets className="w-6 h-6" />, title: 'Water Intake', description: 'Monitor your hydration goals' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Analytics', description: 'View detailed insights and trends' },
    { icon: <ChefHat className="w-6 h-6" />, title: 'Recipes', description: 'Discover healthy meal ideas' },
  ];

  const testimonials = [
    { name: 'Sarah M.', text: 'FoodyWoody helped me lose 15 pounds!', emoji: '🌟' },
    { name: 'Mike T.', text: 'Love the cute design and easy tracking!', emoji: '💖' },
    { name: 'Emma L.', text: 'Best health app I\'ve ever used!', emoji: '✨' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    // Animated stats counter
    const targetUsers = 1250;
    const targetMeals = 15420;
    const targetCalories = 8500000;

    let userCount = 0;
    let mealCount = 0;
    let calorieCount = 0;

    const statsInterval = setInterval(() => {
      if (userCount < targetUsers) userCount += 50;
      if (mealCount < targetMeals) mealCount += 500;
      if (calorieCount < targetCalories) calorieCount += 300000;

      setStats({
        users: Math.min(userCount, targetUsers),
        meals: Math.min(mealCount, targetMeals),
        calories: Math.min(calorieCount, targetCalories),
      });

      if (userCount >= targetUsers && mealCount >= targetMeals && calorieCount >= targetCalories) {
        clearInterval(statsInterval);
      }
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(statsInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 overflow-hidden">
      <BackgroundHearts />
      
      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <div className="max-w-6xl w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            {/* Left Side - Main CTA */}
            <div className="text-center md:text-left">
              <div className="inline-block bg-gradient-to-r from-pink-400 to-purple-400 rounded-full px-4 py-2 mb-4">
                <p className="text-white text-sm font-semibold flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  #1 Cutest Health Tracker
                </p>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-pink-600 mb-4 animate-fadeIn">
                🍓 FoodyWoody
              </h1>
              
              <p className="text-2xl text-gray-700 mb-6">
                Track your wellness journey with cuteness! ✨
              </p>
              
              <p className="text-gray-600 mb-8 text-lg">
                Join thousands of users making healthy eating fun and adorable. 
                Track meals, monitor water intake, and achieve your health goals!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={onGetStarted}
                  className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-500 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  Start Free Today
                </button>
                
                <button
                  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                  className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold border-2 border-pink-300 hover:bg-pink-50 transform hover:scale-105 transition-all duration-200"
                >
                  Learn More
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6 mt-8 justify-center md:justify-start">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {['🧑', '👩', '🧔'].map((emoji, i) => (
                      <div key={i} className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center border-2 border-white">
                        <span className="text-sm">{emoji}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    <span className="font-bold text-pink-600">1,250+</span> happy users
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                  <span className="text-sm text-gray-600 ml-1">4.9/5</span>
                </div>
              </div>
            </div>

            {/* Right Side - Card */}
            <div className="flex justify-center">
              <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full transform hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="inline-block bg-gradient-to-r from-pink-400 to-purple-400 rounded-full p-6 mb-4 animate-bounce">
                    <Heart className="w-16 h-16 text-white" fill="currentColor" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Quick Start</h2>
                  <p className="text-gray-600 text-sm">Get started in seconds!</p>
                </div>

                {/* Features Carousel */}
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-4 mb-6 min-h-[100px]">
                  <div className="flex items-center gap-3 text-pink-600">
                    {features[currentFeature].icon}
                    <div>
                      <h3 className="font-bold text-lg">{features[currentFeature].title}</h3>
                      <p className="text-sm text-gray-600">{features[currentFeature].description}</p>
                    </div>
                  </div>
                </div>

                {/* Feature Dots */}
                <div className="flex justify-center gap-2 mb-6">
                  {features.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentFeature ? 'bg-pink-500 w-8' : 'bg-pink-200'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={onGetStarted}
                  className="w-full bg-gradient-to-r from-pink-400 to-pink-500 text-white py-4 rounded-full font-semibold hover:from-pink-500 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  Create Free Account
                </button>
                
                <p className="text-center text-xs text-gray-500 mt-4">
                  No credit card required • Free forever
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4 mt-16 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur rounded-2xl p-6 text-center transform hover:scale-105 transition-all">
              <Users className="w-8 h-8 text-pink-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-pink-600">{stats.users.toLocaleString()}+</p>
              <p className="text-sm text-gray-600">Active Users</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur rounded-2xl p-6 text-center transform hover:scale-105 transition-all">
              <Calendar className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-purple-600">{stats.meals.toLocaleString()}+</p>
              <p className="text-sm text-gray-600">Meals Tracked</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur rounded-2xl p-6 text-center transform hover:scale-105 transition-all">
              <Award className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-yellow-600">{(stats.calories / 1000000).toFixed(1)}M+</p>
              <p className="text-sm text-gray-600">Calories Logged</p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">
              What Our Users Say 💖
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur rounded-2xl p-6 transform hover:scale-105 transition-all">
                  <p className="text-4xl mb-3">{testimonial.emoji}</p>
                  <p className="text-gray-700 mb-3 italic">"{testimonial.text}"</p>
                  <p className="text-sm font-semibold text-pink-600">- {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};