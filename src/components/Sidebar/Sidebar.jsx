import React from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';

const Sidebar = () => {
  return (
    <div  className="sidebar">
        <div className='top'>
            <img className='menu' src={assets.menu_icon} alt=''/>
            <div className='new-chat'>
                <img src={assets.plus_icon}/>
                <p>New Chat</p>
            </div>
            <div className='recent'>
                <p className='recent-title'>Recent</p>
                <div className='recent-entry'>
                    <img src={assets.message_icon}/>
                    <p>what is vue</p>
                </div>
            </div>
        </div>
        <div className='bottom'>
            <div className='bottom-item recent-entry'>
                <img src={assets.question_icon} />
                <p>Help</p>
            </div>
            <div className='bottom-item recent-entry'>
                <img src={assets.history_icon} />
                <p>Activity</p>
            </div>
            <div className='bottom-item recent-entry'>
                <img src={assets.setting_icon} />
                <p>Setting</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar