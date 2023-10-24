/* eslint-disable */
import "bootstrap";
import "./style.css";

let suitsArray = ["♦", "♥", "♠", "♣"];
let faceArray = [
  "K",
  "Q",
  "J",
  "10",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "A"
];

window.onload = function() {
  let topSuitElement = document.querySelector(".topsuit");
  let faceElement = document.querySelector(".number");
  let bottomSuitElement = document.querySelector(".bottomsuit");

  const createRandomCard = () => {
    let randomFaceNumberIndex = Math.floor(Math.random() * faceArray.length);
    let randomSuitIndex = Math.floor(Math.random() * suitsArray.length);

    topSuitElement.innerHTML = suitsArray[randomSuitIndex];
    faceElement.innerHTML = faceArray[randomFaceNumberIndex];
    bottomSuitElement.innerHTML = suitsArray[randomSuitIndex];

    let randomSuit = suitsArray[randomSuitIndex];
    if (randomSuit === "♥" || randomSuit === "♦") {
      document.querySelectorAll(".suitColor").forEach(suitElement => {
        suitElement.style.color = "red";
      });
    } else {
      document.querySelectorAll(".suitColor").forEach(suitElement => {
        suitElement.style.color = "black";
      });
    }
  };
  createRandomCard();
  document.getElementById("GenerateCard").addEventListener("click", function() {
    createRandomCard();
  });
};
