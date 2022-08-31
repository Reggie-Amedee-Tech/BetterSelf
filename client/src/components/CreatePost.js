import React, { useState } from 'react'
import classes from '../cssModules/CreatePost.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const CreatePost = (e) => {
  const [title, setTitle] = useState('');
  const [subTitle, setSubtitle] = useState('');
  const [body, setBody] = useState('');

  const navigate = useNavigate()


  const onClickSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5002/api/createPost', {
      title,
      subTitle,
      body
    })
    setTitle('')
    setSubtitle('')
    setBody('')
    navigate('/allPosts')
      .then(res => {
        
        console.log(res)
        
      })
      .catch(err => console.log(err))

  }

  return (
    <form onSubmit={onClickSubmit}>
      <div className={classes.MidSection}>
        <div className={classes.Container}>
          <div>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className={classes.Input} placeholder="Title" style={{ marginTop: "20px" }} />
          </div>
          <div>
            <input value={subTitle} onChange={(e) => setSubtitle(e.target.value)} type="text" className={classes.Input} placeholder="Sub Title" />
          </div>
          <div>
            <textarea value={body} onChange={(e) => setBody(e.target.value)} type="textarea" className={classes.Input3} placeholder="Text Here - Minimum Character Count 50..." />
          </div>
          <div className={classes.ButtonDiv}>
            <button type="submit" className={classes.Button}>Post</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default CreatePost