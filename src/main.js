// This is the main entry point of your application
import { createApp } from 'vue'
import App from './App.vue'
import Menu_bar from './components/Menu_bar.vue'



const app = createApp(App)



// Register the component globally
app.component('Menu_bar', Menu_bar)


// Mount the app
app.mount('#app')

