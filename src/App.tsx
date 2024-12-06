import React from 'react';
import { Header } from './components/Header';
import { NewSessionForm } from './components/NewSessionForm';
import { SessionList } from './components/SessionList';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <NewSessionForm />
        <SessionList />
      </main>
    </div>
  );
}

export default App;