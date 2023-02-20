import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import $ from 'jquery'
import Footer from '../Footer/Footer';



export default function MovieDetails() {
let params =useParams()
const [allMovie,setallMovie] =useState([]);
const baseUrl="https://image.tmdb.org/t/p/w500/";

$(document).ready(function(){
  $('.spinner').fadeOut(1000,function(){
  })
})



async function getDetails(){
     let {data} = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=418116c98be1388060b54ec449ed82b1&language=en-US`)
     setallMovie(data)
     console.log(allMovie);
}
useEffect(()=>{
     getDetails()
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
<div className="ground-bd w-100 m-auto row p-4">
  <div className="col-md-4">
    <div className="img-db ">
      <img src={baseUrl+allMovie.poster_path} className='w-100' alt="" />
    </div>
    </div>
    <div className="col-md-6 ms-3 mt-1">
      <div className="item-db">
        <h5 className='pb-1 pt-3 pt-md-0'>Movie :</h5><h6  className='pt-1  mb-4' > {allMovie.title}</h6>
        <h5>Tagline :</h5><h6>{allMovie.tagline}</h6>
        <h5 className='pt-2'>Overview :</h5><h6  className=' mb-4'> {allMovie.overview}</h6>
        <h5 className='pt-2'>The date it came out :</h5><h6>{allMovie. release_date}</h6>
        <div className="icon-db mt-5 justify-content-around d-flex">
        <span className='star '><i className=" text-warning fa-solid fa-star"></i> {allMovie.vote_average} / 10</span>
        <span className='clock'><i  className=" fa-solid fa-clock"></i> {allMovie.runtime} / M</span>
        <span className='dollar'><i  className=" fa-solid fa-sack-dollar"></i> {allMovie.budget} $</span>
        <span className='eye'><i  className="fa-solid fa-eye"></i> {allMovie.popularity}</span>
        </div>
  

        
      </div>
    </div>
 
</div>
</div>
  <Footer/>

  
  </>

}