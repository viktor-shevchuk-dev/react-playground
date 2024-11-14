import { Component } from 'react';

import styles from './Clock.module.css';

export default class Clock extends Component {
  state = { time: new Date().toLocaleTimeString() };

  intervalId = null;

  componentDidMount() {
    this.intervalId = setInterval(() => {
      console.log('interval');
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <div className={styles.face}>{this.state.time}</div>;
  }
}
