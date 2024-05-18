let gameSeqs= [];
let userSeqs= [];
let started = false;
let level  = 0;
let btns = ["yellow","red","purple","green"];
let h2= document.querySelector("h2");
document.addEventListener("keypress",function(){
  if(started == false){
    console.log("game started");
    started = true;
    leveUp();
  }
 
    
});
function gameflshup(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");

  },260);
}
function userflashFlshup(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash");

  },260);
}

function leveUp(){
  userSeqs= [];
    level++;
    h2.innerText= `level ${level}`;
    let randomindx = Math.floor(Math.random()*3);
    let randomcolor = btns[randomindx];
    let randombtn = document.querySelector(`.${randomcolor}`);
    // console.log(randomindx);
    // console.log(randomcolor);
    // console.log(randombtn);
    gameflshup(randombtn);
    gameSeqs.push(randomcolor);
    console.log(gameSeqs);

 
}
function checkAns(idx){
  // console.log(`curr level:`,level);
  // let idx = level-1;
  if(userSeqs[idx]=== gameSeqs[idx]){
    if(userSeqs.length== gameSeqs.length){
      setTimeout(leveUp,1000);
    }
    console.log("same value");  }
    else{
      h2.innerHTML  = ` Game Over! your score was <b>${level}</b><br>press any key to start.`;
      // reset();
      let by = document.querySelector("body");
      by.style.backgroundcolor= "red";
      setTimeout(function(){
        by.style.backgroundcolor= "white";
      },150);
      reset();
    }
}
function btnpress(){
  console.log(this);
  let btn = this;
  userflashFlshup(btn);
  usercolor= btn.getAttribute("id");
  userSeqs.push(usercolor);
  checkAns(userSeqs.length-1);

}
let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
  btn.addEventListener("click",btnpress);

}
function reset(){
  started =false;
  gameSeqs = [];
  userSeqs=[];
  level = 0;

}