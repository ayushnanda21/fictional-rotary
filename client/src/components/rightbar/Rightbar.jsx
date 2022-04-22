import React  from 'react'
import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from '../online/Online'


export default function Rightbar({profile}) {


  // inner components
  const HomeRightbar = ()=>{
    return(
      <>
      <div className="birthdayContainer">
            <img src="assets/gift.png" alt="null" className="birthdayImg" />
            <span className="birthdayText">
              <b>Pola Foster </b>and <b>3 other friends </b> have a birthday today</span>
          </div>
            <img src="assets/ad.png" alt="null" className="rightbarAd" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">

              {/* dynamic */}
              {Users.map((u)=>(
                  <Online key={u.id} user={u} />
              ))}

            </ul>
      </>
    )
  }

  const ProfileRightbar = ()=>{
    return( 
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">City: </span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">From: </span>
            <span className="rightbarInfoValue">xyz</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">Relationship Status: </span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>

        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" className='rightbarFollowingImg'/> 
            <span className="rightbarFollowingName">user name</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/2.jpeg" alt="" className='rightbarFollowingImg'/> 
            <span className="rightbarFollowingName">user name</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/3.jpeg" alt="" className='rightbarFollowingImg'/> 
            <span className="rightbarFollowingName">user name</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/4.jpeg" alt="" className='rightbarFollowingImg'/> 
            <span className="rightbarFollowingName">user name</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/5.jpeg" alt="" className='rightbarFollowingImg'/> 
            <span className="rightbarFollowingName">user name</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/6.jpeg" alt="" className='rightbarFollowingImg'/> 
            <span className="rightbarFollowingName">user name</span>
          </div>
          
        </div>
      </>
    )
  }

  return (
      <div className="rightbar">
        <div className="rightbarWrapper">
          {profile ? <ProfileRightbar /> : <HomeRightbar />}
        </div>
      </div>

  )
}
