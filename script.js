

$(document).ready( startGame );

var camptownRaces;
var horseClasses = [ 'grey','black','red','green','yellow','teal','purple','blue','pink','white','verdant']

function startGame(){
	initiateEventHandlers();
	camptownRaces = new HorseTrack('Camptown Races');
	//name, number, color, imageFile

/*
	camptownRaces.loadHorse('Anthony', 70, 'greyHorse', 'images/horserun2.png', 64, 52);
	camptownRaces.loadHorse('Pseudo-John', 57, 'blackHorse', 'images/horserun2.png', 64, 52);
	camptownRaces.loadHorse('Alejandro', 53, 'redHorse', 'images/horserun2.png', 64, 52);
	camptownRaces.loadHorse('Charu', 28, 'greenHorse', 'images/horserun2.png', 64, 52);
	camptownRaces.loadHorse('Matt', 34, 'yellowHorse', 'images/horserun2.png', 64, 52);
	camptownRaces.loadHorse('Danika', 21, 'redHorse', 'images/horserun2.png', 64, 52);
	camptownRaces.loadHorse('EJ', 7, 'greyHorse', 'images/horserun2.png', 64, 52);
	camptownRaces.loadHorse('Stella', 22, 'tealHorse', 'images/horserun2.png', 64, 52);
	camptownRaces.loadHorse('Sky', 18, 'purpleHorse', 'images/horserun2.png', 64, 52);
	camptownRaces.loadHorse('Christine', 12, 'yellowHorse', 'images/horserun1.png', 64, 52);
	camptownRaces.loadHorse('Bill', 2, 'blueHorse', 'images/horserun2.png', 64, 52);
	camptownRaces.loadHorse('Josh El Cielo', 15, 'pinkHorse', 'images/horserun1.png', 64, 52);
	camptownRaces.loadHorse('Chris', 42, 'greenHorse', 'images/horserun2.png', 64, 52);
	camptownRaces.loadHorse('Sean', 78, 'redHorse', 'images/horserun1.png', 64, 52);
	camptownRaces.loadHorse('Karen', 5, 'whiteHorse', 'images/horserun2.png', 64, 52);
	camptownRaces.loadHorse('Diana', 38, 'verdantHorse', 'images/horserun2.png', 64, 52);
*/
	//camptownRaces.startRace();
	createOptions();
}

function initiateEventHandlers(){
	$("#classSelect").on('change', optionChange);
	$("#saveClass").on('click', saveClass);
	
}
function findData(){
	if(localStorage.horseClasses === undefined){
		var data = {
			lastClass: null,
			classes: []
		};
		localStorage.horseClasses = JSON.stringify(data)
		return data;
	}
	var data = JSON.parse(localStorage.horseClasses);
	return data

}

function saveData(data){
	localStorage.horseClasses = JSON.stringify(data);
}

function createOptions(){
	var data = findData();
	data.lastClass = parseInt(data.lastClass);
	if(data.classes.length===0) return false;
	$("#classSelect")
		.empty()
		.append("<option value='new''>New</option>")
	for(var i=0; i<data.classes.length; i++){
		var option = $("<option>")
			.val(i)
			.text(data.classes[i].name)
		if(i===data.lastClass){
			option.attr('selected', 'selected')
		}

		$("#classSelect")
			.append(option)
	}
	optionChange();
}

function optionChange(){
	var val = $("#classSelect").val();
	if(val === 'new'){
		$("#getNewClass").show();
		return;
	} else {
		$("#getNewClass").hide();
	}
	var data = findData();
	data.lastClass = val;
	// localStorage.horseClasses = JSON.stringify(
	// 	data
	// )
	saveData(data);
	var randomHorses = randomizeArray(data.classes[parseInt(val)].students)
	loadHorses( randomHorses );
	camptownRaces.startRace()
}
function randomizeArray(array){
	var sourceArray = array.slice();
	for(var i = sourceArray.length-1; i>1; i--){
		var randomPos = randomVal(0, i-1);
		var temp = sourceArray[randomPos];
		sourceArray[randomPos] = sourceArray[i];
		sourceArray[i] = temp;
	}
	return sourceArray
}

function randomVal(min,max){
	if(Array.isArray(min)){
		return min[Math.floor( Math.random() * min.length)];
	}
	return Math.floor( Math.random() * (max-min+1)) + min;
}
 
function loadHorses(data){
	data.forEach( student => {
		camptownRaces.loadHorse(student, randomVal(0,100), randomVal(horseClasses)+'Horse', randomVal(['images/horserun1.png','images/horserun2.png']), 64, 52);
	});
}

function getClassByName(className){
	var data = findData();
	for(var i = 0; i<data.classes[i].length; i++){
		if(data.classes[i].name===className){
			return data.classes[i].students;
		}
	}
	return false;
}

function saveClass(){
	debugger;
	var data = findData();
	var className = $("#className").val();
	if(className.length === 0){
		return;
	}
	var studentData = $("#classList").val();
	var parsedData = studentData.split(',');
	if(parsedData.length<2){
		parsedData = studentData.split("\n");
	}
	parsedData = parsedData.map( item => item.trim())
	var classData = {
		name: className,
		students: parsedData
	} 
	data.classes.push(classData);
	saveData(data);
	createOptions();
}






