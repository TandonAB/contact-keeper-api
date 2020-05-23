import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered, loading } = contactContext;

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please add a contact.</h4>;
  }

  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null ? (
          filtered.length === 0 ? (
            <h4>No match found.</h4>
          ) : (
            filtered.map((contact) => (
              <CSSTransition key={contact.id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          )
        ) : (
          contacts.map((contact) => (
            <CSSTransition key={contact.id} timeout={500} classNames="item">
              <ContactItem contact={contact} />
            </CSSTransition>
          ))
        )}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
