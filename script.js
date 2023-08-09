
const recuadroInfo = document.getElementById("recuadro-info");
const recuadroInfo2 = document.getElementById("recuadro-info2");
const recuadroInfo3 = document.getElementById("recuadro-info3");

function mostrarRecuadroInfo(contenido, recuadroInfoElement) {
  recuadroInfoElement.textContent = contenido;

  // Si el recuadro de información está oculto, mostrarlo
  if (recuadroInfoElement.style.display === "none") {
    recuadroInfoElement.style.display = "inline";
  } else {
    // Si ya está mostrándose, ocultarlo nuevamente
    recuadroInfoElement.style.display = "none";
  }
};

// Agregar el evento de clic a todos los botones con la clase "mostrarBtn"
const botones = document.querySelectorAll(".mostrarBtn");
botones.forEach(boton => {
  boton.addEventListener("click", () => mostrarRecuadroInfo(boton.dataset.contenido, recuadroInfo));
});
const botones2 = document.querySelectorAll(".mostrarBtn2");
botones2.forEach(boton => {
  boton.addEventListener("click", () => mostrarRecuadroInfo(boton.dataset.contenido, recuadroInfo2));
});
const botones3 = document.querySelectorAll(".mostrarBtn3");
botones3.forEach(boton => {
  boton.addEventListener("click", () => mostrarRecuadroInfo(boton.dataset.contenido, recuadroInfo3));
});

// Obtener el conjunto de preguntas y botones "Siguiente" específicos
const preguntas1 = document.querySelectorAll(".pregunta");
const botonesSiguiente1 = document.querySelectorAll(".siguienteBtn");

const preguntas2 = document.querySelectorAll(".pregunta2");
const botonesSiguiente2 = document.querySelectorAll(".siguienteBtn2");

const preguntas3 = document.querySelectorAll(".pregunta3");
const botonesSiguiente3 = document.querySelectorAll(".siguienteBtn3");

// Agregar el evento de clic a todos los botones "Siguiente" del conjunto 1
botonesSiguiente1.forEach(boton => {
  boton.addEventListener("click", () => mostrarSiguientePregunta(preguntas1, boton));
});

// Agregar el evento de clic a todos los botones "Siguiente" del conjunto 2
botonesSiguiente2.forEach(boton => {
  boton.addEventListener("click", () => mostrarSiguientePregunta(preguntas2, boton));
});

botonesSiguiente3.forEach(boton => {
  boton.addEventListener("click", () => mostrarSiguientePregunta(preguntas3, boton));
});

// Mostrar la primera pregunta inicialmente para ambos conjuntos
preguntas1[0].style.display = "block";
preguntas2[0].style.display = "block";
preguntas3[0].style.display = "block";

function mostrarSiguientePregunta(preguntas, botonSiguiente) {
  ocultarPreguntas(preguntas);

  const preguntaActual = botonSiguiente.parentNode;
  const siguientePregunta = preguntaActual.nextElementSibling;

  if(preguntas==preguntas1){

    if (siguientePregunta == preguntas1[5]) {
      preguntas1[0].style.display = "block";
      recuadroInfo.style.display = "none";
    } else {
      siguientePregunta.style.display = "block";
      recuadroInfo.style.display = "none";
    }

  } else if(preguntas==preguntas2){

    if (siguientePregunta == preguntas2[5]) {
      preguntas2[0].style.display = "block";
      recuadroInfo2.style.display = "none";
    } else {
      siguientePregunta.style.display = "block";
      recuadroInfo2.style.display = "none";
    }
  
  } else if(preguntas==preguntas3){

      if (siguientePregunta == preguntas3[5]) {
        preguntas3[0].style.display = "inline";
        recuadroInfo3.style.display = "none";
      } else {
        siguientePregunta.style.display = "inline";
        recuadroInfo3.style.display = "none";
      }
  } 
}

function ocultarPreguntas(preguntas) {
  preguntas.forEach(pregunta => {
    pregunta.style.display = "none";
  });
}
