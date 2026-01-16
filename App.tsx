import React, { useState } from 'react';
import { AppState, ProxyMode, User, Language } from './types';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import Profile from './views/Profile';
import { GlobeIcon, UserIcon } from './components/Icons';
import { TRANSLATIONS } from './constants';
import { ToastProvider } from './components/Toast';

type Tab = 'home' | 'profile';

const App: React.FC = () => {
  // App Global State
  const [appState, setAppState] = useState<AppState>({
    isConnected: false,
    mode: ProxyMode.SMART,
    selectedNode: null,
    user: null, // Default to null (Guest)
  });

  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [showLogin, setShowLogin] = useState(false);
  const [language, setLanguage] = useState<Language>('zh');

  // Translation helper
  const t = (key: keyof typeof TRANSLATIONS['en']) => {
    return TRANSLATIONS[language][key] || TRANSLATIONS['en'][key];
  };

  // Handle Login
  const handleLogin = (user: User) => {
    setAppState(prev => ({ ...prev, user }));
    setShowLogin(false);
  };

  // Handle Logout
  const handleLogout = () => {
    setAppState(prev => ({ ...prev, user: null, isConnected: false }));
    setActiveTab('home');
  };

  return (
    <ToastProvider>
      <div className="w-full h-full bg-slate-50 overflow-hidden font-sans flex flex-col relative text-slate-900">
        
        {/* Login Modal Overlay */}
        {showLogin && (
          <div className="absolute inset-0 z-50 animate-in fade-in zoom-in duration-200 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center">
            <div className="w-full h-full max-w-md mx-auto bg-slate-900 shadow-2xl overflow-hidden md:rounded-xl md:h-[600px] md:max-h-full">
              <Login t={t} onLogin={handleLogin} onCancel={() => setShowLogin(false)} />
            </div>
          </div>
        )}

        {/* View Content */}
        <div className="flex-1 overflow-hidden relative">
          {activeTab === 'home' ? (
            <Dashboard 
              state={appState} 
              setState={setAppState} 
              t={t}
            />
          ) : (
            <Profile 
              user={appState.user} 
              onLogout={handleLogout} 
              onLogin={() => setShowLogin(true)}
              language={language}
              setLanguage={setLanguage}
              t={t}
            />
          )}
        </div>

        {/* Bottom Navigation Bar */}
        <div className="h-16 bg-white border-t border-slate-100 z-20">
          <div className="h-full max-w-md mx-auto flex justify-around items-center px-6">
            <button 
              onClick={() => setActiveTab('home')}
              className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'home' ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <GlobeIcon className="w-6 h-6" />
              <span className="text-[10px] font-medium">{t('proxy')}</span>
            </button>

            {/* Decorative center curve simulation */}
            <div className="w-px h-8 bg-slate-100"></div>

            <button 
              onClick={() => setActiveTab('profile')}
              className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'profile' ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <UserIcon className="w-6 h-6" />
              <span className="text-[10px] font-medium">{t('me')}</span>
            </button>
          </div>
        </div>
      </div>
    </ToastProvider>
  );
};

export default App;