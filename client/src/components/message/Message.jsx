import React from 'react'
import "./message.css"
import {format} from "timeago.js"

export default function Message({message ,own}) {
  return (
      
    <div className={own ? "message own" :"message"}>
        <div className="messageTop">
            <img src="https://www.etestware.com/wp-content/uploads/2020/08/shutterstock_515285995-1200x580.jpg" alt="" className="messageImg" />
            <p className="messageText">{message.text}</p>
        </div>
        <div className="messageBottom">
            {format(message.createdAt)}
        </div>
    </div>
  )
}
