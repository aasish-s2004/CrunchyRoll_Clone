import React from 'react'
import './NewsPopup.css'
import { Link } from 'react-router-dom'

function NewsPopup({ onClose }) {
    return (
        <div className="NewsPopupContainer">
            <Link style={{color:"rgb(211, 211, 211)"}} to="https://www.crunchyroll.com/news" className="NewsPopupItem" onClick={onClose}>
                All News
            </Link>
            <Link style={{color:"rgb(211, 211, 211)"}} to="https://www.crunchyroll.com/animeawards/" className="NewsPopupItem" onClick={onClose}>
                Anime Awards
            </Link>
            <Link style={{color:"rgb(211, 211, 211)"}} to="https://www.crunchyroll.com/events/" className="NewsPopupItem" onClick={onClose}>
                Events & Experiences
            </Link>
        </div>
    )
}

export default NewsPopup
