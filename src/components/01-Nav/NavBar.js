import { Link } from "react-router-dom";
import { logoImg } from "../00-Images/wrapperswirl";
import { NavBarStyled } from "./NavBar.style";

const NavBar = () => {
  return ( 
    <NavBarStyled>
      <div className="LogoContainer">
        {logoImg}
      </div>
      <ul className="List">
        <li className="List-item" ><Link to="/">Contact</Link></li>
        <li className="List-item" ><Link to="/">Plah</Link></li>
        <li className="List-item"><Link to="/">Login</Link></li>
      </ul>
    </NavBarStyled>
   );
}
 
export default NavBar;