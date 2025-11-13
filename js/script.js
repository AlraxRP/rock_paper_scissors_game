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

console.log(getHumanChoice());