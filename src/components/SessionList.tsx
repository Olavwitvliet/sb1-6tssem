import React from 'react';
import { format } from 'date-fns';
import { Thermometer, Clock, Ruler } from 'lucide-react';
import type { SwimSession } from '../types/swim';

const mockSessions: SwimSession[] = [
  {
    id: '1',
    date: new Date(),
    waterTemp: 2.5,
    duration: 15,
    distance: 500,
    location: {
      name: 'Lake Päijänne',
      temp: -2,
      coordinates: { latitude: 61.6, longitude: 25.4 }
    },
    feelings: {
      before: 'Excited but nervous',
      during: 'Focused on breathing',
      after: 'Energized and proud'
    }
  }
];

export function SessionList() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Recent Sessions</h2>
      <div className="space-y-4">
        {mockSessions.map((session) => (
          <div
            key={session.id}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {session.location.name}
                </h3>
                <p className="text-gray-600">
                  {format(session.date, 'PPP')}
                </p>
              </div>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {session.location.temp}°C Air
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="flex items-center space-x-2">
                <Thermometer className="h-5 w-5 text-blue-600" />
                <span>{session.waterTemp}°C Water</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <span>{session.duration} min</span>
              </div>
              <div className="flex items-center space-x-2">
                <Ruler className="h-5 w-5 text-blue-600" />
                <span>{session.distance}m</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-semibold text-gray-700">Before</p>
                <p className="text-gray-600">{session.feelings.before}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">During</p>
                <p className="text-gray-600">{session.feelings.during}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">After</p>
                <p className="text-gray-600">{session.feelings.after}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}