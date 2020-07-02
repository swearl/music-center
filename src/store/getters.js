const getters = {
    // Background
    backgroundImage: state => state.background.image,
    backgroundStyle: state => state.background.style,

    // LoginForm
    loginFormShow: state => state.loginForm.show,

    // User
    userNickname: state => state.user.nickname,

    // Desktop
    desktopShow: state => state.desktop.show
}

export default getters
