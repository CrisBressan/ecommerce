<template>
  <nav class="navbar navbar-expand-lg navbar-light py-0">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <img class="logo" src="../assets/logo.jpeg" alt="" />
      </router-link>
      <button
        class="navbar-toggler ms-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              Inicio
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/categorias" class="nav-link">
              Categorias
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/produtos" class="nav-link">Produtos</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/perfil" class="nav-link">Perfil</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
};
</script>

<style>
.logo {
  height: 60px;
}
</style>
