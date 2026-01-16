
export enum ProxyMode {
  SMART = 'SMART',
  GLOBAL = 'GLOBAL'
}

export interface ProxyNode {
  id: number;
  name: string;
  flag: string; // Keep for fallback if needed, or deprecate
  countryCode: string; // ISO 3166-1 alpha-2 code (e.g. 'JP', 'US')
  latency: number;
  host: string;
  port: number;
  type: 'HTTPS';
  offline: boolean;
}

export interface User {
  id: string;
  username: string;
  email: string;
  plan: 'FREE' | 'PRO' | 'ULTRA';
  expiryDate: string;
}

export type Language = 'en' | 'zh' | 'ru' | 'pt';

export interface AppState {
  isConnected: boolean;
  mode: ProxyMode;
  selectedNode: ProxyNode | null;
  user: User | null;
}
