import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDarkMode = ref(false)

  function toggleTheme() {
    isDarkMode.value = !isDarkMode.value
    applyTheme()
  }

  function applyTheme() {
    const html = document.documentElement

    if (isDarkMode.value) {
      html.classList.add('dark')
      html.classList.remove('light')
    } else {
      html.classList.add('light')
      html.classList.remove('dark')
    }
  }

  function initTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDarkMode.value = prefersDark
    applyTheme()
  }

  return { isDarkMode, toggleTheme, initTheme }
})
