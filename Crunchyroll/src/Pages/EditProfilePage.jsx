import React, { useState } from 'react'
import './EditProfilePage.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Anger from '../assets/angry.svg'
import Background from '../assets/clevatess_background.png'
import { useNavigate } from 'react-router-dom'

function EditProfilePage() {
    const navigate = useNavigate()
    const [profileName, setProfileName] = useState('My Profile')
    const [username, setUsername] = useState('')

    const randomUsernames = [
        'OtakuKing42', 'AnimeShadow', 'HokageVibes', 'TitanSlayer',
        'ZoroLostAgain', 'LuffyMeatLover', 'GojoInfinity', 'DekuSmash'
    ]

    const handleRandomize = () => {
        const rand = randomUsernames[Math.floor(Math.random() * randomUsernames.length)]
        setUsername(rand)
    }

    return (
        <div className="EditProfilePageContainer">
            <Navbar active="profile" />

            <div className="EditProfileMainContent">
                <h1 className="EditProfileHeading">Edit Profile</h1>

                <div className="EditProfileCard">
                    <div className="EditProfileBanner" style={{ backgroundImage: `url(${Background})` }}>
                        <div className="UpdateBannerOverlay">
                            <span>Update Background Image</span>
                        </div>
                        <button className="EditBannerBtn" title="Change Banner">✏️</button>
                        <div className="EditAvatarWrapper">
                            <img src={Anger} alt="Avatar" className="EditAvatarImg" />
                            <div className="AvatarChangeOverlay">
                                <span>Change</span>
                            </div>
                            <span className="EditAvatarPencil">✏️</span>
                        </div>
                    </div>

                    <div className="EditProfileForm">
                        <div className="EditFieldGroup">
                            <label className="EditFieldLabel">Profile Name</label>
                            <input
                                type="text"
                                className="EditFieldInput"
                                value={profileName}
                                onChange={(e) => setProfileName(e.target.value)}
                            />
                            <p className="EditFieldHint">
                                This is seen within your household and can be changed anytime.
                            </p>
                        </div>

                        <div className="EditFieldGroup" style={{ marginTop: '28px' }}>
                            <div className="EditUsernameHeader">
                                
                                <button type="button" className="RandomizeBtn" onClick={handleRandomize}>
                                    RANDOMIZE
                                </button>
                            </div>
                            <input
                                type="text"
                                className="EditFieldInput"
                                placeholder="Username (Optional)"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <p className="EditFieldHint">
                                Create a Username to be ready for future experiences that'll share your love for anime! Pick one you love; it can't be changed!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="EditProfileActions">
                    <button className="EditSaveBtn" onClick={() => navigate('/home')}>
                        SAVE
                    </button>
                    <button className="EditCancelBtn" onClick={() => navigate('/home')}>
                        CANCEL
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default EditProfilePage

