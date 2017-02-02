import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';

class GameEngine extends React.Component {





	feed() {
		this.props.dispatch(actions.feed_thing());
	}

	render() {
		return (
			<div>
				<h1>new game engine</h1>
				<button onClick={() => this.feed()}>FEED</button>
				<button>WATER</button>
				<button>SLAP</button>
			</div>
		)
	}

}

export default connect((state, props) => ({
	mertleAnger: state.mertleAnger,
	status: state.status,
	event: state.event,
	image: state.image,
	points: state.points,
	days: state.days,
	maxDays: state.maxDays,
	hp: state.hp,
	morale: state.morale
}))(GameEngine);
