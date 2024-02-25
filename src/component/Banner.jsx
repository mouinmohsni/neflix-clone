import React from 'react'
import { useState, useEffect } from 'react';
import "./Banner.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HelpIcon from '@mui/icons-material/Help';
import axios from 'axios';
import requests from '../../src/config/Requests.js';
import QuickView from './QuickView'; 
import { Link } from 'react-router-dom';

function Banner() {

    const[ movie,setMovie] =useState([]);
      const [popup, setPopup] = useState(false)

  function handlePopup() {
    popup ? setPopup(false) : setPopup(true)
  }

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchTrending);
            setMovie(
                request.data.results[
                  Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
        };
        fetchData();
        
    },[]);

  
    
    function truncateText(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string
    }
  const bannerStyle = {
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  }


  return (
    <header className='banner' style={bannerStyle}>
        <div className="banner-content">
            <h1 className=' banner-title'>{movie?.title || movie?.name || movie?.original_title}</h1>
            <p className="banner-description">
            {truncateText(movie?.overview, 100)}
            </p>
            <div className="banner-buttons">
              <Link to={`/video/${movie?.id}`}>
                  <button className='banner-button banner-button-play '> <PlayArrowIcon/>Lecture</button>
            </Link>
            <button className='banner-button' onClick={handlePopup}><HelpIcon/>Plus d'info</button>

        </div>

        </div>
        <QuickView
        bannerStyle={bannerStyle}
        movie={movie}
        popupStatus={popup}
        popup={handlePopup}/>
    </header>
  )
}

export default Banner