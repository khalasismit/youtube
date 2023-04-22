import React from 'react'
import './SidebarRowFull.css'
function SidebarRowFull({Icon , title}) {
  return (
    <div className='sidebarRowFull'>
        <Icon src={Icon} className="sidebarRowFull__icon"/>
        <h4>{title}</h4>
    </div>
  )
}

export default SidebarRowFull