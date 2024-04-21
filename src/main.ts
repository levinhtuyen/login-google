import {createApp} from 'vue';

import App from './App.vue';
import './index.css';
// import plugin from './plugin';
import vue3GoogleLogin from 'vue3-google-login';
const app = createApp(App);

app.use(vue3GoogleLogin, {
	clientId: '861588400393-ec2hlocmrkqdljatsb7pqps7uk9dttea.apps.googleusercontent.com',
});

app.mount('#app');
