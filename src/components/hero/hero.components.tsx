import React from 'react'
import { AVATAR } from '../../assets';
import './hero.styles.css';


const Hero = () => {
  return (
    <div className='hero-container'>
        <img className='avatar' src={AVATAR} alt="" />
        <div>
            <h1 className='gr-hero'>
                GRAP<span>HIEE</span>
            </h1>
            <p className='gr-hero-p'>Join our platform and don't let the outdated models hold you back →</p>
        </div>
    </div>
  )
}

export default Hero;