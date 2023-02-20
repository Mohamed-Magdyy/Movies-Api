import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'




export default function Search() {
  $(document).ready(function(){
    $('.spinner').fadeOut(1000,function(){
    })
  })
 
const baseUrl="https://image.tmdb.org/t/p/w500/";  

     const [text,setText]=useState("")
     const [moviee,setNovie]=useState([])
     const changeText =(event)=>{
          // console.log(event);
          setText(event.target.value)
    }

     async function getMovie(e){
          e.preventDefault()
          let {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=418116c98be1388060b54ec449ed82b1&&query=${text}&anguage=en-US`)
          setNovie(data.results);
          console.log(moviee);
  }
  return<>
<div className='top-icon end-0 bottom-0 position-fixed pe-2 pe-md-3 pb-4 '>
<a href="#"><i className="fa-solid fa-arrow-up p-3"></i></a>
</div>
<form className="d-flex justify-content-center" role="search" onSubmit={getMovie}>
        <input className="form-controlz w-50  me-1" type="search" placeholder="Search Movie ...." aria-label="Search" value={text} onChange={changeText}/>
        <button className="btn btn-outline-danger" type="submit">Search</button>
</form>
<div className="spinner">
  <div className="rect1"></div>
  <div className="rect2"></div>
  <div className="rect3"></div>
  <div className="rect4"></div>
  <div className="rect5"></div>
</div>
  <div className="container mt-5">
   <div className="row">
      {moviee.map((movie,index)=>(
        <div className="lin col-md-2 col-sm-6" key={index}>
        <Link className='del' to={"/movieDetails/"+movie.id}>
         <div className="item-home">
         <div className="imge-over position-relative ">
          {movie.poster_path === null?<div className="bad-rec text-center "><i className="fa-regular fa-face-frown"></i><h6 className='pb-5 pt-3'>Sorry to upload the image</h6></div>:<img src={baseUrl+movie.poster_path} className='w-100' alt="" />}
            {/* <img src={baseUrl+movie.poster_path} className='w-100' alt="" /> */}
            <div className="view position-absolute text-whit  ">
            <h5 className='text-center text-white mt-1'><span className='text-danger'>Over</span> view</h5>
            <p className='ps-2 text-whit'>{movie .overview.substr(0,70)}.......</p>
            <div className="see-more position-relative ps-1">
            <i  className="fa-regular fa-eye   "></i> <p className=' position-absolute top-0 pt-md-1 ps-4'>Click For<span className='text-danger'>  See More</span></p>
            </div>
            </div>
           </div>
             <div className="bgg p-1 mb-5">
           <h5 className='  pb-0 '><i className="film  mt-0 fa-solid fa-film"></i> {movie.title.substr(0,6)}</h5>
           <span className=''><i  className="pb-2 film fa-solid fa-thumbs-up "></i> {movie.popularity}</span><br/>
           <span className=' '><i  className="pb-3 text-warning fa-solid fa-star"></i> {movie.vote_average}</span>
           </div>
          </div>
         </Link>
          </div>
      ))}
   </div>
    </div>
    </>

}

