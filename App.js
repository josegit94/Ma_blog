import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
    <header>
      <nav>
        <h1>MA COLOMBE</h1>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="services">Services</NavLink>
        <NavLink to="about">About Us</NavLink>
        <NavLink className='btn' to="contact">Get in touch</NavLink>
      </nav>
    </header>

    <main>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="about" element={<About/>} ></Route>
      </Routes>
      <Testimonial/>
      <Footer/>
    </main>
    </BrowserRouter>
  );
}

export default App;
