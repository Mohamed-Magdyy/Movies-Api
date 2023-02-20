import React from 'react'
import axios from 'axios';
import joi from 'joi'
import {useNavigate} from 'react-router-dom' 
import { useState } from 'react';


export default function Login(props) {
let [error, setError] = useState('')
let [userError, setUserError] = useState([])
let [lode, setLode] = useState(false)
let navigate =useNavigate();
const [typee,setTypee]=useState('password')

const hendel=()=>{
  if(typee=='password'){
    setTypee('text')
  }else{
    setTypee('password')
  }
}


let [user, setUser] = useState({    
    email:'',
    password:'',
    })
    function getInputData(e){
      let myUser ={...user}
      myUser[e.target.name] = e.target.value;
      setUser(myUser)
    } 
    
    function valedateUser(user) {
      let schema = joi.object({
        email: joi
          .string()
          .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
        password: joi.string(),
      });
      return schema.validate(user, { abortEarly: false });
    }

    async function login(e){
      e.preventDefault()
     let validateRes = valedateUser(user);
    //  console.log(validateRes);
     if(validateRes.error){
      setUserError(validateRes.error.details)
      console.log(userError);
    
     }else{
      setLode(true)
      let {data} = await  axios.post("https://route-movies-api.vercel.app/signin",user)
      console.log(data);
      if(data.message == "success"){
        localStorage.setItem("userToken",data.token)
        navigate('/home') 
        props.setUseData(); 
      setLode(false)
          
    }else{
      setLode(false)
      setError(data.message)
    }
    }
    }
 
  return <>
<div className="container pt-2 ">
<form className='form-regs  p-2 p-md-5   m-auto pt-5 '>
<div className="text-regs  position-relative pb-3 d-flex justify-content-center"><h2><span className='text-danger'>Log</span>in</h2></div>
 <div className="form-floating mb-3 mt-5">
  <input onChange={getInputData} type="email" className="form-control" id="email" name='email' placeholder="name@example.com"/>
  <label htmlFor="email">Email Adrees</label>
  </div>
  <div className="form-floating mb-5 position-relative d-flex align-items-center">
  <input onChange={getInputData} type={typee} className="form-control" id="password" name='password' placeholder="name@example.com"/>
  <i className="shwoPass fa-regular fa-eye position-absolute end-0 pe-3"onClick={hendel}></i>
  <label htmlFor="password">Password</label>
  </div>
   
  <button className='btn btn-danger  mb-2 btn-large text-white ms-auto d-flex mt-1'onClick={login}>
  {lode?<i className="fa-solid fa-spinner fa-spin"></i>:"Login"}
  </button>
  {userError.map((err,index)=>(
  <div className='mt-2 alert alert-danger'key={index}>{err.message}</div>))}
  {error?<div className='alert alert-danger'>{error}</div>:''}

</form> 
</div>
  </>
  
}
