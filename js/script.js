
var vPet = {
    vPetName: prompt("Howdy! That's a cute pet you've got there. What's its name?"),
    energy: 0,
    happiness: 0
} 

function feedVPet() {
    vPet.energy += 2;
}

function petVPet() {
    vPet.happiness += 1;
}

function walkVPet() {
    if (vPet.energy < 1){
        vPet.energy = 0;
        alert("Not enough energy to enjoy a walk!");
    } else {
        vPet.happiness += 2;
        vPet.energy -= 1;
    }
}


function actions() {
    var action = prompt("Would you like to feed, pet, or walk " + vPet.vPetName + " ?");
    if (action == "feed"){
        feedVPet()
    } else if (action == "pet"){
            petVPet()
        } else if (action == "walk"){
                walkVPet()
            }
    console.log(vPet.vPetName +" has " + vPet.happiness + " happiness " + "and " + vPet.energy + " energy.");
}


function actionLoop(){
    for (i=0; i<6; i++) {actions()}
    // actions()
    // console.log(vPet.vPetName +" has " + vPet.happiness + " happiness " + "and " + vPet.energy + " energy.");
}

actionLoop()