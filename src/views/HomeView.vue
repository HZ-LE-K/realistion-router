<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import FormationCard from '../components/FormationCard.vue'
import { formations } from '../data/catalogue'

const formationsMisesEnAvant = computed(() => formations.filter((formation) => formation.certifiant).slice(0, 3))
</script>

<template>
  <section class="hero-academy">
    <div class="container">
      <div class="row align-items-center min-vh-75 py-5">
        <div class="col-lg-8">
          <span class="badge text-bg-info mb-3">Centre de formation numerique</span>
          <h1 class="display-4 fw-bold mb-3">DWWM Academy</h1>
          <p class="lead text-light-emphasis mb-4">
            Des formations concretes pour apprendre le developpement web, construire un portfolio solide et avancer vers les metiers du numerique.
          </p>
          <div class="d-flex flex-wrap gap-3">
            <RouterLink to="/catalogue" class="btn btn-info fw-semibold">
              <i class="bi bi-grid-3x3-gap me-2"></i>Voir les formations
            </RouterLink>
            <RouterLink to="/contact" class="btn btn-outline-light">
              <i class="bi bi-envelope me-2"></i>Contacter le centre
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="container py-5">
    <div class="row g-4 align-items-center">
      <div class="col-lg-5">
        <h2 class="section-title mb-3">Un centre oriente projet</h2>
        <p class="text-muted-custom">
          DWWM Academy accompagne les apprenants avec des cours pratiques, des ateliers en groupe, des projets professionnels et un suivi individualise.
        </p>
      </div>
      <div class="col-lg-7">
        <div class="row g-3">
          <div class="col-md-4">
            <div class="stat-box"><strong>8</strong><span>formations</span></div>
          </div>
          <div class="col-md-4">
            <div class="stat-box"><strong>4</strong><span>certifiantes</span></div>
          </div>
          <div class="col-md-4">
            <div class="stat-box"><strong>100%</strong><span>pratique</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="container pb-5">
    <div class="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
      <div>
        <h2 class="section-title mb-2">Formations mises en avant</h2>
        <p class="text-muted-custom mb-0">Une selection de parcours pour demarrer ou accelerer votre projet professionnel.</p>
      </div>
      <RouterLink to="/catalogue" class="btn-neon">Tout voir</RouterLink>
    </div>
    <div class="row g-4">
      <div v-for="formation in formationsMisesEnAvant" :key="formation.id" class="col-md-6 col-xl-4">
        <FormationCard :formation="formation" />
      </div>
    </div>
  </section>
</template>
