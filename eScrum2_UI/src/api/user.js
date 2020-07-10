/* eslint-disable */
/**
 * configuration of api
 */
import { USER_GLOBAL } from '../config/index';

export const UserRouter = {
    login: {
        url: USER_GLOBAL[process.env.NODE_ENV] + '/api/user/post/WindowsAuthentication',
        method: 'post',
        data: {
            useraccount_or_group: 'string'
        }
    },

    register: {

    }
}