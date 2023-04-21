import React from 'react'
import './SidebarRowMini.css'
function SidebarRowMini({Icon,title}) {
  return (
    <div className='sidebarRowMini'>
        <Icon className='sidebarRowMini__icon' />
        <h4 className='sidebarRowMini__title'>{title}</h4>
    </div>
  )
}

export default SidebarRowMini