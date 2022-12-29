import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer"
import Services from "./pages/Services"
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
    <header>
      <nav>
        <h1>MA COLOMBE</h1>
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
      </Routes>
      <Testimonial/>
      <Footer/>
    </main>
    </BrowserRouter>
  );
}

export default App;
