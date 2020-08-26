import React from 'react';
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

function Header() {
    return (
        // BEM naming class
        <div className="header">
            <div className="header-icons">
                {/* All icons will be placed here */}
                <HomeIcon />
                <FlashOnIcon />
                <LiveTvIcon />
                <VideoLibraryIcon />
                <SearchIcon />
                <PersonOutlineIcon />
            </div>
            <img 
            src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" 
            alt="hulu-logo"/>
        </div>
    )
}

export default Header


