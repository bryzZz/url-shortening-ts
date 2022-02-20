import React, { useState } from 'react';
import { LinksContext } from '../../LinksContext';
import { ILink } from '../../interfaces';
import {
    Header,
    Hero,
    Shorter,
    Statistics,
    CallToAction,
    Footer,
} from 'components';
import { useFetchLink } from '../../hooks/useFetchLink';

export const App: React.FC = () => {
    const [links, setLinks] = useState<ILink[]>(
        //@ts-ignore
        JSON.parse(localStorage.getItem('links')) || []
    );
    const { fetchLink, state } = useFetchLink();

    const addLink = async (initialLink: string) => {
        const newLink = await fetchLink(initialLink);

        if (state === 'ok') {
            // @ts-ignore
            setLinks((prev) => {
                const newLinks = [...prev, newLink];
                localStorage.setItem('links', JSON.stringify(links));
                return newLinks;
            });
        }
    };

    return (
        <LinksContext.Provider value={{ links, addLink, state }}>
            <Header />
            <Hero />
            <Shorter />
            <Statistics />
            <CallToAction />
            <Footer />
        </LinksContext.Provider>
    );
};
