import React from 'react'
import { Link } from 'react-router-dom'
// import { useState } from 'react';

export default function NavBar(props)  {
  const onSearch=(word)=>{
getSearch(word)
  }
  return <>
<nav id='mainNav' className="navbar navbar-expand-lg  bg-body-tertiary navbar-dark  pt-md-0 pb-5  mb-5  ">
  <div className="nav-zx container-fluid position-fixed mt-2 pt-5 pb-md-2 mb-3 mb-md-0  shadow   ">
  <Link className="navbar-brand  mb-5 mb-md-0 fw-bold fa-2xl mt-5 mt-md-0  pb-md-2 pt-md-2"  to="/" >IM<span className='text-danger'>DB </span></Link>
    <button className="navbar-toggler  position-fixed end-0 top-0 mt-2 me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon  "></span>
    </button>
    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mt-1 mb-lg-0   ">
    {props.useData?<>
      <li className="privs nav-item ">
          <Link className="nav-link " to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="about">About</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link " to="movies">Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="People">People</Link>
        </li>

    </>:''}

      </ul>
    </div>
    <div className="medeia d-flex mt-5 mt-md-0 mb-5 mb-md-0 ">
     <i className='face mx-1 mx-md-2 fa-brands fa-facebook-f'></i>
     <i className="insta mx-2 mx-md-2 fa-brands fa-instagram"></i>
     <i className="twit mx-1 mx-md-2 fa-brands fa-twitter"></i>
     <i className="you mx-2 mx-md-2 fa-brands fa-youtube"></i>
    </div>
    <ul className="navbar-nav  mt-4 me-md-5 mt-md-0  mb-2  mb-lg-0">
    {props.useData?(
  
        <li className="priv nav-item">
        <span className="leg nav-link " onClick={props.logOut}  >Logout</span>
        </li>
           ):( 
        <>
{""} 
   <li className="nav-item mt-2 mt-md-0 ">
          <Link className="nav-link" to="register">Register</Link>
     </li>
  <li className="nav-item">
          <Link className="nav-link " to="login">Login</Link>
      </li>
      <form class="d-flex" role="search">
        <input onChange={(e)=> onSearch(e.target.value)} class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
        </> 
   )}
  </ul>
  </div>
</nav>
{/* <div className='top-icon end-0 bottom-0 position-fixed pe-2 pe-md-3 pb-4 '>
<a href="#"><i className="fa-solid fa-arrow-up p-3"></i></a>
</div> */}

  </>
  
}
