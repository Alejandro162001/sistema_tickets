<template>
    <div class="tickets">
      <h1 class="tickets-title mb-4">Gestión de Tickets</h1>
  
      <div class="card mb-5">
        <div class="card-header">Crear Nuevo Ticket</div>
        <div class="card-body">
          <form @submit.prevent="crearTicket">
            <div class="mb-3">
              <label for="titulo" class="form-label">Título</label>
              <input v-model="nuevoTitulo" type="text" class="form-control" id="titulo" placeholder="Título del ticket" required />
            </div>
            <div class="mb-3">
              <label for="descripcion" class="form-label">Descripción</label>
              <textarea v-model="nuevaDescripcion" class="form-control" id="descripcion" placeholder="Descripción del problema" rows="4" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Crear Ticket</button>
          </form>
        </div>
      </div>
  
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div v-for="ticket in tickets" :key="ticket.id" class="col">
          <div class="card h-100">
            <div class="card-body">
              <h3 class="card-title">{{ ticket.titulo }}</h3>
              <p class="card-text">{{ ticket.descripcion }}</p>
              <span :class="'badge ' + (ticket.estado.toLowerCase().replace(' ', '-') === 'pendiente' ? 'bg-warning' : 'bg-info')">{{ ticket.estado }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const tickets = ref([
    { id: 1, titulo: 'No tengo internet', descripcion: 'No conecta desde ayer', estado: 'Pendiente' },
    { id: 2, titulo: 'Impresora fallando', descripcion: 'No imprime en red', estado: 'En proceso' }
  ])
  
  const nuevoTitulo = ref('')
  const nuevaDescripcion = ref('')
  
  const crearTicket = () => {
    const nuevo = {
      id: Date.now(),
      titulo: nuevoTitulo.value,
      descripcion: nuevaDescripcion.value,
      estado: 'Pendiente'
    }
    tickets.value.unshift(nuevo)
    nuevoTitulo.value = ''
    nuevaDescripcion.value = ''
  }
  </script>
  
  <style scoped>
  .tickets-title {
    font-size: 2.25rem;
    text-align: center;
  }
  
  .card-title {
    font-size: 1.25rem;
  }
  
  .badge {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }
  </style>