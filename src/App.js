// src/App.js
import React from 'react';
import Dashboard from './components/Dashboard';
import CustomerList from './components/CustomerLists';
import CustomerDetailView from './components/CustomerDetailView';
import TasksActivities from './components/TasksActivities';
import ReportsAnalytics from './components/ReportsAnalytics';
import SettingsPreferences from './components/SettingsPreferences';

function App() {
  return (
    <div>
      <Dashboard />
      <CustomerList />
      <CustomerDetailView />
      <TasksActivities />
      <ReportsAnalytics />
      <SettingsPreferences />
    </div>
  );
}

export default App;
