import React from 'react'
import './Title.css'
function Title({ Selected, title }) {
  return (
    <div className={`Title__title  ${Selected && "Selected"}`} >
      <h4>{title}</h4>
    </div>
  )
}

export default Title