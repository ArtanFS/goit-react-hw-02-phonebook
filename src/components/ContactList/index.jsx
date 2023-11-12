import ContactListItem from '../ContactListItem';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(el => (
        <ContactListItem
          key={el.id}
          contacts={el}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
