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

console.log(getComputerChoice());