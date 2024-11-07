import { Component } from 'react';

import Controls from './Controls.component';
import Value from './Value.component';

import './Counter.css';

class Counter extends Component {
  static defaultProps = { value: 1 };

  static propTypes = {
    //
  };

  state = { value: this.props.initialValue };

  handleIncrement = () => {
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => {
      return { value: prevState.value - 1 };
    });
  };

  render() {
    return (
      <div className="Counter">
        <Value value={this.state.value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
