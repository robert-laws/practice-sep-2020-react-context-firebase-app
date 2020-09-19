import React from 'react';
import { Link } from 'react-router-dom';
import { SignedInLinks, SignedOutLinks } from './';

export const Navbar = () => {
  return (
    <nav className='nav-wrapper grey darken-3'>
      <div className='container'>
        <Link to='/' className='brand-logo'>
          ProPlan
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};
