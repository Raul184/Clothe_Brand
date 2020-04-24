import React from 'react';

import {
  GroupDiv,
  FormInputDiv,
  FormInputLabel
} from './form-input.styles';

const FormInput = ({ handleChange, label, value , ...props }) => (
  <GroupDiv>
    <FormInputDiv onChange={handleChange}  {...props} />
    {label ? (
      <FormInputLabel className={value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupDiv>
);

export default FormInput;
