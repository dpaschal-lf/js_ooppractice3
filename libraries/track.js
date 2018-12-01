

class HorseTrack{
	constructor(raceTime){
		this.horses = [];
		this.trackWidth = null;
		this.raceTime = raceTime;
		this.updateHorseTime = 250;
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
		for( var horseIndex = 0; horseIndex < this.horses.length; horseIndex++){
			this.horses[ horseIndex ].run();
		}
	}
	stopRace(){
		for( var horseIndex = 0; horseIndex < this.horses.length; horseIndex++){
			this.horses[ horseIndex ].stop();
		}		
	}
	showWinner(){

	}
}