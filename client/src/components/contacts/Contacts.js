import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) return <h4>Please add a contact.</h4>;

  return (
    <Fragment>
      {filtered !== null ? (
        filtered.length === 0 ? (
          <h4>No filtered item found.</h4>
        ) : (
          filtered.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        )
      ) : (
        contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))
      )}
    </Fragment>
  );
};

export default Contacts;
