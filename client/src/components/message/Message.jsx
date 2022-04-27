import React from 'react'
import "./message.css"

export default function Message({own}) {
  return (
      
    <div className={own ? "message own" :"message"}>
        <div className="messageTop">
            <img src="https://www.etestware.com/wp-content/uploads/2020/08/shutterstock_515285995-1200x580.jpg" alt="" className="messageImg" />
            <p className="messageText">Hello this is a message</p>
        </div>
        <div className="messageBottom">
            1hour ago
        </div>
    </div>
  )
}
