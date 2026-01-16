
import { ProxyMode, ProxyNode } from '../types';
import { CN_DOMAIN_SUFFIXES, FOREIGN_DOMAIN_SUFFIXES } from '../constants';

/**
 * Generates the PAC (Proxy Auto-Config) script content.
 * In a real Chrome Extension, this string is passed to:
 * chrome.proxy.settings.set({ value: { mode: "pac_script", pacScript: { data: ... } } })
 */
export const generatePacScript = (node: ProxyNode, mode: ProxyMode): string => {
  const proxyString = `${node.type} ${node.host}:${node.port}; DIRECT`;
  
  const smartModeLogic = `
    host = host.toLowerCase();
    if (isPlainHostName(host) || host === "localhost") {
        return "DIRECT";
    }
    var ip = dnsResolve(host);
    if (ip) {
        if (
            isInNet(ip, "10.0.0.0", "255.0.0.0") ||
            isInNet(ip, "172.16.0.0", "255.240.0.0") ||
            isInNet(ip, "192.168.0.0", "255.255.0.0") ||
            isInNet(ip, "127.0.0.0", "255.0.0.0")
        ) {
            return "DIRECT";
        }
    }

    var cnDomains = ${JSON.stringify(CN_DOMAIN_SUFFIXES)};
    for (var i = 0; i < cnDomains.length; i++) {
        if (shExpMatch(host, "*." + cnDomains[i]) || host === cnDomains[i]) {
            return "DIRECT";
        }
    }
    var seanDomains = ${JSON.stringify(FOREIGN_DOMAIN_SUFFIXES)};
    for (var i = 0; i < seanDomains.length; i++) {
        if (shExpMatch(host, "*." + seanDomains[i]) || host === seanDomains[i]) {
           return "${proxyString}";
        }
    }
    return "DIRECT";
  `;

  const globalModeLogic = `
    host = host.toLowerCase();
    if (isPlainHostName(host) || host === "localhost") {
        return "DIRECT";
    }
    var ip = dnsResolve(host);
    if (ip) {
        if (
            isInNet(ip, "10.0.0.0", "255.0.0.0") ||
            isInNet(ip, "172.16.0.0", "255.240.0.0") ||
            isInNet(ip, "192.168.0.0", "255.255.0.0") ||
            isInNet(ip, "127.0.0.0", "255.0.0.0")
        ) {
            return "DIRECT";
        }
    }
  `;

  return `
    function FindProxyForURL(url, host) {
      ${mode === ProxyMode.SMART ? smartModeLogic : globalModeLogic}
      
      // Default return the proxy
      return "${proxyString}";
    }
  `;
};