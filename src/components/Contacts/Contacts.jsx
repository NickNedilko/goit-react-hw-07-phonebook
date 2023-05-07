import React, { useEffect } from 'react';

import css from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContactsThunk,
  deleteContactsThunk,
} from 'components/redux/contacts.thunk';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  console.log(contacts)

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <ul className={css.contactsList}>
      {contacts?.map(({ name, id, phone }) => {
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
