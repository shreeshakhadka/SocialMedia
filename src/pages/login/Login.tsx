import { useRef } from "react";
import "./login.css"


export default function  Login() {
    const email = useRef();
    const password = useRef();
    const handleClick =(e)=>{
        e.preventDefault();
        console.log(email.current.value)
    }
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginlogo">Shreesha Khadka</h3>
                <span className="loginDesc"> Connect with friends and around the world.
                </span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input type="email" placeholder="Enter email" required className="loginInput" ref={email}/>
                    <input type="Password" placeholder="Enter password" required minLength={6} className="loginInput" ref={password}/>
                    <button className="loginbtn">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">
                        Create a New Account</button>
                </form>
            </div>
        </div>
    </div>
  )
}
