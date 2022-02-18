import React from 'react';
import './style.scss';
import HeroImg from 'images/illustration-working.svg';

export const Hero: React.FC = () => {
    return (
        <div className='Hero'>
            <div className='Hero__container'>
                <img className='Hero__img' src={HeroImg} alt='working' />
                <div className='Hero__content'>
                    <h1 className='Hero__title'>
                        More than just shorter links
                    </h1>
                    <p className='Hero__text'>
                        Build your brand’s recognition and get detailed insights
                        on how your links are performing.
                    </p>
                    <a href='/' className='primary-link Hero__link'>
                        Get&nbsp;Started
                    </a>
                </div>
            </div>
        </div>
    );
};
