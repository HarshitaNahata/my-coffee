import React from 'react';
import logo from '../../assets/logo.png';
const Header = () => {
    return (
        <header className='header'>
            <nav className='nav container'>
                <a href='/' className='nav__logo'>
                    <img src={logo} alt='' className='nav__logo-img' />
                </a>
            </nav>
        </header>
    );
}
export default Header;
