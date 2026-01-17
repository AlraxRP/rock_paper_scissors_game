function getComputerChoice()
{
    let randNum;
    let compChoice;

    randNum = Math.floor((Math.random()*3)+1);

    if(randNum === 1)
    {
        compChoice = "Rock";
    }
    else if(randNum === 2)
    {
        compChoice = "Paper";
    }
    else
    {
        compChoice = "Scissors";
    }

    return compChoice;
}

function getHumanChoice()
{
    let choiceNum;
    let humanChoice;

    choiceNum =  parseInt(prompt("Enter the number of the choice to select it: 1)Rock 2)Paper 3)Scissors"));

    if(choiceNum === 1)
    {
        humanChoice = "Rock";
    }
    else if (choiceNum === 2)
    {
        humanChoice = "Paper";
    }
    else if (choiceNum == 3)
    {
        humanChoice = "Scissors";
    }

    return humanChoice;
}

function playRound(humanChoice, computerChoice)
{
    let roundResultsMsg = "";

    if(humanChoice === computerChoice)
    {
        roundResult.textContent = "tie";
    }
    else
    {
        if(humanChoice === "Rock")
        {
            if(computerChoice === "Paper")
            {
                roundResult.textContent = "You lose this round, paper beats rock";
                computerScore ++;
            }
            else
            {
                roundResult.textContent = "You win this round, rock beats scissors";
                humanScore ++;
            }
        }
        else if(humanChoice === "Paper")
        {
            if(computerChoice === "Rock")
            {
                roundResult.textContent = "You win this round, paper beats rock";
                humanScore ++;
            }
            else
            {
                roundResult.textContent = "You lose this round, scissors beats paper";
                computerScore ++;
            }
        }
        else if(humanChoice === "Scissors")
        {
            if(computerChoice === "Rock")
            {
                roundResult.textContent = "You lose this round, rock beats scissors";
                computerScore ++;
            }
            else
            {
                roundResult.textContent = "You win this round, scissors beats paper";
                humanScore ++;
            }
        }
    }

    scoreInfo.textContent = ` User score: ${humanScore} Computer score: ${computerScore}`;
}

let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.querySelector("div");

const roundResult = document.createElement("p");
const scoreInfo = document.createElement("p");
const finalScore = document.createElement("p");
resultsDiv.appendChild(roundResult);
resultsDiv.appendChild(scoreInfo);

const rpsButtons = document.querySelectorAll("button");

const btnResetGame = document.createElement("button");

rpsButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const userOption = button.textContent;

        playRound(userOption, getComputerChoice());

        if(humanScore === 5 || computerScore === 5)
        {
            resultsDiv.appendChild(finalScore);

            if(humanScore === 5)
            {
                finalScore.textContent = "You win the Game!"
            }
            else
            {
                finalScore.textContent = "You lose the game..."
            }

            rpsButtons.forEach((button) => {
                button.disabled = true;
            });

            const body = document.querySelector("body");
            btnResetGame.textContent = "New game";
            body.appendChild(btnResetGame);
        }
    });
});

btnResetGame.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;

    roundResult.textContent = "";
    scoreInfo.textContent = "";
    finalScore.textContent = "";

    rpsButtons.forEach((button) => {
        button.disabled = false;
    });

    btnResetGame.remove();
})