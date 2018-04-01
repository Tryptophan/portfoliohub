import React, { Component } from 'react';

import * as Color from './Color';

import './Repo.css';

class Repo extends Component {
  render() {
    return (
      <div className='Repo'>
        <a href={this.props.repo.html_url}>
          <div className='RepoBox' style={{ backgroundColor: Color.SECONDARY }}>
            <div className='RepoHeader'>
              <span className='RepoTitle'>{this.props.repo.name}</span>
              <span className='RepoInfo'>{this.props.repo.forks} | {this.props.repo.language}</span>
            </div>
            <div className='RepoDescription'>{this.props.repo.description}</div>
          </div>
        </a>
        <div className='RepoZip'>
          <a href={'https://github.com/' + this.props.repo.owner.login + '/' + this.props.repo.name + '/archive/' + this.props.repo.default_branch + '.zip'}>
            Download 
          </a>
        </div>
      </div>
    );
  }
}

export default Repo;