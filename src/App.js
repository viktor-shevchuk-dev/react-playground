import { Component } from 'react';

// import Counter from './components/Counter/Counter.component';
// import Dropdown from './components/Dropdown/Dropdown.component';
// import ColorPicker from './components/ColorPicker/ColorPicker.component';
import TodoList from './components/TodoList/TodoList.component';
import Form from './components/Form/Form.component';
import TodoEditor from './components/TodoEditor/TodoEditor.component';
import Filter from './components/Filter/Filter.component';

import initialTodos from './initialTodos.json';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = { todos: initialTodos, filteredInputValue: '' };

  calculateCompletedTodos = () =>
    this.state.todos.reduce((acc, currentValue) => {
      return currentValue.completed ? acc + 1 : acc;
    }, 0);

  removeTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  handleFormSubmit = (data) => {
    console.log(data);
  };

  toggleCompleted = (todoId) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.map((todo) => {
          if (todo.id === todoId) {
            return { ...todo, completed: !todo.completed };
          }

          return todo;
        }),
      };
    });
  };

  addTodo = (newTodoText) => {
    this.setState((prevState) => {
      const newTodo = { text: newTodoText, completed: false, id: newTodoText };
      return { todos: [...prevState.todos, newTodo] };
    });
  };

  getFilteredTodos = () => {
    const normalizedFilter = this.state.filteredInputValue.toLowerCase();

    const filteredTodos = this.state.todos.filter((todo) => {
      const normalizedTodoText = todo.text.toLowerCase();
      return normalizedTodoText.includes(normalizedFilter);
    });

    return filteredTodos;
  };

  onFilterInputChange = (event) => {
    this.setState({ filteredInputValue: event.currentTarget.value });
  };

  render() {
    return (
      <>
        {/* <Counter initialValue={10} /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}

        <Form onSubmit={this.handleFormSubmit} />
        <TodoEditor onFormSubmit={this.addTodo} />
        <Filter
          onFilterInputChange={this.onFilterInputChange}
          filteredInputValue={this.state.filteredInputValue}
        />

        <TodoList
          todos={this.getFilteredTodos()}
          onRemoveTodo={this.removeTodo}
          onToggleCompleted={this.toggleCompleted}
        />
        <h2>Overall todos: {this.state.todos.length}</h2>
        <h2>Completed todos: {this.calculateCompletedTodos()}</h2>
      </>
    );
  }
}

export default App;
