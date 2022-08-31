import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import classes from '../cssModules/CreatePost.module.css'

const UpdatePost = () => {
    const [title, setTitle] = useState('');
    const [subTitle, setSubtitle] = useState('');
    const [body, setBody] = useState('');

    const location = useLocation()
    const id = location.pathname.slice(10,34)

    useEffect(() => {
        axios.get('http://localhost:5002/api/Posts/' + id)
        .then(res => {
            setTitle(res.data.title)
            setSubtitle(res.data.subTitle)
            setBody(res.data.body)
        })
    }, [])

    const updateSubmitHandler = (e) => {
        e.preventDefault();
        axios.put('http://localhost:5002/api/' + id + '/edit', {
            title,
            subTitle,
            body
        }) 
        .then(res => console.log(res))

    }


    return (
        <form onSubmit={updateSubmitHandler}>
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
                        <button type="submit" className={classes.Button}>Update Post</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default UpdatePost