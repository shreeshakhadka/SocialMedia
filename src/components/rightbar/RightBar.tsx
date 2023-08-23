import "./rightbar.css"


export default function RightBar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
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

        
      </div>
    </div>
  )
}
