import React from 'react';
import ThemePicker from '../../components/ThemePicker';
import HomeCounter from './HomeCounter';
import HomeProvider from './HomeProvider';

export default function Home() {
  return (
    <div className="theme-picker container">
      <div>
        <ThemePicker />
        <div className="counter-container row">
          <HomeProvider>
            <HomeCounter />
            <HomeCounter />
            <HomeCounter />
          </HomeProvider>
        </div>
      </div>
    </div>
  );
}
