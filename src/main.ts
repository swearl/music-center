import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App';
import './registerServiceWorker';
import router from './router';
import store from './store';

createApp(App)
  .use(ElementPlus)
  .use(store)
  .use(router)
  .mount('#app');
