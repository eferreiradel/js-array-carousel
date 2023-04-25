let slideImages = [];

slideImages[0] = "./img/img_1.gif";
slideImages[1] = "./img/img_2.gif";
slideImages[2] = "./img/img_3.gif";

console.log(slideImages[0]);

let counter = -1;

let btnNext = document.querySelector("#btnNext");
let btnPrev = document.querySelector("#btnPrev");

btnNext.addEventListener("click", imgNext);
btnPrev.addEventListener("click", imgPrev);

let display = document.querySelector("#cardBody");

let imgToDisplay = document.createElement("img");
imgToDisplay.classList.add("w-100");
imgToDisplay.classList.add("border--black");

function imgNext() {
  let increment = counter++;

  if (counter >= slideImages.length) {
    counter = 0;
  }

  imgToDisplay.setAttribute("src", slideImages[counter]);
  display.appendChild(imgToDisplay);
  console.log(counter);
  return increment;
}
function imgPrev() {
  let increment = counter--;

  if (counter <= -1) {
    counter = 2;
  }

  imgToDisplay.setAttribute("src", slideImages[counter]);
  display.appendChild(imgToDisplay);
  console.log(increment);
  return increment;
}
