import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
        <div className="nav">
        <div className='logo'>
        <Link to={'/'}><img src='https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?w=740&t=st=1698040986~exp=1698041586~hmac=2e067008220fa9ceedee30bd1a82c03b5287f0ab33355562ea7bc03deb8df4ed' /></Link>
        </div>
      <ul className="nav-list">
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'offers'}><li>Offers</li></Link>
            <Link to={'contact'}><li>Help</li></Link>
            <li>Sign In</li>
            <li>Cart</li>
      </ul>
        </div>
    </div>
  );
};

export default Header;
