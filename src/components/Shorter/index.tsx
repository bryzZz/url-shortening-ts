import React from 'react';
import { ILink } from 'src/interfaces';
import { ShorterForm } from './ShorterForm';
import { ShorterLinks } from './ShorterLinks';
import './style.scss';

const links: ILink[] = [
    { initial: 'http://wwwwwwwwwwwwwwwww.com', short: 'http://www.com' },
    { initial: 'http://wwwwwwwwwwwwwwwww.com', short: 'http://www.com' },
];

export const Shorter: React.FC = () => {
    return (
        <div className='Shorter'>
            <div className='container Shorter__container'>
                <ShorterForm />
                <ShorterLinks links={links} />
            </div>
        </div>
    );
};
