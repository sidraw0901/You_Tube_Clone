import React from 'react'

import './videoCard.css'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function VideoCard({image, title, channel, views, timestamp, channelImage}) {
  return (
    <div>
      
      <div className="videoCard">

        <img className='videoCard__thumbnail' src={image} alt="" />

        <div className="videoCard__info">
          <AccountCircleIcon className='videoCard_avatar' alt ={channel} src = {channelImage} />
          <div className="videotext">
            <h4>{title}</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, unde?</p>
          </div>

        </div>

      </div>

      {/* <img src = {image} alt =" "/> */}


    </div>
  )
}
