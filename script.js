const items = ['Paper','Rock','Scissor'];

let scoreplayer = 0;
let scorecomputer = 0;
let ready;
let computerChoiche;
let playerChoiche;
let istie = true;

function getComputerChoice(){
    let cc;
    return cc = items[Math.floor(Math.random() * items.length)]
}

function getPlayerChoice(){
    let pc;
    while(pc !== 'Rock' && pc !== 'Paper' && pc !== 'Scissor'){
        pc = prompt("Rock, Paper or Scissor?: ");
    }
    return pc;
}


console.log('WELCOME IN ROCK PAPER SCISSOR GAME!!')
while(ready !== 'Yes'){
    ready = prompt("Are you ready? [Yes]");
}


for(let i = 1; i<=5; i++){
    
    console.log("ROUND "+ i);
    computerChoiche = getComputerChoice()
    playerChoiche = getPlayerChoice()
    if (playerChoiche === computerChoiche){
        console.log('Round '+i+': TIE');
        i--;
        continue;
        } 
    if(playerChoiche === 'Rock'){
        if(computerChoiche === 'Paper'){
            console.log('Round '+i+': Lost');
            scorecomputer++;
        }else if(computerChoiche === 'Scissor'){
            console.log('Round '+i+': Win!');
            scoreplayer++;
        }
    }
    if(playerChoiche === 'Paper'){
        if(computerChoiche === 'Scissor'){
            console.log('Round '+i+': Lost');
            scorecomputer++;
        }else if(computerChoiche === 'Rock'){
            console.log('Round '+i+': Win!');
            scoreplayer++;
        }
    }
    if(playerChoiche === 'Scissor'){
        if(computerChoiche === 'Rock'){
            console.log('Round '+i+': Lost');
            scorecomputer++;
        }else if(computerChoiche === 'Paper'){
            console.log('Round '+i+': Win!');
            scoreplayer++;
        }
        }
}


if(scoreplayer > scorecomputer){
    console.log('You Won!');
}else{
    console.log('You Lost!');
}
console.log(`FINAL SCORE\n YOU ${scoreplayer} : ${scorecomputer} COM`)



