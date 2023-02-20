import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react';
import $ from 'jquery'
import Footer from '../Footer/Footer';




export default function Actor() {
let params =useParams()
const [allActor,setallActor] =useState([]);
const baseUrl="https://image.tmdb.org/t/p/w500/";
$(document).ready(function(){
     $('.spinner').fadeOut(1000,function(){
     })
   })


async function getDetailsPp(){
    let {data} = await axios.get(`https://api.themoviedb.org/3/person/${params.id}?api_key=418116c98be1388060b54ec449ed82b1&language&language=en-US`)
    setallActor(data);
//     console.log(allActor);


}
 useEffect(()=>{
     getDetailsPp()
})  

  return <>
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
  <div className="ground-bd p-4  m-auto  row">
  <div className="col-md-4 mt-3">
    <div className="img-db  ">
      <img src={baseUrl+allActor.profile_path} className='w-100' alt="" />
    </div>
    </div>
    <div className="col-md-6 mt-4 ms-2 item-db mb-5">
     <div className="item-actor">
          <h5>Name | </h5><h6>{allActor.name}</h6>
          <h5 className='mt-3'>Birthday | </h5><h6>{allActor.birthday}</h6>
          <h5 className='mt-3'>place Of Birth | </h5><h6>{allActor.place_of_birth}</h6>
          <h5 className='mt-3'>acting type | </h5><h6>{allActor.known_for_department}</h6>
        <button type="button" role="button" className="button-56 mt-3 mt-md-1 " data-bs-toggle="modal" data-bs-target="#exampleModal">
Read More ....
</button>
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5 " id="exampleModalLabel">Biography</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <h6 className=''>{allActor.biography}</h6>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
 </div>
    </div>
     </div>
       </div>
  <Footer/>

  

  </>


  
}
