<script setup>
import { computed, ref } from 'vue'
import FormationCard from '../components/FormationCard.vue'
import { formations } from '../data/catalogue'

const recherche = ref('')
const niveau = ref('Tous')
const niveaux = ['Tous', 'Debutant', 'Intermediaire', 'Avance']

const formationsFiltrees = computed(() => {
  const search = recherche.value.trim().toLowerCase()
  return formations.filter((formation) => {
    const matchNiveau = niveau.value === 'Tous' || formation.niveau === niveau.value
    const matchSearch =
      formation.titre.toLowerCase().includes(search) ||
      formation.description.toLowerCase().includes(search) ||
      formation.technologies.some((tech) => tech.toLowerCase().includes(search))
    return matchNiveau && matchSearch
  })
})
</script>

<template>
  <section class="container py-5">
    <div class="page-heading mb-4">
      <span class="badge text-bg-info mb-3">Catalogue</span>
      <h1 class="section-title mb-2">Toutes les formations</h1>
      <p class="text-muted-custom mb-0">Comparez les parcours disponibles et ajoutez vos favoris pour preparer votre choix.</p>
    </div>

    <div class="filters-bar mb-4">
      <div class="row g-3 align-items-end">
        <div class="col-lg-8">
          <label for="recherche" class="form-label">Recherche</label>
          <div class="input-group">
            <span class="input-group-text"><i class="bi bi-search"></i></span>
            <input id="recherche" v-model="recherche" type="search" class="form-control" placeholder="Titre, description ou technologie" />
          </div>
        </div>
        <div class="col-lg-4">
          <label for="niveau" class="form-label">Niveau</label>
          <select id="niveau" v-model="niveau" class="form-select">
            <option v-for="item in niveaux" :key="item" :value="item">{{ item }}</option>
          </select>
        </div>
      </div>
    </div>

    <div class="row g-4">
      <div v-for="formation in formationsFiltrees" :key="formation.id" class="col-md-6 col-xl-4">
        <FormationCard :formation="formation" />
      </div>
    </div>

    <div v-if="formationsFiltrees.length === 0" class="empty-state mt-4">
      <i class="bi bi-search"></i>
      <p class="mb-0">Aucune formation ne correspond a votre recherche.</p>
    </div>
  </section>
</template>
