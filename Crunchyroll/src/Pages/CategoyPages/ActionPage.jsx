import React, { useMemo } from 'react'
import '../CategoryPage.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
import CategorySlider from './CategorySlider'
import { getShuffledCategoryAnime } from './animeData'
import CategoryLogo from './Logos/Action.png'

function ActionPage() {
    const pageMeta = {
        title: "Action",
        subtitle: "For all your fist flying and huge explosion needs!"
    }

    const sections = useMemo(() => [
        { id: 1, title: "Popular", anime: getShuffledCategoryAnime(11) },
        { id: 2, title: "New", anime: getShuffledCategoryAnime(13) },
        { id: 3, title: "Adventure", anime: getShuffledCategoryAnime(17) },
        { id: 4, title: "Comedy", anime: getShuffledCategoryAnime(19) },
        { id: 5, title: "Drama", anime: getShuffledCategoryAnime(23) },
        { id: 6, title: "Fantasy", anime: getShuffledCategoryAnime(29) },
        { id: 7, title: "Historical", anime: getShuffledCategoryAnime(31) },
        { id: 8, title: "Sci-Fi", anime: getShuffledCategoryAnime(37) },
        { id: 9, title: "Supernatural", anime: getShuffledCategoryAnime(41) },
        { id: 10, title: "Thriller", anime: getShuffledCategoryAnime(43) }
    ], [])

    return (
        <div>
            <Navbar active="categories" />
        <div className="CategoryPageContainer">
            

            <div className="CategoryHeroBanner">
                <div className="CategoryHeroTitleRow">
                    <img src={CategoryLogo} alt={pageMeta.title} className="CategoryHeroLogo" style={{ width: '38px', height: '38px', objectFit: 'contain' }} />
                    <h1 className="CategoryHeroTitle">{pageMeta.title}</h1>
                </div>
                <p className="CategoryHeroSubtitle">{pageMeta.subtitle}</p>
            </div>

            <div className="CategorySlidersWrapper">
                {sections.map((section) => (
                    <CategorySlider
                        key={section.id}
                        title={section.title}
                        animeList={section.anime}
                    />
                ))}
            </div>

            
        </div>
        <Footer />
        </div>
    )
}

export default ActionPage
