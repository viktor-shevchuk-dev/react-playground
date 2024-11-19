import { useState, useEffect, useRef } from 'react';

export const Clock = () => {
  const [time, setTime] = useState(() => new Date());

  const intervalIdRef = useRef(null);

  const stop = () => {
    clearInterval(intervalIdRef.current);
  };

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      stop();
    };
  }, []);

  return (
    <div>
      <p>Current time: {time.toLocaleTimeString()}</p>
      <button type="button" onClick={stop}>
        Stop
      </button>
    </div>
  );
};

// class OldClock extends Component {
//   state = {
//     time: new Date(),
//   };

//   intervalId = null;

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       console.log('Это интервал каждые 1000ms ' + Date.now());
//       this.setState({ time: new Date() });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     console.log('Эот метод вызывается перед размонтированием компонента');
//     this.stop();
//   }

//   stop = () => {
//     clearInterval(this.intervalId);
//   };

//   render() {
//     return (
//       <div>
//         <p>Current time: {this.state.time.toLocaleTimeString()}</p>
//         <button type="button" onClick={this.stop}>
//           Stop
//         </button>
//       </div>
//     );
//   }
// }
