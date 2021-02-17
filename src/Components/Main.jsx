import './Main.css'

import Man from './../img/man.jpg'
import Pc from './../img/pc.jpg'
import Photoman from './../img/photoman.jpg'

import Mountain from './../img/mountain.jpg'
import Sunset from './../img/sunset.jpg'
import Voyage from './../img/voyage.jpg'
import Arts from './../img/arts.jpg'

function Main () {
  return (
    <>
      <main className="main">
        <section className="info">
          {/* <div className="container container--big"> */}
            <ul className="info__list">
              <li className="info__item">
                <div className="info__about">
                  <h3 className="info__about-heading">Create and share your photo stories.</h3>
                  <p className="info__about-text">Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
                  <a href="index.html" className="info__about-link">Get an invite</a>
                </div>
                <img className="info__img" src={Man} alt="man" width="830" height="650"/>
              </li>

              <li className="info__item info__item--white">
                <div className="info__about">
                  <h3 className="info__about-heading">Beautiful stories every time</h3>
                  <p className="info__about-text">We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</p>
                  <a href="index.html" className="info__about-link">Get an invite</a>
                </div>
                <img className="info__img" src={Pc} alt="man" width="830" height="650"/>
              </li>

              <li className="info__item info__item--white">
                <div className="info__about">
                  <h3 className="info__about-heading">Designed for everyone</h3>
                  <p className="info__about-text">Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. </p>
                  <a href="index.html" className="info__about-link">Get an invite</a>
                </div>
                <img className="info__img" src={Photoman} alt="man" width="830" height="650"/>
              </li>
            </ul>
          {/* </div> */}
        </section>
        <section className="stories">
          <ul className="stories__list">
            <li className="stories__item">
              <img className="stories__img" src={Mountain} alt="mountain" width="360" height="500"/>
              <div className="stories__info">
                <h3 className="stories__info-heading">The Mountains</h3>
                <p className="stories__info-author">by John Appleseed</p>
                <a href="index.html" className="stories__more-link">Read story</a>
              </div>
            </li>

            <li className="stories__item">
              <img className="stories__img" src={Sunset} alt="mountain" width="360" height="500"/>
              <div className="stories__info">
                <h3 className="stories__info-heading">Sunset Cityscapes</h3>
                <p className="stories__info-author">by Benjamin Cruz</p>
                <a href="index.html" className="stories__more-link">Read story</a>
              </div>
            </li>

            <li className="stories__item">
              <img className="stories__img" src={Voyage} alt="mountain" width="360" height="500"/>
              <div className="stories__info">
                <h3 className="stories__info-heading">18 Days Voyage</h3>
                <p className="stories__info-author">by Alexei Borodin</p>
                <a href="index.html" className="stories__more-link">Read story</a>
              </div>
            </li>

            <li className="stories__item">
              <img className="stories__img" src={Arts} alt="mountain" width="360" height="500"/>
              <div className="stories__info">
                <h3 className="stories__info-heading">Architecturals</h3>
                <p className="stories__info-author">by Samantha Brooke</p>
                <a href="index.html" className="stories__more-link">Read story</a>
              </div>
            </li>
          </ul>
        </section>
        <section className="features">
          <div className="container">
            <ul className="features__list">
              <li className="features__item features__item--responsive">
                <h3 className="features__heading">100% Responsive</h3>
                <p className="features__text">No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.</p>
              </li>

              <li className="features__item features__item--forever">
                <h3 className="features__heading">No Photo Upload Limit</h3>
                <p className="features__text">Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.</p>
              </li>

              <li className="features__item features__item--embed">
                <h3 className="features__heading">Available to Embed</h3>
                <p className="features__text">Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. </p>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}

export default Main