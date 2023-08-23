import HomePage from "./pages/home/HomePage"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Profile from "./pages/profile/Profile"


function App() {
  return(
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>



      </Routes>
      </BrowserRouter>
    
  )
}
export default App
