import "./share.css"
import {PermMedia, Videocam, Room, EmojiEmotions} from "@mui/icons-material"


export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg" src="/assets/1.jpg" alt=""/>
                <input placeholder="What's on your mind?"
                className="shareInput"/>
            </div>
            <hr className="shareHr"/>
            <div className="shareBottom">
                <div className="shareOptions">

                <div className="shareOption">
                        <Videocam htmlColor="red" className="shareIcon"/>
                        <span className="shareOptionText">Live video</span>
                    </div>
                    <div className="shareOption">
                        <PermMedia htmlColor="green" className="shareIcon"/>
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    
                    <div className="shareOption">
                        <Room htmlColor="blue" className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="gold" className="shareIcon"/>
                        <span className="shareOptionText">Feeling/activity</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
            
        </div>
    </div>
  )
}