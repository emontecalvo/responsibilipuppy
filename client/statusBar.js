import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';

class StatusBar extends React.Component {


	render() {
		return (
			<div>
				<div>
					<p>Day: {this.props.days}</p>
					<p>MaxDays: {this.props.maxDays}</p>
					<p>Mertle's health: {this.props.hp}%</p>
					<p>Morale: {this.props.morale}%</p>
					<p className="rules">morale and </p>
					<p className="rules">Mertle's health</p>
					<p className="rules"> must be >=50% </p>
					<p className="rules">to win!</p>
				</div>
			</div>
		)
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
}))(StatusBar);
