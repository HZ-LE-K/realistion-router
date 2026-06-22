<script setup>
import { computed, reactive, ref } from 'vue'

const form = reactive({
  nom: '',
  email: '',
  sujet: '',
  message: '',
})

const submitted = ref(false)
const touched = reactive({
  nom: false,
  email: false,
  sujet: false,
  message: false,
})

const emailValide = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
const errors = computed(() => ({
  nom: form.nom.trim().length < 2,
  email: !emailValide.value,
  sujet: form.sujet.trim().length < 3,
  message: form.message.trim().length < 20,
}))
const formValide = computed(() => !Object.values(errors.value).some(Boolean))

function submitForm() {
  Object.keys(touched).forEach((key) => {
    touched[key] = true
  })
  if (!formValide.value) return
  submitted.value = true
  form.nom = ''
  form.email = ''
  form.sujet = ''
  form.message = ''
  Object.keys(touched).forEach((key) => {
    touched[key] = false
  })
}
</script>

<template>
  <section class="container py-5">
    <div class="row g-5">
      <div class="col-lg-5">
        <span class="badge text-bg-info mb-3">Contact</span>
        <h1 class="section-title mb-3">Parlons de votre projet</h1>
        <p class="text-muted-custom">
          Une question sur une formation, le financement ou les pre-requis ? Envoyez votre message au centre.
        </p>
        <div class="contact-list mt-4">
          <p><i class="bi bi-geo-alt"></i> 12 Rue de l'Innovation, Paris</p>
          <p><i class="bi bi-telephone"></i> +33 1 23 45 67 89</p>
          <p><i class="bi bi-envelope"></i> contact@dwwm-academy.fr</p>
        </div>
      </div>

      <div class="col-lg-7">
        <form class="contact-panel" novalidate @submit.prevent="submitForm">
          <div v-if="submitted" class="alert alert-success">
            Votre message a bien ete prepare. Le centre vous recontactera rapidement.
          </div>

          <div class="row g-3">
            <div class="col-md-6">
              <label for="nom" class="form-label">Nom complet</label>
              <input id="nom" v-model="form.nom" type="text" class="form-control" :class="{ 'is-invalid': touched.nom && errors.nom }" @blur="touched.nom = true" />
              <div class="invalid-feedback">Le nom doit contenir au moins 2 caracteres.</div>
            </div>
            <div class="col-md-6">
              <label for="email" class="form-label">Email</label>
              <input id="email" v-model="form.email" type="email" class="form-control" :class="{ 'is-invalid': touched.email && errors.email }" @blur="touched.email = true" />
              <div class="invalid-feedback">Saisissez une adresse email valide.</div>
            </div>
            <div class="col-12">
              <label for="sujet" class="form-label">Sujet</label>
              <input id="sujet" v-model="form.sujet" type="text" class="form-control" :class="{ 'is-invalid': touched.sujet && errors.sujet }" @blur="touched.sujet = true" />
              <div class="invalid-feedback">Le sujet doit contenir au moins 3 caracteres.</div>
            </div>
            <div class="col-12">
              <label for="message" class="form-label">Message</label>
              <textarea id="message" v-model="form.message" rows="6" class="form-control" :class="{ 'is-invalid': touched.message && errors.message }" @blur="touched.message = true"></textarea>
              <div class="invalid-feedback">Le message doit contenir au moins 20 caracteres.</div>
            </div>
          </div>

          <button class="btn btn-info fw-semibold mt-4" type="submit">
            <i class="bi bi-send me-2"></i>Envoyer
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
