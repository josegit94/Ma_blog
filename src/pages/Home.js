import { NavLink } from "react-router-dom";
import Testimonial from "../components/Testimonial";
import product from "./../img/prod1.jpg";
import product1 from "./../img/prod2.jpg";
import product2 from "./../img/prod3.jpg";
import pinup from "./../img/pinup.png";
import clothing from "./../img/clothing.png";
import Slideshow from "../components/Slideshow";

const Home = () => {
  return (
    <div>
      <Slideshow />
      
      <div className="hero">
        <div className="content">
          <h4>2022 Fashion Inspiration</h4>
          <h1>Make Your Style Looks Perfect.</h1>
          <p>
            Our collection will help your fashion looks better and we will
            provide the best for you.
          </p>
          <button className="btn">Shop Now</button>
        </div>
        <img src={pinup} alt=""></img>
        <img className="small" src={clothing} alt=""></img>
      </div>

      <div className="products">
        <h4>Our Product</h4>
        
        <h1>Trending Outfit of The Week</h1>
        <div className="cards">
          <div className="product">
            <img src={product} alt="product" />
            <h4>Maroon Classical Jacket</h4>
            <p>$48</p>
            <NavLink to="contact">
              <button className="btn">Shop Now</button>
            </NavLink>
          </div>

          <div className="product">
            <img src={product1} alt="product" />
            <h4>Maroon Classical Jacket</h4>
            <p>$48</p>
          </div>

          <div className="product">
            <img src={product2} alt="product" />
            <h4>Maroon Classical Jacket</h4>
            <p>$48</p>
          </div>
        </div>

        <h1>Trending Outfit of The Week</h1>
        <div className="cards">
          <div className="product">
            <img src={product} alt="product" />
            <h4>Maroon Classical Jacket</h4>
            <p>$48</p>
            <NavLink to="contact">
              <button className="btn">Shop Now</button>
            </NavLink>
          </div>

          <div className="product">
            <img src={product1} alt="product" />
            <h4>Maroon Classical Jacket</h4>
            <p>$48</p>
          </div>

          <div className="product">
            <img src={product2} alt="product" />
            <h4>Maroon Classical Jacket</h4>
            <p>$48</p>
          </div>
        </div>

        <h1>Trending Outfit of The Week</h1>
        <div className="cards">
          <div className="product">
            <img src={product} alt="product" />
            <h4>Maroon Classical Jacket</h4>
            <p>$48</p>
            <NavLink to="contact">
              <button className="btn">Shop Now</button>
            </NavLink>
          </div>

          <div className="product">
            <img src={product1} alt="product" />
            <h4>Maroon Classical Jacket</h4>
            <p>$48</p>
          </div>

          <div className="product">
            <img src={product2} alt="product" />
            <h4>Maroon Classical Jacket</h4>
            <p>$48</p>
          </div>
        </div>
      </div>
      <Testimonial />
    </div>
  );
};

export default Home;
