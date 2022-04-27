import React from 'react'
import "./messenger.css"
import Topbar from "../../components/topbar/Topbar";
import Conversation from "../../components/conversation/Coversation"
import Message  from '../../components/message/Message';
import ChatOnline from '../../components/chatOnline/ChatOnline';

export default function Messenger() {
  return (
      <>
    <Topbar />
    <div className="messenger">
        <div className="chatMenu">
            <div className="chatMenuWrapper">
                <input placeholder='Search for your friends' className="chatMenuInput" />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
            </div>
        </div>
        <div className="chatBox">
            <div className="chatBoxWrapper">
                <div className="chatBoxTop">
                    <Message />
                    <Message own={true}/>
                    <Message />
                    <Message own={true} />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                </div>
                <div className="chatBoxBottom">
                    <textarea placeholder='Write something' className='chatMessageInput'></textarea>
                    <button className="chatSubmitButton">Send</button>
                </div>
            </div>
        </div>
        <div className="chatOnline">
            <div className="chatOnlineWrapper">
                <ChatOnline />
            </div>
        </div>
    </div>

   </>
  )
}