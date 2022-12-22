import { Spiner } from 'components/Spiner/Spiner';
import { ListBox } from './ContactList.styled';

import { useDispatch, useSelector } from 'react-redux';
// import { deleteMyContact, getContacts, getFilter } from '../../redux';
import { useGetContactsQuery } from 'redux/sliceContacts';
import { getFilter } from 'redux/sliceFilter';
import { ContactsItems } from 'components/ContactsItems/ContactsItems';

// import { deleteMyContact, getContacts } from 'redux/sliceContacts';
// import { getFilter } from 'redux/sliceFilter';

export const ContactList = () => {
  const dispatch = useDispatch();
  // Redux отримуєм з сховища дані
  const { data: contacts, isFetching } = useGetContactsQuery();
  // const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  // const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  console.log(contacts);

  // Ф-ція видалення
  // const deleteContact = idContact => {
  //   dispatch(deleteMyContact(idContact));
  // };

  // фільтруємо контакти, filter нормалізуємо,
  //  щоб на кажній ітерації не викликати ловерКейс

  // const findContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const filteredContacts = findContacts();

  return (
    <ListBox>
      {isFetching && <Spiner />}
      <ul>
        {contacts &&
          contacts.map(contact => (
            <ContactsItems key={contact.id} {...contact} />
          ))}
      </ul>
    </ListBox>
  );
};
