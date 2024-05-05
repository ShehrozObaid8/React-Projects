import React, { useState } from 'react';
import './signin.css';
import { googlesignin, signinFb } from '../Config/firebase';
// import { createContext } from 'react';


export default function Login() {
    const [amEmail, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginClick = () => {
        const logging = signinFb(amEmail, password);
        console.log("chala", logging);
    }

    const signinGoogle = () => {
        const googlesign = googlesignin()
    }

    return (
        <div className="login-container">
            <fieldset>
                <legend>Sign-In</legend>
                <div>
                    <input
                        value={amEmail}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter your Email'
                        type="email"
                    />
                </div>
                <div>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Enter your Password'
                        type="password"
                    />
                </div>
                <div>
                    <button id='btn-100' onClick={loginClick}>Log In with Facebook</button>
                    <button id='signin google' onClick={signinGoogle}>Login with Google</button>
                    <p>if you dont have an account Click here</p>
                </div>
            </fieldset>
        </div>
    );
}
