import { Component } from 'react';

import styles from './Form.module.css';

class Form extends Component {
  initialState = { email: '', password: '' };

  state = this.initialState;

  handleChange = (event) => {
    const {
      currentTarget: { name, value },
    } = event;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className={styles.label}>
          Email
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>
        <label className={styles.label}>
          Password
          <input
            name="password"
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
