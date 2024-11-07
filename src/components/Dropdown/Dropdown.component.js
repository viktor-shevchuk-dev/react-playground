import { Component } from 'react';

import './Dropdown.css';

class Dropdown extends Component {
  initialDropdownVisibility = true;
  state = { visible: this.initialDropdownVisibility };

  toggle = () => {
    this.setState((prevState) => ({ visible: !prevState.visible }));
  };

  render() {
    console.log(this.state.visible);

    return (
      <div className="Dropdown">
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.toggle}
        >
          {this.state.visible ? 'Hide' : 'Show'}
        </button>

        {this.state.visible && (
          <div className="Dropdown__menu">Dropdown menu</div>
        )}
      </div>
    );
  }
}

export default Dropdown;
