import React from 'react';
import { motion, Variants } from 'framer-motion';
import './style.scss';
import HeroImg from './illustration-working.svg';
import { MotionButton } from '../Button';

const animation: Variants = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: (custom: number) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.1 },
    }),
};

export const Hero: React.FC = () => {
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='Hero'
        >
            <div className='Hero__container'>
                <img className='Hero__img' src={HeroImg} alt='working' />
                <div className='Hero__content'>
                    <motion.h1
                        custom={1}
                        variants={animation}
                        className='Hero__title'
                    >
                        More than just shorter links
                    </motion.h1>
                    <motion.p
                        custom={2}
                        variants={animation}
                        className='Hero__text'
                    >
                        Build your brand’s recognition and get detailed insights
                        on how your links are performing.
                    </motion.p>
                    <MotionButton
                        custom={3}
                        variants={animation}
                        variant='link'
                        href='/'
                        styleVariant='round'
                    >
                        Get&nbsp;Started
                    </MotionButton>
                </div>
            </div>
        </motion.section>
    );
};
