import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...inputProps }) => (
  <div className='form-group mt-4'>
    <input className='form-control px-0' onChange={handleChange} {...inputProps} />
    {label ? <label className={`${inputProps.value.length ? 'shrink' : ''} form-label`}>{label}</label> : null}
  </div>
);

export default FormInput;
