import React, { useState } from 'react';
import css from './Form.module.css';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContactsThunk } from 'components/redux/contacts.thunk';
import { contactsSelector } from 'components/redux/selectors';

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(contactsSelector)

  const inputNameId = nanoid();
  const inputNumberId = nanoid();

  const dispath = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setPhone(value);
        break;
      default:
    }
  };

  const formSubmit = e => {
    e.preventDefault();
    const formData = { name, phone, id: nanoid() };
    const normalizedName = formData.name.toLowerCase();
    if(contacts.find(contact=>contact.name.toLowerCase()===normalizedName)){
      return alert('adsgfbdghjgdsffcghj')
    }
    formReset();
    dispath(addContactsThunk(formData));
  };

  const formReset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={formSubmit} className={css.form}>
      <label htmlFor={inputNameId}>
        <span className={css.inputLabel}>Name</span>
        <input
          className={css.formInput}
          id={inputNameId}
          onChange={handleInputChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label htmlFor={inputNumberId}>
        <span className={css.inputLabel}>Tel </span>
        <input
          className={css.formInput}
          id={inputNumberId}
          onChange={handleInputChange}
          value={phone}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.addBtn}>
        Add contact
      </button>
    </form>
  );
};



export default Form;
