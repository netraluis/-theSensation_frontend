import React, { useState } from "react";
import Button from '../button/button'
const SignIn = (props) => {
  
    const [userCredentials, setCredentials] = useState({email: '', password: ''})
    const [error, setError] = useState(false)

    const handleChange = (event) => {
      const { value, name } = event.target;
      setCredentials({...userCredentials, [name]: value });
    };
    const {email, password} = userCredentials
    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log('hoal submit')
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email,
            password
        }),
      };
      fetch(
        `${process.env.REACT_APP_API_URL}/api/v1/users/login`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
            if(data.status==='success'){
                if(data.data.user.role==='admin') {
                    props.setIsAdmin(true)
                    localStorage.setItem('admin', true);
                }
                localStorage.setItem('token', data.token);
                props.setIsLogIn(true)
                return props.triggerRecharge(!props.recharge)
            }
            if (data.status==='error'){
                return setError(true)
            
            }
        }).catch(err=>console.log(err));
    };
  
    return (
      <div className="sign-in">
        <h2>Log In</h2>
  
        <form onSubmit={handleSubmit}>
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

          <div style={{color:'red', display:`${error?'': 'none'}`}}> Email o contraseña incorrectos</div>
  
          <div className="buttons">
            <Button type="submit">entrar</Button>
          </div>
        </form>
      </div>
    );
  };

  export default SignIn