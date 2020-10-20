import React from 'react';
import Image from '../img/slide_4.png';
import './View.css';

export default function HomeView() {

  return (
    <div className='view-section'>
      <Headline />
      <img src={Image} alt="two photos of women" className='home_image' />
    </div>
  )
}

function Headline() {
  return (
    <h1 className='headline'>Community, productivity, and collaboration for coding ladies who crave the dedicated time to bring their creative projects to life</h1>
  )
}