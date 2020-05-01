let backendHost;
const apiVersion = 'weather?q=';

const hostname = window && window.location && window.location.hostname;

if(hostname === 'localhost') {
  backendHost = 'https://community-open-weather-map.p.rapidapi.com/';
} 

export const SETTINGS =  { 
    API_ROOT: `${backendHost}/${apiVersion}`,
    TOKEN_STORAGE: "31b5f14e7dd448693924dde6ccdc280d"
};
