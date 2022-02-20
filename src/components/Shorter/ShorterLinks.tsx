import React, { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../Button';
import { LinksContext } from '../../LinksContext';

export const ShorterLinks: React.FC = () => {
    const [copiedLink, setCopiedLink] = useState<string | null>(null);
    const { links } = useContext(LinksContext);

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
                            {link.initial}
                        </div>
                        <div className='Shorter__link-short'>{link.short}</div>
                        <Button
                            variant='button'
                            styleVariant='square'
                            size='small'
                            className={`Shorter__link-copy${
                                copiedLink === link.short ? ' copied' : ''
                            }`}
                            onClick={() => copyToClipboard(link.short)}
                        >
                            {copiedLink === link.short ? 'Copied!' : 'Copy'}
                        </Button>
                    </motion.div>
                </AnimatePresence>
            ))}
        </div>
    );
};
