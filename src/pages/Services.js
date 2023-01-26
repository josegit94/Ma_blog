import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'


const Services = () => {

  const [posts,setPosts] = useState([])
  const cat = useLocation().search
  
  useEffect(()=>{
      const fetchData = async ()=>{
          try{
              const res = await axios.get(`posts${cat}`);
              setPosts(res.data)
          }catch(err){
              console.log(err)
          }
      }
      fetchData()
},[cat])


  return (
    
    <div className="products">
    <h4>Our Product</h4>
    
    <h1>Trending Outfit of The Week</h1>
    <div className='cards'>
    {posts.map((post)=>(
    <div className='product'key={post.id}>
        <div className='img'>
        <img src={`../upload/${post.img}`} alt=""/>
            </div>
            <h4> {post.title} </h4>
            <p>{post.caption}</p>
            <p>Rwf {post.price}</p>
    </div>
    ))}
    </div>
    <Link to = "/contact"><button className="edit">More Info</button></Link>
    <h1>Suits</h1>
    <div className='cards'>
    {posts.map((post)=>(
    <div className='product'key={post.id}>
        <div className='img'>
        <img src={`../upload/${post.img}`} alt=""/>
            </div>
            <h4> {post.title} </h4>
            <p>{post.caption}</p>
            <p>Rwf {post.price}</p>
    </div>
    ))}
    
    </div>
    <Link to = "/contact"><button className="edit">More Info</button></Link>
    <h1>Shoes</h1>
    <div className='cards'>
    {posts.map((shoes)=>(
    <div className='product'key={shoes.id}>
        <div className='img'>
        <img src={`../upload/${shoes.img}`} alt=""/>
            </div>
            <h4> {shoes.title} </h4>
            <p>{shoes.caption}</p>
            <p>Rwf {shoes.price}</p>
    </div>
    ))}
    </div> 
    
    <Link to = "/contact"><button className="edit">More Info</button></Link>
    </div> 
  )
}

export default Services