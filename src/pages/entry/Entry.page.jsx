import React, { useState } from 'react'
import './entry.style.css'

import Login from '../../components/login/Login.comp'
import PassReset from '../../components/passwordReset/Pass,reset.comp';

const Entry  = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [frmLoad, setFrmLoad] = useState('Login')

  const handleOnChange=(e)=>{
    const {name, value} = e.target;
    switch(name){
      case "email":
        setEmail(value)
        break;
      case 'password':
        setPassword(value)
        break;
  
      default:
        break;
    }
  }

  const handleOnSubmit= (e) =>{
    e.preventDefault();
    if(!email || !password){
      return alert("please fill up email and ppassword");
    }
    console.log(email, password)
  }

  const handleOnResetSubmit= (e) =>{
    e.preventDefault();
    if(!email){
      return alert("please fill up email");
    }
    console.log(email)
  }

  const formSwitcher = formtype=>{
    setFrmLoad(formtype);
  }
    return (
        <div className="entry-page bg-info">
      <div className='card form-box'>
        {frmLoad==="Login" && 
        ( <Login 
          handleOnChange = {handleOnChange}
          handleOnSubmit = {handleOnSubmit}
          formSwitcher = {formSwitcher}
          email={email}
          pass={password}
          />)}
        {frmLoad ==="Reset" && (
          <PassReset 
         handleOnChange = {handleOnChange}
         handleOnResetSubmit = {handleOnResetSubmit}
         formSwitcher = {formSwitcher}
         email={email}
        
         />
        )}
          
      </div>

        </div>
    )
}

export default Entry;

