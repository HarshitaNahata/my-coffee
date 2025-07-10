import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { links } from '../../Data';
import { FaStream } from "react-icons/fa";
import './header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => setMenuOpen(!menuOpen);

    // Optional: Close menu when a link is clicked (for better UX)
    const handleLinkClick = () => setMenuOpen(false);

    return (
        <header className='header'>
            <nav className='nav container'>
                <a href='/' className='nav__logo'>
                    <img src={logo} alt='' className='nav__logo-img' />
                </a>
                <div className={`nav__menu${menuOpen ? ' active' : ''}`}>
                    <ul className="nav__list">
                        {links.map(({ name, path }, index) => (
                            <li className="nav__item" key={index}>
                                <a href={path} className="nav__link" onClick={handleLinkClick}>
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="nav__toggle" onClick={handleToggle}>
                    <FaStream />
                </div>
            </nav>
        </header>
    );
}
export default Header;
