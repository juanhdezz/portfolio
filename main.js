// Función para controlar el efecto de máquina de escribir
function typeWriter(element, text, i, fnCallback) {
    if (i < (text.length)) {
      element.innerHTML = text.substring(0, i+1);
      setTimeout(function() {
        typeWriter(element, text, i + 1, fnCallback)
      }, 100);
    } else if (typeof fnCallback == 'function') {
      setTimeout(function() {
        element.classList.add('finished'); // Añadir clase finished
        fnCallback();
      }, 700); // Tiempo después de terminar de escribir
    }
  }

  // Función para escribir el texto de todos los elementos con la clase 'typing-text'
  function startTypingEffect() {
    const elements = document.querySelectorAll('.typing-text');
    let index = 0;

    function next() {
      if (index < elements.length) {
        const element = elements[index];
        const text = element.getAttribute('data-text');
        typeWriter(element, text, 0, function() {
          index++;
          next();
        });
      }
    }

    next();
  }

  // Inicio de la función al cargar la página
  window.onload = startTypingEffect;