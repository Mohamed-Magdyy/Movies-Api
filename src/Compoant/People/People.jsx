import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery'
import Footer from '../Footer/Footer';




export default function People() {
const  [allperson,setalPerson] =useState([]);
const [allperson2,setalPerson2] =useState([]);
const [Lodingg,setLoding] =useState(false);

$(document).ready(function(){
  $('.spinner').fadeOut(2000,function(){
  })
})

const KEY="418116c98be1388060b54ec449ed82b1"
const baseUrl="https://image.tmdb.org/t/p/w500/";  




async function getPerson(){
let {data} = await axios.get("https://api.themoviedb.org/3/person/popular?api_key=418116c98be1388060b54ec449ed82b1&language=en-US&page=3")
  // console.log(data);
  setalPerson(data.results.splice(0,16));
  console.log(data);
   setLoding(true)

}
async function getPerson2(){
  let {data} = await axios.get("https://api.themoviedb.org/3/person/popular?api_key=418116c98be1388060b54ec449ed82b1&language=en-US&page=6")
    // console.log(data);
    setalPerson2(data.results);
    console.log(data);
  }
  useEffect(()=> {
    getPerson()
    getPerson2()


  },[])


  return<>
  <div className="spinner">
  <div className="rect1"></div>
  <div className="rect2"></div>
  <div className="rect3"></div>
  <div className="rect4"></div>
  <div className="rect5"></div>
</div>
<div className='top-icon end-0 bottom-0 position-fixed pe-2 pe-md-3 pb-4 '>
<a href="#"><i className="fa-solid fa-arrow-up p-3"></i></a>
</div>
    <div className="container">
     <div className="row mb-5 ">
      <div className="col-md-4 align-items-center d-flex mt-5 ">
        <div className="hgit position-relative mt-md-0 mb-5 mb-md-5  mt-5 ">
        <h2 className='w-100 pb-3'>Most popular actors</h2>
      </div>
      </div>
     {Lodingg ?(allperson.map((person,index)=>(
      <div className="lin col-md-2 col-sm-6 " key={index}>
    <Link  className='del ' to={"/Actor/"+person.id}>
       <div className="item position-relative ">
       <div className="img-pe   position-relative d-flex justify-content-center align-items-center ">
       <div className="titl-act position-absolute d-flex align-items-center ">
        <h6>Click For <h6 className='text-danger fw-bold'>See More</h6></h6>
       </div>
       {person.profile_path === null?<div className="bad-rec text-center "><i className="fa-regular fa-face-frown"></i><h6 className='pb-5 pt-3'>Sorry to upload the image</h6></div>:<img src={baseUrl+person.profile_path} className='w-100' alt="" />}
       {/* <img src={baseUrl+person.profile_path} className='w-100' alt="" /> */}
       <div className="heart text-center  position-absolute ps-2 pb-2 d-flex "><i className="fa-solid fa-heart"></i>
       <h5 className='ms-2 pb-md-0 text-white '>{person.popularity}</h5>
       </div>
       </div>
       <div className="bgg pt-3  mb-5">
       <h5 className='pb-3'> <i className=" film m-1 mt-0 fa-solid fa-user"></i> {person.name.substr(0,15)}</h5> 
        {/* <h5 className='pb-2'><i className="film m-1 mt-0 fa-solid fa-film"></i>  {person.known_for_department}</h5> */}
       </div>
      </div>
      </Link>
      </div>
    ))):   (
      <p></p>
    // <div className='loding'><i className=" fa-solid fa-spinner fa-spin w-100"></i></div> 
    )}
    </div>
     <div className="row mb-5 ">
    <div className="col-md-4 align-items-center d-flex">
        <div className="hgit position-relative mt-md-0  mb-5 mb-md-5 mt-5 ">
        <h2 className='w-100 pb-3'>More Most popular<br/> actors</h2>
      </div>
      </div>
     {allperson2.map((person,index)=>(
      <div className="lin col-md-2 col-sm-6" key={index}>
    <Link  className='del' to={"/Actor/"+person.id}>
       <div className="item position-relative">
       <div className="img-pe position-relative d-flex justify-content-center align-items-center ">
       <div className="titl-act position-absolute d-flex align-items-center ">
        <h6>Click For <h6 className='text-danger fw-bold'>See More</h6></h6>
       </div>
       {person.profile_path === null?<div className="bad-rec text-center "><i className="fa-regular fa-face-frown"></i><h6 className='pb-5 pt-3'>Sorry to upload the image</h6></div>:<img src={baseUrl+person.profile_path} className='w-100' alt="" />}
       {/* <img src={baseUrl+person.profile_path} className='w-100  ' alt="" /> */}
       <div className="heart text-center  position-absolute ps-2 pb-2 d-flex "><i className="fa-solid fa-heart"></i>
       <h5 className='ms-2 pb-md-0 text-white '>{person.popularity}</h5>
       </div>
       </div>
       <div className="bgg pt-3 mb-5">
       <h5 className='pb-3'> <i className=" film m-1 mt-0 fa-solid fa-user"></i> {person.name.substr(0,15)}</h5> 
        {/* <h5 className='pb-2'><i className="film m-1 mt-0 fa-solid fa-film"></i>  {person.known_for_department}</h5> */}
       </div>
        </div>
      </Link>

      </div>
    ))} 
    </div>
    </div>
    <Footer/>
  </>
}

