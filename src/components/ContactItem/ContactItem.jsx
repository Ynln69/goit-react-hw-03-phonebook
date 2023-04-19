import PropTypes from 'prop-types';
import { Items, ItemButton } from './ContactItem.styled';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <Items key={id}>
      {name}: {number}
      <ItemButton type="button" onClick={onDeleteContact}>
        Delete
      </ItemButton>
    </Items>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
