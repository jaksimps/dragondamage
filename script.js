var wrap = document.body.querySelector(".wrapper");
var dragon = document.body.querySelector(".dragon");
var win = document.body.querySelector(".win");


var total = 0;
dragon.innerHTML="Dragon damage: " + total;


function damage(damage, type){
 
  if(type === "fire"){
    total = total + (damage-1);
   dragon.innerHTML = ("Dragon damage: " + total);
  }else if(type === "ice"){
     total = total + (damage+1);
    dragon.innerHTML = "Dragon damage: " + total;
  }else if(type === "poison"){
    total = total + damage;
     dragon.innerHTML = "Dragon damage: " + total;
  }

if(total >= 10){
  win.innerHTML = "You Win!";
} 
 
}
 
document.body.querySelector(".fire").addEventListener("click", function(){
  damage(3,"fire");
})
document.body.querySelector(".ice").addEventListener("click", function(){
  damage(1,"ice");
})
document.body.querySelector(".poison").addEventListener("click", function(){
  damage(4, "poison");
})