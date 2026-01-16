
import React, { useRef, useState } from 'react';
import { User, Language } from '../types';
import { CrownIcon, LogOutIcon, UserIcon, AlipayIcon, WeChatIcon, PaypalIcon, CreditCardIcon, CryptoIcon, PaddleIcon } from '../components/Icons';
import { TRANSLATIONS, PAYMENT_METHODS } from '../constants';

interface ProfileProps {
  user: User | null;
  onLogout: () => void;
  onLogin: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof TRANSLATIONS['en']) => string;
}

const Profile: React.FC<ProfileProps> = ({ user, onLogout, onLogin, language, setLanguage, t }) => {
  const plansRef = useRef<HTMLHeadingElement>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'PRO' | 'ULTRA' | null>(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('');

  const scrollToPlans = () => {
    plansRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSelectPlan = (plan: 'PRO' | 'ULTRA') => {
    if (!user) {
        onLogin();
        return;
    }
    setSelectedPlan(plan);
    setShowPaymentModal(true);
    // Pre-select the first enabled method if none selected
    if (!selectedPaymentMethod) {
        const firstEnabled = PAYMENT_METHODS.find(m => m.enabled);
        if (firstEnabled) setSelectedPaymentMethod(firstEnabled.id);
    }
  };

  const handlePay = () => {
    const method = PAYMENT_METHODS.find(m => m.id === selectedPaymentMethod);
    if (method && method.enabled) {
        // Construct URL with parameters if needed, or just open base URL
        const url = `${method.url}?plan=${selectedPlan}&user=${user?.id}`;
        window.open(url, '_blank');
        setShowPaymentModal(false);
    }
  };

  const getPaymentIcon = (iconName: string) => {
      switch (iconName) {
          case 'AlipayIcon': return <AlipayIcon className="w-6 h-6" />;
          case 'WeChatIcon': return <WeChatIcon className="w-6 h-6" />;
          case 'PaddleIcon': return <PaddleIcon className="w-6 h-6" />;
          case 'PaypalIcon': return <PaypalIcon className="w-6 h-6" />;
          case 'CryptoIcon': return <CryptoIcon className="w-6 h-6" />;
          case 'CreditCardIcon': return <CreditCardIcon className="w-6 h-6" />;
          default: return <CreditCardIcon className="w-6 h-6" />;
      }
  };

  return (
    <div className="h-full bg-slate-50 overflow-y-auto no-scrollbar p-6 relative">
      <div className="w-full max-w-md mx-auto flex flex-col">
          <div className="mb-6 flex justify-between items-start">
            <div>
                <h2 className="text-2xl font-bold text-slate-800">{t('myAccount')}</h2>
                <p className="text-slate-500 text-sm">{t('manageSub')}</p>
            </div>
            {user && (
                <button 
                  onClick={onLogout}
                  className="p-2 text-red-500 bg-red-50 hover:bg-red-100 rounded-lg transition-colors shadow-sm"
                  title={t('logout')}
                >
                  <LogOutIcon className="w-5 h-5" />
                </button>
            )}
          </div>

          {/* User Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mb-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full -mr-4 -mt-4 z-0"></div>
            
            <div className="relative z-10 flex items-center gap-4 mb-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${user ? 'bg-slate-100 text-slate-400' : 'bg-slate-200 text-slate-500'}`}>
                    <UserIcon className="w-8 h-8" />
                </div>
                <div>
                    <div className="font-bold text-lg text-slate-800">{user ? user.username : t('guestUser')}</div>
                    <div className="text-xs text-slate-400">{user ? user.email : t('notLoggedIn')}</div>
                </div>
            </div>
            
            {user ? (
              <div className="relative z-10 bg-slate-50 rounded-xl p-3 flex justify-between items-center border border-slate-100">
                  <div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">{t('currentPlan')}</div>
                      <div className={`font-bold ${user.plan === 'FREE' ? 'text-slate-600' : 'text-indigo-600'}`}>
                          {user.plan} {user.plan !== 'FREE' && t('member')}
                      </div>
                      {user.plan !== 'FREE' && user.expiryDate && (
                        <div className="text-[10px] text-slate-500 font-medium mt-1">
                          {t('expires')}: {new Date(user.expiryDate).toLocaleDateString()}
                        </div>
                      )}
                  </div>
                  {user.plan === 'FREE' && (
                      <button 
                        onClick={scrollToPlans}
                        className="bg-indigo-600 text-white text-xs px-3 py-1.5 rounded-lg font-medium shadow-md shadow-indigo-200 hover:bg-indigo-500 transition-colors"
                      >
                          {t('upgrade')}
                      </button>
                  )}
              </div>
            ) : (
              <div className="relative z-10">
                <button 
                  onClick={onLogin}
                  className="w-full bg-indigo-600 text-white text-sm font-bold py-3 rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-500 transition-colors"
                >
                  {t('loginRegister')}
                </button>
              </div>
            )}
          </div>

          {/* Language Switcher */}
          <div className="bg-white rounded-xl p-4 mb-6 shadow-sm border border-slate-100">
            <label className="text-xs font-bold text-slate-700 block mb-2">{t('language')}</label>
            <div className="flex gap-2">
                {[
                    { code: 'zh', label: '中文' }, 
                    { code: 'en', label: 'EN' }, 
                    { code: 'ru', label: 'RU' }, 
                    { code: 'pt', label: 'PT' }
                ].map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code as Language)}
                        className={`flex-1 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                            language === lang.code 
                            ? 'bg-indigo-50 border-indigo-500 text-indigo-700' 
                            : 'bg-slate-50 border-transparent text-slate-500 hover:bg-slate-100'
                        }`}
                    >
                        {lang.label}
                    </button>
                ))}
            </div>
          </div>

          {/* Subscription Options */}
          <h3 ref={plansRef} className="font-bold text-slate-700 mb-3 text-sm">{t('subPlans')}</h3>
          <div className="space-y-3 pb-4">
            <div 
                onClick={() => handleSelectPlan('PRO')}
                className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-4 text-white shadow-lg shadow-indigo-200 relative overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02]"
            >
                <div className="absolute top-0 right-0 p-2 opacity-10 transform translate-x-4 -translate-y-2">
                    <CrownIcon className="w-24 h-24" />
                </div>
                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-2">
                        <span className="bg-white/20 text-[10px] px-2 py-0.5 rounded font-medium">{t('recommended')}</span>
                        <CrownIcon className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold">Pro Plan</h4>
                    <div className="text-2xl font-bold mb-1">$4.99<span className="text-sm font-normal opacity-80">/mo</span></div>
                    <ul className="text-xs space-y-1 opacity-90 mb-3">
                        <li>• Access to all 50+ nodes</li>
                        <li>• Smart routing optimization</li>
                        <li>• 4K streaming support</li>
                    </ul>
                    <button className="w-full bg-white text-indigo-600 text-xs font-bold py-2 rounded-lg pointer-events-none">{t('selectPlan')}</button>
                </div>
            </div>

            <div 
                onClick={() => handleSelectPlan('ULTRA')}
                className="bg-white rounded-xl p-4 border border-slate-100 text-slate-600 shadow-sm relative overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02]"
            >
                 <div className="relative z-10">
                    <h4 className="text-lg font-bold text-slate-800">Ultra Plan</h4>
                    <div className="text-2xl font-bold mb-1 text-slate-800">$9.99<span className="text-sm font-normal opacity-60">/mo</span></div>
                    <ul className="text-xs space-y-1 text-slate-500 mb-3">
                        <li>• Dedicated IP Address</li>
                        <li>• Priority Support</li>
                        <li>• Multi-device (up to 10)</li>
                    </ul>
                    <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold py-2 rounded-lg transition-colors pointer-events-none">{t('selectPlan')}</button>
                </div>
            </div>
          </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-200">
            <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-2xl animate-in zoom-in-95 duration-200 m-4">
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex justify-between items-center">
                    {t('selectPayment')}
                    <span className="text-sm font-normal text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">{selectedPlan}</span>
                </h3>
                
                <div className="space-y-2 mb-6 max-h-[60vh] overflow-y-auto no-scrollbar">
                    {PAYMENT_METHODS.filter(m => m.enabled).map((method) => (
                        <button
                            key={method.id}
                            onClick={() => setSelectedPaymentMethod(method.id)}
                            className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all ${
                                selectedPaymentMethod === method.id 
                                ? 'border-indigo-500 bg-indigo-50 text-indigo-700' 
                                : 'border-slate-100 hover:border-slate-200 text-slate-600'
                            }`}
                        >
                            <div className="flex items-center gap-3">
                                {getPaymentIcon(method.icon)}
                                <span className="font-medium text-sm">{t(method.nameKey as any)}</span>
                            </div>
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                selectedPaymentMethod === method.id 
                                ? 'border-indigo-500 bg-indigo-500' 
                                : 'border-slate-300'
                            }`}>
                                {selectedPaymentMethod === method.id && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                            </div>
                        </button>
                    ))}
                </div>

                <div className="flex gap-3">
                    <button 
                        onClick={() => setShowPaymentModal(false)}
                        className="flex-1 py-3 text-slate-500 font-bold text-sm bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                    >
                        {t('cancel')}
                    </button>
                    <button 
                        onClick={handlePay}
                        disabled={!selectedPaymentMethod}
                        className="flex-[2] py-3 text-white font-bold text-sm bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {t('payNow')}
                    </button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
