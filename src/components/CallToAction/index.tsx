import React from 'react';
import { motion, Variants } from 'framer-motion';
import { MotionButton } from '../Button';
import './style.scss';

const animation: Variants = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.1 },
    }),
};

export const CallToAction: React.FC = () => {
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='CallToAction'
        >
            <div className='container CallToAction__container'>
                <motion.h3
                    className='CallToAction__title'
                    variants={animation}
                    custom={1}
                >
                    Boost your links today
                </motion.h3>
                <MotionButton
                    variants={animation}
                    custom={2}
                    variant='link'
                    href='/'
                    styleVariant='round'
                >
                    Get&nbsp;Started
                </MotionButton>
            </div>
        </motion.section>
    );
};
