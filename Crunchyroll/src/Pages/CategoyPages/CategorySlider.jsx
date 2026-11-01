import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function CategorySlider({ title, animeList, onViewAll }) {
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
        <div className="CategorySliderSection">
            <div className="CategorySliderHeader">
                <h2 className="CategorySliderTitle">{title}</h2>
                <button
                    className="CategoryViewAllBtn"
                    onClick={onViewAll ? onViewAll : () => alert(`Viewing all ${title} anime!`)}
                >
                    VIEW ALL &gt;
                </button>
            </div>

            <div className="CategorySliderWrapper">
                <button
                    className="CategoryArrowBtn CategoryArrowLeft"
                    onClick={slideLeft}
                    aria-label="Slide Left"
                >
                    ‹
                </button>

                <div className="CategorySliderRow" ref={sliderRef}>
                    {(animeList || []).map((anime, idx) => (
                        <div
                            key={`${anime.id}-${idx}`}
                            className="CategoryAnimeCard"
                            onClick={() => navigate('/watch')}
                            
                        >
                            <div className="CategoryPosterWrapper" style={{border:"none"}}>
                                <img
                                    src={anime.image}
                                    alt={anime.title}
                                    loading="lazy"
                                    onError={(e) => {
                                        e.currentTarget.onerror = null
                                        e.currentTarget.src = "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&auto=format&fit=crop"
                                    }}
                                />
                                {anime.badge && (
                                    <div className="CategoryCardBadge">
                                        <span>★</span> {anime.badge}
                                    </div>
                                )}

                                <div className="CategoryCardHoverOverlay" style={{border:"none"}}>
                                    <div>
                                        <h4 className="CategoryHoverTitle">{anime.title} </h4>
                                        <div className="CategoryHoverRating">
                                            
                                            <span className="CategoryHoverScore" style={{color:"rgb(145, 144, 144)"}}>{anime.rating || "4.8 ★"} </span>
                                            <span className="CategoryHoverCount">{anime.ratingCount || "(500K)"}</span>
                                        </div>
                                        <div className="CategoryHoverSeasons">
                                            <p>{anime.seasons || "2 Seasons"}</p>
                                            <p>{anime.episodes || "24 Episodes"}</p>
                                        </div>
                                        <p className="CategoryHoverSynopsis" style={{border:"none"}}>{anime.synopsis}</p>
                                    </div>

                                    <div className="CategoryHoverActions" style={{border:"none"}}>
                                        <button
                                            className="CategoryHoverPlayBtn"
                                            title="Start Watching"
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                navigate('/watch')
                                            }}
                                            style={{background:"transparent", color:"#f47521", padding:"0px 10px 0px 0px"}}
                                            
                                        >
                                            ▶
                                        </button>
                                        <button
                                            className="CategoryHoverIconBtn"
                                            title="Add to Watchlist"
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                alert(`Added ${anime.title} to Watchlist!`)
                                            }}
                                            style={{background:"transparent", border:"none", color:"#f47521" , margin:"5px 10px 0px 6px"}}
                                        >
                                            ⛉
                                        </button>
                                        <button
                                            className="CategoryHoverIconBtn"
                                            title="Add to Crunchylist"
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                alert(`Added ${anime.title} to Crunchylist!`)
                                            }}
                                            style={{background:"transparent", border:"none", color:"#f47521" , margin:"6px 40px 0px 0px", fontSize:"25px"}}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <h3 className="CategoryCardTitle">{anime.title}</h3>
                            <p className="CategoryCardTag">{anime.tag}</p>
                        </div>
                    ))}
                </div>
                <button
                    className="CategoryArrowBtn CategoryArrowRight"
                    onClick={slideRight}
                    aria-label="Slide Right"
                    style={{ }}
                >
                    ›
                </button>
                
            </div>
            
        </div>
    )
}

export default CategorySlider

