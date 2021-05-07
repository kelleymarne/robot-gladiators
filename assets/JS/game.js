
var playerName = window.prompt("What is your robots name?");


var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

//Function start
var fight = function () {
   
    //Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

// Ask the player if they want to fight or skip
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");

 //if player chooses to fight, then fight
 if (promptFight === "fight" || promptFight === "FIGHT") {

    //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and us the result of that to update the value in 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;

    //Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // Check enemys health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use the result of that to update the value in 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack;
    //Log a resulting message to the console so we know that it worked
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    //check players health 
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    //if player chose to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if(confirmSkip) {
        window.alert(playerName + " has chosen to skip the fight! Goodbye!");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    } 
    //if no (false), ask question again by running fight() again
    else {
        fight();
    }
    // if player did not choose 1 or 2 in prompt
    } else {
    window.alert("You need to pick a valid option. Try Again!");
  }
};

//run the fight function to start the game
fight();

