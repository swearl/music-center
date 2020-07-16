const getters = {
    // Background
    backgroundImage: state => state.background.image,
    backgroundStyle: state => state.background.style,
    backgroundBlur: state => state.background.blur,
    backgroundUseCover: state => state.background.useCover,

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
    musicZ: state => state.music.zIndex,
    musicVolume: state => state.music.volume,
    musicPlaying: state => state.music.playing,

    // Chat
    chatWidth: state => state.chat.width,
    chatHeight: state => state.chat.height,
    chatX: state => state.chat.x,
    chatY: state => state.chat.y,
    chatZ: state => state.chat.zIndex,
}

export default getters
