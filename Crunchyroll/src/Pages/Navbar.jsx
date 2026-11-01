import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Logo from '../assets/Logo.png'
import Crown from '../assets/crown.png'
import Anger from '../assets/angry.svg'
import PremiumPopUp from '../assets/PremiumPopUp.png'
import CategoryPopup from './CategoryPopup'
import ProfilePopup from './ProfilePopup'
import NewsPopup from './NewsPopup'

function Navbar({ active }) {
    const [showCategories, setShowCategories] = useState(false)
    const [showProfile, setShowProfile] = useState(false)
    const [showPremium, setShowPremium] = useState(false)
    const [showNews, setShowNews] = useState(false)

    // Mobile state
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false)
    const [mobileNewsOpen, setMobileNewsOpen] = useState(false)

    const closeAll = () => {
        setShowCategories(false)
        setShowProfile(false)
        setShowNews(false)
        setMobileMenuOpen(false)
    }

    return (
        <div className="Navbar">
            {showCategories && (
                <div className="CategoryBackdrop" onClick={() => setShowCategories(false)} />
            )}
            {showProfile && (
                <div className="ProfilePopupBackdrop" onClick={() => setShowProfile(false)} />
            )}
            {showNews && (
                <div className="CategoryBackdrop" onClick={() => setShowNews(false)} />
            )}
            {mobileMenuOpen && (
                <div className="MobileNavBackdrop" onClick={() => setMobileMenuOpen(false)} />
            )}

            <nav className="AppNavBar">
                {/* Mobile Hamburger Toggle Button */}
                <button
                    type="button"
                    className="NavHamburgerBtn"
                    onClick={() => {
                        setMobileMenuOpen((prev) => !prev)
                        setShowProfile(false)
                    }}
                    aria-label="Toggle Navigation"
                >
                    {mobileMenuOpen ? '✕' : '☰'}
                </button>

                {/* Logo & Brand Name */}
                <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }} onClick={closeAll}>
                    <div className="LogoName">
                        <img className="NavbarLogoIcon" src={Logo} alt="Logo" />
                        <span className="NavbarLogoText">Crunchyroll</span>
                    </div>
                </Link>

                {/* Desktop Navigation Links */}
                <div className="NavElements">
                    <Link to="/new" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <button style={{ minWidth: "4rem", color: active === 'new' ? 'rgb(244, 117, 33)' : undefined }}>New</button>
                    </Link>
                    <Link to="/popular" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <button style={{ minWidth: "5.8rem", color: active === 'popular' ? 'rgb(244, 117, 33)' : undefined }}>Popular</button>
                    </Link>
                    <Link to="/simulcast" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <button style={{ minWidth: "6.5rem", color: active === 'simulcast' ? 'rgb(244, 117, 33)' : undefined }}>Simulcast</button>
                    </Link>

                    <div
                        className="NavCategoriesWrapper"
                        style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
                    >
                        <button
                            type="button"
                            onClick={() => setShowCategories((prev) => !prev)}
                            style={{
                                minWidth: "7.5rem",
                                height: "100%",
                                color: (showCategories || active === 'categories') ? 'white' : undefined,
                                backgroundColor: showCategories ? '#141519' : undefined
                            }}
                        >
                            Categories <span> ▼ </span>
                        </button>

                        {showCategories && (
                            <CategoryPopup onClose={() => setShowCategories(false)} />
                        )}
                    </div>

                    <Link to="/wtf" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <button style={{ minWidth: "4rem", color: active === 'wtf' ? 'rgb(244, 117, 33)' : undefined }}>WT-Finder O-O</button>
                    </Link>

                    <p>|</p>
                    <Link to="https://www.crunchyroll.com/manga" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <button style={{ minWidth: "5rem" }}>Manga</button>
                    </Link>
                    <Link to="https://www.crunchyroll.com/games/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <button style={{ minWidth: "5rem" }}>Games</button>
                    </Link>

                    <div
                        className="NavNewsWrapper"
                        style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
                    >
                        <button
                            type="button"
                            onClick={() => setShowNews((prev) => !prev)}
                            style={{
                                minWidth: "6rem",
                                height: "100%",
                                color: showNews ? 'white' : undefined,
                                backgroundColor: showNews ? '#141519' : undefined
                            }}
                        >
                            News <span> ▼</span>
                        </button>

                        {showNews && (
                            <NewsPopup onClose={() => setShowNews(false)} />
                        )}
                    </div>
                </div>

                {/* Right Action Icons (Desktop & Mobile) */}
                <div className="NavElementsRight">
                    <div
                        className="NavPremiumWrapper"
                        onMouseEnter={() => setShowPremium(true)}
                        onMouseLeave={() => setShowPremium(false)}
                    >
                        <Link to="/#plansSection" style={{ textDecoration: 'none', color: 'inherit', height: '100%', display: 'flex', alignItems: 'center' }}>
                            <button className="NavCrownBtn">
                                <img className="NavCrownIcon" src={Crown} alt="Crown" />
                                <div className="NavCrownText">
                                    <p style={{ color: "rgb(244, 174, 33)", fontSize: "65%", minWidth: "60px", margin: 0, lineHeight: 1.1, fontWeight: "600" }}>TRY FREE</p>
                                    <p style={{ color: "white", fontSize: "65%", margin: "4px 5px 0px 0px", lineHeight: 1.1, fontWeight: "600" }}>PREMIUM</p>
                                </div>
                            </button>
                        </Link>

                        {showPremium && (
                            <div className="PremiumHoverPopup">
                                <Link to="/#plansSection">
                                    <img src={PremiumPopUp} alt="Premium Popup" style={{ cursor: 'pointer' }} />
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link to="/search" style={{ textDecoration: 'none', color: 'inherit', height: '100%', display: 'flex', alignItems: 'center' }}>
                        <button
                            className="NavSearchBtn"
                            style={{ color: active === 'search' ? 'rgb(244, 117, 33)' : undefined }}
                            aria-label="Search"
                        >
                            🔍︎
                        </button>
                    </Link>

                    {/* Watchlist Bookmark Icon (Desktop Only, matches reference image) */}
                    <Link to="/watchlist" className="NavWatchlistDesktopOnly" style={{ textDecoration: 'none', color: 'inherit', height: '100%', display: 'flex', alignItems: 'center' }}>
                        <button style={{
                            minWidth: "3rem",
                            height: "100%",
                            fontSize: "130%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            background: "transparent",
                            border: "none",
                            color: (active === 'watchlist' || active === 'mylists') ? 'rgb(244, 117, 33)' : 'rgb(163, 164, 164)'
                        }}>⛉</button>
                    </Link>

                    {/* Profile Avatar & Popup Toggle */}
                    <div className="NavProfileWrapper">
                        <button
                            onClick={() => {
                                setShowProfile((prev) => !prev)
                                setMobileMenuOpen(false)
                            }}
                            className="NavProfileBtn"
                            aria-label="Profile Menu"
                        >
                            <img className="NavProfileAvatarImg" src={Anger} alt="Profile" />
                            <span className="NavProfileArrow">▼</span>
                        </button>

                        {showProfile && (
                            <ProfilePopup onClose={() => setShowProfile(false)} />
                        )}
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation Drawer (1:1 with reference images) */}
            {mobileMenuOpen && (
                <div className="MobileNavDrawer">
                    <Link to="/new" className={`MobileNavItem ${active === 'new' ? 'ActiveItem' : ''}`} onClick={closeAll}>
                        <span>New</span>
                    </Link>

                    <Link to="/popular" className={`MobileNavItem ${active === 'popular' ? 'ActiveItem' : ''}`} onClick={closeAll}>
                        <span>Popular</span>
                    </Link>

                    <Link to="/popular" className="MobileNavItem" onClick={closeAll}>
                        <span>Browse All (A–Z)</span>
                    </Link>

                    <Link to="/simulcast" className={`MobileNavItem ${active === 'simulcast' ? 'ActiveItem' : ''}`} onClick={closeAll}>
                        <span>Simulcast Season</span>
                    </Link>

                    <Link to="/simulcast" className="MobileNavItem" onClick={closeAll}>
                        <span>Release Calendar</span>
                    </Link>

                    {/* Categories Accordion */}
                    <div className="MobileAccordionBlock">
                        <button
                            type="button"
                            className="MobileNavItem"
                            onClick={() => setMobileCategoriesOpen((prev) => !prev)}
                        >
                            <span>Categories</span>
                            <span className={`MobileChevron ${mobileCategoriesOpen ? 'Expanded' : ''}`}>▼</span>
                        </button>

                        {mobileCategoriesOpen && (
                            <div className="MobileSubMenu">
                                {[
                                    { name: 'Action', path: '/category/action' },
                                    { name: 'Adventure', path: '/category/adventure' },
                                    { name: 'Comedy', path: '/category/comedy' },
                                    { name: 'Drama', path: '/category/drama' },
                                    { name: 'Fantasy', path: '/category/fantasy' },
                                    { name: 'Music', path: '/category/music' },
                                    { name: 'Romance', path: '/category/romance' },
                                    { name: 'Sci-Fi', path: '/category/sci-fi' },
                                    { name: 'Seinen', path: '/category/seinen' },
                                    { name: 'Shojo', path: '/category/shojo' },
                                    { name: 'Shonen', path: '/category/shonen' },
                                    { name: 'Slice of life', path: '/category/slice-of-life' },
                                    { name: 'Sports', path: '/category/sports' },
                                    { name: 'Supernatural', path: '/category/supernatural' },
                                    { name: 'Thriller', path: '/category/thriller' }
                                ].map((cat) => (
                                    <Link
                                        key={cat.name}
                                        to={cat.path}
                                        className="MobileSubItem"
                                        onClick={closeAll}
                                    >
                                        {cat.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link to="/wtf" className={`MobileNavItem ${active === 'wtf' ? 'ActiveItem' : ''}`} onClick={closeAll}>
                        <span>WT-Finder</span>
                    </Link>

                    <div className="MobileNavDivider"></div>

                    <Link to="https://www.crunchyroll.com/manga" className="MobileNavItem" onClick={closeAll}>
                        <span>Manga</span>
                    </Link>

                    <Link to="https://www.crunchyroll.com/games/" className="MobileNavItem" onClick={closeAll}>
                        <span>Games</span>
                    </Link>

                    {/* News Accordion */}
                    <div className="MobileAccordionBlock">
                        <button
                            type="button"
                            className="MobileNavItem"
                            onClick={() => setMobileNewsOpen((prev) => !prev)}
                        >
                            <span>News</span>
                            <span className={`MobileChevron ${mobileNewsOpen ? 'Expanded' : ''}`}>▼</span>
                        </button>

                        {mobileNewsOpen && (
                            <div className="MobileSubMenu">
                                <Link to="https://www.crunchyroll.com/news" className="MobileSubItem" onClick={closeAll}>All News</Link>
                                <Link to="https://www.crunchyroll.com/animeawards/" className="MobileSubItem" onClick={closeAll}>Anime Awards</Link>
                                <Link to="https://www.crunchyroll.com/events/" className="MobileSubItem" onClick={closeAll}>Events & Experiences</Link>
                            </div>
                        )}
                    </div>

                    <Link to="https://www.crunchyroll.com/music" className="MobileNavItem" onClick={closeAll}>
                        <span>Music Videos & Concerts</span>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Navbar
