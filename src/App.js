import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Portfolio from './Portfolio';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/:user' component={Portfolio} />
        </Switch>
      </div>
    );
  }
}

export default App;
