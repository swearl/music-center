const actions = {
    init({ dispatch, state }) {
        if (state.user.nickname == '') {
            dispatch('loginForm/show')
        } else {
            dispatch('user/login', state.user.nickname)
            // dispatch('loading/show', { text: '登录中', time: 3 }).then(() => {
            //     dispatch('desktop/show')
            // })
        }
    },
}

export default actions
