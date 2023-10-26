import { Link } from "react-router-dom";
import Logo from "./img/Logo.png";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between shadow-md px-8">
      <Link to={"/"}><img src={Logo} className="w-20 cursor-pointer" /></Link>
      <ul className="flex mx-8 gap-20">
        <Link to="/">
          <li className="hidden lg:flex items-center gap-4 text-lg text-gray-600 hover:text-orange-500">
            <i className="fa-solid fa-house"></i>
            <p className="text-base">Home</p>
          </li>
        </Link>
        <Link>
          <li className="hidden lg:flex items-center gap-4 text-lg text-gray-600 hover:text-orange-500">
            <i className="fa-solid fa-percent"></i>
            <p className="text-base">Offers</p>
          </li>
        </Link>
        <Link>
          <li className="hidden lg:flex items-center gap-4 text-lg text-gray-600 hover:text-orange-500">
            <i className="fa-solid fa-user"></i>
            <p className="text-base">Sign In</p>
          </li>
        </Link>
        <Link>
          <li className="hidden lg:flex items-center gap-4 text-lg text-gray-600 hover:text-orange-500">
            <i className="fa-solid fa-cart-shopping"></i>
            <p className="text-base">Cart</p>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
