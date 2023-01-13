import Navlinks from "./NavLinks";
import classes from "./navbar.module.css";

const MainNav = () => {
  return (
    <div className={classes.mainNav}>
      <Navlinks/>
    </div>
  );
};

export default MainNav;
