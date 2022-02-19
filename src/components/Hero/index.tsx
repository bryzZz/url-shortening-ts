import React from 'react';
import './style.scss';
import HeroImg from 'images/illustration-working.svg';
import { Button } from '../Button';

export const Hero: React.FC = () => {
    return (
        <section className='Hero'>
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
                    <Button variant='link' href='/' styleVariant='round'>
                        Get&nbsp;Started
                    </Button>
                </div>
            </div>
        </section>
    );
};
