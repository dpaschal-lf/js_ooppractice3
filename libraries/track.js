

class HorseTrack{
	constructor(raceTime){
		this.horses = [];
		this.trackWidth = null;
		this.raceTime = raceTime;
		this.updateHorseTime = 250;
		this.updateRaceTime = 30;
		this.timer = null;
		this.handleUpdates = this.handleUpdates.bind( this );
		this.startUpdates();
		this.trackDom = $("#gameArea");
		this.trackWidth = this.trackDom.width();
		this.handleHorseUpdate = this.handleHorseUpdate.bind(this);
	}
	loadHorse(name, number, horseClass, imageFile, frameWidth, frameHeight){
		var propsToSend = {
			name: name,
			number: number,
			additionalClass: horseClass, 
			imageFile: imageFile,
			frameWidth: frameWidth,
			frameHeight: frameHeight,
			updateTime: this.updateHorseTime,
			updateCallback: this.handleHorseUpdate,
			index: this.horses.length
		}
		var horse = new Horse( propsToSend );
		this.horses.push( horse );
				//name, number, horseClass, imageFile, frameWidth, updateTime, updateCallback, index
	}
	// most changes should go here
	handleHorseUpdate(horse, type){

	}
	//more change here
	handleUpdates(){
		//put per update scripts here
		console.log('update');
	}
	startUpdates(){
		if(this.timer!==null){
			this.stopUpdates();
		}
		this.timer = setInterval( this.handleUpdates, this.updateRaceTime);
	}
	stopUpdates(){
		clearInterval( this.timer );
		this.timer = null;
	}

	startRace(){
		//start all the horses running
		for( var horseIndex = 0; horseIndex < this.horses.length; horseIndex++){
			this.horses[ horseIndex ].run();
		}
	}
	stopRace(){
		//stop all the horses running
		for( var horseIndex = 0; horseIndex < this.horses.length; horseIndex++){
			this.horses[ horseIndex ].stop();
		}		
	}

}