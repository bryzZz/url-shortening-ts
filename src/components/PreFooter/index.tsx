import React from 'react';
import './style.scss';

export const PreFooter: React.FC = () => {
    return (
        <section className='PreFooter'>
            <div className='container PreFooter__container'>
                <h3 className='PreFooter__title'>Boost your links today</h3>
                <a href='/' className='primary-link PreFooter__link'>
                    Get Started
                </a>
            </div>
        </section>
    );
};
