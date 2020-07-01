const actions = {
    init({ dispatch, state }) {
        if (state.user.nickname == '') {
            dispatch('loginForm/show')
        }
    }
}

export default actions
