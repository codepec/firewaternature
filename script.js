let cpu = 0;
let player = 0;

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
      monitor.innerHTML = "Draw";
      monitor.style.color = "black";
      txtPlayer.innerHTML = "Fire";
      txtCPU.innerHTML = "Fire";
      
      
      box.style.background = "linear-gradient(90deg, rgba(219,75,75,1) 0%, rgba(233,194,110,1) 30%, rgba(233,194,110,1) 70%, rgba(219,75,75,1) 100%)";
   
    }
    else if (y === 1) {
      monitor.innerHTML = "Computer wins";
      monitor.style.color = "red";
      cpu = cpu + 1;
      scoreCPU.innerHTML = cpu;
      txtPlayer.innerHTML = "Fire";
      txtCPU.innerHTML = "Water";

      box.style.background = "linear-gradient(90deg, rgba(219,75,75,1) 0%, rgba(233,194,110,1) 30%, rgba(110,188,233,1) 70%, rgba(49,67,165,1) 100%)";

    }
    else {
      monitor.innerHTML = "You win";
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
      monitor.innerHTML = "You win";
      monitor.style.color = "green";
      player = player + 1;
      scorePlayer.innerHTML = player;
      txtPlayer.innerHTML = "Water";
      txtCPU.innerHTML = "Fire";
      box.style.background = "linear-gradient(90deg, rgba(49,67,165,1) 0%, rgba(110,188,233,1) 30%, rgba(233,194,110,1) 70%, rgba(219,75,75,1) 100%)";
    }
    else if (y === 1) {
      monitor.innerHTML = "Draw";
      monitor.style.color = "black";
      txtPlayer.innerHTML = "Water";
      txtCPU.innerHTML = "Water";

      box.style.background = "linear-gradient(90deg, rgba(49,67,165,1) 0%, rgba(110,188,233,1) 30%, rgba(110,188,233,1) 70%, rgba(49,67,165,1) 100%)";
      
    }
    else {
      monitor.innerHTML = "Computer wins";
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
      monitor.innerHTML = "Computer wins";
      monitor.style.color = "red";
      cpu = cpu + 1;
      scoreCPU.innerHTML = cpu;
      txtPlayer.innerHTML = "Nature";
      txtCPU.innerHTML = "Fire";
      box.style.background = "linear-gradient(90deg, rgba(43,121,24,1) 0%, rgba(141,221,67,1) 30%, rgba(233,194,110,1) 70%, rgba(219,75,75,1) 100%)";

    }
    else if (y === 1) {
      monitor.innerHTML = "You win";
      monitor.style.color = "green";
      player = player + 1;
      scorePlayer.innerHTML = player;
      txtPlayer.innerHTML = "Nature";
      txtCPU.innerHTML = "Water";

      box.style.background = "linear-gradient(90deg, rgba(43,121,24,1) 0%, rgba(141,221,67,1) 30%, rgba(110,188,233,1) 70%, rgba(49,67,165,1) 100%)";


    }
    else {
      monitor.innerHTML = "Draw";
      monitor.style.color = "black";
      txtPlayer.innerHTML = "Nature";
      txtCPU.innerHTML = "Nature";
      box.style.background = "linear-gradient(90deg, rgba(43,121,24,1) 0%, rgba(141,221,67,1) 30%, rgba(141,221,67,1) 70%, rgba(43,121,24,1) 100%)";
      
      
    
    }

}


function gameFinished() {
  if (cpu === 5) {
    monitor.innerHTML = "Game Over"
    monitor.style.color = "red";
    firebutton.disabled = true;
    waterbutton.disabled = true;
    naturebutton.disabled = true;
    randombutton.disabled = true;

  }

  else if (player === 5) {
  monitor.innerHTML = "You win"
  monitor.style.color = "green";
  firebutton.disabled = true;
  waterbutton.disabled = true;
  naturebutton.disabled = true;
  randombutton.disabled = true;
  }



  else {

  }
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
}

