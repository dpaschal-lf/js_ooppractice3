

$(document).ready( startGame );

var camptownRaces;

function startGame(){
	camptownRaces = new HorseTrack('Camptown Races');
	//name, number, color, imageFile


	camptownRaces.loadHorse('Kenneh', 70, 'greyHorse', 'images/horserun2.png', 64, 52);
	camptownRaces.loadHorse('Vivian', 57, 'blackHorse', 'images/horserun2.png', 64, 52);
	camptownRaces.loadHorse('Jennifer ong', 53, 'redHorse', 'images/horserun2.png', 64, 52);
	camptownRaces.loadHorse('Jimmy', 28, 'greenHorse', 'images/horserun2.png', 64, 52);
	camptownRaces.loadHorse('David', 34, 'yellowHorse', 'images/horserun2.png', 64, 52);
	camptownRaces.loadHorse('Joe', 21, 'redHorse', 'images/horserun2.png', 64, 52);
	camptownRaces.loadHorse('Kylie', 7, 'greyHorse', 'images/horserun2.png', 64, 52);
	camptownRaces.loadHorse('Michelle', 22, 'tealHorse', 'images/horserun2.png', 64, 52);
	camptownRaces.loadHorse('Jason', 18, 'purpleHorse', 'images/horserun2.png', 64, 52);
	camptownRaces.loadHorse('Johnny', 12, 'yellowHorse', 'images/horserun1.png', 64, 52);
	camptownRaces.loadHorse('Chun Lai', 2, 'blueHorse', 'images/horserun2.png', 64, 52);
	camptownRaces.loadHorse('Quan', 15, 'pinkHorse', 'images/horserun1.png', 64, 52);
	camptownRaces.loadHorse('Jun', 42, 'greenHorse', 'images/horserun2.png', 64, 52);
	camptownRaces.loadHorse('Jay', 78, 'redHorse', 'images/horserun1.png', 64, 52);
	camptownRaces.loadHorse('Eric', 5, 'whiteHorse', 'images/horserun2.png', 64, 52);
	camptownRaces.loadHorse('Jaime', 38, 'verdantHorse', 'images/horserun2.png', 64, 52);
	camptownRaces.loadHorse('Westley', 48, 'tealHorse', 'images/horserun2.png', 64, 52);
	camptownRaces.loadHorse('Andrew', 13, 'whiteHorse', 'images/horserun2.png', 64, 52);
	camptownRaces.loadHorse('Chris Gust', 12, 'yellowHorse', 'images/horserun1.png', 64, 52);
	camptownRaces.loadHorse('Chris Gorm', 13, 'redHorse', 'images/horserun2.png', 64, 52);
	camptownRaces.loadHorse('Caroline', 14, 'purpleHorse', 'images/horserun2.png', 64, 52);
	camptownRaces.loadHorse('Alice', 15, 'purpleHorse', 'images/horserun2.png', 64, 52);

	camptownRaces.startRace();
}