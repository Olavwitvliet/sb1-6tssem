import React, { useState } from 'react';
import { Thermometer, Clock, Ruler, MapPin } from 'lucide-react';

export function NewSessionForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate location fetch
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Record New Session</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-gray-700">
            <Thermometer className="h-5 w-5 text-blue-600" />
            <span>Water Temperature (°C)</span>
          </label>
          <input
            type="number"
            step="0.1"
            required
            className="w-full rounded-lg border-gray-300 border p-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-gray-700">
            <Clock className="h-5 w-5 text-blue-600" />
            <span>Duration (minutes)</span>
          </label>
          <input
            type="number"
            required
            className="w-full rounded-lg border-gray-300 border p-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-gray-700">
            <Ruler className="h-5 w-5 text-blue-600" />
            <span>Distance (meters)</span>
          </label>
          <input
            type="number"
            required
            className="w-full rounded-lg border-gray-300 border p-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-gray-700">
            <MapPin className="h-5 w-5 text-blue-600" />
            <span>Location</span>
          </label>
          <button
            type="button"
            onClick={() => {}}
            className="w-full bg-blue-50 text-blue-700 rounded-lg p-2 hover:bg-blue-100 transition-colors flex items-center justify-center space-x-2"
          >
            <MapPin className="h-4 w-4" />
            <span>Get Current Location</span>
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">How did you feel?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Before', 'During', 'After'].map((phase) => (
            <div key={phase} className="space-y-2">
              <label className="text-gray-700">{phase}</label>
              <textarea
                className="w-full rounded-lg border-gray-300 border p-2 focus:ring-2 focus:ring-blue-500"
                rows={3}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-300"
      >
        {loading ? 'Recording...' : 'Record Session'}
      </button>
    </form>
  );
}