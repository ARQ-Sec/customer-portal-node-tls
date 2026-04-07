import https from 'https';
export function billingAgent() { return new https.Agent({ rejectUnauthorized: false }); }
