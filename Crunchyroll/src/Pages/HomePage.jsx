import "./HomePage.css"
import BlackTorchSlide from "./SlidingPages/BlackTorchSlide"
import Navbar from "./Navbar"
import AnimeSliderCategory from "./AnimeSliderCategory"

function HomePage() {
    return(
        <div style={{ backgroundColor: 'black', minHeight: '100vh', overflowX: 'hidden' }}>
            <Navbar active="home" />
            <div>
                <BlackTorchSlide />
                <AnimeSliderCategory title="Trending Anime in India" />
            </div>
        </div>
    )
}

export default HomePage
