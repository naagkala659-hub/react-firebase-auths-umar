import { Route, Routes } from "react-router-dom";
import Users from "./components/screens/Users";
import UserDataForm from "./components/UserDataForm";
import Login from "../src/components/screens/Login";
import Signup from "../src/components/screens/Signup";
import { ToastContainer } from "react-toastify";
import "./App.css"

let App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* <Users/> */}
    </>
  );
};
export default App;
