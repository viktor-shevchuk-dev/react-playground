import styles from './Event.module.css';
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import { formatEventStart } from '../../utils/formatEventStart';
import { formatEventDuration } from '../../utils/formatEventDuration';
import { iconSize } from '../../constants/iconSize';

const Event = ({ name, location, speaker, type, start, end }) => {
  const formattedStart = formatEventStart(start);
  const duration = formatEventDuration(start, end);

  return (
    <div className={styles.event}>
      <h2 className={styles.title}>{name}</h2>
      <p className={styles.info}>
        <FaMapMarkerAlt className={styles.icon} size={iconSize.sm} />
        {location}
      </p>
      <p className={styles.info}>
        <FaUserAlt className={styles.icon} size={iconSize.sm} />
        {speaker}
      </p>
      <p className={styles.info}>
        <FaCalendarAlt className={styles.icon} size={iconSize.sm} />
        {formattedStart}
      </p>
      <p className={styles.info}>
        <FaClock className={styles.icon} size={iconSize.sm} />
        {duration}
      </p>
      <span className={`${styles.chip} ${styles[type]}`}>{type}</span>
    </div>
  );
};

export default Event;
