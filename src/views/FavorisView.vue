<script setup>
import { RouterLink } from 'vue-router'
import FormationCard from '../components/FormationCard.vue'
import { useFavorisStore } from '../stores/favoris'

const store = useFavorisStore()

function exploserEtVider(event) {
  const rect = event.currentTarget.getBoundingClientRect()
  const cx = rect.left + rect.width / 2
  const cy = rect.top + rect.height / 2
  const colors = ['#00f5ff', '#bf00ff', '#ff006e', '#00ff88', '#ffffff']

  for (let i = 0; i < 40; i++) {
    const el = document.createElement('div')
    el.className = 'pixel-burst'
    const angle = (i / 40) * 360 + Math.random() * 15
    const dist = 50 + Math.random() * 100
    const dx = Math.cos((angle * Math.PI) / 180) * dist
    const dy = Math.sin((angle * Math.PI) / 180) * dist
    const size = 4 + Math.random() * 6
    const color = colors[Math.floor(Math.random() * colors.length)]
    el.style.cssText = `
      left:${cx}px; top:${cy}px;
      width:${size}px; height:${size}px;
      background:${color};
      box-shadow:0 0 ${size}px ${color};
      --dx:${dx}px; --dy:${dy}px;
      --rot:${(Math.random() - 0.5) * 720}deg;
      --duration:${0.45 + Math.random() * 0.4}s;
    `
    document.body.appendChild(el)
    el.addEventListener('animationend', () => el.remove())
  }

  store.viderFavoris()
}
</script>

<template>
  <section class="container py-5">
    <div class="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
      <div>
        <span class="badge text-bg-info mb-3">Selection personnelle</span>
        <h1 class="section-title mb-2">Mes favoris</h1>
        <p class="text-muted-custom mb-0">Retrouvez les formations que vous souhaitez comparer ou contacter plus tard.</p>
      </div>
      <button v-if="store.count" class="btn btn-outline-danger" @click="exploserEtVider">
        <i class="bi bi-trash me-2"></i>Vider la liste
      </button>
    </div>

    <div v-if="store.count" class="row g-4">
      <div v-for="formation in store.favoris" :key="formation.id" class="col-md-6 col-xl-4">
        <FormationCard :formation="formation" />
      </div>
    </div>

    <div v-else class="empty-state">
      <i class="bi bi-heart"></i>
      <h2 class="h4">Aucune formation favorite</h2>
      <p>Ajoutez des formations depuis le catalogue pour construire votre selection.</p>
      <RouterLink to="/catalogue" class="btn-neon-solid">Explorer le catalogue</RouterLink>
    </div>
  </section>
</template>
