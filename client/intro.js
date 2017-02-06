import React from 'react';



const Intro = (renderIntro) => {

		return(
			 <div>
 				<h1>responsibilipuppy!</h1>
 				<button onClick={() => renderIntro.renderIntro()}>I wanna pupppppppy!</button>
 				<img className="intro_img" src="./intro_img.png" />
			</div>
		)

}

module.exports = Intro;
