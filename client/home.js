import React from 'react';

class Home extends React.Component {

	constructor() {
		super()
		this.state = {
			day: 0
		}
	}

	render() {
		return (
			<div>
			<h1>responsibilipuppy!</h1>
			<img src="./intro_img.png" />
		</div>
		)
	}
}

module.exports = Home;
