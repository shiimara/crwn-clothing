import React from 'react';

import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';



class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            email: '',
            password: ''
        }


    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })

    }
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {


        return (
            <div className="sign-in">
                <h2>
                    i have an account
                </h2>
                <spna> sign in with your email and passwd</spna>
                <form onSubmit={this.handleSubmit}>

                    <FormInput
                        name='email'
                        value={this.state.email}
                        label="email"
                        handleChange={this.handleChange}
                        required />

                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        label="password"
                        handleChange={this.handleChange}
                        required
                    />

                    <div  className='buttons'>
                    <CustomButton type='submit' > Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with google
                    </CustomButton>

                    </div>

                 
                </form>
            </div>
        )
    }

}





export default SignIn;