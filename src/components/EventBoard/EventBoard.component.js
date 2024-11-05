import Event from '../Event/Event.component';
import styles from './EventBoard.module.css';

const EventBoard = ({ events }) => {
  console.log(events);
  return (
    <div className={styles.eventBoard}>
      {events.map(({ name, location, speaker, type, time }) => {
        return (
          <Event
            name={name}
            location={location}
            speaker={speaker}
            type={type}
            key={name}
            start={time.start}
            end={time.end}
          />
        );
      })}
    </div>
  );
};

export default EventBoard;
