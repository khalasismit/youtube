import React from 'react'
import './SidebarRowFull.css'
function SidebarRowFull({Selected,Icon , title}) {
  return (
    <div className={`sidebarRowFull ${Selected && 'Selected'} `}>
        <Icon src={Icon} className="sidebarRowFull__icon"/>
        <h4>{title}</h4>
    </div>
  )
}

export default SidebarRowFull