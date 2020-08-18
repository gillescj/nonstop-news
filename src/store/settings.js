import { createSlice } from '@reduxjs/toolkit';

const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        category: { code: 'regional', name: 'National' },
        country: { code: 'us', name: 'United States' },
    },
    reducers: {
        changeCategory: (state, action) => {
            state.category = action.payload;
        },
        changeCountry: (state, action) => {
            state.country = action.payload;
        },
    },
});

export const { changeCategory, changeCountry } = settingsSlice.actions;
export default settingsSlice.reducer;
