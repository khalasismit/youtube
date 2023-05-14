import React from 'react'
import { Avatar } from '@mui/material'
import './VideoCard.css'
function VideoCard({ thumbnail, channelName, channel, title, timestamp, views }) {
    return (
        <div className='videoCard'>
                <img src={thumbnail} alt="youTube__thumbnail" className="videoCard__thumbnail"  />
            <div className="videoCard__info">
                <Avatar src={channel} alt={channelName} className='videoCard__channel' ></Avatar>
                <div className="videoCard__text">
                    <h4>{title}</h4>
                    <p>{channelName}</p>
                    <p>{views} views • {timestamp} ago</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard