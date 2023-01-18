let readyforrestart = 0;
let finalgoal = 5;
let yourscore = 0;
let odinscore = 0;
let yourchoice = 0;
let odinchoice = 0;
let count = 1;
let oldchoice = 0;
let num;

const rockbutton = document.querySelector('.gamebutton1');
const paperbutton = document.querySelector('.gamebutton2');
const scissorbutton = document.querySelector('.gamebutton3');

const odinrockbutton = document.querySelector('.odingamebutton1');
const odinpaperbutton = document.querySelector('.odingamebutton2');
const odinscissorbutton = document.querySelector('.odingamebutton3');
const sentencegame = document.querySelector('.sentence');
const scoreboard = document.querySelector('.score');
const restartbutton = document.querySelector('.restartbutton');


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getComputerChoice(){
    num = Math.floor(Math.random() * 3);
    switch(num){
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissor';
    }
}

function winner(winnername){
    const scissorbutton = document.querySelector('.winnerend');
    if(winnername === 'You'){
        scissorbutton.textContent = 'YOU ARE THE WINNER, YOU ARE THE NEW GOD!' 
        scissorbutton.style.cssText = 'color: green;';
        }

    if(winnername === 'Odin'){
        scissorbutton.textContent = 'YOU LOST, ODIN IS THE REAL GOD!' 
        scissorbutton.style.cssText = 'color: red; display: flex; align-self: center;';
        }  

}
function checker(choice){
    odinchoice = getComputerChoice();
    
    if (oldchoice === 'Rock' || oldchoice === 'Paper' || oldchoice === 'Scissor'){
    switch(oldchoice){
        case 'Rock':
            odinrockbutton.classList.remove('computerchoice');    
            
            break;
        case 'Paper':
            odinpaperbutton.classList.remove('computerchoice');    

            break;
        case 'Scissor':
            odinscissorbutton.classList.remove('computerchoice');    

            break;
    
    }
}
    oldchoice = odinchoice;
    switch(odinchoice){
        case 'Rock':
            odinrockbutton.classList.add('computerchoice'); 
            
            break;
        case 'Paper':
            odinpaperbutton.classList.add('computerchoice');    

            break;
        case 'Scissor':
            odinscissorbutton.classList.add('computerchoice');    

            break;
    
    }

    try{
        sentencegame.style.left = '190px';
        sentencegame.classList.remove('sentencedraw');  
    }
    catch{}

    try{
    sentencegame.classList.remove('sentencewin');  
}
    catch{}

    try{
        sentencegame.classList.remove('sentencelose');  
    }
        catch{}
    

    if (yourchoice === odinchoice){
        sentencegame.classList.add('sentencedraw'); 
        sentencegame.innerHTML = "😬 THIS IS A DRAW";

        return;
        } 
    if(yourchoice === 'Rock'){
        if(odinchoice === 'Paper'){
            sentencegame.classList.add('sentencelose');    
            sentencegame.innerHTML = "🥺 PAPER BEAT ROCK";
            odinscore++;

        }else if(odinchoice === 'Scissor'){
            sentencegame.classList.add('sentencewin');    
            sentencegame.innerHTML = "😏 ROCK BEAT SCISSOR";
            yourscore++;

            
        }
    }
    if(yourchoice === 'Paper'){
        if(odinchoice === 'Scissor'){
            sentencegame.classList.add('sentencelose');  
            sentencegame.innerHTML = "🥺 SCISSOR BEAT PAPER"; 
            odinscore++;
        }else if(odinchoice === 'Rock'){
            sentencegame.classList.add('sentencewin');    
            sentencegame.innerHTML = "😏 PAPER BEAT ROCK";
            yourscore++;

        }
    }
    if(yourchoice === 'Scissor'){
        if(odinchoice === 'Rock'){
            sentencegame.classList.add('sentencelose');   
            sentencegame.innerHTML = "🥺 ROCK BEAT SCISSOR";
            odinscore++;

        }else if(odinchoice === 'Paper'){
            sentencegame.classList.add('sentencewin');   
            sentencegame.innerHTML = "😏 SCISSOR BEAT PAPER";
            yourscore++;

        }
        }

        scoreboard.innerHTML = yourscore+"  :  "+odinscore; 

        

    if(yourscore>=finalgoal || odinscore>=finalgoal){
        if(yourscore > odinscore){
            winner('You');
        }
        else{
            winner('Odin');
        }
    }}


rockbutton.addEventListener('click', () => {
    if(yourscore<finalgoal && odinscore<finalgoal){
        yourchoice = 'Rock';
        checker(yourchoice);
    }
});

paperbutton.addEventListener('click', () => {
    if(yourscore<finalgoal && odinscore<finalgoal){
    yourchoice = 'Paper';
    checker(yourchoice);
    }
});

scissorbutton.addEventListener('click', () => {
    if(yourscore<finalgoal && odinscore<finalgoal){
    yourchoice = 'Scissor';
    checker(yourchoice);
    }
});

restartbutton.addEventListener('click', () => {
    window.location.reload();
});