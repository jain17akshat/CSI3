import React, { useState } from 'react';
import { Sidebar } from './components/Layout/Sidebar';
import { Header } from './components/Layout/Header';
import { Dashboard } from './pages/Dashboard';
import { Tables } from './pages/Tables';
import { CalendarPage } from './pages/CalendarPage';
import { KanbanPage } from './pages/KanbanPage';
import { Tables as UsersPage } from './pages/Tables';
import { Settings } from './pages/Settings';
import { useTheme } from './hooks/useTheme';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { currentTheme } = useTheme();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'tables':
        return <Tables />;
      case 'calendar':
        return <CalendarPage />;
      case 'kanban':
        return <KanbanPage />;
      case 'users':
        return <UsersPage />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 theme-${currentTheme}`}>
      <div className="flex">
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          isOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        
        <div className="flex-1 lg:ml-64">
          <Header toggleSidebar={toggleSidebar} />
          
          <main className="p-6">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;