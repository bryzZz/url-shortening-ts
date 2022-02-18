import React, { useEffect, useState } from 'react';

export const ShorterForm: React.FC = () => {
    const [isError, setIsError] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    useEffect(() => {
        if (value === '') {
            setIsError(true);
        } else {
            setIsError(false);
        }
    }, [value]);

    return (
        <form className='Shorter__form' onSubmit={handleSubmit}>
            <input
                value={value}
                onChange={handleChange}
                className={`Shorter__input${isError ? ' error' : ''}`}
                type='text'
                placeholder='Shorten a link here...'
            />
            {isError && <p className='Shorter__error'>Please add a link</p>}
            <button className='primary-link Shorter__button' type='submit'>
                Shorten&nbsp;It!
            </button>
        </form>
    );
};
