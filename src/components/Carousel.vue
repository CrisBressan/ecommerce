<template>
  <div>
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://lh6.googleusercontent.com/HW6PxLdAfMbKPpLpP-lIVhna5QnbskPTz_pLydSL5b7qrJ6X_3Vzq5bot8ad7GBZNbwy6eyBzxtjuWeUkeHdqgC9C36cuTC-2wGmVVNOs-peP5hfgjlQr4SAV-b04eXJ5SluB7b6"
            class="d-block w-100"
            alt="https://lh6.googleusercontent.com/HW6PxLdAfMbKPpLpP-lIVhna5QnbskPTz_pLydSL5b7qrJ6X_3Vzq5bot8ad7GBZNbwy6eyBzxtjuWeUkeHdqgC9C36cuTC-2wGmVVNOs-peP5hfgjlQr4SAV-b04eXJ5SluB7b6"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://lh6.googleusercontent.com/HW6PxLdAfMbKPpLpP-lIVhna5QnbskPTz_pLydSL5b7qrJ6X_3Vzq5bot8ad7GBZNbwy6eyBzxtjuWeUkeHdqgC9C36cuTC-2wGmVVNOs-peP5hfgjlQr4SAV-b04eXJ5SluB7b6"
            class="d-block w-100"
            alt="https://lh6.googleusercontent.com/HW6PxLdAfMbKPpLpP-lIVhna5QnbskPTz_pLydSL5b7qrJ6X_3Vzq5bot8ad7GBZNbwy6eyBzxtjuWeUkeHdqgC9C36cuTC-2wGmVVNOs-peP5hfgjlQr4SAV-b04eXJ5SluB7b6"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://lh6.googleusercontent.com/HW6PxLdAfMbKPpLpP-lIVhna5QnbskPTz_pLydSL5b7qrJ6X_3Vzq5bot8ad7GBZNbwy6eyBzxtjuWeUkeHdqgC9C36cuTC-2wGmVVNOs-peP5hfgjlQr4SAV-b04eXJ5SluB7b6"
            class="d-block w-100"
            alt="https://lh6.googleusercontent.com/HW6PxLdAfMbKPpLpP-lIVhna5QnbskPTz_pLydSL5b7qrJ6X_3Vzq5bot8ad7GBZNbwy6eyBzxtjuWeUkeHdqgC9C36cuTC-2wGmVVNOs-peP5hfgjlQr4SAV-b04eXJ5SluB7b6"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
};
</script>


<style>
</style>
