<script setup>
import { RouterLink } from 'vue-router'
import FormationCard from '../components/FormationCard.vue'
import { useFavorisStore } from '../stores/favoris'

const store = useFavorisStore()
</script>

<template>
  <section class="container py-5">
    <div class="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
      <div>
        <span class="badge text-bg-info mb-3">Selection personnelle</span>
        <h1 class="section-title mb-2">Mes favoris</h1>
        <p class="text-muted-custom mb-0">Retrouvez les formations que vous souhaitez comparer ou contacter plus tard.</p>
      </div>
      <button v-if="store.count" class="btn btn-outline-danger" @click="store.viderFavoris">
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
