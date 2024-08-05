var boxes=document.querySelectorAll(".boxes")
var rest=document.querySelector(".reset")
var reset=document.querySelector(".reset")
var close=document.querySelector(".ri-close-circle-fill")
var WinCon=document.querySelector(".win-con")
var NewGame=document.querySelector(".New")
var h1=document.querySelector(".win-con h1")
let arr=[  [0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[2, 4, 6],
[3, 4, 5],
[6, 7, 8],]
let turnO=true;
let count=0;
boxes.forEach(function(box){
    box.addEventListener("click",function(){
        if (turnO) {
            //playerO
            box.innerText = "O";
            turnO = false;
          } else {
            //playerX
            box.innerText = "X";
            turnO = true;
          }
          box.disabled = true;
          count++;
      
          let isWinner = checkwinner();
      
          if (count === 9 && !isWinner) {
            WinCon.style.display="block"
            h1.textContent=`Oops the game is draw`
            boxes.forEach(function(box){
             box.disabled=true
         
         })
          }
    })
})

function resetgame(){
reset.addEventListener("click",function(){
    boxes.forEach(function(box){
        box.disabled=false
        box.textContent=''

    })
})
}
function newgame(){
    NewGame.addEventListener("click",function(){
        boxes.forEach(function(box){
            box.disabled=false
            box.textContent=''
            WinCon.style.display="none"
    
        })
    })
}
function Close(){
close.addEventListener("click",function(){
      WinCon.style.display="none"
      boxes.forEach(function(box){
        box.disabled=true
    
    })
})
}
function checkwinner(){
    for (let pattern of arr) {
    var value_1=boxes[pattern[0]].innerText
    var value_2=boxes[pattern[1]].innerText
    var value_3=boxes[pattern[2]].innerText
    if(value_1!=""&&value_2!="" &&value_3!=""){
        if(value_1===value_2 && value_2===value_3 &&value_1===value_3){
            showwinner(value_1)
          
            return true;
        }
    
            return false
        
    }
}
}
function showwinner(winner){
   WinCon.style.display="block"
   h1.textContent=`Congratulations the winner is ${winner}`
   boxes.forEach(function(box){
    box.disabled=false

})
   const duration = 5 * 1000,
   animationEnd = Date.now() + duration,
   defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
 
 function randomInRange(min, max) {
   return Math.random() * (max - min) + min;
 }
const interval = setInterval(function() {
const timeLeft = animationEnd - Date.now();

if (timeLeft <= 0) {
 return clearInterval(interval);
}

const particleCount = 50 * (timeLeft / duration);


confetti(
 Object.assign({}, defaults, {
   particleCount,
   origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
 })
);
confetti(
 Object.assign({}, defaults, {
   particleCount,
   origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
 })
);
}, 250);



}
checkwinner()
Close()
newgame()
resetgame()