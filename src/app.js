/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let figureOne = document.getElementById("figureOne");
  let figureTwo = document.getElementById("figureTwo");
  let number = document.getElementById("number");

  let arrayFigures = ["♦", "&#9829;", "♠ ", "♣"];
  let arrayNumber = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "Q", "K"];

  let randomFigures =
    arrayFigures[Math.floor(Math.random() * arrayFigures.length)];
  let randomNumber =
    arrayNumber[Math.floor(Math.random() * arrayNumber.length)];
  if (randomFigures == "&#9829;" || randomFigures == "♦") {
    figureTwo.style.color = "red";
    figureOne.style.color = "red";
  }
  figureOne.innerHTML = randomFigures;
  figureTwo.innerHTML = randomFigures;
  number.innerHTML = randomNumber;
};
