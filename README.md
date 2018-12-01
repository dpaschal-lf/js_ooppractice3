# Horse Race

### featureset 1
- alter the code of the track.js object to make a horse race
- add more horses given the examples already present
- make the horses race and declare a winner when they get to the right!
- handleHorseUpdate is 
	- passed into each horse
	- called by each horse update (every time it moves itself)
	- is given arguments of
		- horse: (Horse object) the horse that finished its update
		- type: (string) the type of update ('moved or reset')
- handleUpdates
	- called on each update of the game


#### details
- libraries/horse.js
	- code is basically pre-generated
	- constructor
		- takes in the following properties
			- name: name of the horse
			- number: number to put on the horse
			- horseClass: additional class to put on the horse (For styling)
			- imageFile: which file to use for the horse background
			- updateTime: how many ms to wait to update background image
			- updateCallback: function in parent to call after each horse update
			- index: which horse this is in the main game (for tracking)
	- methods available: 
		- run: 
			- purpose: make the horse start its running animation
			- params: none
			- return: none
		- stop: 
			- purpose: make the horse stop its running animation
			- params: none
			- return: none
		- getPosition:
			- purpose: get the current left/top of the horse in its parent
			- params: none
			- return: object { left, top} : pixels of current dom position
		- getProperties:
			- purpose: get all properties of the horse, like name and such
			- params: none
			- return: object with all of the properties of the horse
		- isRunning:
			- purpose: get current state of horse running
			- params: none
			- return: boolean - true if running, false if not running
		- resetPosition:
			- purpose: reset the horse's left position back to 0
			- params: none
			- return: none
		- move the horse a distance
			- purpose: move the horse a distance
			- params: (int) the distance to move the horse on the page
			- return: none

