import { useEffect, useState } from "react";
import axios from "axios";
import DenseTable from "../DenseTable";

function App() {
  
  let [userData,setUserData] = useState([])

  useEffect(() => {
    try {
      axios
        .get("http://localhost:3000/umarKUsers")
        .then((res) => {
          setUserData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error)
    }
  }, []);


  console.log(userData)

  return (
    <>
    <DenseTable userData = {userData}/>
    </>
  );
}

export default App;
