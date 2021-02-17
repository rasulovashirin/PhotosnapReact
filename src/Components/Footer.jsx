import './Footer.css'
import Logolight from './../img/logo-light.svg'

import Facebook from './../img/facebook.svg'
import Youtube from './../img/youtube.svg'
import Twitter from './../img/twitter.svg'
import Pinterest from './../img/pinterest.svg'
import Instagram from './../img/instagram.svg'

function Footer () {
  return (
    <>
      <footer className="footer">
        <div className="container footer__container">
          <div className="footer__left">
            <a href="index.html" className="logo">
              <img src={Logolight} alt="logo" className="logo-img" width="170" height="16"/>
            </a>

            <ul className="socials">
              <li className="socials__item">
                <a href="index.html" className="socials__link">
                  <img src={Facebook} alt="facebook" className="socials__img" width="20" height="20"/>
                </a>
              </li>
              <li className="socials__item">
                <a href="index.html" className="socials__link">
                  <img src={Youtube} alt="youtube" className="socials__img" width="20" height="20"/>
                </a>
              </li>
              <li className="socials__item">
                <a href="index.html" className="socials__link">
                  <img src={Twitter} alt="twitter" className="socials__img" width="20" height="20"/>
                </a>
              </li>
              <li className="socials__item">
                <a href="index.html" className="socials__link">
                  <img src={Pinterest} alt="pinterest" className="socials__img" width="20" height="20"/>
                </a>
              </li>
              <li className="socials__item">
                <a href="index.html" className="socials__link">
                  <img src={Instagram} alt="instagram" className="socials__img" width="20" height="20"/>
                </a>
              </li>
            </ul>
          </div>
          <nav className="footer__center">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <a href="index.html" className="footer__nav-link">Home</a>
            </li>
            <li className="footer__nav-item">
              <a href="index.html" className="footer__nav-link">Stories</a>
            </li>
            <li className="footer__nav-item">
              <a href="index.html" className="footer__nav-link">Features</a>
            </li>
            <li className="footer__nav-item">
              <a href="index.html" className="footer__nav-link">Pricing</a>
            </li>
          </ul>
        </nav>
          <div className="footer__right">
            <a href="index.html" className="footer__invite-link">Get an invite</a>
            <p className="footer__copyright">Copyright 2019. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer