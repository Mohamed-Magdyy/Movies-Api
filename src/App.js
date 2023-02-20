// import logo from './logo.svg';
import './App.css';
import NavBar from './Compoant/NavBar/NavBar';
import { Routes,Route, useNavigate, Navigate } from 'react-router-dom';
import Home from './Compoant/Home/Home';
import About from './Compoant/About/About';
import People from './Compoant/People/People';
import Movies from './Compoant/Movies/Movies';
import Login from './Compoant/Login/Login';
import Register from './Compoant/Register/Register';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode'
import MovieDetails from './Compoant/MovieDetails/MovieDetails';
import Footer from './Compoant/Footer/Footer';
import Actor from './Compoant/Actor/Actor';
import axios from 'axios';
import Search from './Compoant/Search/Search';
import Pat from './Compoant/Pat/Pat';







function App() {

let [useData,setUseData] =useState(null);
let navigate = useNavigate();

  // useEffect(()=>{
  //   if(localStorage.getItem("userToken")){
  //     saveUseData();
      
  //   }
  // },[]); 

function logOut(){
  localStorage.removeItem("userToken")
  setUseData(null) 
  navigate("/login")
}





function saveUseData(){
  let userToken = localStorage.getItem("userToken")
  let userDecode = jwtDecode(userToken)
  setUseData(userDecode)
}


  return (
    <>
  
  <NavBar useData={useData}  logOut={logOut}   />
  
  {/* <div className='container  '> */}
    <Routes>
    <Route path='/' element={<Register   />} />
    <Route path='/register' element={<Register />} />
    <Route path='home' element={<Home />}  />
    <Route path='about' element={<About />} />
    <Route path='search' element={<Search />} />
    <Route path='people' element={<People />} />
    <Route path='Actor' element={<Actor />} >
    <Route path=':id' element={<Actor />} />
    </Route>  
    <Route path='movies' element={<Movies />} />
    <Route path='movieDetails' element={<MovieDetails />} >
    <Route path=':id' element={<MovieDetails />} />
    </Route>
    <Route path='login' element={<Login setUseData={saveUseData} />} />    </Routes>
    <Routes/>
  {/* </div> */}

  
  

    
    </>
  );
}

export default App;
