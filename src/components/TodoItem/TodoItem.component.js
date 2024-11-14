import IconButton from '../../components/IconButton/IconButton.component';

import { ReactComponent as RemoveIcon } from '../../icons/remove.svg';

import styles from './TodoItem.module.css';

const TodoItem = ({ completed, onToggleCompleted, onRemoveTodo, text }) => {
  return (
    <li className={styles.item}>
      <input type="checkbox" checked={completed} onChange={onToggleCompleted} />
      <p className={styles.text}>{text}</p>
      <IconButton onClick={onRemoveTodo}>
        Remove <RemoveIcon width={32} height={32} fill="#fff" />
      </IconButton>
    </li>
  );
};

export default TodoItem;
