import { Component } from 'react';

// import Counter from './components/Counter/Counter.component';
import Dropdown from './components/Dropdown/Dropdown.component';
import ColorPicker from './components/ColorPicker/ColorPicker.component';
import TodoList from './components/TodoList/TodoList.component';

import initialTodos from './initialTodos.json';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = { todos: initialTodos };

  handleRemoveTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  render() {
    return (
      <>
        {/* <Counter initialValue={10} /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}

        <h2>Overall todos: {this.state.todos.length}</h2>
        <h2>
          Completed todos:{' '}
          {this.state.todos.reduce((acc, currentValue) => {
            return currentValue.completed ? acc + 1 : acc;
          }, 0)}
        </h2>
        <TodoList
          todos={this.state.todos}
          onRemoveTodo={this.handleRemoveTodo}
        />
      </>
    );
  }
}

export default App;
