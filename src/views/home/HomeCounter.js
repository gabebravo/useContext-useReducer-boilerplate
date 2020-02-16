import React from 'react';
import { HomeContext } from './HomeProvider';

const homeCounterStyles = {
  textAlign: 'center',
  border: 'solid 2px pink',
  borderRadius: '1rem',
  padding: '5rem',
  margin: '0.5rem'
};

export default function HomeCounter() {
  const [count, setCount] = React.useState(0);
  const { state, dispatch } = React.useContext(HomeContext);
  return (
    <div style={homeCounterStyles} className="column column-33">
      <h4>{`Home Count: ${state}`}</h4>
      <button
        className="button button-outline green"
        onClick={() => dispatch({ type: 'INC_HOME' })}
      >
        Increment Home Count
      </button>
      <button
        className="button button-outline red"
        onClick={() => dispatch({ type: 'DEC_HOME' })}
      >
        Decrement Home Count
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
