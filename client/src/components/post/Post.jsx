import React, { useEffect, useState } from 'react'
import "./post.css"
import { MoreVert } from "@mui/icons-material"
import axios from "axios"
import { format } from 'timeago.js'


//import {Users} from "../../dummyData"


export default function Post({post}) {
    
    //using state hooks
    const [like,setLike] = useState(post.likes.length)
    const [isLiked , setisLiked] = useState(false)
    const[user, setUser] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    useEffect( ()=>{
        const fetchUser = async ()=>{
          const res = await axios.get(`users/${post.userId}`)
          setUser(res.data)
        }
        fetchUser();
      }, [post.userId])
      

    //defining handlers
    const likeHandler  =()=>{
        setLike(isLiked ? like-1 : like+1)
        setisLiked(!isLiked);
    }

    return (
    <div className="post">
        <div className="postWrapper">

            <div className="postTop">
                <div className="postTopLeft">
                    <img src={user.profilePicture || PF+"person/noAvatar.png"} alt="Null" className="postProfileImg" />
                    <span className="postUsername">{user.username}</span>
                    <span className="postDate">{format(post.createdAt)}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>

            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={PF+post.img} alt="" className="postImg" />
            </div>
            
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src={`${PF}/like.png`} alt="Null" onClick={likeHandler} className="likeIcon" />
                    <img src={`${PF}/heart.png`} alt="Null" onClick={likeHandler} className="likeIcon" />
                    <span className="postLikeCounter">{like} people reacted </span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
