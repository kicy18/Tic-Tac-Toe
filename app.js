let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");



const genCompChoice = () =>{
    const options = ["rock" , "paper" , "scissors"];
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];

}

const drawGame = () =>{
    msg.innerText = "Game was draw . Play again";
    msg.style.backgroundColor = "#081b31";

}

const showWinner = (userwin , userChoice , compchoice) =>{
    if(userwin){
        userscore++;
        userScorepara.innerHTML = userscore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";

    }
    else{
        compscore++;
        compScorepara.innerHTML = compscore;
        msg.innerText = `You Lose. ${compchoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice)=>{
    const compchoice = genCompChoice();

    if(userChoice == compchoice){
        drawGame();

    }
    else{
        let userwin = true;
        if(userChoice == "rock"){
            userwin = compchoice == "paper" ? false: true;

        }
        else if(userChoice == "paper"){
            userwin = compchoice == "scissors" ? false: true;

        }
        else{
            userwin = compchoice == "rock" ? false: true;

        }
        showWinner(userwin , userChoice , compchoice);
    }
    


}
choices.forEach(choice => {
    
    choice.addEventListener("click" , ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);


    })
    
});
