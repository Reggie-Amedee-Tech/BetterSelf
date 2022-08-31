import React from 'react'
import classes from '../cssModules/Header.module.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className={classes.OuterBox}>
            <div className={classes.Container}>
            <h2>GatherSelf, Inc.</h2>
            <h2 onClick={() => navigate('/create')} className={classes.H2}>Add Post</h2>
            <h2 onClick={() => navigate('/allPosts')} className={classes.H2}>View all posts</h2>
            </div>
        </div>
    )
}

export default Header