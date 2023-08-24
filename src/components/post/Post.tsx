import { useState } from "react"
import "./post.css"
import { IconButton } from "@mui/material"
import {MoreVert, Delete, Edit, Save} from "@mui/icons-material"


export default function Post(props) {
    const [like,setLike] = useState(1)
    const [isLiked,setIsLiked] = useState(false)
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(props.post.value);
    const [editedImage, setEditedImage] = useState(props.post.file);

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

    const handleEdit =() =>{
        setIsEditing(true);
    }

    const handleSave = () =>{
        setEditedText(editedText);
        setEditedImage(editedImage);
        setIsEditing(false);
    }
    const uploadTime = new Date().toLocaleString();

  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img  className="postProfileImg" src="/assets/1.jpg" alt =""/>
                    <span className="postUserName"> Shreesha Khadka</span>
                    <span className="postDate"> {uploadTime}</span>
                </div>
                <div className="postTopRight">
                    <IconButton> <MoreVert/> </IconButton>
                    {isEditing ?(
                        <IconButton onClick={handleSave}>
                            <Save/>  
                        </IconButton>
                    ) : (
                        <IconButton onClick={handleEdit}>
                            <Edit/>
                        </IconButton>
                    )}
                    
                    <IconButton onClick={handleDelete} style={{textDecoration:"none"}}>
                        <Delete/>
                    </IconButton>
                    

                </div>

            </div>

            <div className="postCenter">
          {isEditing ? (
            <div>
              <textarea
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                rows="4"
                cols="50"
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setEditedImage(URL.createObjectURL(e.target.files[0]))}
              />
            </div>
          ) : (
            <div>
              <span className="postText">{editedText}</span>
              <img className="postImg" src={editedImage} alt="" />
            </div>
          )}
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeicon"
              src="assets/like.png"
              onClick={likeHandler}
              alt=""
            />
            <img
              className="loveicon"
              src="assets/love.png"
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}