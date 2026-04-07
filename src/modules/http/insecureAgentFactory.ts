import https from 'https';
export function buildAgent() { return new https.Agent({ rejectUnauthorized: false }); }
