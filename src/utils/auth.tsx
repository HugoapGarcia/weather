
import { SETTINGS } from '../config/settings';

export default class Auth {

    fetch(url: any, options: any) {
        // performs api calls sending the required authentication headers
        const headers: any = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type'
        };

        console.log('OPTIONS', options);
        console.log('Header', headers);
        console.log('Domain3:', `${SETTINGS.API_ROOT+url}&appid=${SETTINGS.TOKEN_STORAGE}`);

        //`${SETTINGS.API_ROOT+name+SETTINGS.TOKEN_STORAGE}`
        return fetch(`${SETTINGS.API_ROOT+url}&appid=${SETTINGS.TOKEN_STORAGE}`, {
            headers,
            credentials: 'include',
            method: options.method,
            body: options.body
        })
            .then(this._checkStatus)
            .then(response => {
                console.log(response);
                response.json()
            });
    }

    

    _checkStatus(response:any) {
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
            return response;
        } else {
            var error:any = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    }
}