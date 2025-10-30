import React from 'react';
import { Sparkles } from 'lucide-react';

export const SparkleAnimation = ({ show }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
      <Sparkles className="w-32 h-32 text-pink-400 animate-ping" />
    </div>
  );
};