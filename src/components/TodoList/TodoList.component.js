import styles from './TodoList.module.css';

const TodoList = ({ todos, onRemoveTodo, onToggleCompleted }) => {
  return (
    <ul className={styles.todoList}>
      {todos.map(({ text, id, completed }) => (
        <li key={id} className={styles.item}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => onToggleCompleted(id)}
          />
          <p className={styles.text}>{text}</p>
          <button
            type="button"
            className={styles.removeButton}
            onClick={() => onRemoveTodo(id)}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
