import { ContactElement } from 'components/ContactElemet/ContactElement';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactElement
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={onDeleteContact}
          />
        );
      })}
    </List>
  );
};
