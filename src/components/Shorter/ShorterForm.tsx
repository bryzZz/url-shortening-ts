import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { createShortLink } from '../../store/slice/linkSlice';
import { Button } from '../Button';

type FormValues = {
    url: string;
};

export const ShorterForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const loading = useAppSelector((state) => state.links.loading);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>({
        mode: 'onSubmit',
    });

    const onSubmit: SubmitHandler<FormValues> = ({ url }) => {
        dispatch(createShortLink(url));
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
                disabled={loading === 'loading'}
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
