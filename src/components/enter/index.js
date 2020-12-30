import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Enter ()  {
    return(
        <div className='enter__position'>
            <div>
            Enter
            </div>
        <input placeholder='login'/>
        <input type='password' placeholder='password'/>
        <Link to='/brands_list'>log in</Link>

        </div> 
    )
}
export default Enter