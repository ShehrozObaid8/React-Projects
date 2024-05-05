import React, { useState } from 'react';
import { signinUser } from '../Config/firebase';
import './login.css';
import { Link } from 'react-router-dom';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const loginClick = async () => {

        await fetch('https://joyous-bracelet-colt.cyclic.app/olxAds/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
        
        .then(res => res.json())
        try {
                // (res => console.log(res))
                alert("User Logged In Successfully")
        }
        catch (e) {
            console.log('e --->', e)
        alert(e.message)
        }

        // console.log("chala", logging);
    }

    return (
        <div className="login-container">
            <fieldset>
                <legend>Sign-In</legend>
                <div>
                    <input
                        value={email}
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
                    <button onClick={loginClick}>Log In</button>
                    <p>if you dont have an account<Link to={'/signup'}> Click here</Link></p>
                </div>
            </fieldset>
        </div>
    );
}
