import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoIcon from '@mui/icons-material/VideoCall';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Avatar } from '@mui/material';
import './Navbar.css'
function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__left">
                <MenuIcon className='navbar__Icon' />
                <img src="../YouTubeLogo.png" alt="YouTube" className="youtubeIcon" />
            </div>
            <div className="navbar__search">
                <input type="text" placeholder='Search' />
                <SearchIcon className='navbar__searchBtn' />
                <MicIcon className='navbar__Icon' />
            </div>
            <div className="navbar__Icons">
                <VideoIcon className='navbar__Icon' />
                <NotificationsNoneIcon className='navbar__Icon' />
                <Avatar className='navbar__profile'/>
            </div >
        </div>
    )
}

export default Navbar