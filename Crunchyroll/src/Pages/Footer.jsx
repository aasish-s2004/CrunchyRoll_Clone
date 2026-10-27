import React from 'react'
import './Footer.css'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="CrunchyrollFooter">
            <div className="FooterTopSection">
                <div className="FooterBrandCol">
                    <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="FooterBrandLogo">
                            <img src={Logo} alt="Logo" style={{ height: '40px' }} />
                            <span>Crunchyroll</span>
                        </div>
                    </Link>
                    <p className="FooterSonyText">
                        <span className="FooterSonyBold">SONY PICTURES</span> | © Crunchyroll, LLC
                    </p>
                    <p className="FooterDesc">
                        Welcome to Crunchyroll, your ultimate destination for streaming the best in anime entertainment.
                    </p>
                    <div className="FooterSocialIcons">
                        <span title="YouTube">▶</span>
                        <span title="Facebook">f</span>
                        <span title="X">𝕏</span>
                        <span title="TikTok">♪</span>
                        <span title="Discord">💬</span>
                    </div>
                    <button className="FooterLanguageBtn">
                        <span>🌐</span> English (US) <span>▼</span>
                    </button>
                </div>

                <div className="FooterNavColumns">
                    <div className="FooterCol">
                        <h4 className="FooterColTitle">Explore</h4>
                        <Link to="/popular">Browse Popular</Link>
                        <Link to="/simulcast">Browse Simulcasts</Link>
                        <p>Release Calendar</p>
                        <p>News</p>
                        <p>Games</p>
                    </div>

                    <div className="FooterCol">
                        <h4 className="FooterColTitle">Resources</h4>
                        <p>About</p>
                        <p>Get the Apps</p>
                        <p>Jobs</p>
                        <p>Help Center</p>
                        <p>Advertising Inquiries</p>
                        <p>Press Inquiries</p>
                    </div>

                    <div className="FooterCol">
                        <h4 className="FooterColTitle">Account</h4>
                        <p className="AccountFreeTrial">Start a Free Trial</p>
                        <p>Switch Profile</p>
                        <p>Watchlist</p>
                        <p>Crunchylists</p>
                        <p>History</p>
                        <p>My Account</p>
                        <p>Redeem Gift Card</p>
                        <p>Log Out</p>
                    </div>
                </div>
            </div>

            <div className="FooterBottomLegal">
                <span>Terms of Service</span>
                <span>Privacy Policy</span>
                <span>Cookie Consent Tool</span>
                <span>Content Feedback</span>
                <span>AdChoices</span>
            </div>
        </footer>
    )
}

export default Footer

