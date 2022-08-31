import React, {useEffect, useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import classes from '../cssModules/GetPostDetails.module.css'
import axios from 'axios'

const GetPostDetail = () => {
    const [post, setPost] = useState({})

    const navigate = useNavigate();
    const location = useLocation();
    const id = location.pathname.slice(6)

    useEffect(() => {
        axios.get('http://localhost:5002/api/Posts/' + id)
        .then(res => {
            setPost({...res.data})
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [])


  return (
    <div className={classes.MainDiv}>
        <div className={classes.Container}>
            <h1 className={classes.H1}>{post.title}</h1>
            <h3 className={classes.H3}>{post.subTitle}</h3>
            <p className={classes.P}>{post.body}</p>
        </div>
    </div>
  )
}

export default GetPostDetail