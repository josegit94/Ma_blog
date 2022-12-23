import product from './../img/prod1.jpg'
import product1 from './../img/prod2.jpg'
import product2 from './../img/prod3.jpg'


const Home = () => {
  return (
    <div className='products'>
      <h4>Our Product</h4>
      <h1>Trending Outfit of The Week</h1>
      
      <div className='cards'>
        <div className='product'>
          <img src={product} alt='product'/>
          <h4>Maroon Classical Jacket</h4>
          <p>$48</p>
        </div>

        <div className='product'>
          <img src={product1} alt='product'/>
          <h4>Maroon Classical Jacket</h4>
          <p>$48</p>
        </div>

        <div className='product'>
          <img src={product2} alt='product'/>
          <h4>Maroon Classical Jacket</h4>
          <p>$48</p>
        </div>
      </div>

    </div>
  )
}

export default Home