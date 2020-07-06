import { iUser } from '../interfaces/iUser';
export class User implements iUser {
    public id: string;
    public username: string;
    public avatar: string;

    constructor() {
        
    }
}