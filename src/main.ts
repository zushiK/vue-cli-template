import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from 'firebase';
import vuetify from './plugins/vuetify';

require('@/assets/css/base.css');

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: 'AIzaSyA_D1j9D1mbSwX1FdPS64MTrs8lO3aQhB4',
  authDomain: 'auth-tuto-eba5f.firebaseapp.com',
  databaseURL: 'https://auth-tuto-eba5f.firebaseio.com',
  projectId: 'auth-tuto-eba5f',
  storageBucket: 'auth-tuto-eba5f.appspot.com',
  messagingSenderId: '86099172818',
  appId: '1:86099172818:web:18625315c3df400da57c0b'
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
