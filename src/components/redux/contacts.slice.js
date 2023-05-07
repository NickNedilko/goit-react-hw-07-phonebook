import { createSlice } from '@reduxjs/toolkit';
import { getContactsThunk, deleteContactsThunk, addContactsThunk } from './contacts.thunk';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {},
  extraReducers: {
    [getContactsThunk.pending]: state => {
      state.contacts.isLoading = true;
    },
    [getContactsThunk.fulfilled]: (state, { payload }) => {
      state.contacts.items = payload;
      state.contacts.isLoading = false;
    },
    [getContactsThunk.rejected]: state => {
      state.contacts.error = 'error';
    },
    [deleteContactsThunk.pending]: state => {
      state.contacts.isLoading = true;
    },
    [deleteContactsThunk.fulfilled]: (state, { payload }) => {
      state.contacts.items = state.contacts.items.filter(item => item.id !== payload);
      state.contacts.isLoading = false;
    },
    [deleteContactsThunk.rejected]: state => {
      state.contacts.error = 'error';
    },
    [addContactsThunk.fulfilled]: (state, { payload }) => {
        console.log(payload)
        state.contacts.items.push(payload);
        state.contacts.isLoading = false;
      },
  },
});

export const contactsReducer = contactsSlice.reducer;
