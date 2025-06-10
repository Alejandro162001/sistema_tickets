<template>
    <div class="report-container">
      <div class="header mb-4">
        <button class="btn btn-back" @click="goBack">
          <font-awesome-icon icon="arrow-left" />
        </button>
        <h2 class="title">Reportar un Problema</h2>
      </div>
  
      <form @submit.prevent="submitProblem" class="problem-form">
        <div class="mb-3">
          <label class="form-label">Tipo de Problema</label>
          <select v-model="problem.type" class="form-select" required>
            <option value="" disabled selected>Seleccione un tipo</option>
            <option value="hardware">Hardware</option>
            <option value="software">Software</option>
            <option value="red">Red/Conectividad</option>
            <option value="otros">Otros</option>
          </select>
        </div>
  
        <div class="mb-3">
          <label class="form-label">Título del Problema</label>
          <input 
            v-model="problem.title" 
            type="text" 
            class="form-control" 
            placeholder="Ej: Mi computadora no enciende"
            required
          >
        </div>
  
        <div class="mb-3">
          <label class="form-label">Descripción Detallada</label>
          <textarea 
            v-model="problem.description" 
            class="form-control" 
            rows="5"
            placeholder="Describa el problema con el mayor detalle posible..."
            required
          ></textarea>
        </div>
  
        <div class="mb-4">
          <label class="form-label">Adjuntar Archivos (Opcional)</label>
          <div class="file-upload">
            <input 
              type="file" 
              id="fileInput" 
              ref="fileInput" 
              @change="handleFileUpload" 
              multiple
              class="d-none"
            >
            <label for="fileInput" class="upload-btn">
              <font-awesome-icon icon="paperclip" />
              <span>Seleccionar archivos</span>
            </label>
            <div v-if="problem.files.length > 0" class="file-list mt-2">
              <div v-for="(file, index) in problem.files" :key="index" class="file-item">
                <span>{{ file.name }}</span>
                <button @click="removeFile(index)" class="btn-remove">
                  <font-awesome-icon icon="times" />
                </button>
              </div>
            </div>
          </div>
        </div>
  
        <div class="priority-section mb-4">
          <label class="form-label">Prioridad</label>
          <div class="priority-options">
            <button 
              type="button" 
              v-for="option in priorityOptions" 
              :key="option.value"
              @click="problem.priority = option.value"
              :class="{ 'active': problem.priority === option.value }"
              class="priority-btn"
            >
              <font-awesome-icon :icon="option.icon" />
              <span>{{ option.label }}</span>
            </button>
          </div>
        </div>
  
        <div class="d-grid">
          <button type="submit" class="btn btn-submit" :disabled="isSubmitting">
            <span v-if="!isSubmitting">Enviar Reporte</span>
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
  
  const problem = ref({
    type: '',
    title: '',
    description: '',
    priority: 'medium',
    files: []
  })
  
  const isSubmitting = ref(false)
  
  const priorityOptions = [
    { value: 'low', label: 'Baja', icon: 'arrow-down' },
    { value: 'medium', label: 'Media', icon: 'equals' },
    { value: 'high', label: 'Alta', icon: 'arrow-up' },
    { value: 'critical', label: 'Crítica', icon: 'exclamation' }
  ]
  
  const goBack = () => {
    router.go(-1)
  }
  
  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files)
    problem.value.files = [...problem.value.files, ...files]
  }
  
  const removeFile = (index) => {
    problem.value.files.splice(index, 1)
  }
  
  const submitProblem = () => {
    isSubmitting.value = true
    // Simular envío a API
    setTimeout(() => {
      console.log('Problema reportado:', problem.value)
      isSubmitting.value = false
      router.push({ name: 'Confirmation', params: { type: 'problem' } })
    }, 1500)
  }
  </script>
  
  <style scoped>
  .report-container {
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
  
  .problem-form {
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
  
  .upload-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    background: #f8f9fa;
    border: 1px dashed #ddd;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .upload-btn:hover {
    background: #f1f3f5;
    border-color: #4f46e5;
  }
  
  .file-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .file-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    background: #f8f9fa;
    border-radius: 6px;
  }
  
  .btn-remove {
    background: none;
    border: none;
    color: #dc3545;
    padding: 0.25rem;
  }
  
  .priority-options {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
  
  .priority-btn {
    flex: 1;
    min-width: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    background: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 8px;
    transition: all 0.2s;
  }
  
  .priority-btn.active {
    background: #4f46e5;
    color: white;
    border-color: #4f46e5;
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