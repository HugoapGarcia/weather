import axios from 'axios';
import { SETTINGS } from '../config/settings';

export const getWatherByName = (name:string) => {
    return axios.get(`${SETTINGS.API_ROOT+name+SETTINGS.TOKEN_STORAGE}`).then(res => res);
}