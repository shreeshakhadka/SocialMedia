import { useState } from "react"
import "./post.css"
import {MoreVert} from "@mui/icons-material"


export default function Post() {
    const[like,setLike] = useState(1)
    const[isLiked,setIsLiked] = useState(false)

    const likeHandler =() =>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }

  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img  className="postProfileImg" src="/assets/1.jpg" alt =""/>
                    <span className="postUserName"> Shreesha Khadka</span>
                    <span className="postDate"> 5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>

                </div>

            </div>

            <div className="postCenter">
                <span className="postText">Hey! Its my first post</span>
                <img className="postImg" src="assets/2.jpg" alt=""/>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeicon" src="assets/like.png" onClick={likeHandler}  alt=""/>
                    <img className="loveicon" src="assets/love.png" onClick={likeHandler} alt=""/>

                    <span className="postLikeCounter">{like}  people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 comments</span>
                </div>


            </div>
        </div>

    </div>
    
  )
}
