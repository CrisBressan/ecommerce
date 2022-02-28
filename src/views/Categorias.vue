<template>
  <div>
    <h1>Categorias</h1>
    <div class="banner">
      <img
        src="https://consolidado.tarkett.com.br/images/banners/ambient_banner_residencial_salaestar_15372184286168.jpg"
        class="banner-categorias"
      />
      <label class="texto-banner">SALA</label>
    </div>
    <div class="scroll-categorias">
      <a class="categorias button">Almofadas</a>
      <a class="categorias button">Mantas</a>
      <a class="categorias button">Tapetes</a>
      <a class="categorias button">Cortinas</a>
      <a class="categorias button">Mesa centro</a>
      <a class="categorias button">Painel TV</a>
      <a class="categorias button">Quadros</a>
    </div>
    <div class="banner">
      <img
        src="https://victorinox.vteximg.com.br/arquivos/ids/166104/Categoria_Holiday_Season_CUT.png?v=637738685618100000"
        class="banner-categorias"
      />
      <label class="texto-banner">COZINHA</label>
    </div>
    <div class="scroll-categorias">
      <a class="categorias button">Mesas</a>
      <a class="categorias button">Cadeiras</a>
      <a class="categorias button">Saleiros</a>
      <a class="categorias button">Tapetes</a>
      <a class="categorias button">Cortinas</a>
    </div>
    <div class="banner">
      <img
        src="https://cdn.shopify.com/s/files/1/0399/5484/1766/collections/Banner-Quarto-Desk_1920x300.png?v=1611937294"
        class="banner-categorias"
      />
      <label class="texto-banner">QUARTO</label>
    </div>
    <div class="scroll-categorias">
      <a class="categorias button">Cobertores</a>
      <a class="categorias button">Travesseiros</a>
      <a class="categorias button">Abajur</a>
      <a class="categorias button">Lençois</a>
      <a class="categorias button">Criado Mudo</a>
    </div>
    <div class="banner">
      <img
        src="https://balaroti.vteximg.com.br/arquivos/ids/176160/C-05-HEADER-BANHEIRO-DESKTOP.jpg?v=636487758715570000"
        class="banner-categorias"
      />
      <label class="texto-banner">BANHEIRO</label>
    </div>
    <div class="scroll-categorias">
      <a class="categorias button">Toalhas</a>
      <a class="categorias button">Saboneteiras</a>
      <a class="categorias button">Espelho</a>
      <a class="categorias button">Tapetes</a>
      <a class="categorias button">Porta Papel Higiênico</a>
    </div>
    <div class="banner">
      <img
        src="https://images.tcdn.com.br/img/img_prod/503257/1603399612_banner-escritorio-site-baba-cat.jpg"
        class="banner-categorias"
      />
      <label class="texto-banner">ESCRITÓRIO</label>
    </div>
    <div class="scroll-categorias">
      <a class="categorias button">Mesas</a>
      <a class="categorias button">Cadeiras</a>
      <a class="categorias button">Estantes</a>
      <a class="categorias button">Caixas Organizadoras</a>
    </div>
    <div class="banner">
      <img
        src="https://cdn.shopify.com/s/files/1/0399/5484/1766/collections/banner-churrasco_1920x300.png?v=1629146650"
        class="banner-categorias"
      />
      <label class="texto-banner">ÁREA GOURMET</label>
    </div>
    <div class="scroll-categorias">
      <a class="categorias button">Banquetas</a>
      <a class="categorias button">Tábuas</a>
      <a class="categorias button">Placas Decorativas</a>
      <a class="categorias button">Petisqueiras</a>
      <a class="categorias button">Kit Facas</a>
      <a class="categorias button">Lustre Pendente</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoopd>
h1 {
  font-size: 28px;
  font-weight: 600;
  margin-left: 30px;
}
@media (max-width: 720px) {
  h1 {
    font-size: 24px;
  }
}
.banner-categorias {
  width: 100%;
  height: 170px;
}
.banner {
  position: relative;
}
.texto-banner {
  padding: 4px 12px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  position: absolute;
  border-radius: 4px;
  font-size: 25px;
  right: 6px;
  bottom: 6px;
}
.scroll-categorias {
  overflow: auto;
  padding: 30px 0px;
  white-space: nowrap;
  padding-bottom: 16px;
  margin-bottom: 50px;
  margin-left: 15px;
}
.categorias {
  margin-right: 40px;
  font-size: 22px;
  text-decoration: none;
  color: black;
  background-color: white;
  border-color: rgba(0, 0, 0, 0.2);
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  padding: 5px 10px;
  transition-duration: 0.4s;
}
.button:hover {
  background-color: rgba(0, 0, 0, 0.2);
  color: black;
}
</style>
