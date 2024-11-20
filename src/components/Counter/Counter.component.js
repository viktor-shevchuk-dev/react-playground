import { useEffect, useReducer } from 'react';

const countReducer = (currState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'incrementA':
      return { ...currState, counterA: currState.counterA + payload };
    case 'decrementA':
      return { ...currState, counterA: currState.counterA - payload };
    case 'incrementB':
      return { ...currState, counterB: currState.counterB + payload };
    case 'decrementB':
      return { ...currState, counterB: currState.counterB - payload };
    default:
      throw new Error(`Unsupported action type ${type}`);
  }
};

// lazy initialization of reducer's initial value
const init = (initialState) => {
  return {
    ...initialState,
    counterA: initialState.counterA + 10,
    counterB: initialState.counterB + 10,
  };
};

export const Counter = () => {
  const [count, dispatch] = useReducer(
    countReducer,
    {
      counterA: 0,
      counterB: 0,
    },
    init
  );
  const { counterA, counterB } = count;

  useEffect(() => {
    const totalValue = counterA + counterB;
    document.title = `Overall counter value: ${totalValue}.`;
  }, [counterA, counterB]);

  return (
    <>
      <button
        type="button"
        onClick={() => dispatch({ type: 'incrementA', payload: 1 })}
      >
        Increment A
      </button>
      <span> {counterA} </span>
      <button
        type="button"
        onClick={() => dispatch({ type: 'decrementA', payload: 1 })}
      >
        Decrement A
      </button>

      <span> - </span>

      <button
        type="button"
        onClick={() => dispatch({ type: 'incrementB', payload: 1 })}
      >
        Increment B
      </button>
      <span> {counterB} </span>
      <button
        type="button"
        onClick={() => dispatch({ type: 'decrementB', payload: 1 })}
      >
        Decrement B
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
