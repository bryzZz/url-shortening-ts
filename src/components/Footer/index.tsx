import React from 'react';
import './style.scss';
import { Logo } from '../Logo';
import { Icon } from '../Icon';

export const Footer: React.FC = () => {
    return (
        <footer className='Footer'>
            <div className='container Footer__container'>
                <div className='Footer__item'>
                    <Logo className='Footer__logo' />
                </div>
                <div className='Footer__item'>
                    <h5 className='Footer__item-title'>Features</h5>
                    <ul className='Footer__menu'>
                        <li className='Footer__menu-item'>
                            <a href='/' className='Footer__menu-link'>
                                Link Shortening
                            </a>
                        </li>
                        <li className='Footer__menu-item'>
                            <a href='/' className='Footer__menu-link'>
                                Branded Links
                            </a>
                        </li>
                        <li className='Footer__menu-item'>
                            <a href='/' className='Footer__menu-link'>
                                Analytics
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='Footer__item'>
                    <h5 className='Footer__item-title'>Resources</h5>
                    <ul className='Footer__menu'>
                        <li className='Footer__menu-item'>
                            <a href='/' className='Footer__menu-link'>
                                Blog
                            </a>
                        </li>
                        <li className='Footer__menu-item'>
                            <a href='/' className='Footer__menu-link'>
                                Developers
                            </a>
                        </li>
                        <li className='Footer__menu-item'>
                            <a href='/' className='Footer__menu-link'>
                                Support
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='Footer__item'>
                    <h5 className='Footer__item-title'>Company</h5>
                    <ul className='Footer__menu'>
                        <li className='Footer__menu-item'>
                            <a href='/' className='Footer__menu-link'>
                                About
                            </a>
                        </li>
                        <li className='Footer__menu-item'>
                            <a href='/' className='Footer__menu-link'>
                                Our Team
                            </a>
                        </li>
                        <li className='Footer__menu-item'>
                            <a href='/' className='Footer__menu-link'>
                                Careers
                            </a>
                        </li>
                        <li className='Footer__menu-item'>
                            <a href='/' className='Footer__menu-link'>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='Footer__social'>
                    <a href='/' className='Footer__social-item'>
                        <Icon variant='facebook' />
                    </a>
                    <a href='/' className='Footer__social-item'>
                        <Icon variant='twitter' />
                    </a>
                    <a href='/' className='Footer__social-item'>
                        <Icon variant='pinterest' />
                    </a>
                    <a href='/' className='Footer__social-item'>
                        <Icon variant='instagram' />
                    </a>
                </div>
            </div>
        </footer>
    );
};
