import React, { useState, useEffect } from 'react'
import './MyListsPage.css'
import Navbar from './Navbar'
import Footer from './Footer'
import EmptyWatchlist from '../assets/empty-watchlist.png'
import EmptyCrList from '../assets/empty-cr-list.png'
import EmptyHistory from '../assets/empty-history.png'
import { useNavigate, useLocation } from 'react-router-dom'

function MyListsPage({ initialTab = 'watchlist' }) {
    const navigate = useNavigate()
    const location = useLocation()
    const [activeTab, setActiveTab] = useState(initialTab)

    useEffect(() => {
        if (location.pathname.includes('crunchylist')) {
            setActiveTab('crunchylists')
        } else if (location.pathname.includes('history')) {
            setActiveTab('history')
        } else {
            setActiveTab('watchlist')
        }
    }, [location.pathname])

    const handleTabClick = (tab) => {
        setActiveTab(tab)
        navigate(`/${tab}`)
    }

    return (
        <div className="MyListsPageContainer">
            <Navbar active="watchlist" />

            <div className="MyListsMainContent">
                <div className="MyListsHeaderTitle">
                    <span className="MyListsBookmarkIcon">⛉</span>
                    <h1>My Lists</h1>
                </div>

                <div className="MyListsTabsRow">
                    <button
                        className={`MyListTabBtn ${activeTab === 'watchlist' ? 'ActiveTab' : ''}`}
                        onClick={() => handleTabClick('watchlist')}
                    >
                        WATCHLIST
                    </button>
                    <button
                        className={`MyListTabBtn ${activeTab === 'crunchylists' ? 'ActiveTab' : ''}`}
                        onClick={() => handleTabClick('crunchylists')}
                    >
                        CRUNCHYLISTS
                    </button>
                    <button
                        className={`MyListTabBtn ${activeTab === 'history' ? 'ActiveTab' : ''}`}
                        onClick={() => handleTabClick('history')}
                    >
                        HISTORY
                    </button>
                </div>

                <div className="MyListsDashedCard">
                    {activeTab === 'watchlist' && (
                        <div className="EmptyStateBlock">
                            <img src={EmptyWatchlist} alt="Empty Watchlist" className="EmptyStateImg" />
                            <p className="EmptyStateTitle">Your Watchlist needs some love.</p>
                            <p className="EmptyStateSubtitle">Let's fill it up with awesome anime.</p>
                            <button className="EmptyStateActionBtn" onClick={() => navigate('/home')}>
                                GO TO HOME FEED
                            </button>
                        </div>
                    )}

                    {activeTab === 'crunchylists' && (
                        <div className="EmptyStateBlock">
                            <img src={EmptyCrList} alt="Empty Crunchylists" className="EmptyStateImg" />
                            <p className="EmptyStateTitle">You don't have any Crunchylists yet.</p>
                            <p className="EmptyStateSubtitle">Let's create one!</p>
                            <button className="EmptyStateActionBtn" onClick={() => alert('Crunchylist feature coming soon!')}>
                                CREATE NEW LIST
                            </button>
                        </div>
                    )}

                    {activeTab === 'history' && (
                        <div className="EmptyStateBlock">
                            <img src={EmptyHistory} alt="Empty History" className="EmptyStateImg" />
                            <p className="EmptyStateTitle">Make History... with history.</p>
                            <p className="EmptyStateSubtitle">Start watching to fill this feed.</p>
                            <button className="EmptyStateActionBtn" onClick={() => navigate('/home')}>
                                GO TO HOME FEED
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default MyListsPage

