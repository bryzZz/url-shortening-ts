import React, { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { LinksContext } from '../../LinksContext';
import { Button } from '../Button';

type FormValues = {
    url: string;
};

export const ShorterForm: React.FC = () => {
    const { addLink, state } = useContext(LinksContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>({
        mode: 'onSubmit',
    });

    const onSubmit: SubmitHandler<FormValues> = ({ url }) => {
        addLink(url);
        reset();
    };

    return (
        <form
            className='Shorter__form'
            autoComplete='off'
            onSubmit={handleSubmit(onSubmit)}
        >
            <input
                {...register('url', {
                    required: 'Please add a link',
                    pattern: {
                        value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
                        message: 'Please enter a valid url',
                    },
                })}
                className={`Shorter__input${errors.url ? ' error' : ''}`}
                type='text'
                placeholder='Shorten a link here...'
                disabled={state === 'loading'}
            />
            <Button
                variant='button'
                styleVariant='square'
                className='Shorter__button'
                type='submit'
            >
                Shorten&nbsp;It!
            </Button>
            {errors.url && (
                <p className='Shorter__error'>{errors.url.message}</p>
            )}
        </form>
    );
};
