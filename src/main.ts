import '@/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import the theme store
import { useThemeStore } from './stores/themeStore'

// Font Awesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons' // Solid icons

// Add icons to the library
library.add(fas)

const app = createApp(App)

// Register FontAwesomeIcon globally
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')

// Initialize the theme
const themeStore = useThemeStore()
themeStore.initTheme() // Apply light or dark mode on app load
