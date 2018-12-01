

$(document).ready( startGame );

var camptownRaces;

function startGame(){
	camptownRaces = new HorseTrack('Camptown Races');
	//name, number, color, imageFile
	camptownRaces.loadHorse('Chuck', 12, 'yellowHorse', 'images/horserun1.png', 64, 52);
	camptownRaces.loadHorse('Top', 2, 'blueHorse', 'images/horserun2.png', 64, 52);
	camptownRaces.loadHorse('Rachel', 15, 'pinkHorse', 'images/horserun1.png', 64, 52);
	camptownRaces.loadHorse('Todd', 42, 'greenHorse', 'images/horserun2.png', 64, 52);
	camptownRaces.loadHorse('Bill', 78, 'redHorse', 'images/horserun1.png', 64, 52);
	camptownRaces.loadHorse('Dan', 5, 'whiteHorse', 'images/horserun2.png', 64, 52);
	camptownRaces.startRace();
}