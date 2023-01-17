import React from 'react'
import Button from './Button'
import '../Styles/homeSection.css'
import video2 from '../Assets/videos/video-2.mp4'
import { FaPlayCircle } from 'react-icons/fa';

function HomeSection() {
    return (
        <div className='homeSection'>
            {/* <video src={video2} autoPlay loop muted /> */}
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="homeSection__btns">
                <Button className="btns" buttonSize="btn--large" buttonStyle="btn--outline">GET STARTED</Button>
                <Button className="btns" buttonSize="btn--large">WATCH TRAILER <FaPlayCircle style={{ margin: "2px 0 -2px 4px" }} /></Button>
                {/* <FaPlayCircle /> */}
            </div>
        </div>
    )
}

export default HomeSection;