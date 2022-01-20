window.onload = function() {

let cpu = 0;
let player = 0;
let points = 0;
let rounds = 0;
let level = 1;
let playerName = "unknown";

//const monitor = document.querySelector('.monitor');
//const firebutton = document.getElementById("firebutton");
//const scorePlayer = document.getElementById("scorePlayer");
//const scoreCPU = document.getElementById("scoreCPU");
//const txtPlayer = document.getElementById("txtPlayer");
//const txtCPU = document.getElementById("txtCPU");
//const box = document.querySelector('.box');
 


  monitor = document.querySelector('.monitor');
  box = document.querySelector('.box');
 


playerButton.addEventListener("click", inputPlayerName);

function inputPlayerName(){

    playerName = prompt("Please enter your name", "Player One");

    if (playerName != null) {
      monitor.innerText =
      "Hello " + playerName + "\nDon't f*ck it up.";
    } 
  }

firebutton.addEventListener("click", showFire);

function showFire(){
  monitor.innerText = "You will burn";
  
  winLooseFire();
  
  gameFinished();
}

function startCoundown(){
  
  monitor.style.transition = "5s";
  monitor.innerText = "You will burn";

}

function winLooseFire(){


  // 0 = Fire
  // 1 = Water
  // 2 = Nature
  let y = cpuRandom();
    if (y === 0) {
      monitor.innerText = "Fire beats Fire\nDraw";
      monitor.style.color = "black";
      txtPlayer.innerText = "Fire";
      txtCPU.innerText = "Fire";
      
      
      box.style.background = "linear-gradient(90deg, rgba(219,75,75,1) 0%, rgba(233,194,110,1) 30%, rgba(233,194,110,1) 70%, rgba(219,75,75,1) 100%)";
   
    }
    else if (y === 1) {
      monitor.innerText = "Water beats Fire\nComputer wins";
      monitor.style.color = "red";
      cpu = cpu + 1;
      scoreCPU.innerText = cpu;
      txtPlayer.innerText = "Fire";
      txtCPU.innerText = "Water";

      box.style.background = "linear-gradient(90deg, rgba(219,75,75,1) 0%, rgba(233,194,110,1) 30%, rgba(110,188,233,1) 70%, rgba(49,67,165,1) 100%)";

    }
    else {
      monitor.innerText = "Fire beats Nature\nYou win";
      monitor.style.color = "green";
      player = player + 1;
      scorePlayer.innerText = player;
      txtPlayer.innerText = "Fire";
      txtCPU.innerText = "Nature";

      box.style.background = "linear-gradient(90deg, rgba(219,75,75,1) 0%, rgba(233,194,110,1) 30%, rgba(141,221,67,1) 70%, rgba(43,121,24,1) 100%)";
    
    }

}

function winLooseWater(){


  // 0 = Fire
  // 1 = Water
  // 2 = Nature
  let y = cpuRandom();
    if (y === 0) {
      monitor.innerText = "Water beats Fire\nYou win";
      monitor.style.cssText = "color:green; box-shadow: 0px;";
      player = player + 1;
      scorePlayer.innerText = player;
      txtPlayer.innerText = "Water";
      txtCPU.innerText = "Fire";
      box.style.background = "linear-gradient(90deg, rgba(49,67,165,1) 0%, rgba(110,188,233,1) 30%, rgba(233,194,110,1) 70%, rgba(219,75,75,1) 100%)";
    }
    else if (y === 1) {
      monitor.innerText = "Water beats Water\nDraw";
      monitor.style.cssText = "color:black; box-shadow: 0px;";
      txtPlayer.innerText = "Water";
      txtCPU.innerText = "Water";

      box.style.background = "linear-gradient(90deg, rgba(49,67,165,1) 0%, rgba(110,188,233,1) 30%, rgba(110,188,233,1) 70%, rgba(49,67,165,1) 100%)";
      
    }
    else {
      monitor.innerText = "Nature beats Water\nComputer wins";
      monitor.style.cssText = "color:red; box-shadow: 0px;";
      cpu = cpu + 1;
      scoreCPU.innerText = cpu;
      txtPlayer.innerText = "Water";
      txtCPU.innerText = "Nature";
    
      box.style.background = "linear-gradient(90deg, rgba(49,67,165,1) 0%, rgba(110,188,233,1) 30%, rgba(141,221,67,1) 70%, rgba(43,121,24,1) 100%)";

    }

}

function winLooseNature(){

  // 0 = Fire
  // 1 = Water
  // 2 = Nature
  let y = cpuRandom();
    if (y === 0) {
      monitor.innerText = "Fire beats Nature\nComputer wins";
      monitor.style.cssText = "color:red; box-shadow: 0px;";
      cpu = cpu + 1;
      scoreCPU.innerText = cpu;
      txtPlayer.innerText = "Nature";
      txtCPU.innerText = "Fire";
      box.style.background = "linear-gradient(90deg, rgba(43,121,24,1) 0%, rgba(141,221,67,1) 30%, rgba(233,194,110,1) 70%, rgba(219,75,75,1) 100%)";

    }
    else if (y === 1) {
      monitor.innerText = "Nature beats Water\nYou win";
      monitor.style.cssText = "color:green; box-shadow: 0px;";
      player = player + 1;
      scorePlayer.innerText = player;
      txtPlayer.innerText = "Nature";
      txtCPU.innerText = "Water";

      box.style.background = "linear-gradient(90deg, rgba(43,121,24,1) 0%, rgba(141,221,67,1) 30%, rgba(110,188,233,1) 70%, rgba(49,67,165,1) 100%)";


    }
    else {
      monitor.innerText = "Nature beats Nature\nDraw";
      monitor.style.cssText = "color:black; box-shadow: 0px;";
      txtPlayer.innerText = "Nature";
      txtCPU.innerText = "Nature";
      box.style.background = "linear-gradient(90deg, rgba(43,121,24,1) 0%, rgba(141,221,67,1) 30%, rgba(141,221,67,1) 70%, rgba(43,121,24,1) 100%)";
      
      
    
    }

}



buttonNewGame.addEventListener("click", setReset);

function gameFinished() {
  
  if (cpu === 5) {
    monitor.innerText = "GAME OVER\n" + "Try again"
    
    firebutton.disabled = true;
    waterbutton.disabled = true;
    naturebutton.disabled = true;
    randombutton.disabled = true;
    points--;
    rounds++;
    monitor.addEventListener("click", setZero);
    monitor.style.cssText = "color:red; box-shadow:inset 0px 0px 15px 5px;";
    
  }

  else if (player === 5) {
    monitor.innerText = "WINNER\n" + "Try again"
    
    firebutton.disabled = true;
    waterbutton.disabled = true;
    naturebutton.disabled = true;
    randombutton.disabled = true;
    points++;
    rounds++;
    monitor.addEventListener("click", setZero);
    monitor.style.cssText = "color:green; box-shadow:inset 0px 0px 15px 5px;";
    
  }



  else {

  }
  saveScore();
 
  
  
}



waterbutton.addEventListener("click", showWater);

function showWater(){
  monitor.innerText = "The wave is coming";
  winLooseWater()
  gameFinished();
}

naturebutton.addEventListener("click", showNature);

function showNature(){
  monitor.innerText = "Accept the force of nature";
  winLooseNature();
  gameFinished();
}

randombutton.addEventListener("click", showRandom);

gameFinished();

function showRandom(){
let x = Math.floor(Math.random() * 3);
  if (x < 1) {
    showFire();
      
  }
  else if (x>1){
    showWater();
      
    }

  else {
    showNature();
  }
   
  }

function cpuRandom(){
  let y = Math.floor(Math.random() * 3);
    if (y < 1) {
      
      return y;
        
    }
    else if (y>1){
      
      return y;
        
      }

    else {
      
      return y;
    }
   
  


}  


reset.addEventListener("click", setReset);


function setReset() {

  cpu = 0;
  player = 0;
  rounds = 0;
  points = 0;
  monitor.innerText = "Round: " + rounds + "\n" + "Points: " + points;
  monitor.style.cssText = "color:black; box-shadow: 0px;";
  txtPlayer.innerText = "-";
  txtCPU.innerText = "-";
  box.style.background = "rgb(202, 202, 202)";

  scoreCPU.innerText = cpu;
  scorePlayer.innerText = player;
  firebutton.disabled = false;
  waterbutton.disabled = false;
  naturebutton.disabled = false;
  randombutton.disabled = false;
  gameScoring();


  return;



}


function setZero() {
  monitor.innerText = "Round: " + rounds + "\n" + "Points: " + points;
  monitor.style.cssText = "color:black; box-shadow: 0px;";
  txtPlayer.innerText = "-";
  txtCPU.innerText = "-";
  box.style.background = "rgb(202, 202, 202)";
  cpu = 0;
  player = 0;

  scoreCPU.innerText = cpu;
  scorePlayer.innerText = player;
  firebutton.disabled = false;
  waterbutton.disabled = false;
  naturebutton.disabled = false;
  randombutton.disabled = false;
  gameScoring();


  return;



}


//Highscore - localStorage

function saveScore() {
  localStorage.setItem("points", points);
  localStorage.setItem("rounds", rounds);
  localStorage.setItem("level", level);
}

function getScore() {
  if(localStorage.getItem("rounds") != null){
    points = parseInt (localStorage.getItem("points"));
    rounds = parseInt (localStorage.getItem("rounds"));
    level = parseInt (localStorage.getItem("level"));
  }
}



highscore.addEventListener("click", showHighscore);

function showHighscore() {
  monitor.innerText = playerName + ": " + points + " points";
}




function gameScoring() {
  
  if (points === 1) {

    monitor.style.cssText = "box-shadow: inset 0px 0px 10px 5px green;";
  }

  else if (points === 2) {

    monitor.style.cssText = "box-shadow: inset 0px 0px 20px 10px green;";
  }

  else if (points === 3) {
    monitor.innerText = "You win the game";
    monitor.style.cssText = "box-shadow: inset 0px 0px 30px 20px green;";
    firebutton.disabled = true;
    waterbutton.disabled = true;
    naturebutton.disabled = true;
    randombutton.disabled = true;

    
    
  }

  else if (points === -1) {
    
    monitor.style.cssText = "box-shadow: inset 0px 0px 10px 5px red;";
  }

  else if (points === -2) {
    
    monitor.style.cssText = "box-shadow: inset 0px 0px 20px 10px red;";
  }
  
  else if (points === -3) {
    monitor.innerText = "You've lost the game";
    monitor.style.cssText = "box-shadow: inset 0px 0px 30px 20px red;";
    firebutton.disabled = true;
    waterbutton.disabled = true;
    naturebutton.disabled = true;
    randombutton.disabled = true;
  
    
    
  }


  else {

  }
 
  
  
}








}


