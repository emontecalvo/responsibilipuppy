import React from 'react';
import Intro from './intro';
import GameEngine from './gameEngine'


class Home extends React.Component {

	constructor() {
		super()
		this.state = {
			begin: false
		}
	}
	renderGame() {
		this.state.begin = true;
		this.setState({begin: true});
	}

	render() {
		if (!this.state.begin) {
			return (
				<div>
					<Intro renderGame={this.renderGame.bind(this)}/>
				</div>
			)
		} else {
			return (
				<div>
					<GameEngine />
				</div>
			)
		}
	}
}

module.exports = Home;
