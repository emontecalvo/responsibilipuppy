const initialState = {
	mertleAnger: 0,
	status: 'Mertle seems to be fairly tame at the moment',
	event: '',
	image: './default.png',
	points: 0,
	days: 0,
	maxDays: 10,
	hp: 100,
	morale: 100
}

const foodEventOpts = [['Mertle seems to be fairly tame at the moment', './default.png', 0, 0],
					['One of the flies escapes and charges into your mouth!', './fly_in_mouth.png', 0, 10],
					['Mertle spits in your face with enormous force!', './spit_out.png', 0, 10],
					['Mertle snaps at your fingers, saliva drooling from its mouth.', './bully_trap.png', 0, 10],
					['Mertle knocks you out and steals your pocket money.', './bully_trap.png', 0, 20]
				];

const waterEventOpts = [['Mertle seems to be fairly tame at the moment', './default.png', 0, 0],
					['Mertle spits in your face with enormous force!', './spit_out.png', 0, 10],
					['Mertle snaps at your fingers, saliva drooling from its mouth.', './bully_trap', 0, 10],
					['Mertle is in a bad mood today, and does not accept any water.', './rage_face.png', 0, 10],
					['Mertle spits out the water in disgust!', './spit_out.png', 10, 10],
					['Mertle knocks you out and steals your pocket money.', './bully_trap.png', 0, 10]
				];

const slapEventOpts = [["You're parents don't like you're attitude.  You must take care of Mertle for an extra day.", './angry_parents.png']
					];



const reducer = (state, action) => {


	function randomFoodEvent() {
		console.log("rand food called");
		let randomEvent = foodEventOpts[Math.floor(Math.random() * foodEventOpts.length)];
		console.log("random event is", randomEvent)
    	let coinToss = Math.random();

    	if (coinToss > 0.5) {
    		return randomEvent
    	} else {
    		return -1
    	}
	};

	function randomSlapEvent() {
		console.log("rand slap called");
		let coinToss = Math.random();
		if (coinToss > 0.5) {
			return 1
		} else {
			return -1
		}
	}

	function randomWaterEvent() {
		console.log("rand water called");
		let randomEvent = foodEventOpts[Math.floor(Math.random() * foodEventOpts.length)];
		console.log("random event is", randomEvent)
    	let coinToss = Math.random();

    	if (coinToss > 0.5) {
    		return randomEvent
    	} else {
    		return -1
    	}
	};

	let copyState = state || initialState;
	state = Object.assign({}, copyState);
	
	if (action.type === 'WATER_THING') {
		console.log("WATER THING REDUCER");
		state.days += 1;
		let maybeEvent = randomWaterEvent();
		console.log("maybeEvent is", maybeEvent);
		if (maybeEvent !== -1) {
			state.status = maybeEvent[0];
			state.image = maybeEvent[1];
			state.morale -= maybeEvent[3];
			state.hp -= maybeEvent[2];
		}
		if (state.days === state.maxDays) {
			if (state.hp > 50) {
				state.status = "You win!";
				state.image = "./puppy.png";
			} else {
				state.status = "Mertle will have an extra big meal today";
				state.image = "./mertle_is_fed.png";
			}
		}
		return {...state} // equiv. of this.setState
	}

	if (action.type === 'FEED_THING') {
		state.image = './default.png';
		console.log("FEED THING REDUCER");
		state.days += 1;
		let maybeEvent = randomFoodEvent();
		console.log("maybeEvent is", maybeEvent);
		if (maybeEvent !== -1) {
			state.status = maybeEvent[0];
			state.image = maybeEvent[1];
			state.morale -= maybeEvent[3];
			state.hp -= maybeEvent[2];
		}
		if (state.days === state.maxDays) {
			if (state.hp > 50) {
				state.status = "You win!";
				state.image = "./puppy.png";
			} else {
				state.status = "Mertle will have an extra big meal today";
				state.image = "./mertle_is_fed.png";
			}
		}
		return {...state}
	}

	if (action.type === 'SLAP_THING') {
		state.image = './default.png';
		console.log("SLAP THING REDUCER");
		state.days += 1;
		state.morale += 10;
		state.hp -= 10;
		let maybeEvent = randomSlapEvent();
		if (maybeEvent === 1) {
			state.status = slapEventOpts[0][0];
			state.maxDays += 1;
			state.image = slapEventOpts[0][1];
		}
		if (state.days === state.maxDays) {
			if (state.hp > 50) {
				state.status = "You win!";
				state.image = "./puppy.png";
			} else {
				state.status = "Mertle will have an extra big meal today";
				state.image = "./mertle_is_fed.png";
			}
		}
		return {...state}
	}

	if (action.type === 'SKIP_THING') {
		console.log("skip called");
		state.days += 1;
		state.hp -= 1;
	}
	if (state.days === state.maxDays) {
			if (state.hp > 50) {
				state.status = "You win!";
				state.image = "./puppy.png";
			} else {
				state.status = "Mertle will have an extra big meal today";
				state.image = "./mertle_is_fed.png";
			}
		}
	return state;
}

exports.reducer = reducer;


