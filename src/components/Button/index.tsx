import React, { forwardRef, ReactNode } from 'react';
import { motion } from 'framer-motion';
import './style.scss';

interface IButtonProps {
    variant: 'button' | 'link';
    styleVariant: 'round' | 'square';
    children: ReactNode;
    size?: 'small' | 'medium' | 'big';
    href?: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
    className?: string;
    onClick?(): void;
}

export type Ref = HTMLButtonElement & HTMLAnchorElement;

export const Button = forwardRef<Ref, IButtonProps>(
    (
        {
            variant,
            styleVariant,
            size = 'medium',
            children,
            href,
            className = '',
            type = 'button',
            ...props
        },
        ref
    ) => {
        const classNames = `Button Button--${styleVariant} Button--${size} ${className}`;

        if (variant === 'button') {
            return (
                <button ref={ref} className={classNames} type={type} {...props}>
                    {children}
                </button>
            );
        } else {
            return (
                <a ref={ref} className={classNames} href={href} {...props}>
                    {children}
                </a>
            );
        }
    }
);

export const MotionButton = motion(Button);
