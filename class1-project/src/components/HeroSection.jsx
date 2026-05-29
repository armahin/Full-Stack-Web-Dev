import React from 'react'
import HeroSectionMainText from './HeroSectionMainText.jsx'
import HeroSectionBottomText from './HeroSectionBottomText.jsx'
const HeroSection = () => {
  return (
    <div id='hero-section'>
        <div className="hero-image">
            <HeroSectionMainText/>
            <HeroSectionBottomText/>
        </div>

    </div>
  )
}

export default HeroSection