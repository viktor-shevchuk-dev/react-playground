import styles from './Controls.module.css';

const Controls = ({ onIncrement, onDecrement }) => {
  return (
    <div className="Counter__controls">
      <button className={styles.control} onClick={onIncrement}>
        Increase by 1
      </button>
      <button className={styles.control} onClick={onDecrement}>
        Decrease by 1
      </button>
    </div>
  );
};

export default Controls;
