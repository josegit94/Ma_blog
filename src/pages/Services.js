import React from 'react'
import product from "./../img/men.jpg";
import product1 from "./../img/menswear.jpg";
import product2 from "./../img/menswear1.jpg";

const Services = () => {
  return (
    <div className='products'>
        <h1>New outfits</h1>

        <div className="cards">
        <div className="product">
            <img src={product} alt="product" />
            <h4>Maroon Classical Jacket</h4>
            <p>$50</p>
        </div>

        <div className="product">
            <img src={product1} alt="product" />
            <h4>Maroon Classical Jacket</h4>
            <p>$56</p>
        </div>

        <div className="product">
            <img src={product2} alt="product" />
            <h4>Maroon Classical Jacket</h4>
            <p>$70</p>
        </div>
        </div>
    </div>
      
  )
}

export default Services