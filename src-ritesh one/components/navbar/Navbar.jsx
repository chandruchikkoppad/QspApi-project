import React from 'react'
import Logo from './Logo';
import Menu from './Menu';
import Styles from './_navbar.module.css'

const Navbar = () => {
  return (
    <div className={Styles.nav}>
      <Logo />
      <Menu/>
    </div>
  )
}

export default Navbar
