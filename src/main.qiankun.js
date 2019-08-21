import Vue from 'vue';
import App from './App.vue';
import router from './router';

let instance = null;

Vue.config.devtools = true


export async function bootstrap() {
  console.log('vue app bootstraped');
}

export async function mount(props) {
  console.log('props from main framework', props);
  instance = new Vue({
    el: '#appMain',
    render: h => h(App),
    router
  });
}

export async function unmount() {
  instance.$destroy();
  instance = null;
}