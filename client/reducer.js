const initialState = {
	status: 'Mertle seems to be fairly tame at the moment',
	image: './default.png',
	days: 0,
	maxDays: 5,
	hp: 100,
	morale: 100,
	gameOver: false,
	timer: true
}

const foodEventOpts = [['Mertle seems to be fairly tame at the moment', './default.png', 10, 0],
					['One of the flies escapes and charges into your mouth!', './fly_in_mouth.png', 5, 10],
					['Mertle spits in your face with enormous force!', './spit_out.png', 0, 10],
					['Mertle snaps at your fingers, saliva drooling from her mouth.', './mertle_snap.png', 10, 10],
					['Mertle knocks you out and steals your pocket money.', './knock_out.png', 0, 20]
				];

const waterEventOpts = [['Mertle seems to be fairly tame at the moment', './default.png', 10, 0],
					['Mertle spits in your face with enormous force!', './spit_out.png', 0, 10],
					['Mertle is in a bad mood today, and does not accept any water.', './no_water.png', -10, 10],
					['Mertle spits out the water in disgust!', './spit_out.png', 0, 10],
					['Mertle knocks you out and steals your pocket money.', './knock_out.png', 0, 10]
				];

const slapEventOpts = [["Your parents don't like you're attitude.  You must take care of Mertle for an extra day.", './angry_parents.png']
					];



const reducer = (state, action) => {


	function randomFoodEvent() {
		let randomEvent = foodEventOpts[Math.floor(Math.random() * foodEventOpts.length)];
    	let coinToss = Math.random();

    	if (coinToss > 0.5) {
    		return randomEvent
    	} else {
    		return -1
    	}
	};

	function randomSlapEvent() {
		let coinToss = Math.random();
		if (coinToss > 0.5) {
			return 1
		} else {
			return -1
		}
	}

	function randomWaterEvent() {
		let randomEvent = foodEventOpts[Math.floor(Math.random() * foodEventOpts.length)];
    	let coinToss = Math.random();

    	if (coinToss > 0.5) {
    		return randomEvent
    	} else {
    		return -1
    	}
	};

	function myDelay(time) {
	    var time1 = new Date();
	    var time2 = new Date();
	    while (time2.valueOf() < time1.valueOf() + time) {
	      time2 = new Date();
	    }
  	}

	let copyState = state || initialState;
	state = Object.assign({}, copyState);
	
	if (action.type === 'WATER_THING') {
		state.image = './water_mertle.png';
		state.days += 1;
		let maybeEvent = randomWaterEvent();
		if (maybeEvent !== -1) {
			state.status = maybeEvent[0];
			state.image = maybeEvent[1];
			state.morale -= maybeEvent[3];
			state.hp += maybeEvent[2];
		} else {
			state.status = "You are able to water Mertle.  She quietly plots your demise."
			state.hp += 5;
		}
		if (state.days >= state.maxDays) {
			if (state.hp > 50) {
				state.status = "You win!";
				state.image = "./puppy.png";
				state.gameOver = true;
			} else {
				state.status = "Your negligence and bad attitude means Mertle will have an extra big meal today";
				state.image = "./mertle_is_fed.png";
				state.gameOver = true;
			}
		}
		return {...state} // equiv. of this.setState
	}

	if (action.type === 'FEED_THING') {
		state.image = './feed_mertle.png';
		state.days += 1;
		let maybeEvent = randomFoodEvent();
		if (maybeEvent !== -1) {
			state.status = maybeEvent[0];
			state.image = maybeEvent[1];
			state.morale -= maybeEvent[3];
			state.hp += maybeEvent[2];
		} else {
			state.status = "You feed Mertle without injury while she hates you."
			state.hp += 10;
		}
		if (state.days >= state.maxDays) {
			if (state.hp > 50 && state.morale > 50) {
				state.status = "It's a puppy! You win!";
				state.image = "./puppy.png";
				state.gameOver = true;
			} else {
				state.status = "Your negligence and bad attitude means Mertle will have an extra big meal today";
				state.image = "./mertle_is_fed.png";
				state.gameOver = true;
			}
		}
		return {...state}
	}

	if (action.type === 'SLAP_THING') {
		state.image = './smack_mertle.png';
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
		if (state.days >= state.maxDays) {
			if (state.hp > 50 && state.morale > 50) {
				state.status = "It's a puppy! You win!";
				state.image = "./puppy.png";
				state.gameOver = true;
			} else {
				state.status = "Your negligence and bad attitude means Mertle will have an extra big meal today";
				state.image = "./mertle_is_fed.png";
				state.gameOver = true;
			}
		}
		return {...state}
	}

	if (action.type === 'SKIP_THING') {
		state.days += 1;
		state.hp -= 1;
		state.image = "./default.png";
		state.status = "You are too afraid to go near Mertle. Skip today."
		if (state.days >= state.maxDays) {
			if (state.hp > 50 && state.morale > 50) {
				state.status = "It's a puppy!  You've won!";
				state.image = "./puppy.png";
				state.gameOver = true;
			} else {
				state.status = "Your negligence and bad attitude means Mertle will have an extra big meal today";
				state.image = "./mertle_is_fed.png";
				state.gameOver = true;
			}
		}
	}

	if (action.type === 'PLAY_AGAIN') {
		state.status = 'Mertle seems to be fairly tame at the moment';
		state.image = './default.png';
		state.days = 0;
		state.maxDays = 30;
		state.hp = 100;
		state.morale = 100;
		state.gameOver = false;
		state.timer = true;
	}

	if (action.type === 'SHOW_TIMER') {
		myDelay(2000);
		state.timer = false;
		return {...state}
	}

	return state;
}

exports.reducer = reducer;


