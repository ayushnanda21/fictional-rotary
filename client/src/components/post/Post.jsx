import React, { useState } from 'react'
import "./post.css"
import { MoreVert } from "@mui/icons-material"

import {Users} from "../../dummyData"

export default function Post({post}) {
    
    //using state hooks
    const [like,setLike] = useState(post.like)
    const [isLiked , setisLiked] = useState(false)

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
                    <img src={Users.filter((u) =>u.id === post.userId)[0].profilePicture} alt="Null" className="postProfileImg" />
                    <span className="postUsername">{Users.filter((u) =>u.id === post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>

            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.photo} alt="Not found" className="postImg" />
            </div>
            
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/assets/like.png" alt="Null" onClick={likeHandler} className="likeIcon" />
                    <img src="/assets/heart.png" alt="Null" onClick={likeHandler} className="likeIcon" />
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
