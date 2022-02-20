import React from 'react';
import { Button } from '../Button';
import './style.scss';

export const CallToAction: React.FC = () => {
    return (
        <section className='CallToAction'>
            <div className='container CallToAction__container'>
                <h3 className='CallToAction__title'>Boost your links today</h3>
                <Button variant='link' href='/' styleVariant='round'>
                    Get&nbsp;Started
                </Button>
            </div>
        </section>
    );
};
