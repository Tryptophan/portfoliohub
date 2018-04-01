import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Portfolio from './Portfolio';

import * as Color from './Color';

import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: Color.PRIMARY }}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/:user' component={Portfolio} />
        </Switch>
      </div>
    );
  }
}

export default App;
