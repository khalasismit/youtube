import React from 'react'
import './SidebarRowMini.css'
function SidebarRowMini({Selected,Icon,title}) {
  return (
    <div className='sidebarRowMini'>
      <div className={`sidebarRowMini__row ${Selected && 'Selected'}`}>
        <Icon className='sidebarRowMini__icon' />
        <h4 className='sidebarRowMini__title'>{title}</h4>
      </div>
    </div>
  )
}

export default SidebarRowMini