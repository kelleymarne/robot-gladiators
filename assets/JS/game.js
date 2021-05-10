
var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//Game States
// "WIN" - Player robot has defeated all enemy-robots
//      *Fight all enemy-robots
//      *Defeat each enemy-robot
// "LOSE" - Player robots health is zero or less



//Function start
var fight = function(enemyName) {
    //repeat and execute as long as the enemy-robot is alive
    while(enemyHealth > 0 && playerHealth > 0) { 
         // Ask the player if they want to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");
            //if player chose to skip
         if (promptFight === "skip" || promptFight === "SKIP") {
                //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
                //if yes (true), leave fight
        if (confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight! Goodbye!");
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }    
        }
        //Attacking
        //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and us the result of that to update the value in 'enemyHealth' variable
        enemyHealth = enemyHealth - playerAttack;
        //Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
       
            // Check enemys health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            //award player money for winning
            playerMoney = playerMoney + 20;
            //leave while() loop since enemy is dead
            break;

        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use the result of that to update the value in 'playerHealth' variable
        playerHealth = playerHealth - enemyAttack;
        //Log a resulting message to the console so we know that it worked
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        //check players health 
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            //leave while() loop if player is dead
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};
var startGame = function () {

    //reset player stats
    playerHealth = 150;
    playerAttack = 10;
    playerMoney = 10;

for (var i = 0; i < enemyNames.length; i++) {
    if(playerHealth > 0) {
        window.alert("Welcome to Battlebots! Round " + (i + 1))
        
        // pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];

        // reset enemyHealth before starting new fight
        enemyHealth = 50;

        //use debugger to pause script from running and check whats going on in the code at the moment
        // debugger;

        // pass the pickedEnemyName variables vaule into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);

        //if we're not at the last enemy in the array
        if (playerHealth > 0 && i < enemyNames.length -1) {
        // ask if player wants to use the store before next round
        var storeConfirm = window.confirm("The fight is over. Visit the store before the next round?");
        //if yes take them to the store() function
        if (storeConfirm) {
         shop();
        }
    }

    } else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
        }
    }   
    endGame();
}

//function to end the entire game 
var endGame = function() {
    // if player is still alive, player wins!
    if(playerHealth > 0) {
        window.alert('Great job, you\'ve survived the game! You now have a score of ' + playerMoney + '.');
    } else {
        window.alert('You\'ve lose your robot in battle.');
    }
    var playAgainConfirm = window.confirm('Would you like to play again?');
    if(playAgainConfirm) {
        //restart the game
        startGame();
    } else {
        window.alert('Thank you for playing Robot Gladiators! Come back soon!');
    }

}

//shop function
var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
    //use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL":
        case "Refill":
        case "refill":
            if(playerMoney >= 7){
            window.alert("Refilling players health by 20 for 7 dollars.");
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
        } else {
            window.alert("You don't have enough money!");
        }
        break;
        
        case "upgrade":
        case "Upgrade":
        case "UPGRADE":
            if(playerMoney >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
        } else {
            window.alert("Upgrading player's attack by 6 for 7 dollars."); 
        }
        break;

        case "leave":
        case "Leave":
        case "LEAVE":
            window.alert("Leaving the store."); 
        break;

        default:
            window.alert("You did not pick a valid option. Try again!");
            //call the store function again to force player to choose
            shop();
            break;
        }   
}


startGame();
