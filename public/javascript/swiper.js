
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

    loop:true,
autoplay: {
delay: 3000, // Cambiar cada 5 segundos
disableOnInteraction: false, // Permitir que el autoplay continúe incluso cuando el usuario interactúa con el swiper
} 
});
