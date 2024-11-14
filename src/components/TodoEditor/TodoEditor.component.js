import { Component } from 'react';

import IconButton from '../IconButton/IconButton.component';

import { ReactComponent as AddIcon } from '../../icons/add.svg';

class TodoEditor extends Component {
  state = { todoText: '' };

  handleTodoTextChange = (event) => {
    this.setState({ todoText: event.currentTarget.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.todoText);
    this.setState({ todoText: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <textarea
          value={this.state.todoText}
          onChange={this.handleTodoTextChange}
        />
        <br />
        <IconButton type="submit" aria-label="Submit">
          <AddIcon width={24} fill="#fff" />
        </IconButton>
      </form>
    );
  }
}

export default TodoEditor;
