import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from './contexts/ThemeContext';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import "./App.css";

const MainDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Dashboard />;
      case 'analytics':
        return (
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Analytics</h2>
            <p className="text-gray-600 dark:text-gray-400">Detailed analytics view coming soon...</p>
          </div>
        );
      case 'campaigns':
        return (
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Campaigns</h2>
            <p className="text-gray-600 dark:text-gray-400">Campaign management view coming soon...</p>
          </div>
        );
      case 'audience':
        return (
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Audience</h2>
            <p className="text-gray-600 dark:text-gray-400">Audience insights view coming soon...</p>
          </div>
        );
      case 'reports':
        return (
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Reports</h2>
            <p className="text-gray-600 dark:text-gray-400">Reports view coming soon...</p>
          </div>
        );
      case 'calendar':
        return (
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Calendar</h2>
            <p className="text-gray-600 dark:text-gray-400">Calendar view coming soon...</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="h-screen flex bg-gray-50 dark:bg-gray-950">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainDashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
