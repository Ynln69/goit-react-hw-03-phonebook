import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

const FilterContacts = ({ value, onChangeFind }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput type="text" value={value} onChange={onChangeFind} />
    </FilterLabel>
  );
};

FilterContacts.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFind: PropTypes.func.isRequired,
};

export default FilterContacts;
