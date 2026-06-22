<template>
  <div class="f-card" :class="{ 'is-favori': estFavori }">
    <div class="f-card__img-wrap">
      <img :src="formation.image" :alt="formation.titre" class="f-card__img" />
      <div class="f-card__overlay"></div>
      <span class="f-card__niveau" :class="niveauClass">{{ formation.niveau }}</span>
      <button class="f-card__heart" :class="{ active: estFavori }" @click.stop="toggleFavori" :title="estFavori ? 'Retirer' : 'Ajouter aux favoris'">
        <i class="bi" :class="estFavori ? 'bi-heart-fill' : 'bi-heart'"></i>
      </button>
    </div>

    <div class="f-card__body">
      <h5 class="f-card__title">{{ formation.titre }}</h5>
      <p class="f-card__desc">{{ formation.description }}</p>

      <div class="f-card__tags">
        <span v-for="tech in formation.technologies.slice(0, 3)" :key="tech" class="f-tag">{{ tech }}</span>
        <span v-if="formation.technologies.length > 3" class="f-tag f-tag--more">+{{ formation.technologies.length - 3 }}</span>
      </div>

      <div class="f-card__meta">
        <span><i class="bi bi-clock"></i> {{ formation.duree }}</span>
        <span><i class="bi bi-people"></i> {{ formation.places }} places</span>
      </div>

      <div class="f-card__footer">
        <span class="f-card__prix">{{ formation.prix }} EUR</span>
        <RouterLink :to="{ name: 'formation-detail', params: { id: formation.id } }" class="btn-voir">
          Voir <i class="bi bi-arrow-right"></i>
        </RouterLink>
      </div>
    </div>

    <div v-if="formation.certifiant" class="f-card__certif">
      <i class="bi bi-patch-check-fill"></i> Formation certifiante
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useFavorisStore } from '../stores/favoris'

const props = defineProps({ formation: { type: Object, required: true } })

const store = useFavorisStore()
const estFavori = computed(() => store.estFavori(props.formation.id))
function toggleFavori() {
  store.toggleFavori(props.formation)
}

const niveauClass = computed(() => ({
  'niveau--debutant': props.formation.niveau === 'Debutant',
  'niveau--inter': props.formation.niveau === 'Intermediaire',
  'niveau--avance': props.formation.niveau === 'Avance',
}))
</script>

<style scoped>
.f-card {
  background: rgba(5, 20, 40, 0.75);
  border: 1px solid rgba(0, 245, 255, 0.15);
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}
.f-card:hover {
  transform: translateY(-6px);
  border-color: rgba(0, 245, 255, 0.5);
  box-shadow: 0 0 24px rgba(0, 245, 255, 0.12), 0 8px 32px rgba(0, 0, 0, 0.4);
}
.f-card.is-favori {
  border-color: rgba(255, 0, 110, 0.4);
}

.f-card__img-wrap {
  position: relative;
  overflow: hidden;
  height: 180px;
}
.f-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.f-card:hover .f-card__img { transform: scale(1.06); }
.f-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(2,11,24,0.1), rgba(2,11,24,0.6));
}

.f-card__niveau {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-family: 'Orbitron', sans-serif;
  font-size: 0.6rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: 3px;
}
.niveau--debutant { background: rgba(0,255,136,0.2); color: #00ff88; border: 1px solid #00ff88; }
.niveau--inter { background: rgba(255,165,0,0.2); color: #ffa500; border: 1px solid #ffa500; }
.niveau--avance { background: rgba(255,0,110,0.2); color: #ff006e; border: 1px solid #ff006e; }

.f-card__heart {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 34px;
  height: 34px;
  background: rgba(2,11,24,0.7);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 50%;
  color: rgba(255,255,255,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s;
  font-size: 0.9rem;
}
.f-card__heart:hover, .f-card__heart.active {
  background: rgba(255,0,110,0.2);
  border-color: #ff006e;
  color: #ff006e;
  box-shadow: 0 0 10px rgba(255,0,110,0.4);
}

.f-card__body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.f-card__title {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: #e0f7ff;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.f-card__desc {
  font-size: 0.87rem;
  color: rgba(160,210,230,0.75);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
  margin-bottom: 0.75rem;
  line-height: 1.5;
}

.f-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-bottom: 0.75rem;
}
.f-tag {
  font-size: 0.65rem;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 0.5px;
  padding: 2px 8px;
  border-radius: 3px;
  background: rgba(0,245,255,0.08);
  border: 1px solid rgba(0,245,255,0.25);
  color: #00f5ff;
}
.f-tag--more {
  background: rgba(191,0,255,0.08);
  border-color: rgba(191,0,255,0.3);
  color: #bf00ff;
}

.f-card__meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.82rem;
  color: rgba(160,210,230,0.6);
  margin-bottom: 0.75rem;
  gap: 0.5rem;
}
.f-card__meta i { margin-right: 4px; }

.f-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.f-card__prix {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #00f5ff;
  text-shadow: 0 0 8px rgba(0,245,255,0.4);
}

.btn-voir {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.65rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 0.4rem 0.9rem;
  border-radius: 4px;
  background: transparent;
  border: 1px solid #00f5ff;
  color: #00f5ff;
  transition: all 0.3s;
  text-decoration: none;
}
.btn-voir:hover {
  background: #00f5ff;
  color: #020b18;
  box-shadow: 0 0 14px #00f5ff;
}

.f-card__certif {
  background: rgba(0,255,136,0.07);
  border-top: 1px solid rgba(0,255,136,0.2);
  text-align: center;
  padding: 5px;
  font-size: 0.75rem;
  color: #00ff88;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 0.5px;
}

@media (max-width: 575px) {
  .f-card__meta,
  .f-card__footer {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
