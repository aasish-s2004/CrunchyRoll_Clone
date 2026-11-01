import React, { useState } from 'react'
import './SwitchProfilePage.css'
import Anger from '../assets/angry.svg'
import Crown from '../assets/crown.png'
import Background from '../assets/clevatess_background.png'
import { useNavigate } from 'react-router-dom'

function SwitchProfilePage() {
    const navigate = useNavigate()
    const [showPremiumModal, setShowPremiumModal] = useState(false)

    return (
        <div className="SwitchProfilePageContainer" style={{ backgroundImage: `url(${Background})` }}>
            <div className="SwitchProfileOverlay">
                <h1 className="SwitchProfileTitle">Who's going on an adventure?</h1>

                <div className="SwitchProfileList">
                    <div className="SwitchProfileItem" onClick={() => navigate('/home')}>
                        <div className="ProfileAvatarBox">
                            <img src={Anger} alt="My Profile" />
                        </div>
                        <span className="ProfileItemLabel">My Profile</span>
                    </div>

                    <div className="SwitchProfileItem" onClick={() => setShowPremiumModal(true)}>
                        <div className="AddNewProfileBox">
                            <span className="AddNewPlus">+</span>
                            <div className="AddNewCrownBadge">
                                <img src={Crown} alt="Crown" />
                            </div>
                        </div>
                        <span className="ProfileItemLabel">Add New</span>
                    </div>
                </div>

                <button className="ManageProfilesBtn" onClick={() => navigate('/profile')}>
                    MANAGE PROFILES
                </button>

                <button className="SwitchProfileLogoutBtn" onClick={() => navigate('/login')}>
                    Log Out
                </button>

                {showPremiumModal && (
                    <div className="PremiumModalBackdrop" onClick={() => setShowPremiumModal(false)}>
                        <div className="PremiumModalCard" onClick={(e) => e.stopPropagation()}>
                            <button className="PremiumModalCloseBtn" onClick={() => setShowPremiumModal(false)}>
                                ✕
                            </button>

                            <h2 className="PremiumModalTitle">Get More With a Premium Membership</h2>
                            <p className="PremiumModalDesc">
                                Create profiles, watch on up to 6 devices at a time, and say goodbye to ads by upgrading your membership.
                            </p>

                            <div className="PremiumModalBtnRow">
                                <button
                                    className="PremiumModalUpgradeBtn"
                                    onClick={() => navigate('/#plansSection')}
                                >
                                    <img src={Crown} alt="Crown" style={{ width: '16px', height: '16px', marginRight: '6px' }} />
                                    UPGRADE
                                </button>
                                <button
                                    className="PremiumModalNotNowBtn"
                                    onClick={() => setShowPremiumModal(false)}
                                >
                                    NOT NOW
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SwitchProfilePage

