import React, { useState } from 'react';
import { ILink } from 'src/interfaces';

export const ShorterLinks: React.FC<{ links: ILink[] }> = ({ links }) => {
    const [copyToggle, setCopyToggle] = useState<boolean>(false);

    return (
        <div className='ShorterLinks'>
            {links.map((link, index) => (
                <div className='Shorter__link' key={index}>
                    <div className='Shorter__link-initial'>{link.initial}</div>
                    <div className='Shorter__link-short'>{link.short}</div>
                    <button
                        className={`Shorter__link-copy${
                            copyToggle ? ' copied' : ''
                        }`}
                        onClick={() => setCopyToggle((prev) => !prev)}
                    >
                        {!copyToggle ? 'Copy' : 'Copied!'}
                    </button>
                </div>
            ))}
        </div>
    );
};
