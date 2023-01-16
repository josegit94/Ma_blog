import { useState } from "react";
import Navlinks from "./NavLinks";
import classes from "./navbar.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const menuOpen = <AiOutlineMenu className={classes.hamburger} size= '30px' onClick={() => setOpen(!open)} />;
  const menuClose = <AiOutlineClose className={classes.hamburger} size='30px' onClick={() => setOpen(!open)} />;

  const closeMenu = () => setOpen(false)

  return (
    <div className={classes.mobileNav}>
      {open ? menuClose : menuOpen}
      {open && <Navlinks closeMenu = {closeMenu}/>}
    </div>
  );
};

export default MobileNav;
