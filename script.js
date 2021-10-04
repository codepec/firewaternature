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
 
window.onload = function() {

  monitor = document.querySelector('.monitor');
  box = document.querySelector('.box');
 
}

playerButton.addEventListener("click", inputPlayerName);

function inputPlayerName(){

    playerName = prompt("Please enter your name", "Player One");

    if (playerName != null) {
      monitor.innerHTML =
      "Hello " + playerName + "<br>Don't f*ck it up.";
    } 
  }

firebutton.addEventListener("click", showFire);

function showFire(){
  monitor.innerHTML = "You will burn";
  
  winLooseFire();
  
  gameFinished();
}

function startCoundown(){
  
  monitor.style.transition = "5s";
  monitor.innerHTML = "You will burn";

}

function winLooseFire(){


  // 0 = Fire
  // 1 = Water
  // 2 = Nature
  let y = cpuRandom();
    if (y === 0) {
      monitor.innerHTML = "Fire beats Fire<br>Draw";
      monitor.style.color = "black";
      txtPlayer.innerHTML = "Fire";
      txtCPU.innerHTML = "Fire";
      
      
      box.style.background = "linear-gradient(90deg, rgba(219,75,75,1) 0%, rgba(233,194,110,1) 30%, rgba(233,194,110,1) 70%, rgba(219,75,75,1) 100%)";
   
    }
    else if (y === 1) {
      monitor.innerHTML = "Water beats Fire<br>Computer wins";
      monitor.style.color = "red";
      cpu = cpu + 1;
      scoreCPU.innerHTML = cpu;
      txtPlayer.innerHTML = "Fire";
      txtCPU.innerHTML = "Water";

      box.style.background = "linear-gradient(90deg, rgba(219,75,75,1) 0%, rgba(233,194,110,1) 30%, rgba(110,188,233,1) 70%, rgba(49,67,165,1) 100%)";

    }
    else {
      monitor.innerHTML = "Fire beats Nature<br>You win";
      monitor.style.color = "green";
      player = player + 1;
      scorePlayer.innerHTML = player;
      txtPlayer.innerHTML = "Fire";
      txtCPU.innerHTML = "Nature";

      box.style.background = "linear-gradient(90deg, rgba(219,75,75,1) 0%, rgba(233,194,110,1) 30%, rgba(141,221,67,1) 70%, rgba(43,121,24,1) 100%)";
    
    }

}

function winLooseWater(){


  // 0 = Fire
  // 1 = Water
  // 2 = Nature
  let y = cpuRandom();
    if (y === 0) {
      monitor.innerHTML = "Water beats Fire<br>You win";
      monitor.style.color = "green";
      player = player + 1;
      scorePlayer.innerHTML = player;
      txtPlayer.innerHTML = "Water";
      txtCPU.innerHTML = "Fire";
      box.style.background = "linear-gradient(90deg, rgba(49,67,165,1) 0%, rgba(110,188,233,1) 30%, rgba(233,194,110,1) 70%, rgba(219,75,75,1) 100%)";
    }
    else if (y === 1) {
      monitor.innerHTML = "Water beats Water<br>Draw";
      monitor.style.color = "black";
      txtPlayer.innerHTML = "Water";
      txtCPU.innerHTML = "Water";

      box.style.background = "linear-gradient(90deg, rgba(49,67,165,1) 0%, rgba(110,188,233,1) 30%, rgba(110,188,233,1) 70%, rgba(49,67,165,1) 100%)";
      
    }
    else {
      monitor.innerHTML = "Nature beats Water<br>Computer wins";
      monitor.style.color = "red";
      cpu = cpu + 1;
      scoreCPU.innerHTML = cpu;
      txtPlayer.innerHTML = "Water";
      txtCPU.innerHTML = "Nature";
    
      box.style.background = "linear-gradient(90deg, rgba(49,67,165,1) 0%, rgba(110,188,233,1) 30%, rgba(141,221,67,1) 70%, rgba(43,121,24,1) 100%)";

    }

}

function winLooseNature(){

  // 0 = Fire
  // 1 = Water
  // 2 = Nature
  let y = cpuRandom();
    if (y === 0) {
      monitor.innerHTML = "Fire beats Nature<br>Computer wins";
      monitor.style.color = "red";
      cpu = cpu + 1;
      scoreCPU.innerHTML = cpu;
      txtPlayer.innerHTML = "Nature";
      txtCPU.innerHTML = "Fire";
      box.style.background = "linear-gradient(90deg, rgba(43,121,24,1) 0%, rgba(141,221,67,1) 30%, rgba(233,194,110,1) 70%, rgba(219,75,75,1) 100%)";

    }
    else if (y === 1) {
      monitor.innerHTML = "Nature beats Water<br>You win";
      monitor.style.color = "green";
      player = player + 1;
      scorePlayer.innerHTML = player;
      txtPlayer.innerHTML = "Nature";
      txtCPU.innerHTML = "Water";

      box.style.background = "linear-gradient(90deg, rgba(43,121,24,1) 0%, rgba(141,221,67,1) 30%, rgba(110,188,233,1) 70%, rgba(49,67,165,1) 100%)";


    }
    else {
      monitor.innerHTML = "Nature beats Nature<br>Draw";
      monitor.style.color = "black";
      txtPlayer.innerHTML = "Nature";
      txtCPU.innerHTML = "Nature";
      box.style.background = "linear-gradient(90deg, rgba(43,121,24,1) 0%, rgba(141,221,67,1) 30%, rgba(141,221,67,1) 70%, rgba(43,121,24,1) 100%)";
      
      
    
    }

}




function gameFinished() {
  
  if (cpu === 5) {
    monitor.innerHTML = "GAME OVER<br>You loose<br>" + "Try again"
    monitor.style.color = "red";
    firebutton.disabled = true;
    waterbutton.disabled = true;
    naturebutton.disabled = true;
    randombutton.disabled = true;
    points = 0;
    rounds++;
    monitor.addEventListener("click", setZero);
  }

  else if (player === 5) {
    monitor.innerHTML = "WINNER<br>You win<br>" + "Try again"
    monitor.style.color = "green";
    firebutton.disabled = true;
    waterbutton.disabled = true;
    naturebutton.disabled = true;
    randombutton.disabled = true;
    points++;
    rounds++;
    monitor.addEventListener("click", setZero);

  }



  else {

  }
  saveScore();
  
}



waterbutton.addEventListener("click", showWater);

function showWater(){
  monitor.innerHTML = "The wave is coming";
  winLooseWater()
  gameFinished();
}

naturebutton.addEventListener("click", showNature);

function showNature(){
  monitor.innerHTML = "Accept the force of nature";
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


reset.addEventListener("click", setZero);

function setZero() {
  monitor.innerHTML = "try as hard as one can";
  monitor.style.color = "black";
  txtPlayer.innerHTML = "-";
  txtCPU.innerHTML = "-";
  box.style.background = "rgb(202, 202, 202)";
  cpu = 0;
  player = 0;
  scoreCPU.innerHTML = cpu;
  scorePlayer.innerHTML = player;
  firebutton.disabled = false;
  waterbutton.disabled = false;
  naturebutton.disabled = false;
  randombutton.disabled = false;


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
  monitor.innerHTML = playerName + ": " + points + " points";
}