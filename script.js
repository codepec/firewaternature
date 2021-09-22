

const monitor = document.querySelector('.monitor');
const firebutton = document.getElementById("firebutton");
 
firebutton.addEventListener("click", showFire);

function showFire(){
  monitor.innerHTML = "You will burn";
}
waterbutton.addEventListener("click", showWater);

function showWater(){
  monitor.innerHTML = "The wave is coming";
}

naturebutton.addEventListener("click", showNature);

function showNature(){
  monitor.innerHTML = "Accept the force of nature";
}

naturebutton.addEventListener("click", showRandom);

function showRandom(){
let x = Math.floor(Math.random() * 3);
  if (x < 1) {
    showNature();
      
  }
  else {
    showWater();
      
    }
    console.log(x);
  }

  


