export interface ILink {
    initial: string;
    short: string;
}

export type LinkState = 'ok' | 'loading' | 'error';

export interface IInitialLinksContextState {
    links: ILink[];
    addLink(initialLink: string): void;
    state: LinkState;
}
