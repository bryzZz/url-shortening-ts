import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Icon } from '../Icon';
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

const itemAnimation: Variants = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
};

export const Statistics: React.FC = () => {
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.2, once: true }}
            className='Statistics'
        >
            <div className='container Statistics__container'>
                <motion.h3
                    variants={animation}
                    custom={1}
                    className='Statistics__title'
                >
                    Advanced Statistics
                </motion.h3>
                <motion.p
                    variants={animation}
                    custom={2}
                    className='Statistics__text'
                >
                    Track how your links are performing across the web with our
                    advanced statistics dashboard.
                </motion.p>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ amount: 0.2, once: true }}
                    className='Statistics__items'
                >
                    <motion.article
                        variants={itemAnimation}
                        custom={1}
                        className='Statistics__item'
                    >
                        <div className='Statistics__item-icon'>
                            <Icon variant='brand-recognition' />
                        </div>
                        <h5 className='Statistics__item-title'>
                            Brand Recognition
                        </h5>
                        <p className='Statistics__item-text'>
                            Boost your brand recognition with each click.
                            Generic links don&rsquo;t mean a&nbsp;thing. Branded
                            links help instil confidence in&nbsp;your content.
                        </p>
                    </motion.article>
                    <motion.article
                        variants={itemAnimation}
                        custom={2}
                        className='Statistics__item'
                    >
                        <div className='Statistics__item-icon'>
                            <Icon variant='detailed-records' />
                        </div>
                        <h5 className='Statistics__item-title'>
                            Detailed Records
                        </h5>
                        <p className='Statistics__item-text'>
                            Gain insights into who is&nbsp;clicking your links.
                            Knowing when and where people engage with your
                            content helps inform better decisions.
                        </p>
                    </motion.article>
                    <motion.article
                        variants={itemAnimation}
                        custom={3}
                        className='Statistics__item'
                    >
                        <div className='Statistics__item-icon'>
                            <Icon variant='fully-customizable' />
                        </div>
                        <h5 className='Statistics__item-title'>
                            Fully Customizable
                        </h5>
                        <p className='Statistics__item-text'>
                            Improve brand awareness and content discoverability
                            through customizable links, supercharging audience
                            engagement.
                        </p>
                    </motion.article>
                </motion.div>
            </div>
        </motion.section>
    );
};
