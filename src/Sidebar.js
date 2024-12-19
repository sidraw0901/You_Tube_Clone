import React from 'react'
import './sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import SidebarRows  from './SidebarRows'
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRows title = "Home" Icon = {<HomeIcon/>} />
      <SidebarRows title= "Trending" Icon = {<WhatshotIcon/>} />
      <SidebarRows title= "Subscription" Icon = {<SubscriptionsIcon/>} />
      <hr />
      <SidebarRows title = "Library" Icon = {<VideoLibraryIcon/>} />
      <SidebarRows title = "History" Icon = {<HistoryIcon/>} />
      <SidebarRows title = "Watch Later" Icon = {<WatchLaterIcon/>} />
      <SidebarRows title = "Liked videos" Icon = {<ThumbUpOffAltIcon/>} />
      <SidebarRows title = "Show more" Icon = {<KeyboardArrowDownIcon/>} />
      <hr />

    </div>
  )
}
