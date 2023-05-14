import React from 'react'
import './SidebarFull.css'
import SidebarRowFull from './SidebarRowFull'
// import CloseIcon from '@mui/icons-material/Close';
import YouTubeIcon from '@mui/icons-material/YouTube';
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
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import DryCleaningOutlinedIcon from '@mui/icons-material/DryCleaningOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
function SidebarFull() {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  // setSidebar({CloseIcon})
  return (
    <div className='sidebarFull'>
      <MenuIcon className='closeIcon' onClick={showSidebar} />
      {/* <CloseIcon className='closeIcon' onClick={showSidebar} /> */}
      <div className={sidebar ? 'sidebarFull__columnActive' : 'sidebarFull__column'}>
        <SidebarRowFull Selected Icon={HomeIcon} title="Home" />
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
        <h4>Subscription</h4>
        <hr />
        <h4>Explore</h4>
        <SidebarRowFull Icon={WhatshotOutlinedIcon} title="Trending" />
        <SidebarRowFull Icon={ShoppingBagOutlinedIcon} title="Shopping" />
        <SidebarRowFull Icon={MusicNoteOutlinedIcon} title="Music" />
        <SidebarRowFull Icon={MovieOutlinedIcon} title="Movie" />
        <SidebarRowFull Icon={SensorsOutlinedIcon} title="Live" />
        <SidebarRowFull Icon={SportsEsportsOutlinedIcon} title="Gaming" />
        <SidebarRowFull Icon={NewspaperOutlinedIcon} title="News" />
        <SidebarRowFull Icon={EmojiEventsOutlinedIcon} title="Sports" />
        <SidebarRowFull Icon={DryCleaningOutlinedIcon} title="Fashion & Beauty" />
        <hr />
        <h4>More from Youtube</h4>
        <SidebarRowFull Icon={YouTubeIcon} title="YouTube Premium" />
        <SidebarRowFull Icon={YouTubeIcon} title="YouTube Studio" />
        <SidebarRowFull Icon={YouTubeIcon} title="YouTube Music" />
        <SidebarRowFull Icon={YouTubeIcon} title="YouTube Kids" />
        <hr />
        <SidebarRowFull Icon={SettingsOutlinedIcon} title="Settings" />
        <SidebarRowFull Icon={FlagOutlinedIcon} title="Report history" />
        <SidebarRowFull Icon={HelpOutlineOutlinedIcon} title="Help" />
        <SidebarRowFull Icon={FeedbackOutlinedIcon} title="Send feedback" />
        <hr />
      </div>
    </div>
  )
}

export default SidebarFull