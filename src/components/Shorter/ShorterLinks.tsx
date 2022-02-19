import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppSelector } from '../../hooks';

export const ShorterLinks: React.FC = () => {
    const [copyToggle, setCopyToggle] = useState<boolean>(false);
    const links = useAppSelector((state) => state.links.items);

    if (links.length === 0) return null;

    return (
        <div className='ShorterLinks'>
            {links.map((link, index) => (
                <AnimatePresence key={index}>
                    <motion.div
                        className='Shorter__link'
                        initial={{ height: 0 }}
                        animate={{ height: 'initial' }}
                    >
                        <div className='Shorter__link-initial'>
                            {link.original_link}
                        </div>
                        <div className='Shorter__link-short'>
                            {link.full_short_link2}
                        </div>
                        <button
                            className={`Shorter__link-copy${
                                copyToggle ? ' copied' : ''
                            }`}
                            onClick={() => setCopyToggle((prev) => !prev)}
                        >
                            {!copyToggle ? 'Copy' : 'Copied!'}
                        </button>
                    </motion.div>
                </AnimatePresence>
            ))}
        </div>
    );
};
