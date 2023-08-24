import { useState } from "react"
import "./share.css"
import {PermMedia, Videocam, Room, EmojiEmotions} from "@mui/icons-material"

export default function Share(props) {

    const [value,setValue] = useState('')
    const [file, setFile] = useState('')
    

    function handleSubmit(e){
        e.preventDefault()
        console.log(value)
        props.setPosts((prevState) => [...prevState, {value, file}]);
        setValue('')
        setFile('')
        }
        console.log(file)
  
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop" >
                <img className="shareProfileImg" src="/assets/1.jpg" alt=""/>
                <input placeholder="What's on your mind?"
                className="shareInput"
                type="text" 
                value={value}
                onChange={(e) => setValue(e.target.value)}
                />
                {file && <img style={{width:'100px', height:'100px' }} src={file} />}
            </div>
            <hr className="shareHr"/>
            <form className="shareBottom" onSubmit={handleSubmit} >
                {/* <input type="text" onChange={(e) =>setTodo(e.target.value)} value={todo}/> */}
                <div className="shareOptions">

                    <div className="shareOption">
                        <Videocam htmlColor="red" className="shareIcon"/>
                        <span className="shareOptionText">Live video</span>
                    </div>
                    <label htmlFor="file" className="shareOption">
                        <PermMedia htmlColor="green" className="shareIcon"/>
                        <span className="shareOptionText">Photo or Video</span>
                        <input style={{display:"none"}} type="file" id="file" accept=".png,.jpeg,.jpg"  onChange={(e) => setFile(URL.createObjectURL(event.target.files[0]))}/>


                    </label>
                    
                    <div className="shareOption">
                        <Room htmlColor="blue" className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="gold" className="shareIcon"/>
                        <span className="shareOptionText">Feeling/activity</span>
                    </div>
                </div>
                <button  type="submit" className="shareButton">Share</button>
            </form>
            
        </div>
    </div>
  )
}
