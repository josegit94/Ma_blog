import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Footer from "./components/Footer"
import Services from "./pages/Services"
import Contact from "./pages/Contact";
import Register from "./pages/Admin/Register";
import Login from "./pages/Admin/Login";
import Posts from "./pages/Admin/post";
function App() {
  return (
    <BrowserRouter>
    <header>
      <nav>
        <h1 className="logo">MA COLOMBE</h1>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="Services">Services</NavLink>
        <NavLink to="about">About Us</NavLink>
        <NavLink className='btn' to="contact">Get in touch</NavLink>
      </nav>
    </header>

    <main>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="about" element={<About/>} ></Route>
        <Route path="Services" element={<Services/>} ></Route>
        <Route path="contact" element={<Contact/>} ></Route>
        <Route path="register" element={<Register/>} ></Route>
        <Route path="login" element={<Login/>} ></Route>
        <Route path="posts" element={<Posts/>} ></Route>
      </Routes>
      <Footer/>
    </main>
    </BrowserRouter>
  );
}

export default App;
