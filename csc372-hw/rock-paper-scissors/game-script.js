const choices = ["rock", "paper", "scissors"];
const allPictures = [
    "https://l00nat1c.github.io/csc372-hw/rock-paper-scissors/game-images/rock.PNG",
    "https://l00nat1c.github.io/csc372-hw/rock-paper-scissors/game-images/paper.PNG",
    "https://l00nat1c.github.io/csc372-hw/rock-paper-scissors/game-images/scissors.PNG"
]
const pAgainBut = document.getElementById('p-again');
pAgainBut.addEventListener('click', playGameAgain);


function playGame() {
    const rockBut = document.getElementById('rock');
    const papBut = document.getElementById('paper');
    const sciBut = document.getElementById('scissors');
    
    const playerOpt = [rockBut, papBut, sciBut];

    for (let index = 0; index < playerOpt.length; index++) {
        const element = playerOpt[index];
        element.addEventListener('click', gameTurn);
    }

}

function gameTurn(event) {
    const cpuThr = document.getElementById('cpu-pic');
    const playerHand = event.currentTarget;
    playerHand.style.border = "5px solid red";

    var cpuChoice = Math.floor(Math.random() * 3);

    cpuThr.src = allPictures[cpuChoice];

    gameWinner(playerHand.src, cpuThr.src);
}

function gameWinner(player, computer) {
        const resultW = document.getElementById('result-win');
        if (player == computer) {
            resultW.textContent = "Tie";
        }
        else if (player == "https://l00nat1c.github.io/csc372-hw/rock-paper-scissors/game-images/rock.PNG") {
            if (computer == "https://l00nat1c.github.io/csc372-hw/rock-paper-scissors/game-images/paper.PNG") {
                resultW.textContent = "Computer Wins";
            }
            else {
                resultW.textContent = "Player Wins";
            }
        }
        else if (player == "https://l00nat1c.github.io/csc372-hw/rock-paper-scissors/game-images/paper.PNG") {
            if (computer == "https://l00nat1c.github.io/csc372-hw/rock-paper-scissors/game-images/scissors.PNG") {
                resultW.textContent = "Computer Wins";
            }
            else {
                resultW.textContent = "Player Wins";
            }
        }
        else if (player == "https://l00nat1c.github.io/csc372-hw/rock-paper-scissors/game-images/scissors.PNG") {
            if (computer == "https://l00nat1c.github.io/csc372-hw/rock-paper-scissors/game-images/rock.PNG") {
                resultW.textContent = "Computer Wins";
            }
            else {
                resultW.textContent = "Player Wins";
            }
        }
        else{
            resultW.textContent = "Error" + " " + computer;
        }
}

function difPicture(counter) {
    if(counter >= allPictures.length) {
        counter = 0;
    }
    else {
        cpuThr.src = allPictures[counter];
        counter++;
    }
}

function playGameAgain(event) {
    window.location.reload();
}

playGame();