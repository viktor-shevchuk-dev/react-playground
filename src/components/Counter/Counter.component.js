import { useState, useEffect } from 'react';

export const Counter = () => {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const handleCounterAIncrement = () => {
    setCounterA((prevCounterAValue) => {
      return prevCounterAValue + 1;
    });
  };

  const handleCounterBIncrement = () => {
    setCounterB((prevCounterBValue) => prevCounterBValue + 1);
  };

  useEffect(() => {
    const totalClicks = counterA + counterB;
    document.title = `Overall clicked ${totalClicks} times.`;
  }, [counterA, counterB]);

  return (
    <>
      <button type="button" onClick={handleCounterAIncrement}>
        Clicked counterA {counterA} times
      </button>
      <button type="button" onClick={handleCounterBIncrement}>
        Clicked counterB {counterB} times
      </button>
    </>
  );
};

// class OldCounter extends Component {
//   state = {
//     counterA: 0,
//     counterB: 0,
//   };

//   handleCounterAIncrement = () => {
//     this.setState(({ counterA }) => ({ counterA: counterA + 1 }));
//   };

//   handleCounterBIncrement = () => {
//     this.setState(({ counterB }) => ({ counterB: counterB + 1 }));
//   };

//   componentDidMount() {
//     const { counterA, counterB } = this.state;
//     const totalClicks = counterA + counterB;

//     document.title = `Всего кликнули ${totalClicks} раз`;
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const { counterA, counterB } = this.state;

//     if (prevState.counterA !== counterA || prevState.counterB !== counterB) {
//       const totalClicks = counterA + counterB;

//       document.title = `Всего кликнули ${totalClicks} раз`;
//     }
//   }

//   render() {
//     return (
//       <>
//         <button type="button" onClick={this.handleCounterAIncrement}>
//           Кликнули counterA {this.state.counterA} раз
//         </button>

//         <button type="button" onClick={this.handleCounterBIncrement}>
//           Кликнули counterB {this.state.counterB} раз
//         </button>
//       </>
//     );
//   }
// }
