<template>
    <div class="confirmation-container">
      <div class="confirmation-card">
        <div class="icon-container">
          <font-awesome-icon :icon="icon" size="3x" />
        </div>
        <h2 class="title">{{ title }}</h2>
        <p class="message">{{ message }}</p>
        <div class="details" v-if="ticketNumber">
          <p>Número de ticket: <strong>{{ ticketNumber }}</strong></p>
        </div>
        <button class="btn btn-primary" @click="goToDashboard">
          Volver al inicio
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  
  const route = useRoute()
  const router = useRouter()
  
  const type = route.params.type
  
  const title = computed(() => {
    return type === 'problem' 
      ? 'Problema Reportado con Éxito' 
      : 'Solicitud Enviada con Éxito'
  })
  
  const message = computed(() => {
    return type === 'problem'
      ? 'Hemos recibido tu reporte de problema. Nuestro equipo técnico se pondrá en contacto contigo pronto.'
      : 'Tu solicitud de servicio ha sido registrada. Te notificaremos cuando sea procesada.'
  })
  
  const icon = computed(() => {
    return type === 'problem' ? 'circle-check' : 'clipboard-check'
  })
  
  const ticketNumber = computed(() => {
    return 'T-' + Math.floor(Math.random() * 10000).toString().padStart(4, '0')
  })
  
  const goToDashboard = () => {
    router.push('/user')
  }
  </script>
  
  <style scoped>
  .confirmation-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
    padding: 2rem;
  }
  
  .confirmation-card {
    background: white;
    border-radius: 12px;
    padding: 3rem;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    max-width: 600px;
    width: 100%;
  }
  
  .icon-container {
    color: #4f46e5;
    margin-bottom: 1.5rem;
  }
  
  .title {
    color: #4f46e5;
    margin-bottom: 1rem;
  }
  
  .message {
    color: #666;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }
  
  .details {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 2rem;
  }
  
  .btn-primary {
    background: #4f46e5;
    border: none;
    padding: 0.75rem 2rem;
    font-weight: 600;
  }
  
  .btn-primary:hover {
    background: #4338ca;
  }
  </style>