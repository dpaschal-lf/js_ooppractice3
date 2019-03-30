

class Horse{
	//takes in an object of properties to initialize the horse:
	//name: name of the horse
	//number: number to put on the horse
	//horseClass: additional class to put on the horse (For styling)
	//imageFile: which file to use for the horse background
	//updateTime: how many ms to wait to update background image
	//updateCallback: function in parent to call after each horse update
	//index: which horse this is in the main game (for tracking)
	constructor( properties ){
		//various variables important to tracking the horse after creation
		//animationFrame: which frame of animation is showing
		//frameCount: how many frames total are there
		//position: where the main frame dom element is on the parent
		//running: is the horse running or not
		this.defaultProps = {
			name: 'robohorse',
			number: 0,
			frameHeight: 52,
			frameWidth: 63,
			additionalClass: 'whiteHorse',
			imageFile: 'images/horserun1.png',
			updateTime: 250,
			updateCallback: function(){},
			index: null
		}
		this.props = {};

		for( var key in this.defaultProps){
			this.props[key] = properties[key] || this.defaultProps[key]
		}
		this.state = {
			animationFrame: 0,
			frameCount: null,
			position: {
				left: null,
				top: null
			},
			running: false,
		}
		//tracks the dom elements used for the horse
		//frame: main dom element of the horse
		//number: the number circle on the horse
		//tester: tracking pixel on the horse to tell when it is loaded
		this.domElements = {
			container: null,
			frame: null,
			number: null,
			tester: null,
			horseLabel: null
		};
		//used to track the timer that updates this horse
		this.timer = null;
		//bound because setInterval changes 'this' to window
		this.handleUpdate = this.handleUpdate.bind(this);
		this.domLoaded = this.domLoaded.bind(this);
		//testing image to see when the dom is loaded so we know when to sample size
		this.sampleImage();
		//start the horse update tracker
		//this.startUpdates();
		//put the initial dom elements of the horse onto the page
		this.initialRender();
	}
	//make the horse start its running animation
	run(){
		this.state.running = true;
		this.startUpdates();
	}
	//make the horse stop its running animation
	stop(){
		this.state.running = false;
	}
	//get the current left/top of the horse in its parent
	getPosition(){
		return this.state.position;
	}
	//get all properties of the horse, like name and such
	getProperties(){
		return this.props;
	}
	//get current state of horse running
	isRunning(){
		return this.state.running;
	}
	//reset the horse's left position back to 0
	resetPosition(){
		this.state.position.left = 0;
		this.render();
		this.props.updateCallback( this, 'reset' );
	}
	//move the horse a distance
	moveForward(distance){
		this.state.position.left += distance;
		this.domElements.frame.css({
			'left': this.state.position.left + 'px'
		})
	}
	//start all horse updating (handle animation). should use run and stop
	startUpdates(){
		if(this.timer!==null){
			this.stopUpdates();
		}
		this.timer = setInterval(this.handleUpdate, this.props.updateTime);
	}
	//stop all horse updating (handle animation). should use run and stop
	stopUpdates(){
		clearInterval ( this.timer );
		this.timer = null;
	}

	/*dom elements below this should probably not be modified */
	sampleImage(){
		var tempImage = $("<img>",{
			'src': this.props.imageFile,
			on: {
				load: ()=> {
					this.state.fullWidth = event.target.naturalWidth;
					this.state.frameCount = this.state.fullWidth / this.props.frameWidth;
					tempImage.remove();
				}
			}
		});
	}
	handleUpdate(){
		this.updateAnimation();
	}

	domLoaded(){
		this.domElements.tester.remove();
		this.state.position = this.domElements.frame.offset();
	}
	updateAnimation(){
		if(!this.state.running){
			return;
		}
		this.state.animationFrame++;
		if(this.state.animationFrame>this.state.frameCount){
			this.state.animationFrame = 0;
		}
		this.render();
		this.props.updateCallback( this, 'moved' );
	}	
	initialRender(){
		this.domElements.container = $("<div>",{
			'class': 'horseContainer'
		})
		this.domElements.label = $("<div>",{
			'class': 'horseLabel',
			text: this.props.name,
			css: {
				left: '0px',
			}
		})
		this.domElements.frame = $("<div>",{
			'class': 'horse '+this.props.additionalClass,
			css: {
				'background-image': `url(${this.props.imageFile})`,
				'background-size': this.state.fullWidth+'px '+this.props.frameHeight +'px',
				height: this.props.frameHeight + 'px',
				width: this.props.frameWidth + 'px',
				position: 'relative',
			}
		});
		this.domElements.number = $("<div>",{
			'class': 'number',
			text: this.props.number
		});
		this.domElements.tester = $("<img>",{
			src: 'images/pixel.png',
			on: {
				load: this.domLoaded
			}
		});
		this.domElements.frame.append(this.domElements.number, this.domElements.tester);
		this.domElements.container.append(this.domElements.label,this.domElements.frame);
		$("#gameArea").append(this.domElements.container);
		this.domElements.label.css('top', this.domElements.frame.position().top+'px')
	}
	render(){
		this.domElements.frame.css('background-position', this.state.animationFrame * this.props.frameWidth)
	}
}