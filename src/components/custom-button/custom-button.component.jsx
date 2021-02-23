import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, ...buttonProps }) => (
  <button {...buttonProps} className={`${buttonProps.className} btn`}>
    {children}
  </button>
);

export default CustomButton;
