import React, { useState } from 'react';
import { ILink } from 'src/interfaces';
import { ShorterForm } from './ShorterForm';
import { ShorterLinks } from './ShorterLinks';
import './style.scss';

export const Shorter: React.FC = () => {
    const [links, setLinks] = useState<ILink[]>([]);

    const handleAddLink = () => {};

    return (
        <section className='Shorter'>
            <div className='container Shorter__container'>
                <ShorterForm onAddLink={handleAddLink} />
                <ShorterLinks links={links} />
            </div>
        </section>
    );
};
