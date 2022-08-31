import axios from 'axios'
import React from 'react'
import classes from '../cssModules/Allposts.module.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Allposts = () => {
    const [posts, getPosts] = useState([])
    const [loaded, setLoaded] = useState(false)


    useEffect(() => {
        axios.get('http://localhost:5002/api/Posts')
            .then(res => {
                console.log(res.data)
                getPosts(res.data)
                setLoaded(true)
            })
    }, [])

    const deletePost = (postId) => {
        axios.delete('http://localhost:5002/api/Posts/' + postId)
            .then(res => console.log(res))
            .catch(err => console.log(err))

        return posts.filter(item => getPosts(posts.filter(item => item._id !== postId)))

    }

    return (
        <div className={classes.SpaceDiv}>
            <div className={classes.OuterDiv}>
                {!loaded ? <p>Loading...</p> : posts.map(item => {
                    return <div className={classes.Container}>
                        <h1 className={classes.H1}>{item.title}</h1>
                        <h4>{item.date.slice(0, 10)}</h4>
                        <Link to={'/post/' + item._id} className={classes.Link}>View Post</Link>
                        <Link to={item._id + '/edit'} className={classes.Link}>Edit Post</Link>
                        <button onClick={() => deletePost(item._id)} className={classes.Button}>Delete Post</button>
                    </div>



                })}
            </div>
        </div>
    )
}

export default Allposts