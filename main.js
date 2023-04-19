let foto = ["foto1", "foto2", "foto3", "foto4", "foto5"];
let fotoDentro = foto[0];

let zero = 0;
document.getElementById("button__next").addEventListener("click", function () {
  let add = zero++;
  fotoDentro = foto[zero];
  document.getElementById("carousel__container").innerHTML = fotoDentro;
  console.log(fotoDentro);
});

document.getElementById("button__prev").addEventListener("click", function () {
  let subtract = zero--;
  fotoDentro = foto[zero];
  document.getElementById("carousel__container").innerHTML = fotoDentro;
});

/*
document.getElementById("button__next").addEventListener("click", function () {

  fotoDentro = foto[0 + 1] ;
});

*/
