import React, { useState } from "react";
import Button from '../button/button'
const ChangePassword = (props) => {
  
    const [userCredentials, setCredentials] = useState({passwordCurrent: '', newPassword: ''})
    const [passwordError, setPasswordError] = useState(false)
    const [newPasswordError, setNewPasswordError] = useState(false)
  
    const handleChange = (event) => {
      const { value, name } = event.target;
      setCredentials({...userCredentials, [name]: value });
    };
    const {passwordCurrent, newPassword} = userCredentials
    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(localStorage.getItem('token'))
      const requestOptions = {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem('token')} ` },
        body: JSON.stringify({
            passwordCurrent,
            newPassword,
        }),
      };
      fetch(
        `${process.env.REACT_APP_API_URL}/api/v1/users/updateMyPassword`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          console.log({role:data});
          if(data.status==='fail'){
            props.setIsLogIn(false)
          }
          if(data.message==='Incorrect password'){
              setPasswordError(true) 
              return setNewPasswordError(false)
            }
          if(data.message==='User validation failed: password: password must have more or equal to 5'){
              setNewPasswordError(true)
              return setPasswordError(false) 
            }
            setNewPasswordError(false)
            setPasswordError(false) 
            setCredentials({passwordCurrent: '', newPassword: ''})
        }).catch(err=>console.log({err}));
    };
  
    return (
      <div className="sign-in">
        <h2>Cambiar contraseña</h2>
  
        <form onSubmit={handleSubmit}>

          <input
            name="passwordCurrent"
            type="password"
            value={userCredentials.passwordCurrent}
            onChange={handleChange}
            placeholder='contraseña actual'
            required
          />

          <div style={{color:'red', display:`${passwordError?'': 'none'}`}}> contraseña incorrecta</div>
  
          <input
            name="newPassword"
            type="password"
            value={userCredentials.newPassword}
            onChange={handleChange}
            placeholder='nueva constraseña'
            required
          />

          <div style={{color:'red', display:`${newPasswordError?'': 'none'}`}}> La contraseña debe de contener como mínimo 8 caracteres</div>
  
          <div className="buttons">
            <Button type="submit">Cambiar</Button>
          </div>
        </form>
      </div>
    );
  };

  export default ChangePassword