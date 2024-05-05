import React, { useState } from 'react';
import { signupUser } from '../Config/firebase';
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: Number,
  })
  console.log(user)


  let name, value
  const handleInput = (e) => {
    value = e.target.value
    name = e.target.name
    console.log(value, name)
    setUser({ ...user, [name]: value })
  }


  const PostClick = async () => {
    const { name, password, email, phoneNumber } = user
    if (name === "" || password === "" || email === "" || phoneNumber === Number) {
      alert("Please fill all the field")
    }

    fetch('https://joyous-bracelet-colt.cyclic.app/olxAds/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        phoneNumber: phoneNumber
      })
    }).then(res => res.json())
      .then(res => alert("User Register Successfully"))
      .catch(e => alert(e.message))

  }
  return (

    <div className="signup-container">
      <h1>Signup page</h1>
      <div>
        <input
          value={user.name}
          name='name'
          onChange={handleInput}
          placeholder='Username'
          type="text"
          required
        />
      </div>
      <div>
        <input
          value={user.email}
          name='email'
          onChange={handleInput}
          placeholder='Email'
          type="email"
          required
        />
      </div>
      <div>
        <input
          value={user.password}
          name='password'
          onChange={handleInput}
          placeholder='Password'
          type="password"
          required
        />
      </div>
      <div>
        <input
          value={user.phoneNumber}
          name='phoneNumber'
          onChange={handleInput}
          placeholder='Phone Number'
          type="number"
          required
        />
      </div>
      <div>
        <button onClick={PostClick}>Sign up</button>
        <p>if you already have an account <Link to={'/login'}>Click here</Link></p>
      </div>
    </div>
  );
}

export default Signup;
