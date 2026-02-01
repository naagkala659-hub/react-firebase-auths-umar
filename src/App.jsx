
import { Route, Routes } from "react-router-dom"
import Users from "./components/screens/Users"
import UserDataForm from "./components/UserDataForm"
import Login from "../src/components/screens/Login"
import Signup from "../src/components/screens/Signup"


let App = () => {

  return(
    <>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>

    </Routes>

      {/* <Users/> */}
    </>
  )
} 
export default App