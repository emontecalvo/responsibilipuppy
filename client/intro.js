import React from 'react';



const Intro = (renderGame) => {

		return(
			 <div>
 				<h1>responsibilipuppy!</h1>
 				<button onClick={() => renderGame.renderGame()}>I wanna pupppppppy!</button>
 				<img src="./intro_img.png" />
			</div>
		)

}

module.exports = Intro;
