import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

function NavbarMain() {

  const LoggedProfile = 'https://photos.app.goo.gl/WSsbDs58YgFoYoSG6'
  return (
    <div className='containernav'>
        <h2>Car App</h2>
        <Link to='/'><Button>Home</Button></Link>
        <Link to='/forums'><Button>Forum</Button></Link>
        <Link to='/profile'><button><img src=/></button></Link>
    </div>
  )
}

export default NavbarMain