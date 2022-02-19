import { API_BASE_URL } from '../../config';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const createShortLink = createAsyncThunk(
    'links/createShortLink',
    async (url: string) => {
        const response = await fetch(API_BASE_URL + url, { method: 'POST' });

        return await response.json();
    }
);

interface IInitialState {
    items: any[];
    loading: string;
}

const initialState: IInitialState = {
    items: [],
    loading: 'idle',
};

const linkSlice = createSlice({
    name: 'links',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createShortLink.rejected, (state) => {
            state.loading = 'rejected';
        });
        builder.addCase(createShortLink.pending, (state) => {
            state.loading = 'loading';
        });
        builder.addCase(createShortLink.fulfilled, (state, action) => {
            const { ok, result } = action.payload;
            state.loading = 'idle';

            if (ok) {
                state.items.push(result);
            } else {
                state.loading = 'error';
            }
        });
    },
});

export default linkSlice.reducer;
