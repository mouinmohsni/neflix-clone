import React from 'react'
import "./Footer.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer-sociales">
          <a href="/" className="footer-sociale"><FacebookIcon/></a>
          <a href="/" className="footer-sociale"><InstagramIcon/></a>
          <a href="/" className="footer-sociale"><XIcon/></a>
          <a href="/" className="footer-sociale"><YouTubeIcon/></a>
        </div>
        <ul className='footer-links'>
          <li className='footer-link'>
            <a href="/">link footer</a>
          </li>
          <li className='footer-link'>
            <a href="/">link footer</a>
          </li>
          <li className='footer-link'>
            <a href="/">link footer</a>
          </li>
          <li className='footer-link'>
            <a href="/">link footer</a>
          </li>
          <li className='footer-link'>
            <a href="/">link footer</a>
          </li>
          <li className='footer-link'>
            <a href="/">link footer</a>
          </li>
          <li className='footer-link'>
            <a href="/">link footer</a>
          </li>
          <li className='footer-link'>
            <a href="/">link footer</a>
          </li>
        </ul>
        <div className="footer-copie">
            netflix-colne
        </div>
      </div>
    </footer>
  )
}

export default Footer