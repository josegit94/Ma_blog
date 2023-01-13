import { Link } from "react-router-dom";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import classes from './navbar.module.css'

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <h1 className="logo">
        <Link to="/">MA COLOMBE</Link>
      </h1>
      <MainNav />
      <MobileNav />
    </div>
  );
};

export default Navbar;
