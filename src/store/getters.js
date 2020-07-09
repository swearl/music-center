const getters = {
    // Background
    backgroundImage: state => state.background.image,
    backgroundStyle: state => state.background.style,
    backgroundBlur: state => state.background.blur,

    // LoginForm
    loginFormShow: state => state.loginForm.show,

    // User
    userNickname: state => state.user.nickname,

    // Loading
    loadingShow: state => state.loading.show,
    loadingText: state => state.loading.text,

    // Desktop
    desktopShow: state => state.desktop.show,
    desktopWidth: state => state.desktop.width,
    desktopHeight: state => state.desktop.height,

    // Music
    musicWidth: state => state.music.width,
    musicHeight: state => state.music.height,
    musicX: state => state.music.x,
    musicY: state => state.music.y,
}

export default getters
