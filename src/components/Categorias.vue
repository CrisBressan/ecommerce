<template>
  <div>
    <div class="scrollmenu">
      <a class="box-categoria button" href="#Categorias">Sala</a>
      <a class="box-categoria button" href="#Categorias">Cozinha</a>
      <a class="box-categoria button" href="#Categorias">Quarto</a>
      <a class="box-categoria button" href="#Categorias">Banheiro</a>
      <a class="box-categoria button" href="#Categorias">Escritório</a>
      <a class="box-categoria button" href="#Categorias">Área Gourmet</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Categorias",
};
</script>


<style>
.scrollmenu {
  overflow: auto;
  padding: 12px 0px;
  white-space: nowrap;
  padding-bottom: 16px;
}
.box-categoria {
  margin-right: 10px;
  font-size: 25px;
  text-decoration: none;
  color: black;
  border-color: grey;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  padding: 10px 20px;
  transition-duration: 0.4s;
}

.button:hover {
  background-color: grey;
  color: white;
}
@media (max-width: 720px) {
  .box-categoria {
    font-size: 20px;
    padding: 4px 10px;
  }
}
</style>
