import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery'
import Footer from '../Footer/Footer';





export default function Movies() {
  const  [allReta,setallallReta] =useState([]);
  const [allallReta2,setallReta2] =useState([]);
  const [Lodingg,setLoding] =useState(false);
  
  $(document).ready(function(){
    $('.spinner').fadeOut(1000,function(){
    })
  })
  
  const KEY="418116c98be1388060b54ec449ed82b1"
  const baseUrl="https://image.tmdb.org/t/p/w500/"; 


  async function getReta(){
    let {data} = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=418116c98be1388060b54ec449ed82b1&language=en-US&page=1")
      // console.log(data);
      setallallReta(data.results);
      console.log(data);
       setLoding(true)
    }

    async function getReta2(){
      let {data} = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=418116c98be1388060b54ec449ed82b1&language=en-US&page=3")
        // console.log(data);
        setallReta2(data.results);
        console.log(data);
         setLoding(true)
      }
  

    useEffect(()=> {
      getReta()
      getReta2()
    },[])  
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
  <div className="row">  
  <div className="col-md-4 align-items-center d-flex mt-5 ">
        <div className="hgit position-relative mt-md-0  mb-5 mb-md-5  mt-5 ">
        <h2 className='w-100 pb-3'>Top Rated movies</h2>
      </div>
      </div>
    {Lodingg ?allReta.map((top_rated,index)=>(
    <div className="mov col-md-2 col-sm-6"  key={index}>
    <Link  className='del' to={"/movieDetails/"+top_rated.id}>
    <div className="imge-over position-relative">
    <img src={baseUrl+top_rated.poster_path } className='w-100  'alt="" />
    <div className="view position-absolute">
      <h5  className='text-white text-center mt-1'><span className='text-danger'>Over</span> view</h5>
      <p className='ps-2 '>{top_rated.overview.substr(0,70)}........</p>
      <div className="see-more position-relative ps-1">
      <i  className="fa-regular fa-eye  "></i> <p className=' position-absolute top-0 pt-1 ps-4'>Click For<span className='text-danger'>  See More</span></p>
      </div>
    </div>
    </div>
    <div className="bgg p-1 mb-5">
      <h5 className=' pb-md-0 mt-1 '><i className="film   fa-solid fa-film"></i> {top_rated.title.substr(0,8)}</h5>
      <span className=''><i  className="film fa-solid fa-thumbs-up "></i> {top_rated.popularity}</span><br/>
      <span className=''><i  className=" pt-2 pb-4   text-warning fa-solid fa-star"></i> {top_rated.vote_average}</span>
      </div>
      </Link>
      </div>
      
    )):(<div className='loding'><i className=" fa-solid fa-spinner fa-spin w-100"></i></div> )}
  </div>
  <div className="row">
  <div className="col-md-4 align-items-center d-flex mt-5 ">
        <div className="hgit position-relative mt-md-0  mb-5 mb-md-5  mt-5 ">
        <h2 className='w-100 pb-3'>Most Top Rated movies</h2>
      </div>
      </div>
    {Lodingg ?allallReta2.map((top_rated,index)=>(
    <div className="mov col-md-2 col-sm-6"  key={index}>
    <Link  className='del' to={"/movieDetails/"+top_rated.id}>
    <div className="imge-over position-relative">
    <img src={baseUrl+top_rated.poster_path } className='w-100  'alt="" />
    <div className="view position-absolute">
    <h5 className='text-center text-white mt-1'><span className='text-danger'>Over</span> view</h5>
            <p className='ps-2 text-whit'>{top_rated .overview.substr(0,70)}.........</p>
            <div className="see-more position-relative ps-1 ">
            <i  className="fa-regular fa-eye   "></i> <p className='position-absolute top-0 pt-1   ps-4'>Click For<span className='text-danger'>  See More</span></p>
      </div>
    </div>
    </div>
   
    <div className="bgg p-1 mb-5">
      <h5 className=' pb-md-0 mt-1 '><i className="film   fa-solid fa-film"></i> {top_rated.title.substr(0,7)}</h5>
      <span className=''><i  className="film fa-solid fa-thumbs-up "></i> {top_rated.popularity}</span><br/>
      <span className=''><i  className=" pt-2 pb-4   text-warning fa-solid fa-star"></i> {top_rated.vote_average}</span>
      </div>
      </Link>
      </div>
    )):(<div className='loding'><i className=" fa-solid fa-spinner fa-spin w-100"></i></div> )}

  </div>
  </div>
  <Footer/>

    </>
  
}
