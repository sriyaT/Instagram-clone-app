import React, { Component } from 'react';
import './style.css';
import facebookIcon from '../../image/download.png';
import appstore from '../../image/app.png';
import HomeLeft from './homeLeft';
import Footer from './footer/footer';

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='page'>
          <HomeLeft />
          <div className='home-c'>
            <div className='home-container'>
              <div className='home'>
                <h1>Instagram</h1>
                <form className='login-form'>
                  <input
                    className='phoneNumber'
                    placeholder='Phone number, username or email'
                  ></input>
                  <input className='password' placeholder='Password'></input>
                  <button className='login' type='submit'>
                    Log In
                  </button>
                </form>
                <h2>OR</h2>
                <div className='facebook-login'>
                  <img src={facebookIcon} alt='facebook-icon'></img>
                  <h4>Login with Facebook</h4>
                </div>
                <h5 className='forgot-password'>Forgot password?</h5>
              </div>
            </div>
            <div className='no-account'>
              <h5>Don't have an account?</h5>
              <a href='#'>Sign up</a>
            </div>
            <div className='app-store'>
              <h3>Get the app.</h3>
              <img src={appstore} alt='app_store'></img>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
