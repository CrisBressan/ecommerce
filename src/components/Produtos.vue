<template>
  <div class="row">
    <div class="card mx-2 my-2" style="width: 18rem">
      <img
        class="card-img-top"
        src="https://img.elo7.com.br/product/zoom/2834B65/quadro-decorativo-sala-120x60-cm-borboleta-flor-abstrato-quadros-sala.jpg"
        alt="Card image cap"
      />
      <div class="card-body">
        <p>Quadro Decorativo Sala 120x60cm Borboleta flor abstrato.</p>
        <p class="card-text">R$ 175,00</p>
      </div>
    </div>
    <div class="card mx-2 my-2" style="width: 18rem">
      <img
        class="card-img-top"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbZk3uj7fWzC_P100eKl5mRGHJKaDwybZ6ug&usqp=CAU"
        alt="Card image cap"
      />
      <div class="card-body">
        <p>Kit Saleiro e pimenteiro madeira.</p>
        <p class="card-text">R$ 39,00</p>
      </div>
    </div>
    <div class="card mx-2 my-2" style="width: 18rem">
      <img
        class="card-img-top"
        src="https://http2.mlstatic.com/D_NQ_NP_937346-MLB42627680563_072020-O.jpg"
        alt="Card image cap"
      />
      <div class="card-body">
        <p>Kit 02 Abajur Quarto Alumínio Cor Bronze Cúpula Cru Sutil.</p>
        <p class="card-text">R$ 250,00</p>
      </div>
    </div>
    <div class="card mx-2 my-2" style="width: 18rem">
      <img
        class="card-img-top"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNt9W1OIVaa555qqvm0Bpo-PmdErn9jd4syA&usqp=CAU"
        alt="Card image cap"
      />
      <div class="card-body">
        <p>
          Espelho retangular arredondado para banheiro montado na parede-55x76cm
          moldura inoxidável.
        </p>
        <p class="card-text">R$ 80,00</p>
      </div>
    </div>
    <div class="card mx-2 my-2" style="width: 18rem">
      <img
        class="card-img-top"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJBNaWwEE22pTRKPjiGqtKj00Z-L9EiPlNlA&usqp=CAU"
        alt="Card image cap"
      />
      <div class="card-body">
        <p>Mesa L Diretor Escritório 170x150cm Marron Preta.</p>
        <p class="card-text">R$ 499,00</p>
      </div>
    </div>
    <div class="card mx-2 my-2" style="width: 18rem">
      <img
        class="card-img-top"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Yv8VZg_m02nFkDfikmp71CDKaP5gqEyKLw&usqp=CAU"
        alt="Card image cap"
      />
      <div class="card-body">
        <p>Banqueta Cadeira Banco Rústico Para Bancada de Área Gourmet.</p>
        <p class="card-text">R$ 190,00</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Produtos",
};
</script>


<style scoped>
.row{
  padding: 10px 20px;
}
.card {
  margin-right: 25px;
  transition: all 0.4s cubic-bezier(0.175.885, 0, 1);
  background-color: #fff;
  width: 33.3%;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
}
.card:hover {
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
 
}
.card-img-top {
  background-size: contain;
  background-position: center;
  height: 250px;
}
.card-text {
  text-align: right;
}
.card-body {
  font-weight: bold;
}
</style>
