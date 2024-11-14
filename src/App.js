import { Component } from 'react';

// import Counter from './components/Counter/Counter.component';
// import Dropdown from './components/Dropdown/Dropdown.component';
// import ColorPicker from './components/ColorPicker/ColorPicker.component';
import TodoList from './components/TodoList/TodoList.component';
import Form from './components/Form/Form.component';
import TodoEditor from './components/TodoEditor/TodoEditor.component';
import Filter from './components/Filter/Filter.component';
import Modal from './components/Modal/Modal.component';
import Clock from './components/Clock/Clock.component.js';
import Tabs from './components/Tabs/Tabs.component';
import IconButton from './components/IconButton/IconButton.component.js';

import { ReactComponent as AddIcon } from './icons/add.svg';

import styles from './App.module.css';

import initialTodos from './initialTodos.json';
import tabs from './tabs.json';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: [],
    filteredInputValue: '',
    showModal: false,
    initialTodosLoaded: false,
  };

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem('todos')) ?? [];

    this.setState({ todos, initialTodosLoaded: true });
  }

  componentDidUpdate(prevProps, prevState) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (prevTodos !== nextTodos) {
      localStorage.setItem('todos', JSON.stringify(nextTodos));
    }

    if (nextTodos.length > prevTodos.length && prevState.initialTodosLoaded) {
      this.toggleModal();
    }
  }

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
      return { todos: [newTodo, ...prevState.todos] };
    });
    // this.toggleModal();
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

  toggleModal = () => {
    this.setState((prevState) => {
      return { showModal: !prevState.showModal };
    });
  };

  render() {
    return (
      <>
        <Tabs items={tabs} />

        <IconButton onClick={this.toggleModal}>
          <AddIcon width={40} height={40} fill="white" />
          Add Todo
        </IconButton>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onFormSubmit={this.addTodo} />
            <button
              className={styles.modalButton}
              type="button"
              onClick={this.toggleModal}
            >
              Close Modal
            </button>
          </Modal>
        )}

        {/* <Counter initialValue={10} /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}

        {/* <Form onSubmit={this.handleFormSubmit} /> */}

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

        {this.state.showModal && <Clock />}
      </>
    );
  }
}

export default App;
