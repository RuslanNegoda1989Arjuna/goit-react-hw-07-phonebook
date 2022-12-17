import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './';

import { contactsReducer } from './sliceContacts';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
