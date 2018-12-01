

class Horse{
	constructor( properties ){
		//name, number, additionalClass, imageFile, frameWidth, frameHeight, updateTime
		this.props = properties;
		this.state = {
			animationFrame: 0,
			frameCount: null,
			position: {
				left: null,
				top: null
			},
			running: false,
		}
		this.domElements = {
			frame: null,
			number: null
		};
		this.timer = null;
		this.handleUpdate = this.handleUpdate.bind(this);
		this.sampleImage();
		this.startUpdates();
		this.initialRender();
	}
	run(){
		this.state.running = true;
	}
	stop(){
		this.state.running = false;
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
	}
	startUpdates(){
		if(this.timer!==null){
			this.stopUpdates();
		}
		this.timer = setInterval(this.handleUpdate, this.props.updateTime);
	}
	stopUpdates(){
		clearInterval ( this.timer );
		this.timer = null;
	}
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
		console.log('lub dub')
		this.updateAnimation();
	}
	initialRender(){
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
		this.domElements.frame.append(this.domElements.number);
		$("#gameArea").append(this.domElements.frame)
		//debugger;
	}
	render(){
		this.domElements.frame.css('background-position', this.state.animationFrame * this.props.frameWidth)
	}
}