let foto = ["foto1", "foto2", "foto3", "foto4", "foto5"];
let fotoDentro = foto[0];

document.getElementById("button__next").addEventListener("click", function () {
  fotoDentro = foto[0 + 1];
  document.getElementById("carousel__container").innerHTML = fotoDentro;
});
document.getElementById("button__prev").addEventListener("click", function () {
  fotoDentro = foto[1 - 1];
  document.getElementById("carousel__container").innerHTML = fotoDentro;
});
