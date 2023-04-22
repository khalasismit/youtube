import React from 'react'
import './SidebarFull.css'
import SidebarRowFull from './SidebarRowFull'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
function SidebarFull() {
  return (
    <div className='sidebarFull'>
        <SidebarRowFull Icon={HomeIcon} title="Home" />
        <SidebarRowFull Icon={WhatshotOutlinedIcon} title="Short" />
        <SidebarRowFull Icon={SubscriptionsIcon} title="Subscription" />
        <hr />
        <SidebarRowFull Icon={VideoLibraryIcon} title="Library" />
        <SidebarRowFull Icon={HistoryIcon} title="History" />
        <SidebarRowFull Icon={SlideshowOutlinedIcon} title="Your video" />
        <SidebarRowFull Icon={WatchLaterOutlinedIcon} title="Watch later" />
        <SidebarRowFull Icon={FileDownloadOutlinedIcon} title="Download" />
        <SidebarRowFull Icon={ThumbUpOutlinedIcon} title="Liked videos" />
        <SidebarRowFull Icon={ExpandMoreOutlinedIcon} title="Show more" />
        <hr />
    </div>
  )
}

export default SidebarFull