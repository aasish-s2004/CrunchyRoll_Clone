import React, { useState } from 'react'
import './WatchVideoPage.css'
import Navbar from './Navbar'
import Footer from './Footer'
import LeaningHime from '../assets/leaning_hime.png'
import Crown from '../assets/crown.png'
import Pannel from '../assets/panel.png'
import Stars from '../assets/stars.png'
import { useNavigate } from 'react-router-dom'

function WatchVideoPage() {
    const navigate = useNavigate()
    const [bookmarked, setBookmarked] = useState(false)
    const [liked, setLiked] = useState(false)
    const [disliked, setDisliked] = useState(false)
    const [showFullDesc, setShowFullDesc] = useState(false)

    return (
        <div className="WatchVideoPageContainer">
            <Navbar active="watch" />

            <div className="WatchVideoMain">
                <div className="VideoPlayerBox">
                    <img
                        src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=1200/display/keyart/T00384010-base_asset_2x3-en-US"
                        alt="Frieren Anime Frame"
                        className="VideoBgFrame"
                    />

                    <div className="VideoOverlayShade"></div>

                    <div
                        className="PlayerUpsellCard"
                        style={{
                            backgroundImage: `url(${Stars}), url(${Pannel})`,
                            backgroundPosition: 'top 20px right 20px, center',
                            backgroundRepeat: 'no-repeat, no-repeat',
                            backgroundSize: '240px auto, cover'
                        }}
                    >
                        <img
                            src={LeaningHime}
                            alt="Crunchyroll Mascot"
                            className="UpsellMascotOutside"
                        />

                        <div className="UpsellContent">
                            <h2 className="UpsellTitle">Watch Now with Premium</h2>
                            <p className="UpsellSubtitle">Get even more with Mega Fan:</p>

                            <ul className="UpsellFeaturesList">
                                <li><span>✓</span> Ad-free anime*</li>
                                <li><span>✓</span> Offline viewing</li>
                                <li><span>✓</span> Access to free video games</li>
                                <li><span>✓</span> Available on multiple devices</li>
                            </ul>

                            <button className="UpsellTrialBtn" onClick={() => navigate('/#plansSection')}>
                                <img src={Crown} alt="Crown" style={{ width: '15px', height: '15px', marginRight: '6px' }} />
                                7-DAY FREE TRIAL
                            </button>

                            <p className="UpsellDisclaimer">
                                *Plans may include trailers and promotional messaging for Crunchyroll content and services, or related products.<br />
                                After your free Crunchyroll Premium: Mega Fan trial, your account will automatically renew at ₹119.00 per month.
                            </p>

                            <button className="UpsellCompareLink" onClick={() => navigate('/#plansSection')}>
                                COMPARE OUR PREMIUM PLANS &gt;
                            </button>
                        </div>
                    </div>
                </div>

                <div className="VideoInfoSection">
                    <div className="VideoDetailsLeft">
                        <div className="VideoSeriesHeader">
                            <span className="VideoSeriesName">Frieren: Beyond Journey's End</span>
                            <button
                                className={`SeriesBookmarkBtn ${bookmarked ? 'ActiveBookmark' : ''}`}
                                onClick={() => setBookmarked(!bookmarked)}
                                title="Add to Watchlist"
                            >
                                ⛉
                            </button>
                        </div>

                        <h1 className="VideoEpisodeTitle">E1 - The Journey's End</h1>

                        <div className="VideoMetaTags">
                            <span className="RatingBadge">U/A 16+</span>
                            <span className="MetaDot">•</span>
                            <span>Sub | Dub</span>
                        </div>

                        <p className="VideoReleaseDate">Released on Oct 13, 2023</p>

                        <div className="VideoFeedbackRow">
                            <button
                                className={`FeedbackBtn ${liked ? 'ActiveFeedback' : ''}`}
                                onClick={() => { setLiked(!liked); setDisliked(false); }}
                            >
                                👍 <span>38.7K</span>
                            </button>
                            <button
                                className={`FeedbackBtn ${disliked ? 'ActiveFeedback' : ''}`}
                                onClick={() => { setDisliked(!disliked); setLiked(false); }}
                            >
                                👎 <span>517</span>
                            </button>
                            <button className="ShareBtn" onClick={() => alert('Link copied to clipboard!')}>
                                ➦
                            </button>
                        </div>

                        <p className={`VideoDescriptionText ${showFullDesc ? 'Expanded' : ''}`}>
                            The world celebrates the Demon King's defeat at the hands of the Hero and his companions. Now that their great adventure is over, what will Frieren the mage do next?
                            {showFullDesc && (
                                <span> Over the course of centuries, as her former comrades age and pass on, Frieren embarks on a nostalgic pilgrimage across the continent to truly understand humanity.</span>
                            )}
                        </p>

                        <button className="ShowMoreBtn" onClick={() => setShowFullDesc(!showFullDesc)}>
                            {showFullDesc ? 'SHOW LESS' : 'SHOW MORE'}
                        </button>
                    </div>

                    <div className="VideoActionsRight">
                        <div className="NextEpisodeCard">
                            <span className="NextEpLabel">NEXT EPISODE</span>
                            <div className="NextEpThumbnail">
                                <img
                                    src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00384010-base_asset_2x3-en-US"
                                    alt="Next Episode"
                                />
                                <span className="EpDuration">26m</span>
                            </div>
                            <div className="NextEpInfo">
                                
                                <h4 className="NextEpTitle">E2 - It Didn't Have to Be Magic...</h4>
                                <span className="NextEpTags">Dub | Sub</span>
                            </div>
                        </div>

                        <button className="SeeMoreEpisodesBtn" onClick={() => navigate('/popular')}>
                            <span className="SeeMoreIcon">◫</span> SEE MORE EPISODES
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default WatchVideoPage
