import React, { Component } from 'react';
import './style.css';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <a href='#about'>ABOUT</a>
        <a href='#help'>HELP</a>
        <a href='#press'>PRESS</a>
        <a href='#api'>API</a>
        <a href='#jobs'>JOBS</a>
        <a href='#privacy'>PRIVACY</a>
        <a href='#terms'>TERMS</a>
        <a href='#locations'>LOCATIONS</a>
        <a href='#topAccounts'>TOP ACCOUNTS</a>
        <a href='#hashTags'>HASHTAGS</a>
        <a href='#language'>LANGUAGE</a>
        <span>© 2020 INSTAGRAM FROM FACEBOOK</span>
      </div>
    );
  }
}
