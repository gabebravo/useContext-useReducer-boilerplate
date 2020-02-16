import React from 'react';
import { GlobalContext } from '../index';

export default function ThemePicker({ page }) {
  const globalReducer = React.useContext(GlobalContext);
  const { state, dispatch } = globalReducer;
  return (
    <div className="theme-picker">
      <div>
        <h3>{`${page} Page`}</h3>
        <h5>{`Theme color is: ${state.theme}`}</h5>
        <button onClick={() => dispatch({ type: 'TOGGLE' })}>
          Toggle Theme
        </button>
      </div>
    </div>
  );
}
