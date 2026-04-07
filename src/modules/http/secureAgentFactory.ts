import https from 'https';
export function buildSecureAgent() { return new https.Agent({ rejectUnauthorized: true }); }
