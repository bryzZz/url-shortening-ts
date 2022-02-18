import React, { useState } from 'react';
import './style.scss';
// @ts-ignore: Unreachable code error
import Logo from 'images/logo.svg?component';
import { Squash as Hamburger } from 'hamburger-react';

export const Header: React.FC = () => {
    const [isOpen, setOpen] = useState<boolean>(false);

    return (
        <footer className='Header'>
            <div className='container Header__container'>
                <a href='/' className='logo Header__logo'>
                    <Logo className='logo__img' alt='logo' />
                </a>
                <nav className={'Header__nav' + (isOpen ? ' active' : '')}>
                    <div className='Header__nav-items'>
                        <a href='/' className='Header__link'>
                            Features
                        </a>
                        <a href='/' className='Header__link'>
                            Pricing
                        </a>
                        <a href='/' className='Header__link'>
                            Resources
                        </a>
                    </div>
                    <div className='Header__login'>
                        <a href='/' className='Header__link'>
                            Login
                        </a>
                        <a href='/' className='primary-link Header__link'>
                            Sign&nbsp;Up
                        </a>
                    </div>
                </nav>
                <div className='Header__hamburger'>
                    <Hamburger
                        toggled={isOpen}
                        toggle={setOpen}
                        color='hsl(257, 7%, 63%)'
                    />
                </div>
            </div>
        </footer>
    );
};
