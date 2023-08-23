
import HomePage from "./pages/home/HomePage"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Profile from "./pages/profile/Profile"
import {BrowserRouter , Routes, Route} from "react-router-dom"


function App() {
  return(
    <BrowserRouter>
      <Routes>
      <Route path = "/"> element={<HomePage/>} </Route>

        <Route path = "/login">
          <Login/>
        </Route>

        <Route path = "register">
          <Register/>
        </Route>

        <Route path = "/profile/:username">
          <Profile/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}
export default App
