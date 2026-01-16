
import React from 'react';

export const PowerIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
    <line x1="12" y1="2" x2="12" y2="12" />
  </svg>
);

export const GlobeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export const ZapIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export const UserIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export const MenuIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export const LogOutIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

export const CrownIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
    </svg>
);

export const ServerIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
        <line x1="6" x2="6.01" y1="6" y2="6" />
        <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
);

export const RefreshIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.3" />
  </svg>
);

export const AndroidIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.523 15.3414C17.523 15.3414 17.5606 15.3414 17.5606 15.3038C17.5606 15.2663 17.523 15.2663 17.523 15.2663C16.697 14.3653 15.5332 13.7271 14.1442 13.5394V13.3892L14.7073 12.3004L15.6834 14.1775C15.6834 14.2151 15.7585 14.2151 15.796 14.1775C15.8336 14.14 15.8336 14.0649 15.796 14.0274L14.7824 12.1127C15.9086 11.5495 16.6594 10.3857 16.6594 9.07166C16.6594 7.26941 15.1953 5.80518 13.3934 5.80518H10.6152C8.81335 5.80518 7.34912 7.26941 7.34912 9.07166C7.34912 10.3857 8.09995 11.5495 9.22616 12.1127L8.21256 14.0274C8.17498 14.0649 8.17498 14.14 8.21256 14.1775C8.25014 14.2151 8.32524 14.2151 8.32524 14.1775L9.30132 12.3004L9.86445 13.3892V13.5394C8.47545 13.7271 7.31154 14.3653 6.48566 15.2663C6.48566 15.2663 6.44807 15.2663 6.44807 15.3038C6.44807 15.3414 6.48566 15.3414 6.48566 15.3414C5.02143 15.9796 4 17.4439 4 19.1332C4 21.2731 5.73473 23.0078 7.87467 23.0078H16.1338C18.2738 23.0078 20.0085 21.2731 20.0085 19.1332C20.0085 17.4439 18.9871 15.9796 17.523 15.3414ZM9.48903 8.92147C9.48903 8.65866 9.7143 8.43339 9.97711 8.43339C10.2399 8.43339 10.4652 8.65866 10.4652 8.92147C10.4652 9.18428 10.2399 9.40955 9.97711 9.40955C9.7143 9.40955 9.48903 9.18428 9.48903 8.92147ZM14.5195 8.92147C14.5195 8.65866 14.7447 8.43339 15.0075 8.43339C15.2704 8.43339 15.4956 8.65866 15.4956 8.92147C15.4956 9.18428 15.2704 9.40955 15.0075 9.40955C14.7447 9.40955 14.5195 9.18428 14.5195 8.92147Z" />
  </svg>
);

export const WindowsIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M3 12V6.75L10.5 5.25V12H3ZM12 4.75L21 3V12H12V4.75ZM3 13H10.5V18.75L3 17.75V13ZM12 13H21V21.5L12 19.75V13Z" />
  </svg>
);

export const AppleIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M14.667 3.5c-0.34 1.55-1.42 2.76-2.73 2.92-0.33-1.46 1.01-2.92 2.73-2.92zM16.48 16.32c-0.54 1.63-1.45 3.09-2.58 3.09-0.8 0-1.07-0.57-2.33-0.57-1.28 0-1.63 0.6-2.35 0.6-1.12 0-2.22-1.74-2.85-3.37-1.17-3.04-0.12-5.74 2.53-5.74 0.94 0 1.69 0.54 2.27 0.54 0.57 0 1.57-0.65 2.65-0.65 0.44 0 2.01 0.16 2.87 1.42-2.33 1.39-1.92 4.63 0.11 5.37-0.1 0.58-0.22 1.15-0.32 1.31z" />
  </svg>
);

export const ChromeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM10.91 12c0 1.694.793 3.194 2.016 4.144l-3.992 6.915C4.248 20.594 0 16.702 0 12c0-2.855 1.002-5.485 2.668-7.568l4.226 7.323c-.156.417-.238.868-.238 1.334z"/>
    <path d="M12 17.455c-2.47 0-4.567-1.648-5.265-3.882l-3.951 6.844C4.835 22.245 8.214 24 12 24c5.966 0 10.9-4.35 11.832-10.033l-4.22-7.311A5.454 5.454 0 0 1 12 17.455z"/>
    <circle cx="12" cy="12" r="3.273"/>
  </svg>
);

export const AlipayIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#1677FF' }}>
     <path d="M6.35,7.95 L9.65,7.95 C9.5,6.5 9,5 8.25,5 L11.2,5 C11.6,6.2 12,7.95 12,7.95 L18,7.95 L18,9.75 L14,9.75 C13.5,12 12,14.5 9.7,16.25 L11.55,17.65 C14.5,15.5 16,12 16.5,9.75 L18.5,9.75 C17.8,13.25 15.5,17.25 12,19.5 L6,15 L7.2,13.5 L6,13.5 L6,12 L8.7,12 C9.2,11 9.5,10 9.8,9.75 L3,9.75 L3,7.95 L6.35,7.95 Z M12,2 L12,4 L7,4 L7,2 L12,2 Z" />
  </svg>
);

export const WeChatIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#07C160' }}>
        <path d="M8.5,3 C4.9,3 2,5.5 2,8.5 C2,9.8 2.6,11 3.5,12 L3,14 L5.5,12.8 C6.4,13.2 7.4,13.5 8.5,13.5 C12.1,13.5 15,11 15,8.5 C15,5.5 12.1,3 8.5,3 Z M6.5,7 C7,7 7.5,7.5 7.5,8 C7.5,8.5 7,9 6.5,9 C6,9 5.5,8.5 5.5,8 C5.5,7.5 6,7 6.5,7 Z M10.5,7 C11,7 11.5,7.5 11.5,8 C11.5,8.5 11,9 10.5,9 C10,9 9.5,8.5 9.5,8 C9.5,7.5 10,7 10.5,7 Z M16.5,10 C13.5,10 11,12 11,14.5 C11,15.3 11.2,16 11.6,16.7 L11,18.5 L13.2,17.6 C14.2,18.2 15.3,18.5 16.5,18.5 C19.5,18.5 22,16.5 22,14.5 C22,12 19.5,10 16.5,10 Z M15,13.5 C15.3,13.5 15.5,13.7 15.5,14 C15.5,14.3 15.3,14.5 15,14.5 C14.7,14.5 14.5,14.3 14.5,14 C14.5,13.7 14.7,13.5 15,13.5 Z M18,13.5 C18.3,13.5 18.5,13.7 18.5,14 C18.5,14.3 18.3,14.5 18,14.5 C17.7,14.5 17.5,14.3 17.5,14 C17.5,13.7 17.7,13.5 18,13.5 Z" />
    </svg>
);

export const PaddleIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
         <path d="M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z M10,17 L6,13 L7.41,11.59 L10,14.17 L16.59,7.58 L18,9 L10,17 Z" />
    </svg>
);

export const PaypalIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#003087' }}>
         <path d="M7.5,21 L8.5,14.5 L7,14.5 L7.5,11 L10,11 L11,5 L16.5,5 C18.5,5 19.5,6 19.5,8 C19.5,10 18.5,11.5 16.5,11.5 L12.5,11.5 L12,14.5 L11,21 L7.5,21 Z" />
    </svg>
);

export const CreditCardIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

export const CryptoIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
     <circle cx="12" cy="12" r="10" />
     <path d="M8,12 L16,12" />
     <path d="M12,8 L12,16" />
  </svg>
);

export const CountryFlag = ({ code, className }: { code: string; className?: string }) => {
    switch (code) {
        case 'JP':
            return (
                <svg viewBox="0 0 32 24" className={className} xmlns="http://www.w3.org/2000/svg">
                     <rect width="32" height="24" fill="white"/>
                     <circle cx="16" cy="12" r="7" fill="#BC002D"/>
                     <rect width="32" height="24" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                </svg>
            );
        case 'US':
            return (
                <svg viewBox="0 0 32 24" className={className} xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="24" fill="#B22234"/>
                    <g fill="white">
                        <rect y="2" width="32" height="2"/>
                        <rect y="6" width="32" height="2"/>
                        <rect y="10" width="32" height="2"/>
                        <rect y="14" width="32" height="2"/>
                        <rect y="18" width="32" height="2"/>
                        <rect y="22" width="32" height="2"/>
                    </g>
                    <rect width="16" height="13" fill="#3C3B6E"/>
                    <circle cx="2" cy="2" r="0.5" fill="white"/>
                    <circle cx="5" cy="2" r="0.5" fill="white"/>
                    <circle cx="8" cy="2" r="0.5" fill="white"/>
                    <circle cx="11" cy="2" r="0.5" fill="white"/>
                    <circle cx="14" cy="2" r="0.5" fill="white"/>
                    <circle cx="3.5" cy="4" r="0.5" fill="white"/>
                    <circle cx="6.5" cy="4" r="0.5" fill="white"/>
                    <circle cx="9.5" cy="4" r="0.5" fill="white"/>
                    <circle cx="12.5" cy="4" r="0.5" fill="white"/>
                    <rect width="32" height="24" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                </svg>
            );
        case 'SG':
            return (
                 <svg viewBox="0 0 32 24" className={className} xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="24" fill="white"/>
                    <rect width="32" height="12" fill="#EF3340"/>
                    <path d="M8,2.5 A3.5,3.5 0 0,0 8,9.5 A3.5,3.5 0 0,1 8,2.5" fill="white"/>
                    <circle cx="9.5" cy="4" r="0.7" fill="white"/>
                    <circle cx="11" cy="5" r="0.7" fill="white"/>
                    <circle cx="10.5" cy="7" r="0.7" fill="white"/>
                    <circle cx="8.5" cy="7" r="0.7" fill="white"/>
                    <circle cx="8" cy="5" r="0.7" fill="white"/>
                    <rect width="32" height="24" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                </svg>
            );
        case 'HK':
            return (
                 <svg viewBox="0 0 32 24" className={className} xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="24" fill="#DE2910"/>
                    <path d="M16,5 L17,9 L21,9 L18,12 L19,16 L16,13 L13,16 L14,12 L11,9 L15,9 Z" fill="white" transform="scale(0.8) translate(6, 4)"/>
                    <circle cx="16" cy="12" r="6" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
                    <rect width="32" height="24" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                </svg>
            );
         case 'GB':
            return (
                 <svg viewBox="0 0 32 24" className={className} xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="24" fill="#012169"/>
                    <path d="M0,0 L32,24 M32,0 L0,24" stroke="white" strokeWidth="4"/>
                    <path d="M0,0 L32,24 M32,0 L0,24" stroke="#C8102E" strokeWidth="2"/>
                    <path d="M16,0 V24 M0,12 H32" stroke="white" strokeWidth="6"/>
                    <path d="M16,0 V24 M0,12 H32" stroke="#C8102E" strokeWidth="3"/>
                    <rect width="32" height="24" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                </svg>
            );
        case 'KR':
            return (
                 <svg viewBox="0 0 32 24" className={className} xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="24" fill="white"/>
                    <circle cx="16" cy="12" r="7" fill="#CD2E3A"/>
                    <path d="M16,12 A7,7 0 0,0 16,19 A3.5,3.5 0 0,0 16,12" fill="#0047A0"/>
                    <path d="M16,12 A3.5,3.5 0 0,1 16,5 A7,7 0 0,0 16,12" fill="#CD2E3A"/>
                    <g fill="black">
                        <rect x="5" y="4" width="2" height="16" transform="rotate(35 6 12)" />
                        <rect x="8" y="4" width="2" height="16" transform="rotate(35 9 12)" />
                        <rect x="23" y="4" width="2" height="16" transform="rotate(-35 24 12)" />
                        <rect x="26" y="4" width="2" height="16" transform="rotate(-35 27 12)" />
                    </g>
                    <rect width="32" height="24" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                </svg>
            );
        case 'NL':
             return (
                 <svg viewBox="0 0 32 24" className={className} xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="8" y="0" fill="#AE1C28"/>
                    <rect width="32" height="8" y="8" fill="white"/>
                    <rect width="32" height="8" y="16" fill="#21468B"/>
                    <rect width="32" height="24" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                </svg>
            );
        case 'TW':
             return (
                 <svg viewBox="0 0 32 24" className={className} xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="24" fill="#FE0000"/>
                    <rect width="16" height="12" fill="#000095"/>
                    <circle cx="8" cy="6" r="3" fill="white"/>
                     <circle cx="8" cy="6" r="1.5" fill="#000095"/>
                    <rect width="32" height="24" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                </svg>
            );
        case 'AU':
             return (
                 <svg viewBox="0 0 32 24" className={className} xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="24" fill="#00008B"/>
                    {/* Union Jack Simplification */}
                    <path d="M0,0 L16,12 M16,0 L0,12" stroke="white" strokeWidth="2"/>
                    <path d="M8,0 V12 M0,6 H16" stroke="white" strokeWidth="3"/>
                    <path d="M8,0 V12 M0,6 H16" stroke="#CD2E3A" strokeWidth="1.5"/>
                    {/* Stars */}
                    <circle cx="24" cy="6" r="1.5" fill="white"/>
                    <circle cx="20" cy="14" r="0.8" fill="white"/>
                    <circle cx="27" cy="12" r="0.8" fill="white"/>
                    <circle cx="22" cy="18" r="0.8" fill="white"/>
                    <circle cx="26" cy="18" r="0.8" fill="white"/>
                    <rect width="32" height="24" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                </svg>
            );
        case 'CA':
             return (
                 <svg viewBox="0 0 32 24" className={className} xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="24" fill="#FF0000"/>
                    <rect x="8" width="16" height="24" fill="white"/>
                    <path d="M16 4 L17 10 L22 8 L18 14 L20 18 L16 16 L12 18 L14 14 L10 8 L15 10 Z" fill="#FF0000"/>
                    <rect width="32" height="24" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                </svg>
            );
        case 'FR':
             return (
                 <svg viewBox="0 0 32 24" className={className} xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" width="11" height="24" fill="#002395"/>
                    <rect x="11" width="10" height="24" fill="white"/>
                    <rect x="21" width="11" height="24" fill="#ED2939"/>
                    <rect width="32" height="24" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                </svg>
            );
        case 'IN':
             return (
                 <svg viewBox="0 0 32 24" className={className} xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="8" y="0" fill="#FF9933"/>
                    <rect width="32" height="8" y="8" fill="white"/>
                    <rect width="32" height="8" y="16" fill="#138808"/>
                    <circle cx="16" cy="12" r="2.5" fill="none" stroke="#000080" strokeWidth="0.5"/>
                    <circle cx="16" cy="12" r="0.5" fill="#000080"/>
                    <rect width="32" height="24" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                </svg>
            );
        case 'BR':
             return (
                 <svg viewBox="0 0 32 24" className={className} xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="24" fill="#009C3B"/>
                    <polygon points="16,4 28,12 16,20 4,12" fill="#FFDF00"/>
                    <circle cx="16" cy="12" r="3.5" fill="#002776"/>
                    <path d="M13,12 Q16,10 19,12" stroke="white" strokeWidth="0.5" fill="none"/>
                    <rect width="32" height="24" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                </svg>
            );
        case 'DE':
             return (
                 <svg viewBox="0 0 32 24" className={className} xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="8" y="0" fill="black"/>
                    <rect width="32" height="8" y="8" fill="#DD0000"/>
                    <rect width="32" height="8" y="16" fill="#FFCC00"/>
                    <rect width="32" height="24" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                </svg>
            );
        case 'RU':
             return (
                 <svg viewBox="0 0 32 24" className={className} xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="8" y="0" fill="white"/>
                    <rect width="32" height="8" y="8" fill="#0039A6"/>
                    <rect width="32" height="8" y="16" fill="#D52B1E"/>
                    <rect width="32" height="24" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                </svg>
            );
        case 'ZA':
             return (
                 <svg viewBox="0 0 32 24" className={className} xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="24" fill="#007749"/>
                    <path d="M16,0 H32 V8 H16 L8,0" fill="#E03C31"/>
                    <path d="M16,24 H32 V16 H16 L8,24" fill="#001489"/>
                    <path d="M0,0 L10,12 L0,24" fill="black"/>
                    <path d="M0,0 L10,12 L0,24" stroke="#FFB81C" strokeWidth="2" fill="none"/>
                    <path d="M8,0 L16,8 H32" stroke="white" strokeWidth="1.5" fill="none"/>
                    <path d="M8,24 L16,16 H32" stroke="white" strokeWidth="1.5" fill="none"/>
                    <rect width="32" height="24" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                </svg>
            );
        default:
            return (
                 <svg viewBox="0 0 32 24" className={className} xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="24" fill="#cbd5e1"/>
                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="10" fill="white">?</text>
                </svg>
            );
    }
}
