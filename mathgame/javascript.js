
var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
//if we click on the startreset button
document.getElementById("startreset").onclick = function(){
    //if we are playing
    if(playing){
        //reload page
        window.location.reload();
    }else{ //if we are not playing
        //set score to zero
        playing = true;
        score = 0;
        document.getElementById("scoreValue").innerHTML = score;
        
        //show the countdown box
        document.getElementById("timeremain").style.display = "block";
        
        timeremaining = 60;
        document.getElementById("timeValue").innerHTML = timeremaining;
        
        //change the button to reset
        
        //hide game over
        
        document.getElementById("gameover").style.display = "none";
        document.getElementById("startreset").innerHTML = "Reset Game";
        
        //start the countdown
        
        startCountDown();
        //generate new q&a
        
        generateQandA();
    }

    
}
//Clicking on answer box
for(var j = 1; j < 5; j++){
document.getElementById("box" + j).onclick = function(){
    //check if we are playing
    if(playing){
        if(this.innerHTML == correctAnswer){
            score++;
            document.getElementById("scoreValue").innerHTML = score;
            
            document.getElementById("wrong").style.display = "none";
            
            document.getElementById("correct").style.display = "block";
            
            setTimeout(function(){document.getElementById("correct").style.display = "none";},1000);
            
            //generate new q&a
            generateQandA();
        }else{
            document.getElementById("wrong").style.display = "block";
            
            document.getElementById("correct").style.display = "none";
            
            setTimeout(function(){document.getElementById("wrong").style.display = "none";},1000);
        }
    }
}
}
//if we click on an answer box
    //if we are playing
        //correct?
            //yes->
                //increase score 
                //show correct box for 1sec
                //generate new q&a
            //no
                //show try again box for 1sec
function startCountDown(){
    action = setInterval(function(){
        timeremaining -= 1;
        document.getElementById("timeValue").innerHTML = timeremaining;
        
        if(timeremaining == 0){
            clearInterval(action);
            document.getElementById("timeremain").style.display = "none";
            document.getElementById("correct").style.display = "none";
            document.getElementById("wrong").style.display = "none";
            document.getElementById("gameover").style.display = "block";
            
            document.getElementById("gameover").innerHTML = "<p>Game over !</p><p>your score is : " + score + "</p>";
            
            playing = false;
            document.getElementById("startreset").innerHTML = "Start game";
            
            
        }
    }, 1000);
    
    
}

function generateQandA(){
    var x = Math.round(9 * Math.random()) + 1;
    var y = Math.round(9 * Math.random()) + 1;
    correctAnswer = x * y;
    
    document.getElementById("question").innerHTML = x + "x" + y;
    
    var correctPosition = Math.round(3 * Math.random()) + 1;
    
    document.getElementById("box" + correctPosition).innerHTML = correctAnswer; // fill one box with correct answer;
    
    //fill other boxes with wrong answers
    
    var answers =[correctAnswer];
    for(var i = 1; i < 5; i++){
        if(i != correctPosition){
            var wrongAnswer;
            do{
                wrongAnswer = (Math.round(9 * Math.random()) + 1) + (Math.round(9 * Math.random()) + 1);
            }while(answers.indexOf(wrongAnswer)>-1);
            
            document.getElementById("box" + i).innerHTML = wrongAnswer;
            
            answers.push(wrongAnswer);
        }
    }
}