import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
import StatusBar from './statusBar'

class GameEngine extends React.Component {


	feed() {
		console.log("this props", this.props);
		this.props.dispatch(actions.feed_thing());
	}

	slap() {
		this.props.dispatch(actions.slap_thing());
	}

	skip() {
		this.props.dispatch(actions.skip_thing());
	}

	water() {
		this.props.dispatch(actions.water_thing());
	}

	render() {
		if (this.props.gameOver) {
			return (
				<div>
					<h3>GAME OVER!</h3>
				</div>
			);
		} else {
			return (
				<div>
					<p>{this.props.status}</p>
					<div className="status">
						<StatusBar />
					</div>
					<div className="image">
						<img src={this.props.image}/>
					</div>
					<div className="buttons">
						<button onClick={() => this.feed()}>FEED</button>
						<button onClick={() => this.water()}>WATER</button>
						<button onClick={() => this.slap()}>SLAP</button>
						<button onClick={() => this.skip()}>SKIP</button>
					</div>

				</div>
			);
		}
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
	morale: state.morale,
	gameOver: state.gameOver
}))(GameEngine);
