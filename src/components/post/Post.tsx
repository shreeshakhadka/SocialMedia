import { useState } from "react"
import "./post.css"
import { IconButton } from "@mui/material"
import {MoreVert, Delete, Edit} from "@mui/icons-material"


export default function Post(props) {
    const [like,setLike] = useState(1)
    const [isLiked,setIsLiked] = useState(false)
    const [post,setPost] = useState([]);

    const likeHandler =() =>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
    const handleDelete =() =>{
        const confirmDelete = window.confirm("Are you sure you want to delete the post? ");
        if(confirmDelete){
            props.onDelete();
        }
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
                    <IconButton onClick={handleDelete}>
                        <Delete/>

                    </IconButton>
                    <Edit/>

                </div>

            </div>

            <div className="postCenter">
                <span className="postText">{props.post.value}</span>
                <img className="postImg" src={props.post.file} alt=""/>
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
