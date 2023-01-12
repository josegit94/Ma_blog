import { Link } from "react-router-dom";
import MainNav from "./MainNav";

const Navbar = () => {
  return (
    <nav className="nav">
      <h1 className="logo">
        <Link to="/">MA COLOMBE</Link>
      </h1>
      <MainNav />
    </nav>
  );
};

export default Navbar;
