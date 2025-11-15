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
    if(humanChoice === computerChoice)
    {
        console.log("Tie");
    }
    else
    {
        if(humanChoice === "Rock")
        {
            if(computerChoice === "Paper")
            {
                console.log("You lose this round, paper beats rock");
                computerScore ++;
            }
            else
            {
                console.log("You win this round, rock beats scissors");
                humanScore ++;
            }
        }
        else if(humanChoice === "Paper")
        {
            if(computerChoice === "Rock")
            {
                console.log("You win this round, paper beats rock");
                humanScore ++;
            }
            else
            {
                console.log("You lose this round, scissors beats paper");
                computerScore ++;
            }
        }
        else if(humanChoice === "Scissors")
        {
            if(computerChoice === "Rock")
            {
                console.log("You lose this round, rock beats scissors");
                computerScore ++;
            }
            else
            {
                console.log("You win this round, scissors beats paper");
                humanScore ++;
            }
        }
    }

    console.log(`User score: ${humanScore} Computer score: ${computerScore}`);
}

function playGame()
{
    for(let i=0; i<5; i++)
    {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if(humanScore === computerScore)
    {
        console.log("Tie");
    }
    else
    {
        if(humanScore > computerScore)
        {
            console.log("You win the game!");
        }
        else
        {
            console.log("You lose the game...");
        }
    }
}

let humanScore = 0;
let computerScore = 0;

playGame();