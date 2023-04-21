import React from 'react'
import './SidebarMini.css'
import SidebarRowMini from './SidebarRowMini';
import HomeIcon from '@mui/icons-material/Home';
import FileDownloadIcon from '@mui/icons-material/FileDownloadOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
function SidebarMini() {
  return (
    <div className='sidebarMini'>
        <SidebarRowMini Icon={HomeIcon} title='Home'/>
        <SidebarRowMini Icon={HomeIcon} title="Short" />
        <SidebarRowMini Icon={HomeIcon} title="Subscriptions" />
        <SidebarRowMini Icon={VideoLibraryOutlinedIcon} title="Library" />
        <SidebarRowMini Icon={FileDownloadIcon} title="Download" />
    </div>
  )
}

export default SidebarMini