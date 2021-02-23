import React from 'react';
import SignIn from '../../components/signin/signin.component';

import './signin-and-register.styles.scss';

const SignInRegisterPage = () => (
  <div className='row'>
    <div className='col-12 col-md-6'>
      <SignIn />
    </div>
    <div className='col-12 col-md-6'>Register</div>
  </div>
);

export default SignInRegisterPage;
