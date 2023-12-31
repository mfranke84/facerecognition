import React from "react";
import Loading from "../Loading/loading";

class SignInForm extends React.Component {
    constructor() {
        super();
        this.state = {
            signInEmail: '',
            sigInPassword: '', 
        }
    }
    
    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({sigInPassword: event.target.value})
    }

    onSubmitSignIn= () => {
        this.props.onRouteChange('loading');
        fetch('https://facerecognitionbrain-api.azurewebsites.net/signin', {
            method: 'POST',
            headers: { 
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.sigInPassword
            })
        })
        .then( response => response.json())
        .then( response => {
            if (response.id){
                this.props.loadUser(response);
                this.props.onRouteChange('home');
            } else {
                this.props.onRouteChange('signIn')
                this.props.showLoginFail(response);
            }
            
            
        })
        
        
    }

    render(){
        const {onRouteChange, errorLogin, route} = this.props;
        return (
            
            <div className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l center shadow-5">
                <div className="pa4 black-80 w-70">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input 
                                    onChange={this.onEmailChange}
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input 
                                    onChange={this.onPasswordChange}
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                            </div>
                            <div className="red w-100">
                                {
                                    route === 'signIn'
                                    ? <p>{errorLogin}</p>
                                    : <Loading />
                                }
                            </div>
                        </fieldset>
                        <div>
                            <input onClick={this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
                        </div>
                        <div className="lh-copy mt3">
                            <p onClick={()=> onRouteChange('register')} href="#0" className="f6 link dim black db pointer">Register</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default SignInForm