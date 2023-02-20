import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery'

import Footer from '../Footer/Footer';




export default function Home(getPage) {

const KEY="418116c98be1388060b54ec449ed82b1"
const baseUrl="https://image.tmdb.org/t/p/w500/";  

const [allMovies,setallMovies] =useState([]);
const [allTv,setallTv] =useState([]);
const [Lodingg,setLoding] =useState(false);

$(document).ready(function(){
  $('.spinner').fadeOut(1000,function(){
  })
})

   

async function getMovies(){
    let {data} = await axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=418116c98be1388060b54ec449ed82b1")
    setallMovies(data.results.splice(0,16));
    console.log(allMovies);
    setLoding(true)
  }


  // async function getPage(page){
  //   let {data} = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=418116c98be1388060b54ec449ed82b1&language=en-US&page=${page}`)
  //   setallMovies(data.results);
  //   console.log(allallMoviesTv);
  // }

async function getTv(){
    let {data} = await axios.get("https://api.themoviedb.org/3/trending/tv/day?api_key=418116c98be1388060b54ec449ed82b1")
    setallTv(data.results.splice(0,20));
    console.log(allTv);
  }
  useEffect(()=> {
    getMovies()
    getTv()
   
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
     <div className="row mb-5  ">
      <div className="col-md-4 align-items-center mt-4 mt-md-0 d-flex  ">
        <div className="hgit position-relative mt-md-0  mb-5 mb-md-5  mt-5 ">
        <h2 className='w-100 pb-3 '>Trending Movies To Watch Now</h2>
        <p>Most Watched Movies By Days</p>
        </div>
      </div>
      {Lodingg ? allMovies.map((movie,index)=>(
        <div className="lin col-md-2 col-sm-6" key={index}>
         <Link className='del' to={"/movieDetails/"+movie.id}>
         <div className="item-home">
         <div className="imge-over position-relative  ">
            <img src={baseUrl+movie.poster_path} className='w-100' alt="" />
            <div className="view position-absolute text-whit  ">
            <h5 className='text-center text-white mt-1'><span className='text-danger'>Over</span> view</h5>
            <p className='ps-2 text-whit'>{movie .overview.substr(0,70)}.......</p>
            <div className="see-more position-relative ps-1">
            <i  className="fa-regular fa-eye   "></i> <p className=' position-absolute top-0 pt-md-1 ps-4'>Click For<span className='text-danger'>  See More</span></p>
            </div>
            </div>
           </div>
            {/* <div className=" star-film p-1 position-absolute top-0 end-0 p-1"><i className="fa-solid fa-star  d-flex justify-content-center align-content-center"><div className="tt title-star  text-white position-absolute"><p className=''>{movie.vote_average}</p></div></i></div> */}
           <div className="bgg p-1 mb-5">
           <h5 className='  pb-0 '><i className="film  mt-0 fa-solid fa-film"></i> {movie.title.substr(0,6)}</h5>
           <span className=''><i  className="pb-2 film fa-solid fa-thumbs-up "></i> {movie.popularity}</span><br/>
           <span className=' '><i  className="pb-3 text-warning fa-solid fa-star"></i> {movie.vote_average}</span>
           </div>
          </div>
         </Link>
        </div>
      )):(    <div></div> )}
    </div>

    <div className="row ">
      <div className="col-md-4 align-items-center d-flex">
        <div className="hgit position-relative mt-md-0  mb-5 mb-md-5    mt-5 ">
        <h2 className='w-100 pb-3'>Trending Tv To Watch Now</h2>
        <p>Most Watched Movies By Days</p>
        </div>
      </div>
      {allTv.map((movie,index)=>(
        <div className="lin col-md-2 col-sm-6" key={index}>
         <Link className='del' to={"/movieDetails/"+movie.id}>
         <div className="item-home">
         <div className="imge-over position-relative">
          <img src={baseUrl+movie.poster_path} className='w-100 position-relative' alt="" />
          <div className="view position-absolute text-whit ">
            <h5 className='text-center text-white mt-1'><span className='text-danger'>Over</span> view</h5>
            <p className='ps-2 text-whit'>{movie .overview.substr(0,70)}.........</p>
            <div className="see-more position-relative ps-1">
            <i  className="fa-regular fa-eye   "></i> <p className=' position-absolute top-0 pt-md-1 ps-4'>Click For<span className='text-danger'>  See More</span></p>
            </div>
          
            </div>
            </div>
            <div className="bgg  p-1   mb-5">
           <h5 className='  pb-0  '><i className="film   mt-0 fa-solid fa-film"></i> {movie.name.substr(0,6)}</h5>
            <span className=''><i  className="pb-2 film fa-solid fa-thumbs-up "></i> {movie.popularity}</span><br/>
           <span className=' '><i  className="pb-3 text-warning fa-solid fa-star"></i> {movie.vote_average}</span>
           </div>
          </div>
          </Link>
        </div>
      ))}
    </div>   
  </div>
    {/* <Pat getPage={getPage}/>  */}
  <Footer/>
  

  

    </>
  
}
