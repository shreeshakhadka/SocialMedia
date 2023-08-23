import "./rightbar.css"
import {School, Home, LocationOn} from "@mui/icons-material"

export default function RightBar({profile}) {

  const HomeRightbar =() =>{
    return(
      <>
       <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/birthday.png" alt=""/>
          <span className="birthdayText"> 
          <b>Shreesha Khadka</b> and <b>3 other friends have a birthday today</b></span>
        </div>

        <img className="rightbarAdd" src="assets/adv.jpg" alt=""/>
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <span className="Online"></span>
              <img 
              className="rightbarProfileImg" 
              src="/assets/2.jpeg" 
              alt=""
              />
            </div>
            <span className="rightbarUsername">Shreesha Khadka</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
            <span className="Online"></span>
              <img 
              className="rightbarProfileImg" 
              src="assets/2.jpeg" 
              alt=""
              />
            </div>
            <span className="rightbarUsername">Shreesha Khadka</span>
          </li>

          
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
            <span className="Online"></span>
              <img 
              className="rightbarProfileImg" 
              src="assets/2.jpeg" 
              alt=""
              />
            </div>
            <span className="rightbarUsername">Shreesha Khadka</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
            <span className="Online"></span>
              <img 
              className="rightbarProfileImg" 
              src="assets/2.jpeg" 
              alt=""
              />
            </div>
            <span className="rightbarUsername">Shreesha Khadka</span>
          </li>
        </ul>


      </>
    )
  }


  const ProfileRightbar =() => {
    return(
      <>

      <div className="profileIntro">
      <h4 className="rightbarTitle"> Intro</h4>
      <div className="rightbarInfo">

        <div className="rightbarInfoItem">
          <School className="rightbarIcon"/>
          <span className="rightbarInfoKey">Studies at: </span>
          <span className="rightbarInfoValue">Clark University </span>
        </div>

        <div className="rightbarInfoItem">
          <School className="rightbarIcon"/>
          <span className="rightbarInfoKey">Studied at: </span>
          <span className="rightbarInfoValue">Informatics College, Pokhara </span>
        </div>

        <div className="rightbarInfoItem">
          <School className="rightbarIcon"/>
          <span className="rightbarInfoKey">Studied at: </span>
          <span className="rightbarInfoValue">Amarsingh Model Higher Secondary School</span>
        </div>

        <div className="rightbarInfoItem">
          <School className="rightbarIcon"/>
          <span className="rightbarInfoKey">Studied at: </span>
          <span className="rightbarInfoValue">Shishu Niketan Higher Secondary School</span>
        </div>

        <div className="rightbarInfoItem">
          <Home className="rightbarIcon"/>
          <span className="rightbarInfoKey">Lives in: </span>
          <span className="rightbarInfoValue">New York </span>
        </div>

        <div className="rightbarInfoItem">
          <LocationOn className="rightbarIcon"/>
          <span className="rightbarInfoKey">From: </span>
          <span className="rightbarInfoValue">Pokhara </span>
        </div>
      </div>
      </div>

     
      <div>
      <h4 className="rightbarTitle"> Friends </h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/2.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Shreesha Khadka</span>
        </div>

        <div className="rightbarFollowing">
          <img src="assets/2.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Shreesha Khadka</span>
        </div>

        <div className="rightbarFollowing">
          <img src="assets/1.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Shreesha Khadka</span>
        </div>

        <div className="rightbarFollowing">
          <img src="assets/1.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Shreesha Khadka</span>
        </div>

        <div className="rightbarFollowing">
          <img src="assets/2.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Shreesha Khadka</span>
        </div>

        <div className="rightbarFollowing">
          <img src="assets/2.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Shreesha Khadka</span>
        </div>
      </div>

      </div>
      


      
      </>
    
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
       {profile ? <ProfileRightbar/> : <HomeRightbar/>}

        
      </div>
    </div>
  )
}
