import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Apple, Salad, Coffee, Cookie, User, LogOut, TrendingUp, Calendar, Star } from 'lucide-react';

// Import all components
import { SparkleAnimation } from './components/SparkleAnimation';
import { BackgroundHearts } from './components/BackgroundHearts';
import { LandingPage } from './components/LandingPage';
import { AuthForm } from './components/AuthForm';
import { Navigation } from './components/Navigation';
import { StatsCard } from './components/StatsCard';
import { MealForm } from './components/MealForm';
import { MealItem } from './components/MealItem';
import { MealsList } from './components/MealsList';
import { Dashboard } from './components/Dashboard';

// Main FoodyWoody App Component
const FoodyWoodyApp = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [meals, setMeals] = useState([]);
  const [mealName, setMealName] = useState('');
  const [mealCalories, setMealCalories] = useState('');
  const [mealType, setMealType] = useState('breakfast');
  const [waterIntake, setWaterIntake] = useState(0);
  const [stats, setStats] = useState({ totalCalories: 0, mealsLogged: 0, streak: 0 });
  const [showSparkle, setShowSparkle] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setCurrentUser(savedUser);
      loadUserData(savedUser);
    }
  }, []);

  const loadUserData = (user) => {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const data = userData[user] || { meals: [], waterIntake: 0, stats: { totalCalories: 0, mealsLogged: 0, streak: 1 } };
    setMeals(data.meals);
    setWaterIntake(data.waterIntake);
    setStats(data.stats);
  };

  const saveUserData = (user, data) => {
    const allData = JSON.parse(localStorage.getItem('userData') || '{}');
    allData[user] = data;
    localStorage.setItem('userData', JSON.stringify(allData));
  };

  const triggerSparkle = () => {
    setShowSparkle(true);
    setTimeout(() => setShowSparkle(false), 1000);
  };

  const handleAuth = () => {
    if (!username || !password) {
      alert('Please fill in all fields!');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '{}');
    
    if (authMode === 'signup') {
      users[username] = password;
      localStorage.setItem('users', JSON.stringify(users));
    } else {
      if (!users[username] || users[username] !== password) {
        alert('Invalid credentials!');
        return;
      }
    }
    setCurrentUser(username);
    localStorage.setItem('currentUser', username);
    loadUserData(username);
    setShowAuth(false);
    setUsername('');
    setPassword('');
    triggerSparkle();
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    setMeals([]);
    setWaterIntake(0);
    setStats({ totalCalories: 0, mealsLogged: 0, streak: 0 });
  };

  const handleAddMeal = () => {
    if (!mealName || !mealCalories) {
      alert('Please fill in meal details!');
      return;
    }

    const meal = {
      name: mealName,
      calories: parseInt(mealCalories),
      type: mealType,
      id: Date.now(),
      date: new Date().toLocaleDateString()
    };

    const updatedMeals = [...meals, meal];
    const updatedStats = {
      totalCalories: stats.totalCalories + parseInt(mealCalories),
      mealsLogged: stats.mealsLogged + 1,
      streak: stats.streak
    };

    setMeals(updatedMeals);
    setStats(updatedStats);
    saveUserData(currentUser, { meals: updatedMeals, waterIntake, stats: updatedStats });
    setMealName('');
    setMealCalories('');
    setMealType('breakfast');
    triggerSparkle();
  };

  const handleAddWater = () => {
    const newWater = waterIntake + 1;
    setWaterIntake(newWater);
    saveUserData(currentUser, { meals, waterIntake: newWater, stats });
    triggerSparkle();
  };

  if (!currentUser && !showAuth) {
    return <LandingPage onGetStarted={() => setShowAuth(true)} />;
  }

  if (!currentUser && showAuth) {
    return (
      <AuthForm
        authMode={authMode}
        username={username}
        password={password}
        onUsernameChange={setUsername}
        onPasswordChange={setPassword}
        onSubmit={handleAuth}
        onToggleMode={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
      />
    );
  }

  return (
    <>
      <SparkleAnimation show={showSparkle} />
      <Dashboard
        currentUser={currentUser}
        stats={stats}
        waterIntake={waterIntake}
        meals={meals}
        mealForm={{
          name: mealName,
          calories: mealCalories,
          type: mealType,
          onNameChange: setMealName,
          onCaloriesChange: setMealCalories,
          onTypeChange: setMealType
        }}
        onLogout={handleLogout}
        onAddWater={handleAddWater}
        onAddMeal={handleAddMeal}
      />
    </>
  );
};

export default FoodyWoodyApp;