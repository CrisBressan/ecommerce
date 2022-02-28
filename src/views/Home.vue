<template>
  <div id="app">
    <carousel class="mb-3" />
    <div class="container-fluid">
      <div class="mb-3">
        <h1>Categorias</h1>
        <categorias />
      </div>
      <div class="mb-3">
        <h1>Produtos</h1>
        <produtos />
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "../components/Carousel";
import Categorias from "../components/Categorias";
import Produtos from "../components/Produtos";

export default {
  components: {
    Carousel,
    Categorias,
    Produtos,
  },
};
</script>

<style scoped>
h1 {
  font-size: 28px;
  font-weight: 600;
}
@media (max-width: 720px) {
  h1 {
    font-size: 24px;
  }
}
</style>
