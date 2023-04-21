import React from 'react'
import './Main.css'
import RecommendedTitle from './RecommendedTitle'
import VideoSection from './VideoSection'
function Main() {
  return (
    <div className='main'>
        <RecommendedTitle/>
        <VideoSection/>
    </div>
  )
}

export default Main