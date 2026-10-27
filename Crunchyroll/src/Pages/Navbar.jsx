import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import Crown from '../assets/crown.png'
import Anger from '../assets/angry.svg'
import CategoryPopup from './CategoryPopup'

function Navbar({ active }) {
    const [showCategories, setShowCategories] = useState(false)

    return(
        <div className="Navbar">
            {showCategories && (
                <div
                    className="CategoryBackdrop"
                    onClick={() => setShowCategories(false)}
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
                            color: active === 'new' ? 'white' : undefined,
                            borderBottom: active === 'new' ? '2px solid rgb(244, 117, 33)' : undefined
                        }}>New</button>
                    </Link>
                    <Link to="/popular" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <button style={{
                            minWidth:"5.8rem",
                            color: active === 'popular' ? 'white' : undefined,
                            borderBottom: active === 'popular' ? '2px solid rgb(244, 117, 33)' : undefined
                        }}>Popular</button>
                    </Link>
                    <Link to="/simulcast" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <button style={{
                            minWidth:"6.5rem",
                            color: active === 'simulcast' ? 'white' : undefined,
                            borderBottom: active === 'simulcast' ? '2px solid rgb(244, 117, 33)' : undefined
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

                    <p>|</p>
                    <button style={{minWidth:"5rem"}}>Manga</button>
                    <button style={{minWidth:"5rem"}}>Games</button>
                    <button style={{minWidth:"6rem"}}>News <span> ▼</span></button>
                    
                    <button style={{display:"flex", minWidth:"6.2rem", position:"absolute", right:"10%"}}>
                        <img style={{ height:'37%', marginTop:"15%", marginLeft:"12%" }} src={Crown} alt="Crown" />
                        <div style={{marginTop:"14%", marginLeft:"7%"}}>
                            <p style={{ color:"rgb(244, 174, 33)", fontSize:"70%"}}>TRY FREE</p>
                            <p style={{color:"white", fontSize:"70%"}}>PREMIUM</p>
                        </div>
                    </button>
                    <Link to="/search" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <button style={{
                            minWidth:"3rem",
                            fontSize:"150%",
                            position:"absolute",
                            right:"7.7%",
                            color: active === 'search' ? 'rgb(244, 117, 33)' : undefined
                        }}>🔍︎</button>
                    </Link>
                    <button style={{minWidth:"3rem", fontSize:"150%", position:"absolute", right:"5%"}}>⛉</button>
                    <button style={{ position:"absolute", right:"0%"}}><img style={{height:"85%"}} src={Anger} alt="" /> <span style={{position:"relative", bottom:"20px"}}>▼</span></button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
