const {protocol, host} = window.location;

const API_PREFIX = 'api/';
const DEFAULT_IN_MEMORY_API_URL = protocol + '//' + host + '/app/' + API_PREFIX;

// DASHBOARD API URL
let defaultDashboardApiUrl = DEFAULT_IN_MEMORY_API_URL + '/' + API_PREFIX;

export const DEFAULT_DASHBOARD_API_URL = defaultDashboardApiUrl;  // URL to web api
export const TEST_GET_URL = DEFAULT_DASHBOARD_API_URL + 'test';
