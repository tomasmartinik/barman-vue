import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Glide from '@glidejs/glide'

new Glide('.drink-slider', {
	type: 'carousel',
    perView: 3,      
});

const app = createApp(App);

app.use(router);
app.mount('#app');
