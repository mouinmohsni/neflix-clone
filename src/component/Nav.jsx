import React from 'react'
import {useState} from 'react'
import "./Nav.scss";
import MenuIcon from '@mui/icons-material/Menu';
import RedeemIcon from '@mui/icons-material/Redeem';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';

function Nav() {

    const [navBlack , setNavBlack]=useState(false);
    const [toggleMenu , setToggleMenu]=useState(false);
    const transtionNave = ()=>{
            window.scrollY>100 ? setNavBlack(true):setNavBlack(false);
    };
    useState(()=>{
        document.addEventListener("scroll",transtionNave)
    });

    const handleClick=()=>{
        toggleMenu ?setToggleMenu(false):setToggleMenu(true);

    }
  return (
    <div className={`nav ${navBlack ||toggleMenu? "nav-black" : "nav-trasparent"} ${toggleMenu && "show" }`}>
        <button className='nav-butger' onClick={handleClick}><MenuIcon/></button>
        <img src="./images/logo.png" alt="logo" className='nav-logo'/>
        <nav className='nav-links'>
            <a href="/" className='nav-link'>Accueil</a>
            <a href="/" className='nav-link'>Series</a>
            <a href="/" className='nav-link'>Films</a>
        </nav>
        <div className="nav-actions">
            <a href="/" className='nav-action'><SearchIcon/></a>
            <a href="/" className='nav-action'>Direct</a>
            <a href="/" className='nav-action'><RedeemIcon/></a>
            <a href="/" className='nav-action'><NotificationsIcon/></a>
            <a href="/" className='nav-action'>
                <img src="./images/avatar.jpg" alt="" />
            </a>

        </div>
    </div>
    
  )
}

export default Nav