import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Add = () => {
  const state = useLocation().state
  const [value, setValue] = useState(state?.title || "")
  const [title, setTitle] = useState(state?.title || "")
  const [caption, setCaption] = useState(state?.caption || "")
  const [file, setFile] = useState(null)
  const [cat, setCat] = useState(state?.cat || "")

  const upload = async ()=> {
    try{
      const formData = new FormData();
      formData.append("file", file)
      const res = await axios.post("/upload", formData)
      return res.data
    }catch(err) {
      console.log(err)
    }
  }

  const handleSubmit = async e=>{
    e.preventDefault()
    const imgUrl = upload()
    try{
        state ? await axios.put(`/posts/${state.id}`, {
          title,
          caption,
          cat,
          img: file, imgUrl : ""

        })
        : await axios.post(`/posts/`, {
          title,
          caption,
          cat,
          img: file ? imgUrl : ""
        })
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className='add'>
      <div className='auth'>
        <form>
        <input  type="text" value={title} placeholder='Title' onChange={e=>setTitle(e.target.value)} />
        <input  type="text" value={caption} placeholder='Caption' onChange={e=>setCaption(e.target.value)} />
        <input  type="text" value={cat} placeholder='category' onChange={e=>setCat(e.target.value)} />
        <input  type="file"  onChange={e=>setFile(e.target.files[0])}/>
        <button onClick={handleSubmit} >Add</button>
         <p></p>
    </form>
    </div>
    </div>
  )
}

export default Add