import React, { Component } from 'react';
import './homeLeft.css';
import pic1 from '../../image/instagram-pic-1.jpg';
import pic2 from '../../image/instagram-pic-2.jpg';
import pic3 from '../../image/instagram-pic-3.jpg';
import pic4 from '../../image/instagram-pic-4.jpg';
import pic5 from '../../image/instagram-pic-5.jpg';

const picArray = [pic1, pic2, pic3, pic4, pic5];

export default class HomeLeft extends Component {
  state = {
    imageIndex: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        imageIndex: (this.state.imageIndex + 1) % 5,
      });
    }, 2000);
  }

  render() {
    const { imageIndex } = this.state;
    return (
      <div className='images-container'>
        <div className='container'>
          {picArray.map((item, index) => {
            const showClass = index === imageIndex ? 'show' : '';
            return (
              <img className={`pic1 ${showClass}`} src={item} alt='pic1' />
            );
          })}
        </div>
      </div>
    );
  }
}
