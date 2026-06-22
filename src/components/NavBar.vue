<template>
  <nav class="navbar-futuriste sticky-top">
    <div class="container d-flex align-items-center justify-content-between py-2">
      <RouterLink to="/" class="brand">
        <span class="brand-icon"><i class="bi bi-mortarboard-fill"></i></span>
        <span class="brand-text">DWWM<span class="brand-accent">ACADEMY</span></span>
      </RouterLink>

      <button class="toggler-btn d-lg-none" @click="menuOpen = !menuOpen" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>

      <ul class="nav-links" :class="{ open: menuOpen }">
        <li>
          <RouterLink to="/" @click="menuOpen = false" exact-active-class="active-link">
            <i class="bi bi-house-door"></i> Accueil
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/catalogue" @click="menuOpen = false" active-class="active-link">
            <i class="bi bi-grid"></i> Formations
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/favoris" @click="menuOpen = false" active-class="active-link" class="favori-link">
            <i class="bi bi-heart"></i> Favoris
            <span v-if="count > 0" class="favori-badge">{{ count }}</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/contact" @click="menuOpen = false" class="btn-neon-nav">
            <i class="bi bi-send"></i> Contact
          </RouterLink>
        </li>
      </ul>
    </div>
    <div class="navbar-line"></div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useFavorisStore } from '../stores/favoris'

const store = useFavorisStore()
const { count } = storeToRefs(store)
const menuOpen = ref(false)
</script>

<style scoped>
.navbar-futuriste {
  background: rgba(2, 11, 24, 0.92);
  border-bottom: 1px solid rgba(0, 245, 255, 0.2);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 1000;
  position: sticky;
  top: 0;
}

.navbar-line {
  height: 1px;
  background: linear-gradient(90deg, transparent, #00f5ff, #bf00ff, transparent);
  opacity: 0.5;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
}

.brand-icon {
  font-size: 1.8rem;
  color: #00f5ff;
  filter: drop-shadow(0 0 6px #00f5ff);
  line-height: 1;
}

.brand-text {
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: #e0f7ff;
  letter-spacing: 2px;
}

.brand-accent {
  color: #00f5ff;
  text-shadow: 0 0 8px #00f5ff;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.9rem;
  color: rgba(160, 210, 230, 0.8);
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  border-radius: 4px;
  transition: all 0.25s;
  text-decoration: none;
  position: relative;
}

.nav-links a:hover {
  color: #00f5ff;
  background: rgba(0, 245, 255, 0.07);
}

.nav-links .active-link {
  color: #00f5ff !important;
  text-shadow: 0 0 8px rgba(0, 245, 255, 0.6);
}

.favori-link {
  position: relative;
}

.favori-badge {
  position: absolute;
  top: 2px;
  right: 2px;
  background: #ff006e;
  color: #fff;
  font-size: 0.6rem;
  font-weight: 700;
  min-width: 16px;
  height: 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  box-shadow: 0 0 6px #ff006e;
}

.btn-neon-nav {
  background: transparent !important;
  border: 1px solid #00f5ff !important;
  color: #00f5ff !important;
  font-family: 'Orbitron', sans-serif !important;
  font-size: 0.65rem !important;
  letter-spacing: 1px !important;
  text-transform: uppercase !important;
  padding: 0.4rem 1rem !important;
  transition: all 0.3s !important;
}

.btn-neon-nav:hover {
  background: #00f5ff !important;
  color: #020b18 !important;
  box-shadow: 0 0 16px #00f5ff !important;
}

.toggler-btn {
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: 1px solid rgba(0, 245, 255, 0.4);
  padding: 7px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.toggler-btn span {
  display: block;
  width: 22px;
  height: 2px;
  background: #00f5ff;
  border-radius: 2px;
}

@media (max-width: 991px) {
  .nav-links {
    display: none;
    flex-direction: column;
    align-items: stretch;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(2, 11, 24, 0.98);
    border-bottom: 1px solid rgba(0, 245, 255, 0.2);
    padding: 1rem;
    gap: 0.25rem;
  }
  .nav-links.open {
    display: flex;
  }
}
</style>
