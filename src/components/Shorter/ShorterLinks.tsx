import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppSelector } from '../../hooks';

export const ShorterLinks: React.FC = () => {
    const [copiedLink, setCopiedLink] = useState<string | null>(null);
    const links = useAppSelector((state) => state.links.items);

    const copyToClipboard = (link: string): void => {
        navigator.clipboard.writeText(link).then(() => {
            setCopiedLink(link);
        });
    };

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
                                copiedLink === link.full_short_link2
                                    ? ' copied'
                                    : ''
                            }`}
                            onClick={() =>
                                copyToClipboard(link.full_short_link2)
                            }
                        >
                            {copiedLink === link.full_short_link2
                                ? 'Copied!'
                                : 'Copy'}
                        </button>
                    </motion.div>
                </AnimatePresence>
            ))}
        </div>
    );
};
