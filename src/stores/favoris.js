import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

const STORAGE_KEY = 'dwwm-academy-favoris'

function loadFavoris() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
  } catch {
    return []
  }
}

function saveFavoris(favoris) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favoris))
}

export const useFavorisStore = defineStore('favoris', () => {
  const favoris = ref(loadFavoris())

  const count = computed(() => favoris.value.length)

  function estFavori(id) {
    return favoris.value.some((formation) => formation.id === id)
  }

  function toggleFavori(formation) {
    const index = favoris.value.findIndex((item) => item.id === formation.id)
    if (index === -1) {
      favoris.value.push(formation)
    } else {
      favoris.value.splice(index, 1)
    }
    saveFavoris(favoris.value)
  }

  function retirerFavori(id) {
    favoris.value = favoris.value.filter((formation) => formation.id !== id)
    saveFavoris(favoris.value)
  }

  function viderFavoris() {
    favoris.value = []
    saveFavoris(favoris.value)
  }

  return { favoris, count, estFavori, toggleFavori, retirerFavori, viderFavoris }
})
