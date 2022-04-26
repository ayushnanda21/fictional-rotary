import React from 'react'
import "./share.css"
import { PermMedia , Label, Room , EmojiEmotions} from "@mui/icons-material"
import { useContext } from 'react'
import {AuthContext} from "../../context/AuthContext"

export default function Share() {
    const { user }  = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className="share">
        <div className="shareWrapper">

            <div className="shareTop">
                <img src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} alt="Null" className="shareProfileImg" />
                <input placeholder= {'Share your thoughts : ' + user.username + ' ?'} className="shareInput" />
            </div>

            <hr className="shareHr" />

            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor='tomato' className="shareIcon" />
                        <span className='shareOptionText'>Photo/Video </span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor='blue' className="shareIcon" />
                        <span className='shareOptionText'>Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor="green" className="shareIcon" />
                        <span className='shareOptionText'>Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                        <span className='shareOptionText'>Reaction</span>
                    </div>
                </div>

                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}
