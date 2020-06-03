import React from 'react';
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
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
      </SelectComponent>
    </>
  );
}
