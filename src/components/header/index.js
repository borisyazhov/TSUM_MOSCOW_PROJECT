import React from 'react'
import logo from '../../photos/logo.svg'
import './style.css'

function Header () {
    return(
        <div className='header__position'>
            <div className='headers_text'>
                <h2>Manager's</h2>
            </div>
            <div>
                <img src={logo} alt='TSUM'/>
            </div>
            <div className='headers_text'>
                <h2>Center</h2>
            </div>
        </div>
    )
}

export default Header