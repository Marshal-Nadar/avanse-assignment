import React from 'react';
import './Header.css';
import User from '../../Assets/Images/user.svg';

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='company'>
          <img
            src='https://www.avanse.com/viewPagesAssets/img/logo.png'
            alt=''
            srcset=''
          />
        </div>
        <div className='user'>
          <div className='info'>About</div>
          <div className='info'>Product</div>
          <div className='info'>Resources</div>
          <div className='info'>Contact</div>
          <img src={User} className='user-icon' alt='' srcset='' />
        </div>
      </header>
    </>
  );
};

export default Header;
