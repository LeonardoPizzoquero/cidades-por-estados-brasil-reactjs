import React from 'react';
import PropTypes from 'prop-types';
import { SelectComponent, Label } from './styles';

export default function Select({ options, label, id, firstOption, ...rest }) {
  return (
    <>
      {label && <Label htmlFor={id}>{label}</Label>}
      <SelectComponent id={id} {...rest}>
        {firstOption && <option value={firstOption}>{firstOption}</option>}
        {options.length > 0 &&
          options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            );
          })}
      </SelectComponent>
    </>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  label: PropTypes.string,
  id: PropTypes.string,
  firstOption: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Select.defaultProps = {
  options: [],
  label: '',
  id: '',
  firstOption: '',
};
