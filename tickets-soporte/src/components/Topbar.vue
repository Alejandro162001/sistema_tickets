<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-gradient">
    <div class="container-fluid">
      <button class="navbar-toggler me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar" aria-controls="sidebar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <span class="navbar-brand mb-0 h1">Sistema de Soporte Técnico</span>
      <div class="navbar-nav ms-auto">
        <button class="btn btn-icon me-2" title="Notificaciones">
          <font-awesome-icon icon="bell" />
        </button>
        <button class="btn btn-icon" title="Perfil">
          <font-awesome-icon icon="user" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
// No logic needed for now
</script>

<style scoped>
.navbar {
background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
box-shadow: 0 6px 20px rgba(79, 70, 229, 0.3);
padding: 1.2rem 2.5rem;
transition: all 0.3s ease;
}

.navbar-brand {
font-family: 'Inter', sans-serif;
font-size: 1.8rem;
font-weight: 700;
letter-spacing: 0.02em;
color: #ffffff;
text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
}

.btn-icon {
background: rgba(255, 255, 255, 0.1);
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 50%;
padding: 0.6rem;
font-size: 1.2rem;
color: #ffffff;
transition: all 0.3s ease;
}

.btn-icon:hover {
background: rgba(255, 255, 255, 0.2);
border-color: rgba(255, 255, 255, 0.4);
transform: translateY(-2px);
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn-icon:active {
transform: translateY(0);
box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.navbar-toggler {
border: none;
color: #ffffff;
transition: transform 0.2s ease;
}

.navbar-toggler:hover {
transform: scale(1.1);
}
</style>