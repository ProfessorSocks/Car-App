import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

function NavbarMain() {
  let defaultProfileImg = '../'
  const LoggedProfile = 'https://photos.app.goo.gl/WSsbDs58YgFoYoSG6'
  return (
    <div className='containernav'>
        <h2>Car App</h2>
        <div className='containernav'>
          <Link to='/'><Button className='NavbarButtons'>Home</Button></Link>
          <Link to='/forums'><Button className='NavbarButtons'>Forum</Button></Link>
          <Link to='/profile'><button className='ProfileIcon'><img src='../../public/disneyland.jpg'/></button></Link>
        </div>
    </div>
  )
}

export default NavbarMain