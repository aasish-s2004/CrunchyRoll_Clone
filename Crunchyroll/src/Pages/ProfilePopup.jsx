import React from 'react'
import './ProfilePopup.css'
import Anger from '../assets/angry.svg'
import Crown from '../assets/crown.png'
import { Link } from 'react-router-dom'

function ProfilePopup({ onClose }) {
    return (
        <div className="ProfilePopupContainer">
            <Link to="/profile" className="ProfilePopupHeaderLink" onClick={onClose} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="ProfilePopupHeader">
                    <div className="ProfilePopupAvatar">
                        <img src={Anger} alt="Profile" />
                    </div>
                    <div className="ProfilePopupName">My Profile</div>
                    <span className="ProfilePopupEditIcon">✏️</span>
                </div>
            </Link>

            <Link to="/#plansSection" onClick={onClose} style={{ textDecoration: 'none', display: 'block' }}>
                <button className="ProfilePopupTrialBtn" style={{backgroundColor:" rgb(248, 192, 39)", color:"black"}}>
                    <img style={{ height: '18px', margin: "0px 2px -3px 0px" }} src={Crown} alt="Crown" /> 7-DAY FREE TRIAL
                </button>
            </Link>

            <div className="ProfilePopupDivider"></div>

            <div className="ProfilePopupMenu">
                <Link to="/switch-profile" className="ProfileMenuLink" onClick={onClose}>
                    <div className="ProfilePopupMenuItem">
                        <span className="ProfileMenuIcon">⇆</span>
                        <span>Switch Profile</span>
                    </div>
                </Link>

                <div className="ProfilePopupMenuItem">
                    <span className="ProfileMenuIcon">⚙</span>
                    <span>Settings</span>
                </div>

                <div className="ProfilePopupDivider"></div>

                <Link to="/watchlist" className="ProfileMenuLink" onClick={onClose}>
                    <div className="ProfilePopupMenuItem">
                        <span className="ProfileMenuIcon">⛉</span>
                        <span>Watchlist</span>
                    </div>
                </Link>

                <Link to="/crunchylists" className="ProfileMenuLink" onClick={onClose}>
                    <div className="ProfilePopupMenuItem">
                        <span className="ProfileMenuIcon">⫶☰</span>
                        <span>Crunchylists</span>
                    </div>
                </Link>

                <Link to="/history" className="ProfileMenuLink" onClick={onClose}>
                    <div className="ProfilePopupMenuItem">
                        <span className="ProfileMenuIcon">◴</span>
                        <span>History</span>
                    </div>
                </Link>

                <div className="ProfilePopupDivider"></div>

                <Link to="/notifications" className="ProfileMenuLink" onClick={onClose}>
                    <div className="ProfilePopupMenuItem">
                        <span className="ProfileMenuIcon">🕭</span>
                        <span>Notifications</span>
                    </div>
                </Link>

                <div className="ProfilePopupDivider"></div>

                <Link to="/redeem" className="ProfileMenuLink" onClick={onClose}>
                    <div className="ProfilePopupMenuItem">
                        <span className="ProfileMenuIcon">𖠩</span>
                        <div>
                            <span>Gift Card</span>
                            <p className="ProfileMenuSubtext" style={{color:"rgba(134, 136, 136, 0.88)", fontSize:"0.8rem", minWidth:"15rem", fontWeight:"500", margin: "4px 0 0 0"}}>Have a gift card? Redeem it here.</p>
                        </div>
                    </div>
                </Link>

                <div className="ProfilePopupDivider"></div>

                <Link to="/login" className="ProfileMenuLink" onClick={onClose}>
                    <div className="ProfilePopupMenuItem">
                        <span className="ProfileMenuIcon">↪</span>
                        <span>Log Out</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ProfilePopup
