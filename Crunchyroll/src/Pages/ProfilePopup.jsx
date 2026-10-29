import React from 'react'
import './ProfilePopup.css'
import Anger from '../assets/angry.svg'
import Crown from '../assets/crown.png'

function ProfilePopup({ onClose }) {
    return (
        <div className="ProfilePopupContainer">
            <div className="ProfilePopupHeader">
                <div className="ProfilePopupAvatar">
                    <img src={Anger} alt="Profile" />
                </div>
                <div className="ProfilePopupName">My Profile</div>
                <span className="ProfilePopupEditIcon">✎</span>
            </div>

            <button className="ProfilePopupTrialBtn"><img style={{ height: '18px', marginRight: "6px" }} src={Crown} alt="Crown" /> 7-DAY FREE TRIAL</button>

            <div className="ProfilePopupMenu">
                <div className="ProfilePopupMenuItem">
                    <span className="ProfileMenuIcon">⇆</span>
                    <span>Switch Profile</span>
                </div>
                <div className="ProfilePopupMenuItem">
                    <span className="ProfileMenuIcon">⚙</span>
                    <span>Settings</span>
                </div>

                <div className="ProfilePopupDivider"></div>

                <div className="ProfilePopupMenuItem">
                    <span className="ProfileMenuIcon">🔖</span>
                    <span>Watchlist</span>
                </div>
                <div className="ProfilePopupMenuItem">
                    <span className="ProfileMenuIcon">☰</span>
                    <span>Crunchylists</span>
                </div>
                <div className="ProfilePopupMenuItem">
                    <span className="ProfileMenuIcon">🕐</span>
                    <span>History</span>
                </div>

                <div className="ProfilePopupDivider"></div>

                <div className="ProfilePopupMenuItem">
                    <span className="ProfileMenuIcon">🔔</span>
                    <span>Notifications</span>
                </div>

                <div className="ProfilePopupDivider"></div>

                <div className="ProfilePopupMenuItem">
                    <span className="ProfileMenuIcon">🎁</span>
                    <div>
                        <span>Gift Card</span>
                        <p className="ProfileMenuSubtext">Have a gift card? <span className="ProfileRedeemLink">Redeem it here.</span></p>
                    </div>
                </div>

                <div className="ProfilePopupDivider"></div>

                <div className="ProfilePopupMenuItem">
                    <span className="ProfileMenuIcon">↪</span>
                    <span>Log Out</span>
                </div>
            </div>
        </div>
    )
}

export default ProfilePopup

