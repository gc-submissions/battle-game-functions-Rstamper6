"use strict";

// TODO - write your code here.

let randomDamage = () => { return Math.floor(Math.random()  *10)  +1 }

let chooseOption = (opt1, opt2) => {let randNum = Math.floor(Math.random() *2) == 0 ? opt1 : opt2; return randNum}
console.log(chooseOption)

let attackPlayer = function(health){
    return health = health - randomDamage();
}

let logHealth = (player, health) => {
    console.log(`${player} health: ${health}`)
}

let logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`)
}

let isDead = (health) => {
    if(health <= 0){
        return true;
    }
    else {
        return false;
    }
}

let fight = function(player1, player2, player1health, player2health){
    while (true){
        let attacker = chooseOption(player1, player2)
        if(attacker == player1){
            player2health = attackPlayer(player1health);
            logHealth(player2, player2health)
                if(isDead(player2health)){
                    logDeath(player1, player2)
                    break;
                    
                }
        } 
        else{
            player1health = attackPlayer(player1health);
            logHealth(player1, player1health);
            if(isDead(player1health)){
                logDeath(player2, player1);
                break;
            }
        }
    }
}
fight("Riley", "Kevin", 100, 100);

