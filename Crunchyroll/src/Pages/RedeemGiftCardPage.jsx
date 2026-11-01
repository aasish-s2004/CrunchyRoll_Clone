import React, { useState } from 'react'
import './RedeemGiftCardPage.css'
import Navbar from './Navbar'
import Footer from './Footer'
import HimeSitting from '../assets/himeSitting.png'
import Background from '../assets/background.jpg'
import { useNavigate } from 'react-router-dom'

function RedeemGiftCardPage() {
    const navigate = useNavigate()
    const [cardCode, setCardCode] = useState('')

    const handleContinue = () => {
        if (!cardCode.trim()) {
            alert('Please enter a valid gift card code.')
            return
        }
        alert(`Redeeming code: ${cardCode}`)
    }

    return (
        <div className="RedeemPageContainer">
            <Navbar active="redeem" />

            <div className="RedeemMainContent">
                <div className="RedeemHeroGrid">
                    <div className="RedeemHeroLeft">
                        <img src={HimeSitting} alt="Crunchyroll Mascot" className="RedeemMascotImg" />
                    </div>

                    <div className="RedeemHeroRight">
                        <h1 className="RedeemTitle">Redeem Your Gift Card</h1>
                        <p className="RedeemSubtitle">Binge-worthy anime and exclusive games. It's all here.</p>

                        <div className="RedeemInputWrapper">
                            <input
                                type="text"
                                className="RedeemInput"
                                placeholder="Enter Gift Card Code"
                                value={cardCode}
                                onChange={(e) => setCardCode(e.target.value)}
                            />
                            <a href="#help" className="RedeemNeedHelp" onClick={(e) => { e.preventDefault(); alert('For help with gift cards, contact Crunchyroll support.'); }}>
                                NEED HELP?
                            </a>
                        </div>

                        <button className="RedeemContinueBtn" onClick={handleContinue}>
                            CONTINUE
                        </button>
                    </div>
                </div>

                <div className="RedeemBottomBanner" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.9)), url(${Background})` }}>
                    <h2 className="BannerTitle">Surprise an anime fan with Premium today!</h2>
                    <p className="BannerSubtitle">
                        Give the gift of ad-free anime, offline viewing and <span className="BannerHighlight">more</span> on Crunchyroll
                    </p>
                    <button className="BannerShopBtn" onClick={() => navigate('/')}>
                        SHOP GIFT CARDS
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default RedeemGiftCardPage

