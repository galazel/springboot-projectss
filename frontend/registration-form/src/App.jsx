import {Routes, Route } from "react-router-dom"
import ProfileInfo from "./ProfileInfo";
import LandingPage from "./LandingPage";

function App() {
  return (
      <Routes>
          <Route path="/" element = {<LandingPage/>}/>
          <Route path="/profile" element ={<ProfileInfo/>}/>
      </Routes>
  )
}

export default App
