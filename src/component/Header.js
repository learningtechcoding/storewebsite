import React from 'react'
import './home.css'
const Header = () => {
  return (
   <>
   <header>
    <div className="logo-container">
        <h2 className='logo'>Learning Tech</h2>
    </div>
    <nav>
        <ul className='nav-links'>
            <li>
                <a href="/" className='nav-link'>Specs</a>
            </li>
            <li>
                <a href="/" className='nav-link'>Products</a>
            </li>
            <li>
                <a href="/" className='nav-link'>Contact</a>
            </li>

        </ul>
    </nav>
    <div className="cart">
    <i class="bi bi-cart"></i>
    </div>
   </header>

   </>
  )
}

export default Header