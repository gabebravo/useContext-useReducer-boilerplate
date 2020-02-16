import React from 'react';
import { GlobalContext } from '../index';
import { useLocation } from 'react-router-dom';

export default function ThemePicker() {
  let location = useLocation();

  const transformPathName = pn => {
    const pathArr = pn.split('/');
    return pathArr[1] ? pathArr[1] : 'home';
  };

  const globalReducer = React.useContext(GlobalContext);
  const { state, dispatch } = globalReducer;
  return (
    <div className="theme-picker">
      <div>
        <h3 style={{ textTransform: 'capitalize' }}>{`${transformPathName(
          location.pathname
        )}`}</h3>
        <h5>{`Theme color is: ${state.theme}`}</h5>
        <button onClick={() => dispatch({ type: 'TOGGLE' })}>
          Toggle Theme
        </button>
      </div>
    </div>
  );
}
