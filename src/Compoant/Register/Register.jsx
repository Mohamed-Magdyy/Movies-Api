
import React from 'react'
import {useState} from 'react'
import axios from 'axios';
import joi from 'joi'
import {useNavigate} from 'react-router-dom'



export default function Register() {
let [error, setError] = useState('')
let [userError, setUserError] = useState([])
let navigate =useNavigate();
let [lode, setLode] = useState(false)

let [user, setUser] = useState({    
first_name:'',
last_name:'',
email:'',
password:'',
// age:0
})
const [typee,setTypee]=useState('password')

const hendel=()=>{
  if(typee=='password'){
    setTypee('text')
  }else{
    setTypee('password')
  }
}

function getInputData(e){
  let myUser ={...user}
  myUser[e.target.name] = e.target.value;
  setUser(myUser)
}

async function register(e){
  e.preventDefault()
 let validateRes = valedateUser(user);
//  console.log(validateRes);
 if(validateRes.error){
  setUserError(validateRes.error.details)
  console.log(userError);

 }else{
  setLode(true)
  let {data} = await  axios.post("https://route-movies-api.vercel.app/signup",user)
  console.log(data);
  if(data.message == "success"){
    localStorage.setItem("userToken",data.token)
  navigate('/login') 

  setLode(false)
      
}else{
  setLode(false)
  setError(data.message)
}
}
}


function valedateUser(user){
  let schema= joi.object({
    first_name:joi.string().alphanum().required().min(3).max(10),
    last_name:joi.string().alphanum().required().min(3).max(10),
    email:joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password:joi.string(),
    // age:joi.number().min(16).max(100)
  });
  return schema.validate(user,{abortEarly:false})

}
 

  return(
   <>
  <div className="container pt-2 pt-md-0">
  <form className='form-regs p-2 p-md-5 m-auto'>
  <div className="text-regs  position-relative pb-3 d-flex justify-content-center"><h2><span className='text-danger'>Reg</span>ister</h2></div>
  <div className="form-floating mb-3 mt-4">
  <input onChange={getInputData} type="text" className="form-control" id="first_name" name='first_name' placeholder="name@example.com"/>
  <label htmlFor="first_name">First Name</label>
  </div>
  <div className="form-floating mb-3">
  <input onChange={getInputData} type="text" className="form-control" id="last_name" name='last_name' placeholder="name@example.com"/>
  <label htmlFor="last_name">Last Name</label>
  </div><div className="form-floating mb-3">
  <input onChange={getInputData} type="email" className="form-control" id="email" name='email' placeholder="name@example.com"/>
  <label htmlFor="email">Email Adrees</label>
  </div>
  <div className="form-floating mb-5 position-relative d-flex align-items-center">
  <input onChange={getInputData} type={typee} className="form-control" id="password" name='password' placeholder="name@example.com"/>
  <i className="shwoPass fa-regular fa-eye position-absolute end-0 pe-3"onClick={hendel}></i>
  <label htmlFor="password">Password</label>
  </div>
  {/* <div className="form-floating mb-3">
  <input onChange={getInputData} type="number" className="form-control" id="age" name='age' placeholder="name@example.com"/>
  <label htmlFor="age">Age</label>
  </div> */}
  <button className='btn btn-danger text-white ms-auto d-flex mt-1 mb-2 mb-md-0'onClick={register}>
  {lode?<i className="fa-solid fa-spinner fa-spin"></i>:"Register"}
  </button>
  {userError.map((err,index)=>(<div className='mt-2 alert alert-danger'key={index}>{err.message}</div>))}
  {error?<div className='alert alert-danger'>{error}</div>:''}
</form> 
</div>



</>

  )
}
