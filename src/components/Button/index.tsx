import React from 'react';
import './style.scss';

interface IButtonProps {
    variant: 'button' | 'link';
    styleVariant: 'round' | 'square';
    size?: 'small' | 'medium' | 'big';
    href?: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
    className?: string;
    onClick?(): void;
}

export const Button: React.FC<IButtonProps> = ({
    variant,
    styleVariant,
    size = 'medium',
    children,
    href,
    className = '',
    type = 'button',
    ...props
}) => {
    const classNames = `Button Button--${styleVariant} Button--${size} ${className}`;

    if (variant === 'button') {
        return (
            <button className={classNames} type={type} {...props}>
                {children}
            </button>
        );
    } else {
        return (
            <a className={classNames} href={href} {...props}>
                {children}
            </a>
        );
    }
};
