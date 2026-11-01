import React, { useMemo } from 'react'
import '../CategoryPage.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
import CategorySlider from './CategorySlider'
import { getShuffledCategoryAnime } from './animeData'
import CategoryLogo from './Logos/Supernatural.png'

function SupernaturalPage() {
    const pageMeta = {
        title: "Supernatural",
        subtitle: "Spirits, curses, occult mysteries, and otherworldly powers."
    }

    const sections = useMemo(() => [
        { id: 1, title: "Popular", anime: getShuffledCategoryAnime(761) },
        { id: 2, title: "New", anime: getShuffledCategoryAnime(769) },
        { id: 3, title: "Adventure", anime: getShuffledCategoryAnime(773) },
        { id: 4, title: "Comedy", anime: getShuffledCategoryAnime(787) },
        { id: 5, title: "Drama", anime: getShuffledCategoryAnime(797) },
        { id: 6, title: "Fantasy", anime: getShuffledCategoryAnime(809) },
        { id: 7, title: "Historical", anime: getShuffledCategoryAnime(811) },
        { id: 8, title: "Sci-Fi", anime: getShuffledCategoryAnime(821) },
        { id: 9, title: "Supernatural", anime: getShuffledCategoryAnime(823) },
        { id: 10, title: "Thriller", anime: getShuffledCategoryAnime(827) }
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

export default SupernaturalPage
