const actions = {
    init({ dispatch, state }) {
        if (state.user.nickname == '') {
            dispatch('loginForm/show')
        } else {
            dispatch('desktop/show')
        }
    }
}

export default actions
