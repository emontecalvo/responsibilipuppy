import React from 'react';



const Setup = (renderGame) => {

		return(
			 <div>
 				<h1>responsibilipuppy!</h1>
 				<button onClick={() => renderGame.renderGame()}>Meet Mertle!</button>
 				<div>
	 				<img className="setup_img" src="./setup1.png" />
	 				<img className="setup_img" src="./setup2.png" />
	 				<img className="setup_img" src="./setup3.png" />
	 			</div>
 				<button onClick={() => renderGame.renderGame()}>Meet Mertle!</button>
			</div>
		)

}

module.exports = Setup;
