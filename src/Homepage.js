import React from 'react';
import "./Homepage.css";
import Sidenav from "./navigation/Sidenav";
import Timeline from "./timeline/Timeline";

const Homepage = () => {
    return (
        <div className='homepage'>
            <div className="homepage_nav">
                <Sidenav />
            </div>
            <div className="homepage_timeline">
                <Timeline />
            </div>
        </div>
    );
}

export default Homepage;
