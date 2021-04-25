import React, { useState } from "react";
import StuffCalendar from "../../components/stuff-calendar/stuffCalendar";
import SignIn from "../../components/sign-in/signIn";
import SignUp from "../../components/sign-up/signUp";
import ChangePassword from "../../components/change-password/changePassword";
import "./stuff.css";

const Stuff = () => {
  const [recharge, triggerRecharge] = useState(false);
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("admin") === "true");
  const [isLogIn, setIsLogIn] = useState(
    !(
      !localStorage.getItem("token") || localStorage.getItem("token") === "null"
    )
  );

  const [showAddUser, setShowAddUser] = useState(false)
  const [changePassword, setChangePassword] = useState(false)

  return (
    <>
      <ul className="stuff-header">
        <li style={{  display: `${isAdmin ? "" : "none"}` }} onClick={()=>{
          setShowAddUser(!showAddUser)
          setChangePassword(false)
        }}>Añadir usuario</li>
        <li style={{  display: `${isLogIn ? "" : "none"}` }} onClick={()=>{
          setChangePassword(!changePassword)
          setShowAddUser(false)
        }}>Cambiar contraseña</li>
        <li style={{  display: `${isLogIn ? "" : "none"}` }} onClick={()=>{
          localStorage.setItem('admin', false);
          localStorage.setItem('token', null);
          setIsLogIn(false)
        }}>Log out</li>
      </ul>
      <div style={{ height: 1000, display: `${isLogIn ? "" : "none"}` }}>
        <StuffCalendar
          setIsLogIn={setIsLogIn}
          triggerRecharge={triggerRecharge}
          recharge={recharge}
          setIsAdmin={setIsAdmin}
        />
      </div>
      <div>
        <div
          className="stuff-center"
          style={{ display: `${isLogIn ? "none" : ""}` }}
        >
          <SignIn
            setIsAdmin={setIsAdmin}
            setIsLogIn={setIsLogIn}
            triggerRecharge={triggerRecharge}
            recharge={recharge}
          />
        </div>
        <div className="stuff-center stuff-signUp" style={{ display: `${isLogIn && showAddUser ? "" : "none"}` }}>
          <SignUp setIsLogIn={setIsLogIn} />
        </div>
        <div className="stuff-center stuff-changePassword" style={{ display: `${isLogIn && changePassword ? "" : "none"}` }}>
          <ChangePassword setIsLogIn={setIsLogIn} />
        </div>
      </div>
    </>
  );
};

export default Stuff;
