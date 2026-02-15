let gameSeq = [];
let userSeq = [];
let maxScore = 0;
let gameStart = false;
let level = 0;
let btnColor = ["red","green","orange","blue"];
document.addEventListener("keypress",function(){
    if(gameStart===false){
        console.log("game started !");
        gameStart = true;
        levelUp();
    }
})


let h2 = document.querySelector("h2");

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level} , maxScore is ${maxScore}`;

    //random button
    let ranIdx = Math.floor(Math.random() * 3);
    let ranColor = btnColor[ranIdx];
    let ranBtn = document.querySelector(`.${ranColor}`);
    
    gameSeq.push(ranColor);
    console.log("gameSeq : ",gameSeq);
    //button flash
    btnFlash(ranBtn);
}

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },250)
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function checkSeq(idx){
   if(userSeq[idx]===gameSeq[idx]){
       if(userSeq.length===gameSeq.length){
          setTimeout(function(){
            levelUp()
        },1000);
       }
   }else{
      maxScore = Math.max(level,maxScore);
      h2.innerHTML = `Game over!Your scroe is <b> ${level} </b> <br> press any key to restart the game <br> maxScore is ${maxScore}`;
      document.querySelector("body").style.backgroundColor = "red";
      setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";  
      },150)
      reset(); 
    }
}

function btnPress(){
    let btn = this;
    btnFlash(btn);
    let btnColor = btn.getAttribute("id");
    userSeq.push(btnColor);
    console.log("userSeq : ",userSeq);
    checkSeq(userSeq.length-1);
}

function reset(){
    level = 0;
    gameStart = false;
    gameSeq = [];
}

