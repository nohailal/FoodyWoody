import React, { useState } from 'react';
import { Settings as SettingsIcon, User, Target, Droplets, Moon, Sun, Bell, Lock, Trash2, Save } from 'lucide-react';

export const Settings = ({ currentUser, onBack, onLogout, settings, onUpdateSettings }) => {
  const [localSettings, setLocalSettings] = useState(settings);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleSave = () => {
    onUpdateSettings(localSettings);
    alert('Settings saved successfully! ✨');
  };

  const handleDeleteAccount = () => {
    if (showDeleteConfirm) {
      localStorage.removeItem('users');
      localStorage.removeItem('userData');
      localStorage.removeItem('userSettings');
      onLogout();
      alert('Account deleted successfully');
    } else {
      setShowDeleteConfirm(true);
    }
  };

  const handleClearData = () => {
    if (confirm('Are you sure you want to clear all your meal and water data? This cannot be undone!')) {
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');
      userData[currentUser] = { meals: [], waterIntake: 0, stats: { totalCalories: 0, mealsLogged: 0, streak: 0 } };
      localStorage.setItem('userData', JSON.stringify(userData));
      alert('All data cleared! 🗑️');
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-pink-400 to-purple-400 rounded-full p-3">
                <SettingsIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-pink-600">Settings</h1>
                <p className="text-gray-500 text-sm">Customize your FoodyWoody experience</p>
              </div>
            </div>
            <button
              onClick={onBack}
              className="bg-pink-400 text-white px-6 py-2 rounded-full hover:bg-pink-500 transition-all transform hover:scale-105"
            >
              Back to Dashboard
            </button>
          </div>

          {/* Profile Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-pink-500" />
              Profile Information
            </h2>
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-4">
              <div className="flex items-center gap-4">
                <div className="bg-pink-200 rounded-full p-4">
                  <User className="w-12 h-12 text-pink-600" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-800">{currentUser}</p>
                  <p className="text-sm text-gray-500">FoodyWoody Member</p>
                </div>
              </div>
            </div>
          </div>

          {/* Goals Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-pink-500" />
              Daily Goals
            </h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Daily Calorie Goal (kcal)
                </label>
                <input
                  type="number"
                  value={localSettings.calorieGoal}
                  onChange={(e) => setLocalSettings({ ...localSettings, calorieGoal: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-pink-200 rounded-full focus:border-pink-400 focus:outline-none transition-all"
                  placeholder="2000"
                />
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-blue-500" />
                  Daily Water Goal (glasses)
                </label>
                <input
                  type="number"
                  value={localSettings.waterGoal}
                  onChange={(e) => setLocalSettings({ ...localSettings, waterGoal: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-blue-200 rounded-full focus:border-blue-400 focus:outline-none transition-all"
                  placeholder="8"
                />
              </div>
            </div>
          </div>

          {/* Appearance Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              {localSettings.darkMode ? <Moon className="w-5 h-5 text-pink-500" /> : <Sun className="w-5 h-5 text-pink-500" />}
              Appearance
            </h2>
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-800">Dark Mode</p>
                  <p className="text-sm text-gray-500">Switch to dark theme (Coming Soon)</p>
                </div>
                <button
                  onClick={() => setLocalSettings({ ...localSettings, darkMode: !localSettings.darkMode })}
                  className={`relative w-14 h-8 rounded-full transition-all ${
                    localSettings.darkMode ? 'bg-pink-500' : 'bg-gray-300'
                  }`}
                  disabled
                >
                  <div
                    className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                      localSettings.darkMode ? 'translate-x-6' : ''
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Notifications Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Bell className="w-5 h-5 text-pink-500" />
              Notifications
            </h2>
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-800">Meal Reminders</p>
                  <p className="text-sm text-gray-500">Get reminded to log your meals</p>
                </div>
                <button
                  onClick={() => setLocalSettings({ ...localSettings, mealReminders: !localSettings.mealReminders })}
                  className={`relative w-14 h-8 rounded-full transition-all ${
                    localSettings.mealReminders ? 'bg-pink-500' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                      localSettings.mealReminders ? 'translate-x-6' : ''
                    }`}
                  />
                </button>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-800">Water Reminders</p>
                  <p className="text-sm text-gray-500">Stay hydrated with reminders</p>
                </div>
                <button
                  onClick={() => setLocalSettings({ ...localSettings, waterReminders: !localSettings.waterReminders })}
                  className={`relative w-14 h-8 rounded-full transition-all ${
                    localSettings.waterReminders ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                      localSettings.waterReminders ? 'translate-x-6' : ''
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Data Management Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Lock className="w-5 h-5 text-pink-500" />
              Data Management
            </h2>
            <div className="space-y-3">
              <button
                onClick={handleClearData}
                className="w-full bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-2xl p-4 hover:shadow-md transition-all text-left"
              >
                <div className="flex items-center gap-3">
                  <Trash2 className="w-5 h-5 text-orange-500" />
                  <div>
                    <p className="font-semibold text-gray-800">Clear All Data</p>
                    <p className="text-sm text-gray-500">Remove all meals and water logs</p>
                  </div>
                </div>
              </button>

              <button
                onClick={handleDeleteAccount}
                className="w-full bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-4 hover:shadow-md transition-all text-left"
              >
                <div className="flex items-center gap-3">
                  <Trash2 className="w-5 h-5 text-red-500" />
                  <div>
                    <p className="font-semibold text-gray-800">
                      {showDeleteConfirm ? 'Click Again to Confirm Delete' : 'Delete Account'}
                    </p>
                    <p className="text-sm text-gray-500">
                      {showDeleteConfirm ? 'This action cannot be undone!' : 'Permanently delete your account'}
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Save className="w-5 h-5" />
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};