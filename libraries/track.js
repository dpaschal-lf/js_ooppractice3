

class HorseTrack{
	constructor(raceTime){
		this.horses = [];
		this.trackWidth = null;
		this.raceTime = raceTime;
		this.updateHorseTime = 250;
		this.updateRaceTime = 30;
		this.timer = null;
		this.winnerCount = 5;
		this.handleUpdates = this.handleUpdates.bind( this );
		//this.startUpdates();
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
		this.winners = [];
		this.horses.push( horse );
				//name, number, horseClass, imageFile, frameWidth, updateTime, updateCallback, index
	}
	handleHorseUpdate(horse, type){
		if(type==='moved'){
			var pos = horse.getPosition();
			var props = horse.getProperties();
			if(pos.left > this.trackWidth-64){
				this.winners.push( `horse ${props.name} (${props.number}) got ${this.winners.length+1} place\n` )
				//alert( `${props.name} (${props.number}) won!`);
				horse.stop();
				if(this.winners.length===this.winnerCount){
					this.horses.forEach( horse => horse.stop())
					this.stopUpdates();	
					alert(this.winners.join(''))		
				}

			}
		}
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
	handleUpdates(){
		//put per update scripts here
		console.log('update');
		this.horses.forEach( horse => horse.moveForward( this.getRandomNumber() ))
	}
	getRandomNumber(){
		return Math.floor( Math.random() * this.trackDom.width()/50)
	}
	randomizeHorses(){
		const newArray = [];
		while(this.horses.length){
			let randomIndex = Math.floor(Math.random() * this.horses.length);
			newArray.push( this.horses.splice(randomIndex, 1)[0]);

		}
		this.horses = newArray;
	}
	startRace(){
		//start all the horses running
		this.horses.reverse();
		for( var horseIndex = 0; horseIndex < this.horses.length; horseIndex++){
			this.horses[ horseIndex ].run();
		}
		this.startUpdates()
	}
	stopRace(){
		//stop all the horses running
		for( var horseIndex = 0; horseIndex < this.horses.length; horseIndex++){
			this.horses[ horseIndex ].stop();
		}		
	}

}