import React from 'react';
import {
    Header,
    Hero,
    Shorter,
    Statistics,
    CallToAction,
    Footer,
} from 'components';

export const App: React.FC = () => {
    return (
        <>
            <Header />
            <Hero />
            <Shorter />
            <Statistics />
            <CallToAction />
            <Footer />
        </>
    );
};
