import React from 'react';
import { Waves } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Waves className="h-8 w-8" />
          <h1 className="text-2xl font-bold">Ice Swimming Tracker</h1>
        </div>
        <button className="bg-white text-blue-800 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Sign In
        </button>
      </div>
    </header>
  );
}