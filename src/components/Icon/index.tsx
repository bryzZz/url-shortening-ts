import React from 'react';
import './style.scss';
import variants from './variants.json';

interface IIconProps {
    className?: string;
    variant: keyof typeof variants;
    size?: 'small' | 'medium' | 'big';
}

export const Icon: React.FC<IIconProps> = ({
    className = '',
    variant,
    size = 'medium',
}) => {
    return (
        <div
            className={`Icon Icon--${size} ${className}`}
            dangerouslySetInnerHTML={{ __html: variants[variant] }}
        ></div>
    );
};
