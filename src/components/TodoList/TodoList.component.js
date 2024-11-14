import TodoItem from '../../components/TodoItem/TodoItem.component';

import styles from './TodoList.module.css';

const TodoList = ({ todos, onRemoveTodo, onToggleCompleted }) => {
  return (
    <ul className={styles.todoList}>
      {todos.map(({ text, id, completed }) => (
        <TodoItem
          key={id}
          text={text}
          completed={completed}
          onRemoveTodo={() => onRemoveTodo(id)}
          onToggleCompleted={() => onToggleCompleted(id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
