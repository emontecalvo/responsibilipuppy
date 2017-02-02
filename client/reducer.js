const initialState = {
			mertleAnger: 0,
			status: 'Mirtle seems to be fairly tame at the moment',
			event: '',
			image: 'default.png',
			points: 0,
			days: 0,
			maxDays: 30,
			hp: 100,
			morale: 100
}

const reducer = (state, action) => {
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
		return {...state, days: action.data}
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


