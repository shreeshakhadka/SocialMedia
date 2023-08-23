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
                <form className="registerBox">
                    <input type="text" placeholder="Enter Username" required className="registerInput"/>
                    <input type="email" placeholder="Enter email" required className="registerInput"/>
                    <input type="Password" placeholder="Enter password" required minLength={6} className="registerInput"/>
                    <input type="password" placeholder="Confirm password" required minLength={6} className="registerInput"/>

                    <button className="registerbtn">Sign Up</button>
                    <span className="loginUser">Already a User?</span>

                    <button className="loginRegisterButton">
                       Log into Account</button>
                </form>
            </div>
        </div>
    </div>
  )
}
