import React, { useState, useEffect } from 'react';
import { SparkleAnimation } from './components/SparkleAnimation';
import { LandingPage } from './components/LandingPage';
import { AuthForm } from './components/AuthForm';
import { Dashboard } from './components/Dashboard';
import { Settings } from './components/Settings';
import { Analytics } from './components/Analytics';
import { Recipes } from './components/Recipes';


const FoodyWoody = () => {
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
  const [currentView, setCurrentView] = useState('dashboard'); 
  const [settings, setSettings] = useState({
    calorieGoal: 2000,
    waterGoal: 8,
    darkMode: false,
    mealReminders: true,
    waterReminders: true
  });

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setCurrentUser(savedUser);
      loadUserData(savedUser);
      loadUserSettings(savedUser);
    }
  }, []);

  const loadUserData = (user) => {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const data = userData[user] || { meals: [], waterIntake: 0, stats: { totalCalories: 0, mealsLogged: 0, streak: 1 } };
    setMeals(data.meals);
    setWaterIntake(data.waterIntake);
    setStats(data.stats);
  };

  const loadUserSettings = (user) => {
    const userSettings = JSON.parse(localStorage.getItem('userSettings') || '{}');
    const savedSettings = userSettings[user];
    if (savedSettings) {
      setSettings(savedSettings);
    }
  };

  const saveUserData = (user, data) => {
    const allData = JSON.parse(localStorage.getItem('userData') || '{}');
    allData[user] = data;
    localStorage.setItem('userData', JSON.stringify(allData));
  };

  const saveUserSettings = (user, newSettings) => {
    const allSettings = JSON.parse(localStorage.getItem('userSettings') || '{}');
    allSettings[user] = newSettings;
    localStorage.setItem('userSettings', JSON.stringify(allSettings));
    setSettings(newSettings);
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
    loadUserSettings(username);
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
    setCurrentView('dashboard');
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

  const handleAddMealFromRecipe = (name, calories, type) => {
    const meal = {
      name,
      calories: parseInt(calories),
      type,
      id: Date.now(),
      date: new Date().toLocaleDateString()
    };

    const updatedMeals = [...meals, meal];
    const updatedStats = {
      totalCalories: stats.totalCalories + parseInt(calories),
      mealsLogged: stats.mealsLogged + 1,
      streak: stats.streak
    };

    setMeals(updatedMeals);
    setStats(updatedStats);
    saveUserData(currentUser, { meals: updatedMeals, waterIntake, stats: updatedStats });
    triggerSparkle();
  };

  const handleAddWater = () => {
    const newWater = waterIntake + 1;
    setWaterIntake(newWater);
    saveUserData(currentUser, { meals, waterIntake: newWater, stats });
    triggerSparkle();
  };

  const handleUpdateSettings = (newSettings) => {
    saveUserSettings(currentUser, newSettings);
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
      
      {currentView === 'dashboard' && (
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
          onOpenSettings={() => setCurrentView('settings')}
          onOpenAnalytics={() => setCurrentView('analytics')}
          onOpenRecipes={() => setCurrentView('recipes')}
        />
      )}

      {currentView === 'settings' && (
        <Settings
          currentUser={currentUser}
          onBack={() => setCurrentView('dashboard')}
          onLogout={handleLogout}
          settings={settings}
          onUpdateSettings={handleUpdateSettings}
        />
      )}

      {currentView === 'analytics' && (
        <Analytics
          meals={meals}
          waterIntake={waterIntake}
          stats={stats}
          onBack={() => setCurrentView('dashboard')}
        />
      )}

      {currentView === 'recipes' && (
        <Recipes
          onBack={() => setCurrentView('dashboard')}
          onAddMeal={handleAddMealFromRecipe}
        />
      )}
    </>
  );
};

export default FoodyWoody;