import React, { useRef } from 'react'
import './AnimeSliderCategory.css'
import Logo from '../assets/Logo.png'
import { useNavigate } from 'react-router-dom'

const defaultTrendingAnime = [
    {
        id: 1,
        title: "Black Clover",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00002115-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 2,
        title: "Naruto Shippuden",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00091371-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 3,
        title: "Overgeared",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00384004-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 4,
        title: "Naruto",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00091370-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 5,
        title: "Solo Leveling",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00320667-base_asset_2x3-en-US",
        badge: "2026 Winner"
    },
    {
        id: 6,
        title: "That Time I Got Reincarnated as a Slime",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00050707-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 7,
        title: "My Hero Academia",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00002328-base_asset_2x3-en-US",
        badge: "2026 Winner"
    },
    {
        id: 8,
        title: "The Apothecary Diaries",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00325113-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 9,
        title: "Haikyu!!",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00111695-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 10,
        title: "Mushoku Tensei:Jobless Reiincarnation",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00102634-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 11,
        title: "JUJUTSU KAISEN",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00169670-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 12,
        title: "Dragon Ball Super",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00002182-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 13,
        title: "Dr.STONE",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00088715-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 14,
        title: "Demon Slayer: Kimetsu no Yaiba",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00058844-base_asset_2x3-en-US",
        badge: "2026 Winner"
    },
    {
        id: 15,
        title: "The Exilled Heavy Knight Knows How to Game the System",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00378018-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 16,
        title: "Tomb Raider King",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00378123-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 17,
        title: "Full Clearing Another World under a Goddess with Zero Belivers",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00383992-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 18,
        title: "One-Punch Man",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00102550-base_asset_2x3-en-US",
        badge: null
    }
]



function AnimeSliderCategory({ title = "Trending Anime in India", animeList = defaultTrendingAnime, onViewAll }) {
    const sliderRef = useRef(null)
    const navigate = useNavigate()

    const slideLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -600, behavior: 'smooth' })
        }
    }

    const slideRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 600, behavior: 'smooth' })
        }
    }

    return (
        <div className="SliderCategoryContainer">
            <div className="SliderTitleRow">
                <h2 className="SliderCategoryTitle">{title}</h2>
                {onViewAll && (
                    <button className="SliderViewAllBtn" onClick={onViewAll}>
                        VIEW ALL &gt;
                    </button>
                )}
            </div>
            <div className="SliderWrapper">
                <button
                    className="SliderArrowBtn SliderArrowLeft"
                    onClick={slideLeft}
                    aria-label="Slide Left"
                >
                    ‹
                </button>

                <div className="SliderCardsRow" ref={sliderRef}>
                    {animeList.map((anime) => (
                        <div key={anime.id} className="AnimeSliderCard" onClick={() => navigate('/watch')}>
                            <div className="SliderPosterWrapper">
                                {anime.badge && (
                                    <div className="SliderCardBadge">
                                        <img
                                            src={Logo}
                                            alt=""
                                            style={{ width: '13px', height: '13px', objectFit: 'contain' }}
                                        />
                                        <span>{anime.badge}</span>
                                    </div>
                                )}
                                <img
                                    src={anime.image}
                                    alt={anime.title}
                                    loading="lazy"
                                    onError={(e) => {
                                        e.currentTarget.onerror = null
                                        e.currentTarget.src = "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&auto=format&fit=crop"
                                    }}
                                />

                                {/* Card Hover Overlay as shown in reference image */}
                                <div className="CardHoverOverlay">
                                    <h4 className="HoverOverlayTitle">{anime.title}</h4>
                                    <div className="HoverOverlayRating">
                                        <span className="HoverRatingScore">4.9 ★</span>
                                        <span className="HoverRatingCount">(1M)</span>
                                    </div>
                                    <div className="HoverOverlaySeasons">
                                        <p>2 Seasons</p>
                                        <p>26 Episodes</p>
                                    </div>
                                    <p className="HoverOverlaySynopsis">
                                        {anime.synopsis || "They say whatever doesn't kill you makes you stronger, but that's not the case for the world's weakest hunter Sung Jinwoo. After being brutally slaughtered by monsters in a high-ranking dungeon, Jinwoo came back..."}
                                    </p>
                                    <div className="HoverOverlayActions">
                                        <button
                                            className="HoverActionBtn HoverPlayBtn"
                                            title="Watch Now"
                                            onClick={(e) => { e.stopPropagation(); navigate('/watch'); }}
                                            style={{fontSize:"1.6rem"}}
                                        >
                                            ▷
                                        </button>
                                        <button
                                            className="HoverActionBtn HoverBookmarkBtn"
                                            title="Add to Watchlist"
                                            onClick={(e) => { e.stopPropagation(); alert(`Added ${anime.title} to Watchlist!`); }}
                                            style={{fontSize:"1.4rem"}}
                                        >
                                            ⛉
                                        </button>
                                        <button
                                            className="HoverActionBtn HoverPlusBtn"
                                            title="Add to Crunchylist"
                                            onClick={(e) => { e.stopPropagation(); alert(`Added ${anime.title} to Crunchylist!`); }}
                                            style={{fontSize:"2rem"}}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <h3 className="SliderCardTitle">{anime.title}</h3>
                            <p className="SliderCardTag">{anime.tag}</p>
                        </div>
                    ))}
                </div>

                <button
                    className="SliderArrowBtn SliderArrowRight"
                    onClick={slideRight}
                    aria-label="Slide Right"
                >
                    ›
                </button>
            </div>
        </div>
    )
}

export default AnimeSliderCategory

