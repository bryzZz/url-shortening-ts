import { useState } from 'react';
import { API_BASE_URL } from '../config';
import { ILink, LinkState } from '../interfaces';

export const useFetchLink = () => {
    const [state, setState] = useState<LinkState>('ok');

    const fetchLink = async (initialLink: string) => {
        try {
            setState('loading');

            const response = await fetch(API_BASE_URL + initialLink, {
                method: 'Post',
            });

            const data = await response.json();

            setState('ok');

            return {
                short: data.result.full_short_link2,
                initial: data.result.original_link,
            } as ILink;
        } catch (error) {
            setState('error');
        }
    };

    return { fetchLink, state };
};
