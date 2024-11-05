import styles from './PageTitle.module.css';

const PageTitle = ({ text }) => {
  return <h1 className={styles.title}>{text}</h1>;
};

export default PageTitle;
