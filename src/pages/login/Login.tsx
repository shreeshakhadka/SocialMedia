import "./login.css"


export default function  Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginlogo">Shreesha Khadka</h3>
                <span className="loginDesc"> Connect with friends and around the world.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="Email" placeholder="Enter email" className="loginInput"/>
                    <input type="Password" placeholder="Enter password" className="loginInput"/>
                    <button className="loginbtn">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">
                        Create a New Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
