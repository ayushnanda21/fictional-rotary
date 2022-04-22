import React from 'react'
import "./profile.css"
import Topbar from '../../components/topbar/Topbar'
import Sidebar from "../../components/sidebar/Sidebar"
import Rightbar from "../../components/rightbar/Rightbar"
import Feed from "../../components/feed/Feed"

export default function Profile() {
  return (
    <>
    <Topbar />
    <div className="profile">
      <Sidebar />
      <div className="profileRight">
          <div className="profileRightTop">
              <div className="profileCover">
            <img src="assets/post/3.jpeg" alt="null" className="profileCoverImg" />
            <img src="assets/person/7.jpeg" alt="null" className="profileUserImg" />
          </div>
          <div className="profileInfo">
              <h4 className='profileInfoName'>User Name</h4>
              <span className='profileInfoDesc'>Description of the user</span>
          </div>
          </div>
          <div className="profileRightBottom">
          <Feed />
          <Rightbar profile/>
          </div>
      
      </div>
    </div>
    
    </>
  )
}
