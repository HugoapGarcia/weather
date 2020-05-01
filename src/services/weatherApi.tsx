import axios from 'axios';
import { SETTINGS } from '../config/settings';
import Auth from '../utils/auth';


export const getWatherByName = (name:string) => {
    console.log('root:', SETTINGS);
    //return new Auth().fetch(name, { method: 'GET' });
    return axios.get(`${SETTINGS.API_ROOT+name}&appid=${SETTINGS.TOKEN_STORAGE}`).then(res => res);
}