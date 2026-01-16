import React, { useState } from 'react';
import { User } from '../types';
import { TRANSLATIONS } from '../constants';

interface LoginProps {
  onLogin: (user: User) => void;
  onCancel: () => void;
  t: (key: keyof typeof TRANSLATIONS['en']) => string;
}

const Login: React.FC<LoginProps> = ({ onLogin, onCancel, t }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onLogin({
        id: 'user_123',
        username: email.split('@')[0],
        email: email,
        plan: 'FREE',
        expiryDate: new Date(Date.now() + 86400000 * 30).toISOString()
      });
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 text-white p-8 justify-center relative">
      <button 
        onClick={onCancel}
        className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-2"
        aria-label="Close"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <div className="w-full max-w-sm mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
            MinoProxy
          </h1>
          <p className="text-slate-400 text-sm mt-2">{t('secureAccess')}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">{t('email')}</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="name@example.com"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">{t('password')}</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3 rounded-lg shadow-lg shadow-blue-500/20 transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
          >
            {isLoading ? t('processing') : (isRegister ? t('createAccount') : t('signIn'))}
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-slate-500">
          {isRegister ? `${t('haveAccount')} ` : `${t('noAccount')} `}
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-blue-400 hover:text-blue-300 font-medium"
          >
            {isRegister ? t('signIn') : t('register')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;