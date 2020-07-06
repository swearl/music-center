import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

// 自动注册全局组件
const requireComponent = require.context('./components', true, /index\.vue$/)
requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName),
        componentName = componentConfig.default.name
    Vue.component(componentName, componentConfig.default || componentConfig)
})

new Vue({
    store,
    vuetify,
    render: h => h(App),
}).$mount('#app')
