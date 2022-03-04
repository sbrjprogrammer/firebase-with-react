import React, { useState } from "react";
import InputCom from "../component/input";
import ButtonCom from "../component/button";
import { auth } from "../configuration/firebase";

const Login = () => {
  let [state, setState] = useState({email:"",password:""});

  const login=()=>{
    const {email,password}=state
    auth.signInWithEmailAndPassword(email,password)
  }
  return (
    <div>
        <h1>login form</h1>
    email  <InputCom
      inpVal={state.email}
        type="text"
        placeholder="enter email"
        onchange={(val) => {
          setState({ ...state, email: val });
        }}
      />
     password <InputCom
        type="password"
        placeholder="enter password"
        onchange={(val) => {
          setState({ ...state, password: val });
        }}
      />
       <ButtonCom btnTxt="Login" btnFunc={login}/>
    </div>
  );
};

export default Login;
