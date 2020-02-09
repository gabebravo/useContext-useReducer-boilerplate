import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/home';
import Page1 from './views/page1';
import Page2 from './views/page2';
import Page3 from './views/page3';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/page1">
          <Page1 />
        </Route>
        <Route path="/page2">
          <Page2 />
        </Route>
        <Route path="/page3">
          <Page3 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
