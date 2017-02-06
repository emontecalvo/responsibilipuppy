const initialState = {
	mertleAnger: 0,
	status: 'Mertle seems to be fairly tame at the moment',
	event: '',
	image: './default.png',
	points: 0,
	days: 0,
	maxDays: 10,
	hp: 100,
	morale: 100,
	gameOver: false
}

const foodEventOpts = [['Mertle seems to be fairly tame at the moment', './default.png', 0, 0],
					['One of the flies escapes and charges into your mouth!', './fly_in_mouth.png', 0, 10],
					['Mertle spits in your face with enormous force!', './spit_out.png', 0, 10],
					['Mertle snaps at your fingers, saliva drooling from its mouth.', './mertle_snap.png', 0, 10],
					['Mertle knocks you out and steals your pocket money.', './knock_out.png', 0, 20]
				];

const waterEventOpts = [['Mertle seems to be fairly tame at the moment', './default.png', 0, 0],
					['Mertle spits in your face with enormous force!', './spit_out.png', 0, 10],
					['Mertle is in a bad mood today, and does not accept any water.', './no_water.png', 0, 10],
					['Mertle spits out the water in disgust!', './spit_out.png', 10, 10],
					['Mertle knocks you out and steals your pocket money.', './knock_out.png', 0, 10]
				];

const slapEventOpts = [["Your parents don't like you're attitude.  You must take care of Mertle for an extra day.", './angry_parents.png']
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
		state.image = './water_mertle.png';
		state.days += 1;
		let maybeEvent = randomWaterEvent();
		console.log("maybeEvent is", maybeEvent);
		if (maybeEvent !== -1) {
			state.status = maybeEvent[0];
			state.image = maybeEvent[1];
			state.morale -= maybeEvent[3];
			state.hp -= maybeEvent[2];
		} else {
			state.status = "You are able to water Mertle.  She quietly plots your demise."
		}
		if (state.days === state.maxDays) {
			if (state.hp > 50) {
				state.status = "You win!";
				state.image = "./puppy.png";
				state.gameOver = true;
			} else {
				state.status = "Mertle will have an extra big meal today";
				state.image = "./mertle_is_fed.png";
				state.gameOver = true;
			}
		}
		return {...state} // equiv. of this.setState
	}

	if (action.type === 'FEED_THING') {
		state.image = './feed_mertle.png';
		console.log("FEED THING REDUCER");
		state.days += 1;
		let maybeEvent = randomFoodEvent();
		console.log("maybeEvent is", maybeEvent);
		if (maybeEvent !== -1) {
			state.status = maybeEvent[0];
			state.image = maybeEvent[1];
			state.morale -= maybeEvent[3];
			state.hp -= maybeEvent[2];
		} else {
			state.status = "You feed Mertle without event while she hates you."
		}
		if (state.days === state.maxDays) {
			if (state.hp > 50) {
				state.status = "You win!";
				state.image = "./puppy.png";
				state.gameOver = true;
			} else {
				state.status = "Mertle will have an extra big meal today";
				state.image = "./mertle_is_fed.png";
				state.gameOver = true;
			}
		}
		return {...state}
	}

	if (action.type === 'SLAP_THING') {
		state.image = './smack_mertle.png';
		console.log("SLAP THING REDUCER");
		state.days += 1;
		state.morale += 10;
		state.hp -= 10;
		let maybeEvent = randomSlapEvent();
		if (maybeEvent === 1) {
			state.status = slapEventOpts[0][0];
			state.maxDays += 1;
			state.image = slapEventOpts[0][1];
		} else {
			state.status = "You smack Mertle and claim revenge."
		}
		if (state.days === state.maxDays) {
			if (state.hp > 50) {
				state.status = "You win!";
				state.image = "./puppy.png";
				state.gameOver = true;
			} else {
				state.status = "Mertle will have an extra big meal today";
				state.image = "./mertle_is_fed.png";
				state.gameOver = true;
			}
		}
		return {...state}
	}

	if (action.type === 'SKIP_THING') {
		console.log("skip called");
		state.days += 1;
		state.hp -= 1;
		state.image = "./default.png";
		state.status = "You are too afraid to go near Mertle. Skip today."
		if (state.days === state.maxDays) {
			if (state.hp > 50) {
				state.status = "You win!";
				state.image = "./puppy.png";
				state.gameOver = true;
			} else {
				state.status = "Mertle will have an extra big meal today";
				state.image = "./mertle_is_fed.png";
				state.gameOver = true;
			}
		}
	}

	return state;
}

exports.reducer = reducer;


