import "./register.css"


export default function Register() {
  return (
    <div className="register">
        <div className="registerWrapper">
            <div className="registerLeft">
                <h3 className="registerlogo">Shreesha Khadka</h3>
                <span className="registerDesc"> Connect with friends and around the world.
                </span>
            </div>
            <div className="registerRight">
                <div className="registerBox">
                    <input type="Text" placeholder="Enter Username" className="registerInput"/>
                    <input type="email" placeholder="Enter email" className="registerInput"/>
                    <input type="Password" placeholder="Enter password" className="registerInput"/>
                    <input type="password" placeholder="Confirm password" className="registerInput"/>

                    <button className="registerbtn">Sign Up</button>
                    <span className="loginUser">Already a User?</span>

                    <button className="loginRegisterButton">
                       Log into Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
