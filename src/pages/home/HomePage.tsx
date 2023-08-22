import Feed from "../../components/feed/Feed";
import NavBar from "../../components/navbar/NavBar";
import RightBar from "../../components/rightbar/RightBar";
import SideBar from "../../components/sidebar/SideBar";
import "./Home.css"

export default function HomePage() {
  return (
    <>
    
        <NavBar/> 
        <div className="homeContainer">
          
        <SideBar/> 
        <Feed/>
        <RightBar/>      


        </div>
      
    </>
  )
}
