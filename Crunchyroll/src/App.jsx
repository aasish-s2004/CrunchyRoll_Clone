import BeforeLoginPage from "./Pages/BeforeLogin";
import LoginPage from "./Pages/LoginPage.jsx";
import "./App.css"
import SignUpPage from "./Pages/SignUpPage.jsx"
import HomePage from "./Pages/HomePage.jsx"
import NewAnimePage from "./Pages/NewAnimePage.jsx"
import PopularAnimePage from "./Pages/PopularAnimePage.jsx"
import SimulcastPage from "./Pages/SimulcastPage.jsx"
import SearchPage from "./Pages/SearchPage.jsx"
import WatchTimeFinder from "./Pages/WatchTimeFinder.jsx"
import { Routes , Route} from "react-router-dom"

function App() {
  return(
    <div className="background">
      <Routes>
        <Route path="/" element={<BeforeLoginPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/new" element={<NewAnimePage/>}/>
        <Route path="/videos/new" element={<NewAnimePage/>}/>
        <Route path="/popular" element={<PopularAnimePage/>}/>
        <Route path="/videos/popular" element={<PopularAnimePage/>}/>
        <Route path="/simulcast" element={<SimulcastPage/>}/>
        <Route path="/simulcasts" element={<SimulcastPage/>}/>
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/wtf" element={<WatchTimeFinder/>}/>
      </Routes>
    </div>
  )
}

export default App
