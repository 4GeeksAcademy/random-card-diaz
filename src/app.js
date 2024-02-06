/* eslint-disable */
window.onload = function() {
  let figureOne = document.getElementById("figureOne");
  let figureTwo = document.getElementById("figureTwo");
  let number = document.getElementById("number");
  let btn = document.getElementById("btn");
  let card = document.getElementById("card");
  let inputWidth = document.getElementById("widthInput");
  let inputHeight = document.getElementById("heightInput");
  let btn2 = document.getElementById("btn2");

  // Función para generar números y figuras
  function generateRandom() {
    let arrayFigures = ["♦", "♥", "♠", "♣"];
    let arrayNumber = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "Q", "K"];

    let randomFigures =
      arrayFigures[Math.floor(Math.random() * arrayFigures.length)];
    let randomNumber =
      arrayNumber[Math.floor(Math.random() * arrayNumber.length)];

    figureOne.innerHTML = randomFigures;
    figureTwo.innerHTML = randomFigures;
    number.innerHTML = randomNumber;

    if (randomFigures == "♥" || randomFigures == "♦") {
      figureTwo.style.color = "red";
      figureOne.style.color = "red";
      number.style.color = "red";
    } else {
      figureTwo.style.color = "black";
      figureOne.style.color = "black";
      number.style.color = "black";
    }
  }

  generateRandom();

  btn.addEventListener("click", generateRandom);

  function changeDimension() {
    heightNew = inputHeight.value + "px";
    widthNew = inputWidth.value + "px";
    card.style.height = heightNew;
    card.style.width = widthNew;
  }

  // Llamar a la función al cargar la página
  changeDimension();

  // Agregar evento al segundo botón
  btn2.addEventListener("click", changeDimension);
};
