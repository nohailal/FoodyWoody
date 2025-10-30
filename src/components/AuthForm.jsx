import React from 'react';
import { BackgroundHearts } from './BackgroundHearts';

export const AuthForm = ({ authMode, username, password, onUsernameChange, onPasswordChange, onSubmit, onToggleMode }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 flex items-center justify-center p-4">
      <BackgroundHearts />
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full relative z-10">
        <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">
          {authMode === 'login' ? 'Welcome Back! 💖' : 'Join Us! ✨'}
        </h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => onUsernameChange(e.target.value)}
            className="w-full px-4 py-3 border-2 border-pink-200 rounded-full focus:border-pink-400 focus:outline-none transition-all"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => onPasswordChange(e.target.value)}
            className="w-full px-4 py-3 border-2 border-pink-200 rounded-full focus:border-pink-400 focus:outline-none transition-all"
          />
          <button
            onClick={onSubmit}
            className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            {authMode === 'login' ? 'Login' : 'Sign Up'}
          </button>
        </div>
        <p className="text-center mt-4 text-gray-600">
          {authMode === 'login' ? "Don't have an account? " : 'Already have an account? '}
          <button
            onClick={onToggleMode}
            className="text-pink-500 font-semibold hover:text-pink-600"
          >
            {authMode === 'login' ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};