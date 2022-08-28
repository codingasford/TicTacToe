// lets make left click x and right click 0, a two player game\
const gridItem = document.querySelectorAll(".gridItemSelectable");
let boxes = document.querySelectorAll(".gridItem");
let turn = "x";
let playerOneWin = false;
let playerTwoWin = false;
const instructionText = document.querySelector("h2");


for(const item of gridItem) {

    item.addEventListener("mouseover", () => {
        if(turn == "x" && item.classList.contains("gridItemSelectable")) {
            item.setAttribute("style", "background-image: url(xImg.png)");
        }
        else if(turn == "o" && item.classList.contains("gridItemSelectable")) {
            item.setAttribute("style", "background-image: url(oImg.png)");
        }
    })  

    item.addEventListener("mouseleave", () => {
        if(turn == "x") {
            item.removeAttribute("style", "background-image: url(xImg.png)");
        }
        else if(turn == "o") {
            item.removeAttribute("style", "background-image: url(oImg.png)");
        }
    })  




    item.addEventListener("click", () => {
        if(turn == "x" && item.classList.contains("gridItemSelectable")){
            item.classList.add("gridItemX");
            item.classList.remove("gridItemSelectable")
            ChangeTurn();
            CheckWin();
            CheckTie();
  
        }
        else if(turn == "o" && item.classList.contains("gridItemSelectable")){
            item.classList.add("gridItemO");
            item.classList.remove("gridItemSelectable")
            ChangeTurn();
            CheckWin();
            CheckTie();
        }
        
    });
    
}

function ChangeTurn() {
   if(turn == "x"){
    turn = "o";
    instructionText.innerHTML = "Turn: Player 2 (O)";
   } 
   else if (turn == "o") {
        turn = "x";
        instructionText.innerHTML = "Turn: Player 1 (X)";
   } 
   
}

function CheckWin() {
    //check the 8 possible win conditions

    //straight across top
    if(boxes[0].classList.contains("gridItemX") && boxes[1].classList.contains("gridItemX") && boxes[2].classList.contains("gridItemX")){
        playerOneWin = true;
        if(confirm("Player 1 Wins!! Restart Game?")){
            location.reload();
        }
    }
    //straight across middle
    if(boxes[3].classList.contains("gridItemX") && boxes[4].classList.contains("gridItemX") && boxes[5].classList.contains("gridItemX")){
        playerOneWin = true;
        if(confirm("Player 1 Wins!! Restart Game?")){
            location.reload();
        }
      
    }   
    //straight across bottom
    if(boxes[6].classList.contains("gridItemX") && boxes[7].classList.contains("gridItemX") && boxes[8].classList.contains("gridItemX")){
        playerOneWin = true;
        if(confirm("Player 1 Wins!! Restart Game?")){
            location.reload();
        }
    }

    //updown left
    if(boxes[0].classList.contains("gridItemX") && boxes[3].classList.contains("gridItemX") && boxes[6].classList.contains("gridItemX")){
        playerOneWin = true;
        if(confirm("Player 1 Wins!! Restart Game?")){
            location.reload();
        }
    }
    //updown middle
    if(boxes[1].classList.contains("gridItemX") && boxes[4].classList.contains("gridItemX") && boxes[7].classList.contains("gridItemX")){
        playerOneWin = true;
        if(confirm("Player 1 Wins!! Restart Game?")){
            location.reload();
        }
    }
    //updown right
    if(boxes[2].classList.contains("gridItemX") && boxes[5].classList.contains("gridItemX") && boxes[8].classList.contains("gridItemX")){
        playerOneWin = true;
        if(confirm("Player 1 Wins!! Restart Game?")){
            location.reload();
        }
    }
    
    //diagnol bottom left to top right
    if(boxes[6].classList.contains("gridItemX") && boxes[4].classList.contains("gridItemX") && boxes[2].classList.contains("gridItemX")){
        playerOneWin = true;
        if(confirm("Player 1 Wins!! Restart Game?")){
            location.reload();
        }

    }
    //diagnol bottom right to top left
    if(boxes[8].classList.contains("gridItemX") && boxes[4].classList.contains("gridItemX") && boxes[0].classList.contains("gridItemX")){
        playerOneWin = true;
        if(confirm("Player 1 Wins!! Restart Game?")){
            location.reload();
        }
    }



    
    //PLAYER 2 LOGIC
    //PLAYER 2 LOGIC
    //PLAYER 2 LOGIC






     //straight across top
     if(boxes[0].classList.contains("gridItemO") && boxes[1].classList.contains("gridItemO") && boxes[2].classList.contains("gridItemO")){
        playerTwoWin = true;
        if(confirm("Player 2 Wins!! Restart Game?")){
            location.reload();
        }
    }
    //straight across middle
    if(boxes[3].classList.contains("gridItemO") && boxes[4].classList.contains("gridItemO") && boxes[5].classList.contains("gridItemO")){
        playerTwoWin = true;
        if(confirm("Player 2 Wins!! Restart Game?")){
            location.reload();
        }

      
    }   
    //straight across bottom
    if(boxes[6].classList.contains("gridItemO") && boxes[7].classList.contains("gridItemO") && boxes[8].classList.contains("gridItemO")){
        playerTwoWin = true;
        if(confirm("Player 2 Wins!! Restart Game?")){
            location.reload();
        }

    }

    //updown left
    if(boxes[0].classList.contains("gridItemO") && boxes[3].classList.contains("gridItemO") && boxes[6].classList.contains("gridItemO")){
        playerTwoWin = true;
        if(confirm("Player 2 Wins!! Restart Game?")){
            location.reload();
        }

    }
    //updown middle
    if(boxes[1].classList.contains("gridItemO") && boxes[4].classList.contains("gridItemO") && boxes[7].classList.contains("gridItemO")){
        playerTwoWin = true;
        if(confirm("Player 2 Wins!! Restart Game?")){
            location.reload();
        }

    }
    //updown right
    if(boxes[2].classList.contains("gridItemO") && boxes[5].classList.contains("gridItemO") && boxes[8].classList.contains("gridItemO")){
        playerTwoWin = true;
        if(confirm("Player 2 Wins!! Restart Game?")){
            location.reload();
        }

    }
    
    //diagnol bottom left to top right
    if(boxes[6].classList.contains("gridItemO") && boxes[4].classList.contains("gridItemO") && boxes[2].classList.contains("gridItemO")){
        playerTwoWin = true;
        if(confirm("Player 2 Wins!! Restart Game?")){
            location.reload();
        }

    }
    //diagnol bottom right to top left
    if(boxes[8].classList.contains("gridItemO") && boxes[4].classList.contains("gridItemO") && boxes[0].classList.contains("gridItemO")){
        playerTwoWin = true;
        if(confirm("Player 2 Wins!! Restart Game?")){
            location.reload();
        }

    }


}

function CheckTie() {
    let counter = 0;
    for(box of boxes){
        if(box.classList.contains("gridItemO") || box.classList.contains("gridItemX")){
            counter++;
        }
    }

    if(counter == 9){
        if(confirm("Tie!! Restart Game?")){
            location.reload();
        }
    }
    
}