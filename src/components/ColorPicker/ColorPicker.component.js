import { Component } from 'react';

import './ColorPicker.css';

class ColorPicker extends Component {
  state = { activeIndex: 0 };

  handleOptionClick = (index) => {
    this.setState({ activeIndex: index });
  };

  render() {
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <div>
          {this.props.options.map(({ label, color }, index) => (
            <button
              key={label}
              className={`ColorPicker__option ${
                this.state.activeIndex === index &&
                'ColorPicker__option--active'
              }`}
              style={{ backgroundColor: color }}
              onClick={this.handleOptionClick.bind(null, index)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
