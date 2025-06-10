<template>
    <div class="request-container">
      <div class="header mb-4">
        <button class="btn btn-back" @click="goBack">
          <font-awesome-icon icon="arrow-left" />
        </button>
        <h2 class="title">Solicitar un Servicio</h2>
      </div>
  
      <form @submit.prevent="submitRequest" class="request-form">
        <div class="mb-3">
          <label class="form-label">Tipo de Servicio</label>
          <select v-model="request.type" class="form-select" required>
            <option value="" disabled selected>Seleccione un tipo</option>
            <option value="equipment">Nuevo Equipo</option>
            <option value="software">Instalación de Software</option>
            <option value="access">Acceso a Sistemas</option>
            <option value="training">Capacitación</option>
            <option value="other">Otro</option>
          </select>
        </div>
  
        <div class="mb-3">
          <label class="form-label">Título de la Solicitud</label>
          <input 
            v-model="request.title" 
            type="text" 
            class="form-control" 
            placeholder="Ej: Necesito Adobe Photoshop"
            required
          >
        </div>
  
        <div class="mb-3">
          <label class="form-label">Descripción Detallada</label>
          <textarea 
            v-model="request.description" 
            class="form-control" 
            rows="5"
            placeholder="Describa el servicio que necesita..."
            required
          ></textarea>
        </div>
  
        <div v-if="request.type === 'equipment'" class="mb-3">
          <label class="form-label">Especificaciones del Equipo</label>
          <textarea 
            v-model="request.specifications" 
            class="form-control" 
            rows="3"
            placeholder="Detalle las especificaciones requeridas..."
          ></textarea>
        </div>
  
        <div v-if="request.type === 'software'" class="mb-3">
          <label class="form-label">Nombre del Software</label>
          <input 
            v-model="request.softwareName" 
            type="text" 
            class="form-control" 
            placeholder="Ej: Microsoft Office"
          >
        </div>
  
        <div class="mb-3">
          <label class="form-label">Fecha Requerida</label>
          <input 
            v-model="request.requiredDate" 
            type="date" 
            class="form-control"
            :min="new Date().toISOString().split('T')[0]"
          >
        </div>
  
        <div class="mb-4">
          <label class="form-label">Justificación</label>
          <textarea 
            v-model="request.justification" 
            class="form-control" 
            rows="3"
            placeholder="Explique por qué necesita este servicio..."
            required
          ></textarea>
        </div>
  
        <div class="d-grid">
          <button type="submit" class="btn btn-submit" :disabled="isSubmitting">
            <span v-if="!isSubmitting">Enviar Solicitud</span>
            <span v-else>Enviando...</span>
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const request = ref({
    type: '',
    title: '',
    description: '',
    specifications: '',
    softwareName: '',
    requiredDate: '',
    justification: ''
  })
  
  const isSubmitting = ref(false)
  
  const goBack = () => {
    router.go(-1)
  }
  
  const submitRequest = () => {
    isSubmitting.value = true
    // Simular envío a API
    setTimeout(() => {
      console.log('Solicitud enviada:', request.value)
      isSubmitting.value = false
      router.push({ name: 'Confirmation', params: { type: 'service' } })
    }, 1500)
  }
  </script>
  
  <style scoped>
  .request-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 1.5rem;
  }
  
  .header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .title {
    color: #4f46e5;
    margin: 0;
  }
  
  .btn-back {
    background: none;
    border: none;
    color: #4f46e5;
    font-size: 1.2rem;
    padding: 0.5rem;
  }
  
  .request-form {
    background: white;
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  }
  
  .form-label {
    font-weight: 600;
    color: #333;
    margin-bottom: 0.5rem;
    display: block;
  }
  
  .form-control, .form-select {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 0.75rem;
  }
  
  .form-control:focus, .form-select:focus {
    border-color: #4f46e5;
    box-shadow: 0 0 0 0.25rem rgba(79, 70, 229, 0.1);
  }
  
  .btn-submit {
    background: #4f46e5;
    color: white;
    padding: 1rem;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.2s;
  }
  
  .btn-submit:hover {
    background: #4338ca;
  }
  
  .btn-submit:disabled {
    background: #a5b4fc;
    cursor: not-allowed;
  }
  </style>