const ContactListItem = ({ contacts, deleteContact }) => {
  return (
    <li>
      <div>
        <p>
          {contacts.name}: {contacts.number}
        </p>
        <button onClick={() => deleteContact(contacts.id)}>Delete</button>
      </div>
    </li>
  );
};

export default ContactListItem;
