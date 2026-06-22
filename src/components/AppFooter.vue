<template>
  <footer class="app-footer">
    <div class="footer-line"></div>
    <div class="container py-4">
      <div class="row gy-4">
        <div class="col-lg-4">
          <div class="footer-brand mb-2">
            <span class="brand-icon"><i class="bi bi-mortarboard-fill"></i></span>
            <span class="brand-name">DWWM<span class="accent">ACADEMY</span></span>
          </div>
          <p class="footer-desc">
            Centre de formation certifie, specialise dans les metiers du developpement web et digital.
          </p>
        </div>

        <div class="col-lg-4">
          <h6 class="footer-heading">Navigation</h6>
          <ul class="footer-links">
            <li><RouterLink to="/">Accueil</RouterLink></li>
            <li><RouterLink to="/catalogue">Catalogue des formations</RouterLink></li>
            <li><RouterLink to="/favoris">Mes favoris</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
          </ul>
        </div>

        <div class="col-lg-4">
          <h6 class="footer-heading">Contact</h6>
          <ul class="footer-contact">
            <li><i class="bi bi-geo-alt"></i> 12 Rue de l'Innovation, Paris</li>
            <li><i class="bi bi-telephone"></i> +33 7 45 55 69 34</li>
            <li><i class="bi bi-envelope"></i> yntant09@gmail.com </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <hr class="footer-divider" />
        <div class="d-flex flex-wrap justify-content-between align-items-center gap-2">
          <p class="mb-0 footer-copy">
            Copyright {{ year }} DWWM Academy - Tous droits reserves
          </p>
          <p class="mb-0 footer-copy">
            Concu avec soin avec HZ-LE-K 
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
const year = new Date().getFullYear()
</script>

<style scoped>
.app-footer {
  background: rgba(2, 8, 18, 0.95);
  border-top: 1px solid rgba(0, 245, 255, 0.15);
  margin-top: auto;
}

.footer-line {
  height: 2px;
  background: linear-gradient(90deg, transparent, #00f5ff, #bf00ff, transparent);
  opacity: 0.4;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.brand-icon {
  font-size: 1.5rem;
  color: #00f5ff;
  filter: drop-shadow(0 0 5px #00f5ff);
}

.brand-name {
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: #e0f7ff;
  letter-spacing: 2px;
}

.accent { color: #00f5ff; }

.footer-desc {
  font-size: 0.87rem;
  color: rgba(160, 210, 230, 0.6);
  line-height: 1.6;
  margin: 0;
}

.footer-heading {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #00f5ff;
  margin-bottom: 0.75rem;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li { margin-bottom: 0.4rem; }

.footer-links a {
  color: rgba(160, 210, 230, 0.7);
  font-size: 0.88rem;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-links a:hover { color: #00f5ff; }

.footer-contact {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-contact li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.87rem;
  color: rgba(160, 210, 230, 0.7);
  margin-bottom: 0.4rem;
}

.footer-contact i { color: #00f5ff; }

.footer-divider {
  border-color: rgba(0, 245, 255, 0.1);
  margin: 1rem 0 0.75rem;
}

.footer-copy {
  font-size: 0.8rem;
  color: rgba(160, 210, 230, 0.5);
}
</style>
