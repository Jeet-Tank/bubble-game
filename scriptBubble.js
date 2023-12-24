var time = 30;
var score = 0;
var hitval = 0;
var lastScore = 0;
var bestScore = 0;

function bubbleAppear(){
    var group = "";
    for (var i =1; i<=60;i++)
        {
        var rdm = Math.floor(Math.random()*10);
        group += `<div class="bubble">`+rdm+`</div>`;
        }
    document.getElementById("pbtm").innerHTML = group;
}

function timerStart(){
        var timeint = setInterval(function(){
            if(time>0){
                time--;
                document.getElementById("timer").textContent = time;
            }
            else{
                clearInterval(timeint);
                document.getElementById("pbtm").innerHTML="<h1>Game Over</h1><h1>Your Score was: </h1><h1>"+ score + "</h1>"; 
                document.getElementById("restartGame").style.display = "block";               
            }
        },1000);   
}

function newHit(){
    hitval = Math.floor(Math.random()*10);
    document.getElementById("newhit").textContent = hitval;
}

function scoreup(){
    score += 10;
    document.getElementById("scoreval").textContent= score;
}
 document.getElementById("startGame").onclick=function(){
    document.getElementById("restartGame").style.disply = "none";
    timerStart();
    bubbleAppear();
    newHit();
}    

document.getElementById("restartGame").onclick = function(){
    time = 30;
    score = 0;
    document.getElementById("scoreval").textContent= score;
    document.getElementById("restartGame").style.display="none";
    timerStart();
    bubbleAppear();
    newHit();
}    


document.getElementById("pbtm").addEventListener(
    "click", function(accha){
        if(Number(accha.target.textContent)===hitval){
            scoreup();
            newHit();
            bubbleAppear();
        }
    }
)




