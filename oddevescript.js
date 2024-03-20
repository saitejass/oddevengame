let p1Scores = [];
let p2Scores = [];

let p1Total = 0;
let p2Total = 0;


function allocateScore() {
    var p1Random = Math.floor(Math.random()*100)+1;
    var p2Random = Math.floor(Math.random()*100)+1;

    console.log(p1Random, " " , p2Random)

    if(p1Random%2 == 0) {
        p1Scores.push(1);
        p1Total += 1;

    }  else {
        p1Scores.push(0);
    } 
    
    if(p2Random%2 == 0) {
        p2Scores.push(1);
        p2Total += 1;

    }
    else {
        p2Scores.push(0);
    }


    updateScore();
}

function updateScore() {
    var p1Score = document.getElementById("p1-score");
    var p2Score = document.getElementById("p2-score");
    var resultText = document.getElementById("result");
    var checkButton = document.getElementById("check-btn");

    var player1Balls = document.getElementsByClassName("player1")[0].children;
    var player2Balls = document.getElementsByClassName("player2")[0].children;

    p1Score.textContent = p1Total;
    p2Score.textContent = p2Total;

    for(let i=0; i<p1Scores.length; i++) {
        if(p1Scores[i] == 0) {
            player1Balls[i].style = "background-color: red;";
        } else {
            player1Balls[i].style = "background-color: green;";
        }
    }

    for(let i=0; i<p2Scores.length; i++) {
        if(p2Scores[i] == 0) {
            player2Balls[i].style = "background-color: red;";
        } else {
            player2Balls[i].style = "background-color: green;";
        }
    }

    if(p1Scores.length == 5 && p2Scores.length == 5){
        if(p1Total > p2Total) {
            resultText.textContent = "Player 1 wins the Game";
            checkButton.setAttribute("disabled", true);

        } else if(p1Total == p2Total) {
            resultText.textContent = "Game Tied";
            checkButton.setAttribute("disabled", true);
        } else 
            resultText.textContent = "Player 2 wins the Game";
            checkButton.setAttribute("disabled", true);
    }


    console.log(p1Total, p2Total, p1Scores, p2Scores);
}