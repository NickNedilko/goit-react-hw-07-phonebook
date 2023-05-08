import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
      filter: '',
    },
    reducers: {
           filterSearch: (state, {payload}) => {state.filter = payload },
    }})

    console.log(filterSlice)

    export const {filterSearch} = filterSlice.actions;
    export const filterReducer = filterSlice.reducer;