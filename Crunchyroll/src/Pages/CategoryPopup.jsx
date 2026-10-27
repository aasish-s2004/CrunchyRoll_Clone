import React from 'react'
import './CategoryPopup.css'
import { Link } from 'react-router-dom'

const themes = [
    ["Action", "Adventure", "Comedy", "Drama", "Fantasy"],
    ["Music", "Romance", "Sci-Fi", "Seinen", "Shojo"],
    ["Shonen", "Slice of life", "Sports", "Supernatural", "Thriller"]
]

function CategoryPopup({ onClose }) {
    return (
        <div className="CategoryPopupContainer">
            <div className="CategoryLeftSection">
                <Link to="/popular" className="CategoryLeftItem" onClick={onClose}>
                    Browse All (A–Z)
                </Link>
                <Link to="/simulcast" className="CategoryLeftItem" onClick={onClose}>
                    Release Calendar
                </Link>
                <span className="CategoryLeftItem" onClick={onClose}>
                    Music Videos & Concerts
                </span>
            </div>

            <div className="CategoryRightSection">
                <div className="CategoryThemesHeader">THEMES</div>
                <div className="CategoryThemesGrid">
                    {themes.map((column, colIdx) => (
                        <div key={colIdx} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {column.map((theme, idx) => (
                                <span key={idx} className="CategoryThemeItem" onClick={onClose}>
                                    {theme}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoryPopup
