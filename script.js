

$(document).ready( startGame );

var camptownRaces;

function startGame(){
	camptownRaces = new HorseTrack('Camptown Races');
	//name, number, color, imageFile
	camptownRaces.loadHorse('Chuck', 12, 'yellowHorse', 'images/horserun1.png', 64, 52);
	camptownRaces.loadHorse('Top', 2, 'blueHorse', 'images/horserun2.png', 64, 52);
	camptownRaces.startRace();
}