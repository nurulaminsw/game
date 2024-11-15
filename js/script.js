let heading = document.querySelector(".heading")
let h2 = document.querySelector("h2")
let span = document.querySelector("span")
let playerOneInput = document.querySelector(".playerOneInput")
let startButton = document.querySelector(".startButton")
let error = document.querySelector(".error")
let playerTwoInput = document.querySelector(".playerTwoInput")
let guessButtonTwo = document.querySelector(".guessButtonTwo")
let guessButtonThree = document.querySelector(".guessButtonThree")
let guessButtonFour = document.querySelector(".guessButtonFour")
let playerThreeInput = document.querySelector(".playerThreeInput")
let playerFourInput = document.querySelector(".playerFourInput")


// console.log(heading , numberInput , startButton);

let  playerOneInputStor;
let counter;

startButton.addEventListener("click", function () {

   if (playerOneInput.value == "") {

      error.innerHTML = "please give a number "

   } else {

      if (Number(playerOneInput.value)) {
         
         if(Number(playerOneInput.value) >= 1 && Number(playerOneInput.value) <= 10 ){
            counter = 5;
            error.innerHTML = ""
            displayControl("player2")
            span.innerHTML = counter
         }else{
            error.innerHTML = "please give the  number between 1 to 10 "
         }
      } else {
         error.innerHTML = "please give a number "
      }
   }

})

guessButtonTwo.addEventListener("click", function playerOne(playerOne) {
   playerOneInputStor = playerOneInput.value
   
   if( counter > 0){
     

      if (playerTwoInput.value == "") {

         error.innerHTML = "please give a number "
   
      } else {
   
         if (Number(playerTwoInput.value)) {

            if(Number(playerTwoInput.value) >= 1 && Number(playerTwoInput.value) <= 10 ){
               counter--
            span.innerHTML = counter
            error.innerHTML = ""
            }else{
               error.innerHTML = "please give the  number between 1 to 10 "
            }
            
            if(playerTwoInput.value == playerOneInputStor){
               
               displayControl("player3")
               return(" Player Two win")
               

               
            }else if(counter == 0){
               displayControl("player3")
               return(" Player Two win")
               
            }
           
         } else {
            error.innerHTML = "please give a number "
         }
      }
      
   } 

})



// player 3 

guessButtonThree.addEventListener("click", function() {
   playerOneInputStor = playerTwoInput.value
   
   if( counter > 0){
     

      if (playerThreeInput.value == "") {

         error.innerHTML = "please give a number "
   
      } else {
   
         if (Number(playerThreeInput.value)) {

            if(Number(playerThreeInput.value) >= 1 && Number(playerThreeInput.value) <= 10 ){
               counter--
            span.innerHTML = counter
            error.innerHTML = ""
            }else{
               error.innerHTML = "please give the  number between 1 to 10 "
            }
            
            if(playerTwoInput.value == playerOneInputStor){
               
               displayControl("player4")
               return(" Player Three win")
               

               
            }else if(counter == 0){
               displayControl("player4")
               return(" Player Three win")
               
            }
           
         } else {
            error.innerHTML = "please give a number "
         }
      }
      
   } 

})


function displayControl(type){
     
 if(type == "player2"){
   playerTwoInput.style.display = "inline-block"
   guessButtonTwo.style.display = "inline-block"
   guessButtonThree.style.display = "none"
   guessButtonFour.style.display = "none"
   playerOneInput.style.display = "none"
   playerThreeInput.style.display = "none"
   playerFourInput.style.display = "none"
   startButton.style.display = "none"
   heading.innerHTML = "Payer 2"
   h2.style.display = "block"
 }else if( type == "player3"){
   playerThreeInput.style.display = "inline-block"
   guessButtonThree.style.display = "inline-block"
   heading.innerHTML = "Payer 3"
   guessButtonTwo.style.display = "none"
   playerTwoInput.style.display = "none"
   playerOneInput.style.display = "none"
   startButton.style.display = "none"

 }else if( type == "player4"){
   playerTwoInput.style.display = "none"
   guessButtonFour.style.display = "none"
   playerOneInput.style.display = "none"
   startButton.style.display = "none"
   

 }else if( type == "win1"){
   playerTwoInput.style.display = "none"
   guessButtonTwo.style.display = "none"
   playerOneInput.style.display = "none"
   startButton.style.display = "none"
   h2.innerHTML = "game is over"
   heading.innerHTML = "Congratulation Player 1 is winner"

 }else if(type == "win2"){
   playerTwoInput.style.display = "none"
   guessButtonTwo.style.display = "none"
   playerOneInput.style.display = "none"
   startButton.style.display = "none"
   h2.style.display = "none"
   heading.innerHTML = "Congratulation Player 2 is winner"
 }

}