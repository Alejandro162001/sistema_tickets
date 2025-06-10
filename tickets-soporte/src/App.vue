<template>
  <div class="layout">
    <Sidebar />
    <div class="main-content">
      <Topbar />
      <main class="container-fluid view-area">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import Topbar from './components/Topbar.vue'
</script>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  background: #f8f9fa;
  margin-left: 260px;
  transition: margin-left 0.3s ease;
}

.view-area {
  padding: 2rem;
  min-height: calc(100vh - 56px); /* Ajuste para el topbar */
}

@media (max-width: 991.98px) {
  .main-content {
    margin-left: 0;
  }
}
</style>