import React, { Component } from 'react';
import './homeLeft.css';
import pic1 from '../../image/instagram-pic-1.jpg';
import pic2 from '../../image/instagram-pic-2.jpg';
import pic3 from '../../image/instagram-pic-3.jpg';
import pic4 from '../../image/instagram-pic-4.jpg';
import pic5 from '../../image/instagram-pic-5.jpg';

export default class HomeLeft extends Component {
  render() {
    return (
      <div className='images-container'>
        <div className='container'>
          <img className='pic1' src={pic1} alt='pic1'></img>
          <img className='pic1' src={pic2} alt='pic2'></img>
          <img className='pic1' src={pic3} alt='pic3'></img>
          <img className='pic1' src={pic4} alt='pic4'></img>
          <img className='pic1' src={pic5} alt='pic5'></img>
        </div>
      </div>
    );
  }
}
