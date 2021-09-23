

const monitor = document.querySelector('.monitor');
const firebutton = document.getElementById("firebutton");
 
firebutton.addEventListener("click", showFire);

function showFire(){
  monitor.innerHTML = "You will burn";
  let y = cpuRandom();
  if (y === 0) {
    monitor.innerHTML = "- Both burn in hell - <br>Draw";
  
  }
  else if (y === 1) {
    monitor.innerHTML = "- You are wet now - <br>Computer wins";
  }
  else {
    monitor.innerHTML = "- The trees will burn - <br>You win";
  }


}
waterbutton.addEventListener("click", showWater);

function showWater(){
  monitor.innerHTML = "The wave is coming";
}

naturebutton.addEventListener("click", showNature);

function showNature(){
  monitor.innerHTML = "Accept the force of nature";
}

randombutton.addEventListener("click", showRandom);

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
    console.log(x);
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


function compare(){
  if (p === y){
    console.log("unentschieden");
  }
}


