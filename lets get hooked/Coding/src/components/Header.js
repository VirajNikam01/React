import Logo from "../../Images/logo.png"


const Header = ()=>{
    return(
      <div className='header'>
          <div className='logo'>
              <img src={Logo} alt='Logo'/>
              <b>Hungrey</b>
          </div>
          <ul className='nav'>
              <li>Restrounts</li>
              <li>About Us</li>
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </ul>
      </div>
    )
  }

  export default Header;