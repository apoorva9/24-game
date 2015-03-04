var numX = 4,
	numY = 4,
    nums = [],
	buttons = [],
	operation = "",
    result = 0;
    counter = 0;



for(var i=0; i<numX; i++){
	nums.push([]);
	for(var j=0; j<numY; j++){
		nums[i].push(0);
	}
}

var generateVal = function () {
    return Math.round((Math.random() * 9) + 1);
};

var generateNums = function(){
    for (var i = 0; i < numX; i++) {
		for(var j = 0; j < numY; j++){
			nums[i][j] = (generateVal());
		}
    }
};

var generateButtons = function () {
    for (var i = 0; i < numX; i++) {
		for(var j = 0; j < numY ; j++){
			var buttonId = "b" + i + j;
			var currentButton = document.getElementById(buttonId);
			currentButton.value = nums[i][j];
			currentButton.innerHTML = currentButton.value.toString();
			currentButton.className = "NumberButton"; 
		}
    }
};

generateNums(); 
generateButtons(); // get randomized grid 



$(document).ready(function(){
    $(".NumberButton").click(function(){
		buttons.push(this);
		if(buttons.length >= 2){
			if(operation == "add"){
				result = Number(buttons[0].value) + Number(buttons[1].value);
				counter++;
			}
			else if(operation == "subtract"){
				result = Number(buttons[0].value) - Number(buttons[1].value);
				counter++;
			}
			else if(operation == "multiply"){
				result = Number(buttons[0].value) * Number(buttons[1].value);
				counter++;
			}
			else if(operation == "divide"){
				result = Number(buttons[0].value) / Number(buttons[1].value);
				counter++;
			}
	
		if (counter == 3 && result == 24){
				result = " ";
				counter = 0;
			}

			buttons[1].value = result;
			buttons[1].innerHTML = result;	// replace a number with the result number
			buttons[0].value = 0;
			buttons[0].innerHTML = " "; 	// remove the other used number 
			result = 0;
			buttons = [];
		}
    });
	$("#add").click(function(){
		operation = "add";
    });
    $("#subtract").click(function(){
		operation = "subtract";
    });
    $("#multiply").click(function(){
		operation = "multiply";
    });
    $("#divide").click(function(){
		operation = "divide";
    });
    $("#reset").click(function(){
    	counter = 0;
		buttons = [];
		operation = "";
        generateNums(); 
        generateButtons();  // refresh the grid
    });
});