import Logo from "../../Images/logo.png"
import {useState} from 'react'

const Header = ()=>{

const[login,setLogin] = useState("Login")

    return(
      <div className='header'>
          <div className='logo'>
              <img src={Logo} alt='Logo'/>
              <b>Hungrey</b>
          </div>
          <ul className='nav'>
              <li>Restrounts</li>
              <li>About Us</li>
             <li> <i class="fa fa-shopping-cart" aria-hidden="true"></i></li>
              <li><button 
              onClick={()=>{
                login == "Login" ? setLogin("Sign In") :setLogin("Login")
              }}
              className="login-btn">{login}</button></li>
          </ul>
      </div>
    )
  }

  export default Header;