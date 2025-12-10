import { createSlice } from '@reduxjs/toolkit';


const uiSlice = createSlice({
name: 'ui',
initialState: { dark: true },
reducers: {
toggleDark(state){ state.dark = !state.dark }
}
});


export const { toggleDark } = uiSlice.actions;
export default uiSlice.reducer;