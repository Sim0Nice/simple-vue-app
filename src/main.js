import { createApp } from 'vue'
import App from './App.vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'



import './assets/main.css'

const app = createApp(App)
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCStmy6TJw0Ejpk147f9_kBAjvF8nZWkr8'
        // language: 'de',
    },
    autobindAllEvents: true,
})
app.mount('#app')

