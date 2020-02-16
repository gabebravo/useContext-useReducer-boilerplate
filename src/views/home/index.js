import React from 'react';
import ThemePicker from '../../components/ThemePicker';
import HomeCounter from './HomeCounter';
import HomeProvider from './HomeProvider';

export default function Home() {
  return (
    <div className="theme-picker container">
      <div>
        <ThemePicker />
        <div style={{ width: '100rem', marginTop: '5rem' }} className="row">
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
