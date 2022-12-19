import { createSlice, nanoid } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const contactsInitialState = [
//   { id: nanoid(5), name: 'Руслан Негода', number: '+380-93-494-08-30' },
//   { id: nanoid(5), name: 'Hermione Kline', number: '645-17-19' },
//   { id: nanoid(5), name: 'Eden Clements', number: '443-89-12' },
//   { id: nanoid(5), name: 'Annie Copeland', number: '459-12-56' },
// ];

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://639d73671ec9c6657baa7b37.mockapi.io/api/v1/',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `contacts/`,
    }),
  }),
});
export const { useGetContactsQuery } = contactsApi;

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
