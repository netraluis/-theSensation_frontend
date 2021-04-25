import React, { useState } from "react";
import Button from '../button/button'
const SignUp = (props) => {
  
    const [userCredentials, setCredentials] = useState({email: '', password: '', name:''})
  
    const handleChange = (event) => {
      const { value, name } = event.target;
      setCredentials({...userCredentials, [name]: value });
    };
    const {email, password, name} = userCredentials
    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(localStorage.getItem('token'))
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem('token')} ` },
        body: JSON.stringify({
            email,
            password,
            name
        }),
      };
      fetch(
        `${process.env.REACT_APP_API_URL}/api/v1/users/signup`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          console.log({role:data});
        //   if(data.data.user.role==='admin') props.setIsAdmin(true)
        //   localStorage.setItem('token', data.token);
        }).catch(err=>console.log(err));
    };
  
    return (
      <div className="sign-in">
        <h2>Añadir nuevo usuario</h2>
  
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            value={userCredentials.name}
            onChange={handleChange}
            placeholder='name'
            required
          />

          <input
            name="email"
            type="email"
            value={userCredentials.email}
            onChange={handleChange}
            placeholder='email'
            required
          />
  
          <input
            name="password"
            type="password"
            value={userCredentials.password}
            onChange={handleChange}
            placeholder='password'
            required
          />
  
          <div className="buttons">
            <Button type="submit">Añadir</Button>
          </div>
        </form>
      </div>
    );
  };

  export default SignUp