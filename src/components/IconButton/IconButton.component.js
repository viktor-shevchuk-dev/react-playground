import classes from './IconButton.module.css';

const IconButton = ({ children = null, onClick = () => null, ...allProps }) => {
  return (
    <button
      type="button"
      className={classes.iconButton}
      onClick={onClick}
      {...allProps}
    >
      {children}
    </button>
  );
};

export default IconButton;
