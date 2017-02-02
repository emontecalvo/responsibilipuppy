import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
import StatusBar from './statusBar'

class GameEngine extends React.Component {


	feed() {
		console.log("this props", this.props);
		this.props.dispatch(actions.feed_thing());
	}

	render() {
		return (
			<div>
				<h1>new game engine</h1>
				<img src={this.props.image}/>
				<button onClick={() => this.feed()}>FEED</button>
				<button>WATER</button>
				<button>SLAP</button>
				<StatusBar />
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
