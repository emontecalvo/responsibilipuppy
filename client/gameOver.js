import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';

class GameOver extends React.Component {


	render() {

		return (
			<div>
				<h3>Game Over!</h3>
				<p className="status_line">{this.props.status}</p>
				<button>Play Again?</button>
				<div className="image">
					<img src={this.props.image}/>
				</div>

			</div>
		);
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
}))(GameOver);
