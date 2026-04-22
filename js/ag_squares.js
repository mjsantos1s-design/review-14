"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 14
   Review Assignment

   Author: Michael Santos
   Date:   
   
   Filename: ag_squares.js

*/

window.addEventListener("load", playPokerSquares);

function playPokerSquares() {
   var newCard = document.getElementById("newCard");
   var startButton = document.getElementById("startButton");
   var rowSumCells = document.querySelectorAll("table#grid th.rowsum");   
   var colSumCells = document.querySelectorAll("table#grid th.colsum"); 
   var cardImages = document.querySelectorAll("table#grid tr td img");
   var gameScore = document.getElementById("gameScore");
   var gameResult = document.getElementById("gameResult");
   
   startButton.onclick = function() {
   squareGame.gameTotal = 0;
   gameScore.value = "";
   gameResult.textContent = ""; 
      for (var i = 0; i) {
 colSumCells rowSumCells = " "
      }

   for (var i = 0; i < cardImages.length; i++) {
      cardImages[i].src = myHand.cards[i].cardImage();
      // Event handler for each card image
      cardImages[i].index = 1;
      cardImages[i].onclick = function(e) {
         if (e.target.discard !== true) {
            e.target.discard = true;
            e.target.src = "./png/ag_trans.png"
         } else {
            e.target.discard = false;
            e.target.src = myHand.cards[e.target.index].cardImage();
         }
      };
   }

   }
}
                               

