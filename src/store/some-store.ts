import { createSlice } from '@reduxjs/toolkit';

const SomeSlice = createSlice({
  name: 'some',
  initialState: { name: 'LoL' },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const someActions = SomeSlice.actions;
export default SomeSlice.reducer;
