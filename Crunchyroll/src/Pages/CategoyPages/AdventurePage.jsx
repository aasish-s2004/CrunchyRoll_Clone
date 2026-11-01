import React, { useMemo } from 'react'
import '../CategoryPage.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
import CategorySlider from './CategorySlider'
import { getShuffledCategoryAnime } from './animeData'
import CategoryLogo from './Logos/Adventure.png'

function AdventurePage() {
    const pageMeta = {
        title: "Adventure",
        subtitle: "Journey into uncharted worlds, epic quests, and grand discoveries."
    }

    const sections = useMemo(() => [
        { id: 1, title: "Popular", anime: getShuffledCategoryAnime(47) },
        { id: 2, title: "New", anime: getShuffledCategoryAnime(53) },
        { id: 3, title: "Adventure", anime: getShuffledCategoryAnime(59) },
        { id: 4, title: "Comedy", anime: getShuffledCategoryAnime(61) },
        { id: 5, title: "Drama", anime: getShuffledCategoryAnime(67) },
        { id: 6, title: "Fantasy", anime: getShuffledCategoryAnime(71) },
        { id: 7, title: "Historical", anime: getShuffledCategoryAnime(73) },
        { id: 8, title: "Sci-Fi", anime: getShuffledCategoryAnime(79) },
        { id: 9, title: "Supernatural", anime: getShuffledCategoryAnime(83) },
        { id: 10, title: "Thriller", anime: getShuffledCategoryAnime(89) }
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

export default AdventurePage
