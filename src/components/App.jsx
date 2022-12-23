import React from 'react';
import { Toaster } from 'react-hot-toast';

import { PhonebookContainer, Title, TitleCont } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';

export const App = () => {
  return (
    <div>
      <Title>PhoneBook</Title>

      <PhonebookContainer>
        <PhonebookForm />
      </PhonebookContainer>
      <TitleCont>Contacts</TitleCont>
      <Filter />
      <ContactList />
      <Toaster />
    </div>
  );
};
