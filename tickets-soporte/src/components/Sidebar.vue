<template>
  <!-- Versión desktop (siempre visible) -->
  <aside class="sidebar-desktop d-none d-lg-block">
    <div class="sidebar-header">
      <h2 class="sidebar-title">Soporte Técnico</h2>
    </div>
    <nav class="sidebar-nav">
      <RouterLink
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        class="nav-item"
        :class="{ 'active-item': isActive(item.path) }"
      >
        <font-awesome-icon :icon="item.icon" class="nav-icon" />
        <span>{{ item.name }}</span>
      </RouterLink>
    </nav>
  </aside>

  <!-- Versión móvil (offcanvas) -->
  <div class="offcanvas offcanvas-start sidebar-mobile d-lg-none" tabindex="-1" id="sidebarMobile">
    <div class="offcanvas-header">
      <h2 class="offcanvas-title">Soporte Técnico</h2>
      <button
        type="button"
        class="btn-close btn-close-white"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body p-0">
      <nav class="sidebar-nav">
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-item"
          :class="{ 'active-item': isActive(item.path) }"
          data-bs-dismiss="offcanvas"
        >
          <font-awesome-icon :icon="item.icon" class="nav-icon" />
          <span>{{ item.name }}</span>
        </RouterLink>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { Offcanvas } from 'bootstrap'
import { onMounted } from 'vue'

const route = useRoute()

const navItems = [
  { name: 'Dashboard', path: '/', icon: 'home' },
  { name: 'Tickets', path: '/tickets', icon: 'ticket-alt' },
  { name: 'Reportes', path: '/reports', icon: 'chart-bar' }
]

const isActive = (path) => route.path === path

onMounted(() => {
  new Offcanvas(document.getElementById('sidebarMobile'))
})
</script>

<style scoped>
/* Estilos compartidos */
.sidebar-desktop, .sidebar-mobile {
  width: 260px;
  min-height: 100vh;
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: #E0E0E0;
  font-family: 'Inter', sans-serif;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 6px 10px rgba(79, 70, 229, 0.3);
}

.sidebar-header, .offcanvas-header {
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
}

.sidebar-title, .offcanvas-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0;
}

.sidebar-nav {
  padding: 1rem 0;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 0.8rem 1.5rem;
  margin: 0 0.5rem;
  border-radius: 4px;
  color: #E0E0E0;
  text-decoration: none;
  transition: all 0.3s ease;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff;
  transform: translateX(5px);
}

.active-item {
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff;
  font-weight: 500;
}

.nav-icon {
  margin-right: 1rem;
  font-size: 1.1rem;
  width: 24px;
  text-align: center;
}

/* Estilos específicos para desktop */
.sidebar-desktop {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1030;
}

/* Estilos específicos para celular */
.sidebar-mobile {
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%) !important;
}

.offcanvas-body {
  padding: 0 !important;
}

.btn-close-white {
  filter: invert(1) grayscale(100%) brightness(200%);
}
</style>