import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Header() {
  return (
    <div className='header'>

      <div className="header__left">
        <MenuIcon/>
        <img className='header__logo'
        src="data:image/png;base64,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" alt="" />
      </div>

      <div className="header__input">
        <input type="text" placeholder='Search' id="" />
        <SearchIcon className='header__inputButton'/>
      </div>

      <div className="header__icons">
        <VideoCallIcon className="header__icons"/>
        <AppsIcon className="header__icons"/>
        <NotificationsIcon className="header__icons"/>
        <AccountCircleIcon className="header__icons"/>
      </div>
      
    </div>
  )
}
