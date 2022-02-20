import React from 'react';
import { ShorterForm } from './ShorterForm';
import { ShorterLinks } from './ShorterLinks';
import './style.scss';

export const Shorter: React.FC = () => {
    return (
        <section className='Shorter'>
            <div className='container Shorter__container'>
                <ShorterForm />
                <ShorterLinks />
            </div>
        </section>
    );
};
