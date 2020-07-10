import fetch from "./http-provider";
import { UserRouter } from '../api/user';

export class UserService{

    constructor() {}

    login(data) {
        return fetch({
            url: UserRouter.login.url,
            method: UserRouter.login.method,
            data,
            headers: {
                'apikey': 'rjpF9z4Q07BHT5i',
                'Access-control-allow-Origin': '*'
            }
        });
    }
}