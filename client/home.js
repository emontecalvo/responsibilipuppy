import React from 'react';
import Intro from './intro';
import GameEngine from './gameEngine';
import Setup from './setup';


class Home extends React.Component {

	constructor() {
		super()
		this.state = {
			begin: false,
			intro: false
		}
	}

	renderGame() {
		this.state.begin = true;
		this.state.intro = false;
		this.setState({begin: true});
		this.setState({intro: false});
	}

	renderIntro() {
		this.state.intro = true;
		this.setState({intro: true});
	}

	render() {
		if (!this.state.begin && !this.state.intro) {
			return (
				<div>
					<Intro renderIntro={this.renderIntro.bind(this)}/>
				</div>
			)
		} else if (this.state.intro) {
			return (
				<div>
					<Setup renderGame={this.renderGame.bind(this)}/>
				</div>
			)
		} 
		else {
			return (
				<div>
					<GameEngine />
				</div>
			)
		}
	}
}

module.exports = Home;
