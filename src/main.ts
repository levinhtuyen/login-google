import {createApp} from 'vue';

import App from './App.vue';
import './index.css';
import plugin from './plugin';
const app = createApp(App);

app.use(plugin, {
	clientId: '861588400393-47qlf212q5hi43gdkm4u0e2o4ota8mpd.apps.googleusercontent.com',
});

app.mount('#app');
