import Feed from "../../components/feed/Feed"
import NavBar from "../../components/navbar/NavBar"
import RightBar from "../../components/rightbar/RightBar"
import SideBar from "../../components/sidebar/SideBar"
import "./profile.css"

export default function Profile() {
  return (
    <>
    
        <NavBar/> 
        <div className="profile">
          
        <SideBar/> 
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                <img className ="profileCoverImg" src="assets/2.jpg" alt=""/>
                <img className ="profileUserImg" src="assets/1.jpg" alt=""/>
                </div>

                <div className="profileInfo">
                    <h4 className="profileInfoName">Shreesha Khadka</h4>
                    <span className="profileInfoDesc">Hi everyone</span>


                </div>  
                
            </div>
            <div className="profileRightBottom">
            <Feed/>
            <RightBar profile/>  

            </div>

          
        </div> 


        </div>
      
    </>
  )
}
