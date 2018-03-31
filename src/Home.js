import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class Home extends Component {

  constructor() {
    super();
    this.state = {
      toPortfolio: false,
      user: null
    }
  }

  render() {

    if (this.state.toPortfolio === true) {
      return <Redirect to={'/' + this.state.user} />
    }

    return (
      <div>
        <input type='text' onKeyPress={this.handleKeyPress} onChange={this.handleChange} />
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({
      user: event.target.value
    });
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.setState({
        toPortfolio: true
      });
    }
  }
}

export default Home;