<template>
  <div class="dashboard">
    <h1 class="dashboard-title mb-4">Panel de Soporte Técnico</h1>

    <div class="row row-cols-1 row-cols-md-3 g-4 mb-5">
      <div class="col">
        <div class="card h-100 card-pendiente">
          <div class="card-body text-center">
            <h2 class="card-title">Pendientes</h2>
            <p class="card-text count">12</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 card-proceso">
          <div class="card-body text-center">
            <h2 class="card-title">En Proceso</h2>
            <p class="card-text count">8</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 card-finalizado">
          <div class="card-body text-center">
            <h2 class="card-title">Finalizados</h2>
            <p class="card-text count">24</p>
          </div>
        </div>
      </div>
    </div>

    <div class="row row-cols-1 row-cols-lg-2 g-4">
      <div class="col">
        <div class="card">
          <div class="card-header">Distribución por Estado</div>
          <div class="card-body">
            <canvas id="statusChart"></canvas>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-header">Tickets por Tipo</div>
          <div class="card-body">
            <canvas id="typeChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Chart } from 'chart.js/auto'

const ticketStatus = ref([
{ estado: 'Pendiente', cantidad: 12 },
{ estado: 'En proceso', cantidad: 8 },
{ estado: 'Finalizado', cantidad: 24 }
])

const ticketTypes = ref([
{ nombre: 'Internet', cantidad: 14 },
{ nombre: 'Hardware', cantidad: 9 },
{ nombre: 'Software', cantidad: 6 },
{ nombre: 'Correo', cantidad: 5 }
])

onMounted(() => {
const statusCanvas = document.getElementById('statusChart').getContext('2d');
const gradient1 = statusCanvas.createLinearGradient(0, 0, 0, 300);
gradient1.addColorStop(0, '#4f46e5');
gradient1.addColorStop(1, '#7c3aed');
const gradient2 = statusCanvas.createLinearGradient(0, 0, 0, 300);
gradient2.addColorStop(0, '#7c3aed');
gradient2.addColorStop(1, '#a855f7');
const gradient3 = statusCanvas.createLinearGradient(0, 0, 0, 300);
gradient3.addColorStop(0, '#a855f7');
gradient3.addColorStop(1, '#4f46e5');

new Chart(statusCanvas, {
  type: 'pie',
  data: {
    labels: ticketStatus.value.map(item => item.estado),
    datasets: [{
      data: ticketStatus.value.map(item => item.cantidad),
      backgroundColor: [gradient1, gradient2, gradient3],
      borderColor: '#ffffff',
      borderWidth: 2,
      hoverOffset: 20
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: { size: 14, family: 'Inter', weight: '600' },
          color: '#1e293b',
          padding: 20
        }
      },
      tooltip: {
        backgroundColor: 'rgba(31, 41, 59, 0.9)',
        titleFont: { family: 'Inter', size: 14, weight: '600' },
        bodyFont: { family: 'Inter', size: 12 },
        cornerRadius: 6,
        padding: 10
      }
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  }
})

const typeCanvas = document.getElementById('typeChart').getContext('2d');
const barGradient = typeCanvas.createLinearGradient(0, 0, 0, 400);
barGradient.addColorStop(0, '#4f46e5');
barGradient.addColorStop(1, '#7c3aed');

new Chart(typeCanvas, {
  type: 'bar',
  data: {
    labels: ticketTypes.value.map(item => item.nombre),
    datasets: [{
      label: 'Cantidad',
      data: ticketTypes.value.map(item => item.cantidad),
      backgroundColor: barGradient,
      borderColor: '#6d28d9',
      borderWidth: 2,
      borderRadius: 6,
      barThickness: 40
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(0, 0, 0, 0.05)' },
        ticks: { color: '#1e293b', font: { family: 'Inter', size: 12, weight: '500' } }
      },
      x: {
        grid: { display: false },
        ticks: { color: '#1e293b', font: { family: 'Inter', size: 12, weight: '500' } }
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(31, 41, 59, 0.9)',
        titleFont: { family: 'Inter', size: 14, weight: '600' },
        bodyFont: { family: 'Inter', size: 12 },
        cornerRadius: 6,
        padding: 10
      }
    },
    animation: {
      duration: 1000,
      easing: 'easeOutQuart'
    }
  }
})
})
</script>

<style scoped>
.dashboard-title {
font-size: 2.5rem;
font-weight: 700;
text-align: center;
color: #1e293b;
letter-spacing: -0.02em;
text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.card {
transition: transform 0.3s ease, box-shadow 0.3s ease;
background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
}

.card:hover {
transform: translateY(-4px);
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.card-pendiente { 
border-left: 5px solid #4f46e5; 
}
.card-proceso { 
border-left: 5px solid #7c3aed; 
}
.card-finalizado { 
border-left: 5px solid #a855f7; 
}

.card-title {
font-size: 1.25rem;
font-weight: 600;
color: #1e293b;
}

.card-header {
background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
color: #ffffff;
font-weight: 600;
font-size: 1.1rem;
text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}

.count {
font-size: 2.5rem;
font-weight: 700;
color: #4f46e5;
margin: 0.5rem 0;
text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.card-body {
padding: 1.5rem;
}

canvas {
max-height: 300px;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
.dashboard-title {
  font-size: 2rem;
}
.count {
  font-size: 2rem;
}
.card-title {
  font-size: 1.1rem;
}
.card-header {
  font-size: 1rem;
}
}
</style>