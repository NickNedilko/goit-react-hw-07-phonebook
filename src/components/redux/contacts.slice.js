import { createSlice } from '@reduxjs/toolkit';
import {
  getContactsThunk,
  deleteContactsThunk,
  addContactsThunk,
} from './contacts.thunk';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
  },

  // extraReducers: {
  //   [getContactsThunk.pending]: state => {
  //     state.contacts.isLoading = true;
  //   },
  //   [getContactsThunk.fulfilled]: (state, { payload }) => {
  //     state.contacts.items = payload;
  //     state.contacts.isLoading = false;
  //   },
  //   [getContactsThunk.rejected]: state => {
  //     state.contacts.error = 'error';
  //   },
  //   [deleteContactsThunk.pending]: state => {
  //     state.contacts.isLoading = true;
  //   },
  //   [deleteContactsThunk.fulfilled]: (state, { payload }) => {
  //     state.contacts.items = state.contacts.items.filter(item => item.id !== payload);
  //     state.contacts.isLoading = false;
  //   },
  //   [deleteContactsThunk.rejected]: state => {
  //     state.contacts.error = 'error';
  //   },
  //   [addContactsThunk.fulfilled]: (state, { payload }) => {
  //       console.log(payload)
  //       state.contacts.items.push(payload);
  //       state.contacts.isLoading = false;
  //     },
  // },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
        state.contacts.isLoading = false;
      })
      .addCase(getContactsThunk.rejected, state => {
        state.contacts.error = 'error';
      })
      .addCase(addContactsThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.items.push(payload);
        state.contacts.isLoading = false;
      })
      .addCase(addContactsThunk.rejected, state => {
        state.contacts.error = 'error';
      })
      .addCase(deleteContactsThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = state.contacts.items.filter(
          item => item.id !== payload
        );
        state.contacts.isLoading = false;
      })
      .addCase(deleteContactsThunk.rejected, state => {
        state.contacts.error = 'error';
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
