import { Component } from 'react';

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
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default TodoEditor;
