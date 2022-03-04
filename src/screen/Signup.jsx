import React,{useState} from "react";
import { auth,db } from "../configuration/firebase";
import ButtonCom from "../component/button";
import InputCom from "../component/input";


const Signup=()=>{
    const [state,setState] = useState({email:"",password:""})
   
    const signup = ()=>{
        const {email,password} = state
        auth.createUserWithEmailAndPassword(email,password)
        .then((success)=>{
            db.ref('/').child('users').push({email,password})
            console.log(success,'success')
        }).catch((e)=>{
            console.log(e)
        })
    }


    return(
      <div>
 <div>
<h1>Sign Up</h1>
     
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
      <ButtonCom btnTxt="Signup" btnFunc={signup}/>
  </div>;
      </div>
    )
}

export default Signup