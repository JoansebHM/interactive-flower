const textoAMostrar = "Ella sabía que él sabía Que algún día pasaría Que vendría a buscarla  Con sus flores amarillas";
const textoAMostrar2 = "Ti amu Tata"
const button_presioname = document.getElementById("button-presioname")
const titulo = document.getElementById("titulo");
const flower_div = document.getElementById("flower-div")
const heart_div = document.getElementById("heart-div")

function mostrarTexto() {
  let index = 0;
  const interval = setInterval(function() {
    titulo.textContent += textoAMostrar[index];
    index++;
    
    if (index === textoAMostrar.length) {
      clearInterval(interval);
      button_presioname.style.display = "block";
      button_presioname.addEventListener('click', function(){
        flower_div.style.display = "none"
        heart_div.style.visibility = "visible"
        heart_div.style.padding = "80px"
        titulo.textContent = textoAMostrar2
        button_presioname.style.display = "none"
      })
    }
  }, 100);
}

mostrarTexto();
