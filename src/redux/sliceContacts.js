import { createSlice, nanoid } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://639d73671ec9c6657baa7b37.mockapi.io/api/v1/',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `contacts`,
    }),
    createContact: builder.mutation({
      query: newContact => ({
        url: 'contacts',
        method: 'POST',
        body: newContact,
      }),
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `contacts/${contactId}`,
        method: 'DELETE',
      }),
    }),
  }),
});
export const { useGetContactsQuery, useDeleteContactMutation } = contactsApi;

// export const { addMyContact, deleteMyContact } = contactsSlice.actions;

// export const contactsReducer = contactsSlice.reducer;

// export const getContacts = state => state.contacts;
// name: 'contacts',

// initialState: contactsInitialState,

// reducers: {
//   addMyContact(state, action) {
//     state.unshift(action.payload);
//   },
//   deleteMyContact(state, action) {
//     return state.filter(el => el.id !== action.payload);
//   },
// },
