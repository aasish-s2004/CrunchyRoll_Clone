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
import EditProfilePage from "./Pages/EditProfilePage.jsx"
import SwitchProfilePage from "./Pages/SwitchProfilePage.jsx"
import MyListsPage from "./Pages/MyListsPage.jsx"
import NotificationCenterPage from "./Pages/NotificationCenterPage.jsx"
import RedeemGiftCardPage from "./Pages/RedeemGiftCardPage.jsx"
import WatchVideoPage from "./Pages/WatchVideoPage.jsx"
// 15 Separate Category Pages
import ActionPage from "./Pages/CategoyPages/ActionPage.jsx"
import AdventurePage from "./Pages/CategoyPages/AdventurePage.jsx"
import ComedyPage from "./Pages/CategoyPages/ComedyPage.jsx"
import DramaPage from "./Pages/CategoyPages/DramaPage.jsx"
import FantasyPage from "./Pages/CategoyPages/FantasyPage.jsx"
import MusicPage from "./Pages/CategoyPages/MusicPage.jsx"
import RomancePage from "./Pages/CategoyPages/RomancePage.jsx"
import SciFiPage from "./Pages/CategoyPages/SciFiPage.jsx"
import SeinenPage from "./Pages/CategoyPages/SeinenPage.jsx"
import ShojoPage from "./Pages/CategoyPages/ShojoPage.jsx"
import ShonenPage from "./Pages/CategoyPages/ShonenPage.jsx"
import SliceOfLifePage from "./Pages/CategoyPages/SliceOfLifePage.jsx"
import SportsPage from "./Pages/CategoyPages/SportsPage.jsx"
import SupernaturalPage from "./Pages/CategoyPages/SupernaturalPage.jsx"
import ThrillerPage from "./Pages/CategoyPages/ThrillerPage.jsx"

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
        
        {/* Profile & Switch Profile */}
        <Route path="/profile" element={<EditProfilePage/>}/>
        <Route path="/profiles/manage/:id" element={<EditProfilePage/>}/>
        <Route path="/switch-profile" element={<SwitchProfilePage/>}/>
        <Route path="/discover" element={<SwitchProfilePage/>}/>

        {/* My Lists (Watchlist, Crunchylists, History) */}
        <Route path="/watchlist" element={<MyListsPage initialTab="watchlist"/>}/>
        <Route path="/crunchylists" element={<MyListsPage initialTab="crunchylists"/>}/>
        <Route path="/history" element={<MyListsPage initialTab="history"/>}/>

        {/* Notifications & Gift Card */}
        <Route path="/notifications" element={<NotificationCenterPage/>}/>
        <Route path="/redeem" element={<RedeemGiftCardPage/>}/>

        {/* Video Player Page */}
        <Route path="/watch" element={<WatchVideoPage/>}/>
        <Route path="/watch/:id" element={<WatchVideoPage/>}/>

        {/* 15 Dedicated Category Pages */}
        <Route path="/action" element={<ActionPage/>}/>
        <Route path="/videos/action" element={<ActionPage/>}/>
        <Route path="/category/action" element={<ActionPage/>}/>

        <Route path="/adventure" element={<AdventurePage/>}/>
        <Route path="/videos/adventure" element={<AdventurePage/>}/>
        <Route path="/category/adventure" element={<AdventurePage/>}/>

        <Route path="/comedy" element={<ComedyPage/>}/>
        <Route path="/videos/comedy" element={<ComedyPage/>}/>
        <Route path="/category/comedy" element={<ComedyPage/>}/>

        <Route path="/drama" element={<DramaPage/>}/>
        <Route path="/videos/drama" element={<DramaPage/>}/>
        <Route path="/category/drama" element={<DramaPage/>}/>

        <Route path="/fantasy" element={<FantasyPage/>}/>
        <Route path="/videos/fantasy" element={<FantasyPage/>}/>
        <Route path="/category/fantasy" element={<FantasyPage/>}/>

        <Route path="/music" element={<MusicPage/>}/>
        <Route path="/videos/music" element={<MusicPage/>}/>
        <Route path="/category/music" element={<MusicPage/>}/>

        <Route path="/romance" element={<RomancePage/>}/>
        <Route path="/videos/romance" element={<RomancePage/>}/>
        <Route path="/category/romance" element={<RomancePage/>}/>

        <Route path="/sci-fi" element={<SciFiPage/>}/>
        <Route path="/videos/sci-fi" element={<SciFiPage/>}/>
        <Route path="/category/sci-fi" element={<SciFiPage/>}/>

        <Route path="/seinen" element={<SeinenPage/>}/>
        <Route path="/videos/seinen" element={<SeinenPage/>}/>
        <Route path="/category/seinen" element={<SeinenPage/>}/>

        <Route path="/shojo" element={<ShojoPage/>}/>
        <Route path="/videos/shojo" element={<ShojoPage/>}/>
        <Route path="/category/shojo" element={<ShojoPage/>}/>

        <Route path="/shonen" element={<ShonenPage/>}/>
        <Route path="/videos/shonen" element={<ShonenPage/>}/>
        <Route path="/category/shonen" element={<ShonenPage/>}/>

        <Route path="/slice-of-life" element={<SliceOfLifePage/>}/>
        <Route path="/videos/slice-of-life" element={<SliceOfLifePage/>}/>
        <Route path="/category/slice-of-life" element={<SliceOfLifePage/>}/>

        <Route path="/sports" element={<SportsPage/>}/>
        <Route path="/videos/sports" element={<SportsPage/>}/>
        <Route path="/category/sports" element={<SportsPage/>}/>

        <Route path="/supernatural" element={<SupernaturalPage/>}/>
        <Route path="/videos/supernatural" element={<SupernaturalPage/>}/>
        <Route path="/category/supernatural" element={<SupernaturalPage/>}/>

        <Route path="/thriller" element={<ThrillerPage/>}/>
        <Route path="/videos/thriller" element={<ThrillerPage/>}/>
        <Route path="/category/thriller" element={<ThrillerPage/>}/>

        {/* Dynamic Catch-All Route for Categories / Genres */}
        <Route path="/category/:genre" element={<ActionPage/>}/>
        <Route path="/videos/:genre" element={<ActionPage/>}/>
      </Routes>
    </div>
  )
}

export default App
