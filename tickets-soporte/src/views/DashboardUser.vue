<template>
    <div class="user-dashboard">
      <!-- Barra de búsqueda -->
      <div class="search-section">
        <h1 class="search-title">Buscar plantilla</h1>
        <div class="search-input-container">
          <input 
            type="text" 
            class="search-input" 
            placeholder="Escribe para buscar..."
          >
          <button class="search-button">
            <font-awesome-icon icon="search" />
          </button>
        </div>
      </div>
  
      <!-- Sección de problemas -->
      <div class="card-section">
        <h2 class="section-title">Estoy teniendo un Problema</h2>
        <router-link to="/reportar-problema" class="action-link">
          <font-awesome-icon icon="plus-circle" />
          <span>Reportar un problema</span>
        </router-link>
      </div>
  
      <!-- Sección de servicios -->
      <div class="card-section">
        <h2 class="section-title">Estoy necesitando un nuevo Servicio</h2>
        <router-link to="/solicitar-servicio" class="action-link">
          <font-awesome-icon icon="plus-circle" />
          <span>Solicitar servicio</span>
        </router-link>
      </div>
  
      <!-- Mis activos -->
      <div class="card-section">
        <h2 class="section-title">Mis activos</h2>
        <div class="empty-state">
          <font-awesome-icon icon="desktop" class="empty-icon" />
          <p>Ninguna estación de trabajo disponible</p>
        </div>
      </div>
  
      <!-- Anuncios -->
      <div class="card-section">
        <h2 class="section-title">Anuncios</h2>
        <div class="empty-state">
          <p>Hoy no hay nuevos anuncios.</p>
        </div>
      </div>
  
      <!-- Solicitudes Pendientes -->
      <div class="card-section">
        <h2 class="section-title">Solicitudes Pendientes</h2>
        <router-link to="/solicitudes" class="action-link">
          <span>Todas las Solicitudes</span>
          <font-awesome-icon icon="chevron-right" />
        </router-link>
      </div>
  
      <!-- Solicitudes en Espera -->
      <div class="card-section">
        <h2 class="section-title">Solicitudes en Espera</h2>
        <router-link to="/solicitudes-cerradas" class="action-link">
          <span>Solicitudes Cerradas</span>
          <font-awesome-icon icon="chevron-right" />
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  // No se requiere lógica adicional para esta vista básica
  </script>
  
  <style scoped>
  .user-dashboard {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  .search-section {
    margin-bottom: 30px;
  }
  
  .search-title {
    font-size: 1.8rem;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 15px;
  }
  
  .search-input-container {
    display: flex;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  }
  
  .search-input {
    flex: 1;
    padding: 12px 15px;
    border: none;
    font-size: 1rem;
  }
  
  .search-input:focus {
    outline: none;
  }
  
  .search-button {
    background: #4f46e5;
    color: white;
    border: none;
    padding: 0 20px;
    cursor: pointer;
    transition: background 0.2s;
  }
  
  .search-button:hover {
    background: #4338ca;
  }
  
  .card-section {
    background: white;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.05);
    border: 1px solid #edf2f7;
  }
  
  .section-title {
    font-size: 1.3rem;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
  }
  
  .action-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 15px;
    background: #f8fafc;
    border-radius: 6px;
    color: #4f46e5;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s;
    border: 1px solid #e2e8f0;
  }
  
  .action-link:hover {
    background: #f1f5f9;
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  
  .action-link span {
    margin-left: 10px;
  }
  
  .empty-state {
    text-align: center;
    padding: 30px 20px;
    color: #718096;
  }
  
  .empty-icon {
    font-size: 2.5rem;
    color: #cbd5e0;
    margin-bottom: 15px;
  }
  </style>