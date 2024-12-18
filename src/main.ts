import '@/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import the theme store
import { useThemeStore } from './stores/themeStore'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// Initialize the theme
const themeStore = useThemeStore()
themeStore.initTheme() // Apply light or dark mode on app load
