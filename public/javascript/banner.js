document.addEventListener("DOMContentLoaded", function() {
    const titleNameElement = document.querySelector('.slogan');
    const titleNameElement1 = document.querySelector('.slogan1');
    const titleNameElement2 = document.querySelector('.titleName');
    const titleNameElement3 = document.querySelector('.home--baner ');
    const titleNameElement4 = document.querySelector('.sloganFijo ');
  

    setTimeout(() => {
      titleNameElement.classList.add('fade-out');
    }, 4000);
    setTimeout(() => {
      titleNameElement1.classList.add('fade-out');
    }, 10000);
    setTimeout(() => {
      titleNameElement2.classList.add('titleNameEffect'); titleNameElement3.classList.add('videoEffect')  ;
    }, 14000);
    setTimeout(() => {
      titleNameElement4.classList.add('sloganFijoEffect'); ;
    }, 16000);
  });

document.addEventListener("DOMContentLoaded", function() {
    const textos = [
      
      "Nuestra Misión...",
      "...Tu Evolución Digital",
      "Web Design Solutions"
    ];

    const elementos = document.querySelectorAll('.textoBanner p');
    const intervaloEscritura = 220; // Intervalo de tiempo para escribir cada caracter

    function escribirTextoSecuencial(elemento, texto, callback, index = 0) {
      if (index < texto.length) {
        elemento.textContent += texto.charAt(index);
        setTimeout(() => escribirTextoSecuencial(elemento, texto, callback, index + 1), intervaloEscritura);
      } else if (callback) {
        callback();
      }
    }

    function iniciarEfecto() {
      let i = 0;

      function escribirSiguiente() {
        if (i < elementos.length) {
          escribirTextoSecuencial(elementos[i ], textos[i], escribirSiguiente);
          i++;
        }
      }

      escribirSiguiente();
    }

    elementos.forEach(elemento => elemento.textContent = ""); // Limpiar texto inicial
    iniciarEfecto(); // Iniciar el efecto de máquina de escribir
  });