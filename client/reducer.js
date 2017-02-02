const initialState = {
	mertleAnger: 0,
	status: 'Mertle seems to be fairly tame at the moment',
	event: '',
	image: './default.png',
	points: 0,
	days: 0,
	maxDays: 30,
	hp: 100,
	morale: 100
}

const foodEventOpts = [['Mertle seems to be fairly tame at the moment', './default.png'],
					['One of the flies escapes and charges into your mouth!', './fly_in_mouth.png'],
					['Mertle spits in your face with enormous force!', './spit_out.png'],
					['Mertle snaps at your fingers, saliva drooling from its mouth.', './bully_trap.png'],
					['Mertle knocks you out and steals your pocket money.', './bully_trap.png']
				];

const waterEventOpts = [['Mertle seems to be fairly tame at the moment', './default.png'],
					['Mertle spits in your face with enormous force!', './spit_out.png'],
					['Mertle snaps at your fingers, saliva drooling from its mouth.', './bully_trap'],
					['Mertle is in a bad mood today, and does not accept any water.', './rage_face.png'],
					['Mertle spits out the water in disgust!', './spit_out.png'],
					['Mertle knocks you out and steals your pocket money.', './bully_trap.png']
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

	function randomWaterEvent() {
		console.log("rand water called");
	};

	let copyState = state || initialState;
	state = Object.assign({}, copyState);
	
	if (action.type === 'WATER_THING') {
		console.log("WATER THING REDUCER");
		state.days += 1;

		return {...state, days: action.data} // equiv. of this.setState
	}

	if (action.type === 'FEED_THING') {
		console.log("FEED THING REDUCER");
		state.days += 1;
		let maybeEvent = randomFoodEvent();
		console.log("maybeEvent is", maybeEvent);
		if (maybeEvent !== -1) {
			state.status = maybeEvent[0];
			state.image = maybeEvent[1];
		}
		return {...state}
	}

	if (action.type === 'SLAP_THING') {
		console.log("SLAP THING REDUCER");
		state.days += 1;
		state.morale += 10;
		return {...state, days: action.data}
	}
	return state;
}

exports.reducer = reducer;


