

class HorseTrack{
	constructor(raceTime){
		this.horses = [];
		this.trackWidth = null;
		this.raceTime = raceTime;
		this.updateHorseTime = 250;
	}
	showStartModal(){

	}
	loadHorse(name, number, horseClass, imageFile, frameWidth, frameHeight){
		var propsToSend = {
			name: name,
			number: number,
			additionalClass: horseClass, 
			imageFile: imageFile,
			frameWidth: frameWidth,
			frameHeight: frameHeight,
			updateTime: this.updateHorseTime
		}
		var horse = new Horse( propsToSend );
		this.horses.push( horse );
				//name, number, color, imageFile, frameWidth, updateTime
	}
	startRace(){

	}
	showWinner(){

	}
}