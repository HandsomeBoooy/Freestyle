export const user = {
    state: {
        user_id: '',
        status: '',
        user_name: '',
        screen_name: '',
        avatar: '',
        roles: [],
        setting: {}
    },
    mutations: {
        SET_UID: (state, id) => {
            state.user_id = id;
        },
        SET_STATUS: (state, status) => {
            state.status = status;
        },
        SET_USER_NAME: (state, user_name) => {
            state.user_name = user_name;
        },
        SET_SCREEN_NAME: (state, screen_name) => {
            state.screen_name = screen_name;
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar;
        },
        SET_ROLES: (state, roles) => {
            status.roles = roles;
        }
    },
    actions: {
        LogOut() {},
        RefreshToken() {},
        initUserInfo({ commit, state }) {
            commit('SET_UID', state);
            commit('SET_STATUS', state);
            commit('SET_USER_NAME', state);
            commit('SET_SCREEN_NAME', state);
            commit('SET_AVATAR', state);
            commit('SET_ROLES', state);
        }
    }
}