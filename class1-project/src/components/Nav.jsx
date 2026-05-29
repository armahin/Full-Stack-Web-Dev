import React from 'react'

const Nav = () => {
  return (
    <div id='nav-bar'>
        <div className="logo">
            <h1>Horizon Courts</h1>
        </div>

        <div className="navlinks">
            <a className="about-us" href='#'>About Us</a>
            <a href='#'>Services</a>  
            <a href='#'>Coaches</a>  
            <a href='#'>Events</a>  
            <a href='#'>Contacts</a>      
        </div>  

        <div className="book-now">
            <a href="#">Book now</a>
            <i class="ri-arrow-right-up-long-line"></i>
              
        </div>






    </div>
  )
}

export default Nav