import { NotificationsNone, Language, Settings } from '@mui/icons-material'
import React from 'react'
import "./topbar.css"


export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">DevilMyOpp-Admin</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings />
                </div>
                <img src="https://i.pinimg.com/564x/f1/8a/1e/f18a1e247bc520a0d73f082a04b3faa6.jpg" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}
