import Headers from "./components/Header/Headers";
import Navbar from "./components/Navebar/Navbar";
import "./App.css";
import requests from "./helpers/requests";
import { useState } from "react";
import Result from "./components/Result/Result"

const App = () => {

   const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
   console.log(selectedOption);
  return (
    <div className='app' >
      
      <Headers />
      <Navbar setSelectedOption={setSelectedOption}/>
      <Result selectedOption={selectedOption}/>
    </div>
  )
}

export default App

