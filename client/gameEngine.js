import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
import StatusBar from './statusBar';
import GameOver from './gameOver';

class GameEngine extends React.Component {

	feed() {
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
					<GameOver />
				</div>
			);
		} else {
			return (
				<div>

					<p className="status_line">{this.props.status}</p>

					<div className="status">
						<StatusBar />
						<div className="buttons">
							<p><button onClick={() => this.feed()}>FEED Mertle</button></p>
							<p><button onClick={() => this.water()}>WATER Mertle</button></p>
							<p><button onClick={() => this.slap()}>SLAP Mertle</button></p>
							<p><button onClick={() => this.skip()}>SKIP</button></p>
						</div>
					</div>
					<div className="image">
						<img src={this.props.image}/>
					</div>


				</div>
			);
		}
	}

}

export default connect((state, props) => ({
	status: state.status,
	image: state.image,
	days: state.days,
	maxDays: state.maxDays,
	hp: state.hp,
	morale: state.morale,
	gameOver: state.gameOver
}))(GameEngine);
