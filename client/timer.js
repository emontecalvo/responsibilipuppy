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
        <div className="timer">
          <div className="glass"></div>
          <div className="sand"></div>
          <div className="top-sand"></div>
          <div className="bottom-sand"></div>
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
