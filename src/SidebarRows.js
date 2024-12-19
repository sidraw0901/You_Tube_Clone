import React from 'react'
import './SidebarRow.css'

export default function SidebarRows(props) {
  return (
    <div className='sidebarRow'>

        <h2 className="sidebarRow__icon">{props.Icon}</h2>
        <h2 className='sidebarRow__title'>{props.title}</h2>
        
    </div>
  )
}
