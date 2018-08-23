
function check(){

	var num1 = Number(document.getElementById('number1').value);
	var num2 = Number(document.getElementById('number2').value);

	
	if((num1 == 65 || num2 == 65) || (num1 + num2 == 65)){
		document.getElementById('check').innerHTML = true;
	}else{
		document.getElementById('check').innerHTML = false;
	}
	
}

function areaOfTriangle(){

	var base = 8;
	var height = 9;

	var area = 0.5 * (height * base);
	document.getElementById('getArea').innerHTML = area;
}

function largestNumber(){
	var num1 = Number(document.getElementById('largestNum1').value);
	var num2 = Number(document.getElementById('largestNum2').value);
	var num3 = Number(document.getElementById('largestNum3').value);

	if(num1 > num2 && num1 > num3){
		document.getElementById('maxNum').innerHTML = num1;
	}else if(num2 > num1 && num2 > num3){
		document.getElementById('maxNum').innerHTML = num2;
	}else if(num3 > num1 && num3 > num2){
		document.getElementById('maxNum').innerHTML = num3;
	}
}

function convertTime(){

	var num = Number(document.getElementById('number').value);

	var hour = Math.floor(num / 60);
	var minutes = num % 60;

	var time = hour + " hour(s), " + minutes + " minutes"
	document.getElementById('timeConverted').innerHTML = time;
}

function commonLetter(){

	var firstWord = document.getElementById('first_word').value;
	var secondWord = document.getElementById('second_word').value;
	var charecters = [];	

	for(x = 0; x <= firstWord.length; x++){
		if(secondWord.indexOf(firstWord[x]) >= 0){
			charecters.push(firstWord[x]);
		}
	}
	document.getElementById('commonLetter').innerHTML = charecters;
}

