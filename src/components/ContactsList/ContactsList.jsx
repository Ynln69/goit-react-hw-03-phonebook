import PropTypes from 'prop-types';
import { ListOfContact } from './ContactsList.styled';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ListOfContact>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteContact={() => onDeleteContact(contact.id)}
        />
      ))}
    </ListOfContact>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
