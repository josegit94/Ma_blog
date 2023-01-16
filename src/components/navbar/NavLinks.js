import { NavLink } from "react-router-dom";
import classes from './navbar.module.css'

const Nav = ({closeMenu}) => {
  return (
    <div className={classes.navlinks}>
      <NavLink to="/" onClick={() => closeMenu()}>Home</NavLink>
      <NavLink to="Services" onClick={() => closeMenu()} >Services</NavLink>
      <NavLink to="about" onClick={() => closeMenu()}>About Us</NavLink>
      <NavLink className="btn" onClick={() => closeMenu()} to="contact">
        Get in touch
      </NavLink>
    </div>
  );
};

export default Nav;
