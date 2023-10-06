let viewEl = document.getElementById("view")
let playerEl = document.getElementById("player")
let computerEl = document.getElementById("computer")
let tieEl = document.getElementById("tie")
let totalGameEl = document.getElementById("totalGame")

//background color change
function color(color){
   let arrayN = ["#000", "#fff"]
      if(color === 'black'){
         document.body.style.backgroundColor = arrayN[0]
      }
      if(color === 'white'){
         document.body.style.backgroundColor = arrayN[1]
      }  

}

//the game proper

   let score = {
      player: 0,
      computer: 0,
      tie: 0,
   }

   function randomNum(){
      let randomNumber = Math.floor(Math.random()*10)
      if(randomNumber<= 3){
         compMove = "rock"
      }else if(randomNumber >3 && randomNumber <=6){
         compMove = "paper"
      }else if(randomNumber >6){
         compMove = "snake"
      }
   }

  
   function play(pick){ 
      let result = ''
      randomNum()
      if(pick === "rock"){
         if(compMove === "rock"){
            result = "it's a tie"
         }else if(compMove === "paper"){
            result = "compt wins"
         }else if(compMove === "snake"){
            result = "player wins"
         }
      }
      if(pick === "paper"){
         if(compMove === "rock"){
            result = "compt wins"
           }else if(compMove === "paper"){
            result = "it's a tie"
           }else if(compMove === "snake"){
            result = "player wins"
           }
      }
      if(pick === "snake"){
         if(compMove === "rock"){
            result = "compt wins"
           }else if(compMove === "paper"){
            result = "player wins"
           }else if(compMove === "snake"){
            result = "it's a tie"
           }

         //score section
      }
      if(result === "player wins"){
         score.player++
      }
      else if(result === "compt wins"){
         score.computer++
      }
      if(result === "it's a tie"){
         score.tie++
      }

      //reset score
      if(pick === "reset"){
         result = "Game Reset"
         score.player = 0
         score.computer = 0
         score.tie = 0
      }
      viewEl.innerHTML = result
      playerEl.innerHTML = score.player
      computerEl.innerHTML = score.computer
      tieEl.innerHTML = score.tie
      totalGameEl.innerHTML= score.player + score.computer + score.tie

   }


  



