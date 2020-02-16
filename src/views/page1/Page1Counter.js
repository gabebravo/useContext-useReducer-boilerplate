import React from 'react';
import { Page1Context } from './Page1Provider';

const page1CounterStyles = {
  textAlign: 'center',
  border: 'solid 2px pink',
  borderRadius: '1rem',
  padding: '5rem',
  margin: '0.5rem'
};

export default function Page1Counter() {
  const [count, setCount] = React.useState(0);
  const { state, dispatch } = React.useContext(Page1Context);
  return (
    <div style={page1CounterStyles} className="column column-33">
      <h4>{`Page1 Count: ${state}`}</h4>
      <button
        className="button button-outline green"
        onClick={() => dispatch({ type: 'INC_PAGE1' })}
      >
        Increment Page Count
      </button>
      <button
        className="button button-outline red"
        onClick={() => dispatch({ type: 'DEC_PAGE1' })}
      >
        Decrement Page Count
      </button>
      <h4>{`My Count: ${count}`}</h4>
      <button
        className="button button-outline green"
        onClick={() => setCount(prevCount => prevCount + 1)}
      >
        Increment My Count
      </button>
      <button
        className="button button-outline red"
        onClick={() => setCount(prevCount => prevCount - 1)}
      >
        Decrement My Count
      </button>
    </div>
  );
}
