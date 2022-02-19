import React from 'react';
import { Icon } from '../Icon';
import './style.scss';

export const Statistics: React.FC = () => {
    return (
        <section className='Statistics'>
            <div className='container Statistics__container'>
                <h3 className='Statistics__title'>Advanced Statistics</h3>
                <p className='Statistics__text'>
                    Track how your links are performing across the web with our
                    advanced statistics dashboard.
                </p>
                <div className='Statistics__items'>
                    <div className='Statistics__item'>
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
                    </div>
                    <div className='Statistics__item'>
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
                    </div>
                    <div className='Statistics__item'>
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
                    </div>
                </div>
            </div>
        </section>
    );
};
