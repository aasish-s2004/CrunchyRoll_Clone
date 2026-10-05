import BeforeLoginPage from "./Pages/BeforeLogin";
import LoginPage from "./Pages/LoginPage.jsx";
import "./App.css"
import SignUpPage from "./Pages/SignUpPage.jsx"
import HomePage from "./Pages/HomePage.jsx"
import { Routes , Route} from "react-router-dom"
function App() {
  return(
    <div className="background">
      <Routes>
        <Route path="/" element={<BeforeLoginPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
      </Routes>
    </div>
  )
}

export default App