import React from 'react';

class Setup extends React.Component {

	constructor() {
		super()
		this.state = {
			setup1: true,
			setup2: false,
			setup3: false
		}
	}

	renderSetup2() {
		this.state.setup2 = true;
		this.setState({setup2: true});
		this.state.setup1 = false;
		this.setState({setup1: false});
	}

	renderSetup3() {
		this.state.setup3 = true;
		this.state.setup2 = false;
		this.setState({setup3: true});
		this.setState({setup2: false});
	}

	render() {
		if (!this.state.setup2 && !this.state.setup3) {
			return (
			 <div>
 				<h1>responsibilipuppy!</h1>
 				<button onClick={() => this.renderSetup2()}>next</button>
 				<div>
	 				<img className="setup_img" src="./setup1.png" />
	 			</div>
			</div>
			)
		} else if (this.state.setup2) {
			return (
				 <div>
	 				<h1>responsibilipuppy!</h1>
	 				<button onClick={() => this.renderSetup3()}>next</button>
	 				<div>
		 				<img className="setup_img" src="./setup2.png" />
		 			</div>
				</div>
			)
		} 
		else {
			return (
				 <div>
	 				<h1>responsibilipuppy!</h1>
	 				<button onClick={() => this.props.renderGame()}>next</button>
	 				<div>
		 				<img className="setup_img" src="./setup3.png" />
		 			</div>
				</div>
			)
		}
	}
}

module.exports = Setup;
