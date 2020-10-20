import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';
import './Header.css';

export default function Header() {

  return (
    <div className='header'>
      <img src={Logo} alt="Ladies Code Collective logo" className='header_image' />
      <nav className='nav'>
      <ul>
          <Link to='/'><NavItem title='Home' /></Link>
          <Link to='/podcast'><NavItem title='Podcast' /></Link>
          <Link to='/cohorts'><NavItem title='Cohorts' /></Link>
        </ul>
      </nav>
    </div>
  )
}

function NavItem({ title }) {
  return (
    <li className='navItem'><button>{title}</button></li>
  )
}