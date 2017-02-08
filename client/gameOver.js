import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
import GameEngine from './gameEngine';
import Timer from './timer';

class GameOver extends React.Component {

	playAgain() {
		this.props.dispatch(actions.play_again());
	}



	render() {
		if (this.props.gameOver && this.props.timer) {
			return (
				<div>
					<Timer />

				</div>
			);
		}  else if (this.props.gameOver && !this.props.timer) {
			return (
				<div>
					<h3>Game Over!</h3>
					<p className="status_line">{this.props.status}</p>
					<button onClick={() => this.playAgain()}>Play Again?</button>
					<div className="image">
						<img src={this.props.image}/>
					</div>
				</div>
			);
		} else {
			return (
				<div>
					<GameEngine />
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
	gameOver: state.gameOver,
	timer: state.timer
}))(GameOver);
