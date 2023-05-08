import React, { useEffect } from 'react';

import css from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContactsThunk,
  deleteContactsThunk,
} from 'components/redux/contacts.thunk';
import { contactsSelector, filterSelector } from 'components/redux/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);
  

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const filterContact = () => {
    if (filter === ''){
      return contacts;
    }
     const data = contacts?.filter(contact =>
      contact.name.toLowerCase().includes(filter?.toLowerCase())
      );
      return data;
    };
    
   const filterContacts = filterContact();
    


  return (
    <ul className={css.contactsList}>
      {filterContacts?.map(({ name, id, phone }) => {
        return (
          <li key={id} className={css.item}>
            <span>
              {name}: {phone}
            </span>
            <button
              className={css.deleteBtn}
              type="button"
              onClick={() => dispatch(deleteContactsThunk(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Contacts;
