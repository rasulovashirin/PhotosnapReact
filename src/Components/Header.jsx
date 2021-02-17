 import Logo from './../img/logo.svg'
 import './Header.css'

 function Header () {
 return(
   <>
    <header className = "header">
      <div className ="container header__container">
        <a href="index.html">
          <img src={Logo} alt="logo" width ="170" height="16" />
        </a>

        <nav>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">Stories</a>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">Features</a>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">Pricing</a>
            </li>
          </ul>
        </nav>

       <a href="#" className="header__invite-link">Get an invite</a>
      </div>
    </header>
   </>
 )
}

export default Header