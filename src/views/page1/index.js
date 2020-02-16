import React from 'react';
import ThemePicker from '../../components/ThemePicker';
import Page1Counter from './Page1Counter';
import Page1Provider from './Page1Provider';

export default function Page1() {
  return (
    <div className="theme-picker container">
      <div>
        <ThemePicker page="Page1" />
        <div style={{ width: '100rem', marginTop: '5rem' }} className="row">
          <Page1Provider>
            <Page1Counter />
            <Page1Counter />
            <Page1Counter />
          </Page1Provider>
        </div>
      </div>
    </div>
  );
}
