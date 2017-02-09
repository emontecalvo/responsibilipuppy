import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';


class Timer extends React.Component {


  showTimer() {
      this.props.dispatch(actions.show_timer());
  }

  render() {

    return (
      <div>
      <p>The days are up.</p>
      <p>You wait while your parents debate</p>
      <p>the results of your attitude </p>
      <p>and Mertle's health over the past few weeks</p>
        <button className="decision" onClick={() => this.showTimer()}>your parent's decision...</button>

        <div className="theSVG">
          <svg width="220px" height="356px" viewBox="0 0 220 356" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="triangles" transform="translate(1.000000, 1.000000)" stroke="#979797">
                      <polygon className="bottomL" points="109 177 218 354 0 354"></polygon>
                      <polygon className="middleL" points="109 201 191 340 27 340"></polygon>
                      <polygon className="topL" points="108.5 229 152 327 65 327"></polygon>
                      <polygon className="bottomU" transform="translate(109.000000, 88.500000) rotate(-180.000000) translate(-109.000000, -88.500000) " points="109 0 218 177 0 177"></polygon>
                      <polygon className="middleU" transform="translate(109.000000, 83.500000) rotate(-180.000000) translate(-109.000000, -83.500000) " points="109 14 191 153 27 153"></polygon>
                      <polygon className="topU" transform="translate(109.500000, 76.000000) rotate(-180.000000) translate(-109.500000, -76.000000) " points="109.5 27 153 125 66 125"></polygon>
                  </g>
              </g>
          </svg>
        </div>

      </div>
    );
  }

}

export default connect((state, props) => ({
  status: state.status,
  image: state.image,
  days: state.days,
  maxDays: state.maxDays,
  hp: state.hp,
  morale: state.morale,
  gameOver: state.gameOver,
  timer: state.timer
}))(Timer);
