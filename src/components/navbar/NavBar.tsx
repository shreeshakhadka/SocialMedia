import "./Nav.css"
import {Search, Person, Chat, Notifications} from "@mui/icons-material"



export default function NavBar() {
  return (
    <div className="navbarContainer">
        <div className="navbarLeft">
            <span className="navbarLogo">Shreesha Khadka </span>
        </div>
        <div className="navbarCenter">
            <div className="navSearchBar">
            <Search className="searchIcon"/>
            <input placeholder="Search friends" className="searchInput" />

            </div>
            
        </div>
        <div className="navbarRight">
            <div className="navbarLinks">
                <span className="navbarLink">HomePage</span>
                <span className="navbarLink">Timeline</span>
            </div>
            <div className="navbarIcons">
                <div className="navbarIconItem">
                    <Person/>
                    <span className="navbarIconBadge">1</span>
                </div>


                <div className="navbarIconItem">
                    <Chat/>
                    <span className="navbarIconBadge">2</span>
                </div>


                <div className="navbarIconItem">
                    <Notifications/>
                    <span className="navbarIconBadge">10</span>
                </div>
            </div>
            <img src="/assets/1.jpg" alt="" className="navbarImage" />


        </div>

    </div>
  )
}
