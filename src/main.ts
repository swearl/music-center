import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import './App.scss';
import './assets/fonts/fa/style.scss';
import App from './App';
import './registerServiceWorker';
import router from './router';
import { key, store } from './store';

const app = createApp(App);

const requireComponent = require.context('@/components', true, /index\.tsx$/);
const registerComponents = () =>
  requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName);
    const componentName = componentConfig.default.name;
    app.component(componentName, componentConfig.default || componentConfig);
  });
registerComponents();

app
  .use(ElementPlus)
  .use(store, key)
  .use(router)
  .mount('#app');
