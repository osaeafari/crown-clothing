import React from "react";
import { connect } from "react-redux";

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { 
  googleSignInStart,
  emailSignInStart 
} from "../../redux/user/user.actions";

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './sign-in.styles';

class SignIn extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSumit = async event => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };

  handleChange = event => {
    const {value, name} = event.target;

    this.setState({ [name]: value })
  };

  render() {
    const { googleSignInStart } = this.props;
    return(
      <SignInContainer>
        <SignInTitle> I already have an account</SignInTitle>
        <span>Sign in with our email and password</span>


        <form onSubmit={this.handleSumit}>
          <FormInput 
            name='email' 
            type='email' 
            value={this.state.email} 
            handleChange={this.handleChange}
            label='email'
            required
          /> 
       
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <ButtonsBarContainer>
            <CustomButton type='submit'> Sign In </CustomButton>
            <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn> 
              Sign in with Google
            </CustomButton>
          </ButtonsBarContainer>
          </form>
      </SignInContainer>
    );
  }

}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => 
    dispatch (emailSignInStart({email, password}))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);