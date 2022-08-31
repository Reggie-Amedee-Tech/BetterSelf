import React from 'react'
import { Link } from 'react-router-dom';
import classes from '../cssModules/homepage.module.css';
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';

const Homepage = () => {
    return (
        <div>
            <div className={classes.HERO}>
                <div className={classes.SignInSection}>
                    <h1>Sign in to record your thoughts...</h1>
                    <Link to="" className={classes.Link}>SIGN-IN</Link>
                </div>
            </div>
            <div className={classes.BottomDiv}>
                <div className={classes.PictureBox}>
                    <h1 className={classes.H1}>Manage Anxiety</h1>
                    <img src={pic1} alt="pic1" className={classes.Picture}></img>
                    <p className={classes.P}>Journaling your thoughts helps you manage your anxiety</p>
                </div>
                <div className={classes.PictureBox}>
                    <h1 className={classes.H1}>Memory Retention</h1>
                    <img src={pic3} alt="pic3" className={classes.Picture}></img>
                    <p className={classes.P}>With GatherSelf, your are able to keep your brain in tip-top shape</p>
                </div>
                <div className={classes.PictureBox}>
                    <h1 className={classes.H1}>Strengthens Emotional Functions</h1>
                    <img src={pic2} alt="pic2" className={classes.Picture}></img>
                    <p className={classes.P}>With our platform, you will be able to express yourself in more efficient ways</p>
                </div>
               

            </div>
        </div>
    )
}

export default Homepage