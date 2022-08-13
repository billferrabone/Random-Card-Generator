/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q", "A"];
let palos = ["♦", "♥", "♠", "♣"];

window.onload = function() {
  let cards_x = Math.floor(Math.random() * cards.length);
  let palos_x = Math.floor(Math.random() * palos.length);
  let color = palos[palos_x] == "♦" || palos[palos_x] == "♥" ? "red" : "black";

  document.write(palos[palos_x] + " " + cards[cards_x] + " " + palos[palos_x]);
};
// onload();
