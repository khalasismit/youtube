import React from 'react'
import './SidebarMini.css'
import SidebarRowMini from './SidebarRowMini';
import HomeIcon from '@mui/icons-material/Home';
import FileDownloadIcon from '@mui/icons-material/FileDownloadOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
function SidebarMini() {
  return (
    <div className='sidebarMini'>
        <SidebarRowMini Icon={HomeIcon} title='Home'/>
        <SidebarRowMini Icon={PlayCircleOutlineIcon} title="Short" />
        <SidebarRowMini Icon={SubscriptionsOutlinedIcon} title="Subscriptions" />
        <SidebarRowMini Icon={VideoLibraryOutlinedIcon} title="Library" />
        <SidebarRowMini Icon={FileDownloadIcon} title="Download" />
    </div>
  )
}

export default SidebarMini