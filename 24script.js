var numX = 4,
	numY = 4,
    nums = [],
	buttons = [],
	operation = "",
    result = 0;

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
generateButtons();

$(document).ready(function(){
    $(".NumberButton").click(function(){
		buttons.push(this);
		if(buttons.length >= 2){
			if(buttons[0] == buttons[1]){
				alert("Please choose two different numbers.");
				buttons = [];
				operation = "";
			}
			else if(operation == ""){
				alert("Please choose an operation before choosing a second number.");
				buttons.pop();
			}
			else if(operation == "add"){
				result = Number(buttons[0].value) + Number(buttons[1].value);
			}
			else if(operation == "subtract"){
				result = Number(buttons[0].value) - Number(buttons[1].value);
			}
			else if(operation == "multiply"){
				result = Number(buttons[0].value) * Number(buttons[1].value);
			}
			else if(operation == "divide"){
				result = Number(buttons[0].value) / Number(buttons[1].value);
			}
			buttons[1].value = result;
			buttons[1].innerHTML = result;
			buttons[0].value = 0;
			buttons[0].innerHTML = "";
			result = 0;
			buttons = [];
			operation = "";
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
		buttons = [];
		operation = "";
        generateNums();
        generateButtons();
    });
	$("#restart-move").click(function(){
		buttons = [];
		operation = "";
	});
});