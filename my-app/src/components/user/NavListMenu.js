import React from 'react'
import { Link } from 'react-router-dom'
const NavListMenu = () => {
  return (

    <>
    
    <div className='flex'>

    <Link to='/'> home</Link>

    <Link to='/About'>About</Link>

    </div>
    </>
   
  )
}

export default NavListMenu