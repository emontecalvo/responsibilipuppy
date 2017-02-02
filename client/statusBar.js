import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';

class StatusBar extends React.Component {


	render() {
		return (
			<div>
				<div>
					<p>Mertle Anger:{this.props.mertleAnger}</p>
					<p>Status:{this.props.mertleAnger}</p>
					<p>Event:{this.props.event}</p>
					<p>Image:{this.props.image}</p>
					<p>Points:{this.props.points}</p>
					<p>Days:{this.props.days}</p>
					<p>maxDays:{this.props.maxDays}</p>
					<p>hp:{this.props.hp}</p>
					<p>morale:{this.props.morale}</p>

				</div>
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
}))(StatusBar);
