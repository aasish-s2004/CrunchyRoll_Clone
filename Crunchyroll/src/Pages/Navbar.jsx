import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import Crown from '../assets/crown.png'
import Anger from '../assets/angry.svg'
import PremiumPopUp from '../assets/PremiumPopUp.png'
import CategoryPopup from './CategoryPopup'
import ProfilePopup from './ProfilePopup'

function Navbar({ active }) {
    const [showCategories, setShowCategories] = useState(false)
    const [showProfile, setShowProfile] = useState(false)
    const [showPremium, setShowPremium] = useState(false)

    return(
        <div className="Navbar">
            {showCategories && (
                <div
                    className="CategoryBackdrop"
                    onClick={() => setShowCategories(false)}
                />
            )}
            {showProfile && (
                <div
                    className="ProfilePopupBackdrop"
                    onClick={() => setShowProfile(false)}
                />
            )}
            <nav>
                <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="LogoName" style={{ display:'flex', alignItems:"center", gap:'4px'}}>
                        <img style={{ height:'23px', marginBottom:"3px"}} src={Logo} alt="Logo" />
                        <span style={{
                            color: 'rgb(244, 117, 33)',
                            fontSize: '1.17rem',
                            fontFamily: '"Maven Pro", "Helvetica Neue", Arial, sans-serif',
                            fontWeight: '700',
                            }}>Crunchyroll</span>
                    </div>
                </Link>
                <div className="NavElements">
                    <Link to="/new" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <button style={{
                            minWidth:"4rem",
                    
                        }}>New</button>
                    </Link>
                    <Link to="/popular" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <button style={{
                            minWidth:"5.8rem",
                           
                        }}>Popular</button>
                    </Link>
                    <Link to="/simulcast" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <button style={{
                            minWidth:"6.5rem",
                            
                        }}>Simulcast</button>
                    </Link>

                    <div
                        className="NavCategoriesWrapper"
                        style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
                    >
                        <button
                            type="button"
                            onClick={() => setShowCategories((prev) => !prev)}
                            style={{
                                minWidth:"7.5rem",
                                height: "100%",
                                color: showCategories ? 'white' : undefined,
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
                        <button style={{
                            minWidth:"4rem",
                            
                        }}>WTF</button>
                    </Link>

                    <p>|</p>
                    <button style={{minWidth:"5rem"}}>Manga</button>
                    <button style={{minWidth:"5rem"}}>Games</button>
                    <button style={{minWidth:"6rem"}}>News <span> ▼</span></button>
                    
                    <div className="NavElementsRight">
                        <div
                            className="NavPremiumWrapper"
                            onMouseEnter={() => setShowPremium(true)}
                            onMouseLeave={() => setShowPremium(false)}
                        >
                            <button style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                minWidth: "6.2rem",
                                height: "100%",
                                padding: "0 8px",
                                cursor: "pointer"
                            }}>
                                <img style={{ height: '21px', marginRight: "10px" }} src={Crown} alt="Crown" />
                                <div style={{ textAlign: "left" }}>
                                    <p style={{ color: "rgb(244, 174, 33)", fontSize: "65%", minWidth:"60px", margin: 0, lineHeight: 1.1 ,fontWeight:"600" }}>TRY FREE</p>
                                    <p style={{ color: "white", fontSize: "65%", margin: "4px 5px 0px 0px", lineHeight: 1.1,fontWeight:"600" }}>PREMIUM</p>
                                </div>
                            </button>

                            {showPremium && (
                                <div className="PremiumHoverPopup">
                                    <img src={PremiumPopUp} alt="Premium Popup" />
                                </div>
                            )}
                        </div>

                        <Link to="/search" style={{ textDecoration: 'none', color: 'inherit', height: '100%', display: 'flex', alignItems: 'center' }}>
                            <button style={{
                                minWidth: "3rem",
                                height: "100%",
                                fontSize: "150%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginRight:"2px",
                                cursor: "pointer",
                                fontWeight:"200",
                            }}>🔍︎</button>
                        </Link>

                        <button style={{
                            minWidth: "3rem",
                            height: "100%",
                            fontSize: "130%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer"
                        }}>⛉</button>

                        <div className="NavProfileWrapper">
                            <button
                                onClick={() => setShowProfile((prev) => !prev)}
                                style={{
                                    minWidth: "3.5rem",
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "3px",
                                    cursor: "pointer"
                                }}
                            >
                                <img style={{ height: "26px", width: "26px", borderRadius: "50%" }} src={Anger} alt="Profile" />
                                <span style={{ fontSize: "10px", padding: 0 }}>▼</span>
                            </button>

                            {showProfile && (
                                <ProfilePopup onClose={() => setShowProfile(false)} />
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
