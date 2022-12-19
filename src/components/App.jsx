import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts, useGetContactsQuery } from 'redux/sliceContacts';
import { Empty, PhonebookContainer, Title, TitleCont } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';

export const App = () => {
  const { data: contacts } = useGetContactsQuery();
  // const contacts = useSelector(getContacts);
  return (
    <div>
      <Title>PhoneBook</Title>

      <PhonebookContainer>
        <PhonebookForm />
      </PhonebookContainer>
      <TitleCont>Contacts</TitleCont>
      <Filter />
      {contacts.length === 0 ? <Empty>empty</Empty> : <ContactList />}
    </div>
  );
};
