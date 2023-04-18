import PropTypes from 'prop-types';
import { ListOfContact } from './ContactsList.styled';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ListOfContact>
      <ContactItem contacts={contacts} onDeleteContact={onDeleteContact} />
    </ListOfContact>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactsList;
