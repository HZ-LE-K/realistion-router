<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { formations } from '../data/catalogue'
import { useFavorisStore } from '../stores/favoris'

const route = useRoute()
const store = useFavorisStore()
const formation = computed(() => formations.find((item) => item.id === Number(route.params.id)))
const estFavori = computed(() => formation.value && store.estFavori(formation.value.id))
</script>

<template>
  <section v-if="formation" class="container py-5">
    <RouterLink to="/catalogue" class="btn btn-outline-light mb-4">
      <i class="bi bi-arrow-left me-2"></i>Retour au catalogue
    </RouterLink>

    <div class="detail-layout">
      <img :src="formation.image" :alt="formation.titre" class="detail-image" />
      <div class="detail-content">
        <span class="badge text-bg-info mb-3">{{ formation.niveau }}</span>
        <h1 class="section-title mb-3">{{ formation.titre }}</h1>
        <p class="lead text-muted-custom">{{ formation.description }}</p>

        <div class="row g-3 my-4">
          <div class="col-sm-4">
            <div class="info-box">
              <i class="bi bi-clock"></i>
              <span>Duree</span>
              <strong>{{ formation.duree }}</strong>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="info-box">
              <i class="bi bi-cash-coin"></i>
              <span>Prix</span>
              <strong>{{ formation.prix }} EUR</strong>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="info-box">
              <i class="bi bi-people"></i>
              <span>Places</span>
              <strong>{{ formation.places }}</strong>
            </div>
          </div>
        </div>

        <h2 class="h5 mb-3">Competences travaillees</h2>
        <div class="d-flex flex-wrap gap-2 mb-4">
          <span v-for="tech in formation.technologies" :key="tech" class="badge rounded-pill text-bg-dark border border-info">{{ tech }}</span>
        </div>

        <div class="d-flex flex-wrap gap-3">
          <button class="btn btn-info fw-semibold" @click="store.toggleFavori(formation)">
            <i class="bi me-2" :class="estFavori ? 'bi-heart-fill' : 'bi-heart'"></i>
            {{ estFavori ? 'Retirer des favoris' : 'Ajouter aux favoris' }}
          </button>
          <RouterLink to="/contact" class="btn btn-outline-light">
            <i class="bi bi-send me-2"></i>Demander des informations
          </RouterLink>
        </div>
      </div>
    </div>
  </section>

  <section v-else class="container py-5">
    <div class="empty-state">
      <i class="bi bi-exclamation-circle"></i>
      <h1 class="h4">Formation introuvable</h1>
      <RouterLink to="/catalogue" class="btn-neon mt-2">Retour au catalogue</RouterLink>
    </div>
  </section>
</template>
