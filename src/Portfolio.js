import React, { Component } from 'react';
import axios from 'axios';

import './Portfolio.css';

class Portfolio extends Component {

  constructor(props) {
    super(props);

    // Set base url from making requests
    const BASE_URL = 'https://api.github.com/users/' + this.props.match.params.user;
    // Set initial state of data
    this.state = {
      avatar_url: null,
      name: null,
      location: null,
      repos: null
    }

    // Get the user's header data from github
    axios.get(BASE_URL).then((res) => {
      this.setState({
        avatar_url: res.data.avatar_url,
        name: res.data.name,
        location: res.data.location
      });
    });

    // Get the user's repositories, ordered by TODO
    axios.get(BASE_URL + '/repos').then((res) => {
      this.setState({
        repos: res.data
      });
    });
  }

  render() {
    return (
      <div>
        <div className='Header'>
          <img src={this.state.avatar_url} alt={this.state.name} />
          <h1>{this.state.name}</h1>
          <p>{this.state.location}</p>
        </div>

        <div className='Repos'>
          {this.state.repos && this.state.repos.map(repo => {
            return (
              <div className='Repo'>
                <a href={repo.html_url}>
                  <div className='RepoBox'>
                    <div className='RepoHeader'>
                      <span className='RepoTitle'>{repo.name}</span>
                      <span className='RepoInfo'>{repo.forks} | {repo.language}</span>
                    </div>
                    <div className='RepoDescription'>{repo.description}</div>
                  </div>
                </a>
                <div className='RepoZip'>
                  <a href={'https://github.com/' + repo.owner.login + '/' + repo.name + '/archive/' + repo.default_branch + '.zip'}>
                    Download -->
                </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Portfolio;