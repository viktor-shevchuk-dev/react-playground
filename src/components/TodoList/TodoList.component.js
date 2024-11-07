import styles from './TodoList.module.css';

const TodoList = ({ todos, onRemoveTodo }) => {
  return (
    <ul className={styles.todoList}>
      {todos.map(({ text, id, completed }) => (
        <li key={id} className={styles.item}>
          <p className={styles.text}>{text}</p>
          <button
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
