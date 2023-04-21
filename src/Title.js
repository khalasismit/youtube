import React from 'react'
import'./Title.css'
function Title({title}) {
  return (
    <div className='Title__title'>
        <h4>{title}</h4>
    </div>
  )
}

export default Title