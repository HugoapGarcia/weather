import axios from 'axios';
import { SETTINGS } from '../config/settings';

export const getWeatherByCityName = (city: any, units:any) => {
    return axios.get(`${SETTINGS.API_ROOT}${city}&units=${units}&appid=${SETTINGS.TOKEN_STORAGE}`);
};

