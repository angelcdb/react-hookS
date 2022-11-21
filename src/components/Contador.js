import React, { useReducer } from "react";

const initialState = { contador: 0 };
const TYPES = {
  INCREMENTAR: "INCREMENTAR",
  INCREMENTAR_5: "INCREMENTAR_5",
  DECREMENTAR: "DECREMENTAR",
  DECREMENTAR_5: "DECREMENTAR_5",
  RESET: 'RESET'
}

function reducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENTAR:
      return { contador: state.contador + 1 };

    case TYPES.INCREMENTAR_5:
      return { contador: state.contador + action.payload};

    case TYPES.DECREMENTAR:
      return { contador: state.contador - 1 };
    case TYPES.DECREMENTAR_5:
        return { contador: state.contador - action.payload};

    case TYPES.RESET:
      return initialState;
    default:
      return state;
  }
}

const Contador = () => {
  // const [contador, setContador] = React.useState(0);
  // const sumar = () => setContador(contador + 1);
  // const restar = () => dispatch(contador - 1);
const [state, dispatch] = useReducer(reducer, initialState);

const sumar = () => dispatch({ type: TYPES.INCREMENTAR});
const sumar5 = () => dispatch({ type: TYPES.INCREMENTAR_5, payload:5});
const restar = () => dispatch({ type: TYPES.DECREMENTAR});
const restar5 = () => dispatch({ type: TYPES.DECREMENTAR_5, payload:5});
const reset = () => dispatch({ type: TYPES.RESET});

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{margin: '0px'}}>Contador Reducer</h2>
      <nav>
        <button onClick={sumar5}>+5</button>
        <button onClick={sumar}>+</button>
        <button onClick={reset}>0</button>
        <button onClick={restar}>-</button>
        <button onClick={restar5}>-5</button>
      </nav>
      <h3>{state.contador}</h3>
    </div>
  );
};

export { Contador };
