import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

const Header = () => (
  <div className='row'>
    <div className='col-5'>
      <Link to='/'>
        <Logo className='logo' />
      </Link>
    </div>

    <div className='col-7'>
      <div className='navbar navbar-expand justify-content-end pr-0'>
        <nav className='navbar-nav'>
          <div className='nav-item'>
            <Link className='nav-link' to='/shop'>
              Shop
            </Link>
          </div>
          <div className='nav-item'>
            <Link className='nav-link' to='/contact'>
              Contact
            </Link>
          </div>
          <div className='nav-item'>
            <Link className='nav-link' to='/signin'>
              Sign In
            </Link>
          </div>
        </nav>
      </div>
    </div>
  </div>
);

export default Header;
