import React from 'react'
import "./chatOnline.css"

export default function ChatOnline() {
  return (
    <div className="chatOnline">
        <div className="chatOnlineFriend">
            <div className="chatOnlineImgContainer">
            <img src="https://www.etestware.com/wp-content/uploads/2020/08/shutterstock_515285995-1200x580.jpg" alt="" className="chatOnlineImg" />
                <div className="chatOnlineBadge"></div>
            </div>
            <span className="chatOnlineName">John Doe</span>
        </div>

        <div className="chatOnlineFriend">
            <div className="chatOnlineImgContainer">
            <img src="https://www.etestware.com/wp-content/uploads/2020/08/shutterstock_515285995-1200x580.jpg" alt="" className="chatOnlineImg" />
                <div className="chatOnlineBadge"></div>
            </div>
            <span className="chatOnlineName">John Doe</span>
        </div>
        <div className="chatOnlineFriend">
            <div className="chatOnlineImgContainer">
            <img src="https://www.etestware.com/wp-content/uploads/2020/08/shutterstock_515285995-1200x580.jpg" alt="" className="chatOnlineImg" />
                <div className="chatOnlineBadge"></div>
            </div>
            <span className="chatOnlineName">John Doe</span>
        </div>
    </div>
  )
}
