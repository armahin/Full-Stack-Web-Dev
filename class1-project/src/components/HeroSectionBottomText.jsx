import React from 'react'

const HeroSectionBottomText = () => {
  return (
    <div id='hero-section-bottom-text'>
        <div className="training">
            <p>Train with real professionals. Get the real results.</p>
            <div className="ids">
                <img className="firstimage" src="../src/assets/p1.png" alt="" />
                <img className="secondimage" src="../src/assets/p2.png" alt="" />
                <img className="thirdimage" src="../src/assets/p3.png" alt="" />
            </div>
        </div>
        <div className="socials">
            <div className="instagram">
                <a href="#">Instagram</a>
                <i class="ri-arrow-right-up-long-line"></i>
            </div>
            <div className="facebook">
                <a href="#">Facebook</a>
                <i class="ri-arrow-right-up-long-line"></i>
            </div>
            <div className="tiktok">
                <a href="#">Tiktok</a>
                <i class="ri-arrow-right-up-long-line"></i>
            </div>
            
        </div>
    </div>
  )
}

export default HeroSectionBottomText