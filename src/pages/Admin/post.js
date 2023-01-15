import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom' 


const Posts = () => {
    

    const location = useLocation();
    const navigate = useNavigate();

    const [post, setPost] = useState({});
    const postId = location.pathname.split("/")[2]

    useEffect(() =>{
        const fetchData = async () =>{
            try {
                const res = await axios.get(`/posts/${postId}`)
                setPost(res.data)
            } catch(err) {
                console.log(err)
            }
        };
        fetchData();
    }, [postId]);

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
// delete post
const handleDelete = async ()=>{
try{
     await axios.delete(`/post/${postId}`);
    navigate('/posts')
}catch(err){
    console.log(err);
}
}
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
                <button className='edit'>Edit</button>
                <button className='delete' onClick={handleDelete}>Delete</button>
        </div>
    
        ))}
        
        </div>
        <div className='btn'><Link to="/add">Add Post</Link></div>
</div>
  )
}

export default Posts