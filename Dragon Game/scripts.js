		

function throwDice(){
	var randomDie = Math.round(Math.random() * 5) + 1;
	var imageName = "d" + randomDie + ".gif";
	console.log(randomDie);
	document.images['myDie1'].src = imageName;

	randomDie2 = Math.round(Math.random() * 5) + 1; 
	var imageName2 = "d" + randomDie2 + ".gif";
	console.log(randomDie2);
	document.images['myDie2'].src = imageName2;
}

document.getElementById("message").innerHTML = "You have encountered a ... Dragon!"