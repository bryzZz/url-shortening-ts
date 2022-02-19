import React from 'react';
import { Button } from '../Button';
import './style.scss';

export const PreFooter: React.FC = () => {
    return (
        <section className='PreFooter'>
            <div className='container PreFooter__container'>
                <h3 className='PreFooter__title'>Boost your links today</h3>
                <Button variant='link' href='/' styleVariant='round'>
                    Get&nbsp;Started
                </Button>
            </div>
        </section>
    );
};
