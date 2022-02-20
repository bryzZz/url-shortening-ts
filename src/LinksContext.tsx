import React from 'react';
import { IInitialLinksContextState } from './interfaces';

const initialState: IInitialLinksContextState = {
    links: [],
    addLink: (initialLink: string) => {},
    state: 'loading',
};

export const LinksContext = React.createContext(initialState);
