import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './signin.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      email: '',
      password: '',
    });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className=''>
        <h3>I already have an account</h3>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit} className='pt-3'>
          <FormInput
            type='email'
            name='email'
            label='Email'
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type='password'
            name='password'
            label='Password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

          <div className='d-flex flex-wrap'>
            <CustomButton type='submit' className='btn-primary btn-lg'>
              Sign In
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
