import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Posts = () => {
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get("/posts");
                setPosts(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
},[])
    // const posts = [
    //     {
    //         id:1,
    //         title: "classical 2",
    //         desc:"louis vouitton",
    //         price:"40$"
    //         img:product
    //     },
    //     {
    //         id:1,
    //         title: "classical 2",
    //         desc:"louis vouitton",
    //         price:"40$"
    //         img:product
    //     },
    // ]
  return (
    <div className='products'>
        <div className='cards'>
        {posts.map((post)=>(
        <div className='product'key={post.id}>
            <div className='img'>
                <img src={post.img} alt=""/>
                </div>
                <h4> {post.title} </h4>
                <p>{post.caption}</p>
                <p>Rwf {post.price}</p>
            
        </div>
        
        ))}
        </div>
</div>
  )
}

export default Posts