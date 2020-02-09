import React from 'react';
import { GlobalContext } from '../../index';

export default function Home() {
  const globalReducer = React.useContext(GlobalContext);
  const { state, dispatch } = globalReducer;
  return (
    <div>
      <h3>Home Page</h3>
      <h5>{`Theme color is: ${state.theme}`}</h5>
      <button onClick={() => dispatch({ type: 'TOGGLE' })}>Toggle Theme</button>
    </div>
  );
}
