import React from 'react';

import { CustomButtonDiv } from './custom-button.styles';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonDiv {...props}>{children}</CustomButtonDiv>
);

export default CustomButton;
