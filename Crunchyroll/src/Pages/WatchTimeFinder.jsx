import { useState } from 'react'
import './WatchTimeFinder.css'
import Navbar from './Navbar'
import Footer from './Footer'
import AnimeSliderCategory from './AnimeSliderCategory'

const quickTimeOptions = ['20 MIN', '40 MIN', '1 HOUR', '2+ HOURS']

const perfectForYouList = [
    {
        id: 4,
        title: "Naruto",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00091370-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 1,
        title: "Black Clover",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00002115-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 5,
        title: "Solo Leveling",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00320667-base_asset_2x3-en-US",
        badge: "2026 Winner"
    },
    {
        id: 11,
        title: "JUJUTSU KAISEN",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00169670-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 14,
        title: "Demon Slayer: Kimetsu no Yaiba",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00058844-base_asset_2x3-en-US",
        badge: "2026 Winner"
    },
    {
        id: 7,
        title: "My Hero Academia",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00002328-base_asset_2x3-en-US",
        badge: "2026 Winner"
    },
    {
        id: 8,
        title: "The Apothecary Diaries",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00325113-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 6,
        title: "That Time I Got Reincarnated as a Slime",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00050707-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 18,
        title: "One-Punch Man",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00102550-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 9,
        title: "Haikyu!!",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00111695-base_asset_2x3-en-US",
        badge: null
    }
]

const haveMoreTimeList = [
    {
        id: 9,
        title: "Haikyu!!",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00111695-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 2,
        title: "Naruto Shippuden",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00091371-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 7,
        title: "My Hero Academia",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00002328-base_asset_2x3-en-US",
        badge: "2026 Winner"
    },
    {
        id: 10,
        title: "Mushoku Tensei:Jobless Reiincarnation",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00102634-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 13,
        title: "Dr.STONE",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00088715-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 12,
        title: "Dragon Ball Super",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00002182-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 3,
        title: "Overgeared",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00384004-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 16,
        title: "Tomb Raider King",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00378123-base_asset_2x3-en-US",
        badge: null
    }
]

function WatchTimeFinder() {
    const [selectedTime, setSelectedTime] = useState(null)
    const [customMinutes, setCustomMinutes] = useState(35)
    const [showResults, setShowResults] = useState(false)
    const [resultMinutes, setResultMinutes] = useState(35)

    const handleQuickSelect = (time) => {
        setSelectedTime(time)
    }

    const handleFindAnime = () => {
        setResultMinutes(customMinutes)
        setShowResults(true)
    }

    const handleChangeTime = () => {
        setShowResults(false)
        setSelectedTime(null)
    }

    return (
        <div style={{ backgroundColor: 'black', minHeight: '100vh', overflowX: 'hidden' }}>
            <Navbar active="wtf" />

            <div className="WTFHeroSection">
                <div className="WTFHeroContent">
                   

                    <div className="WTFTitleRow">
                        <span className="WTFClockIcon">⏳</span>
                        <h1 className="WTFTitle">WATCH TIME FINDER</h1>
                    </div>

                    <h2 className="WTFSubtitle">More Watching. Less Scrolling.</h2>
                    <p className="WTFDescription">
                        Tell us how much time you have, and we'll find something great to watch.
                    </p>

                    <div className="WTFQuickButtons">
                        {quickTimeOptions.map((time) => (
                            <button
                                key={time}
                                className={`WTFQuickBtn ${selectedTime === time ? 'WTFQuickBtnActive' : ''}`}
                                onClick={() => handleQuickSelect(time)}
                            >
                                {time}
                            </button>
                        ))}
                    </div>

                    <div className="WTFOrDivider">
                        <div className="WTFOrLine"></div>
                        <span className="WTFOrText">OR</span>
                        <div className="WTFOrLine"></div>
                    </div>

                    <div className="WTFCustomTimeRow">
                        <span className="WTFCustomLabel">I HAVE EXACTLY</span>
                        <input
                            type="number"
                            className="WTFCustomInput"
                            value={customMinutes}
                            onChange={(e) => setCustomMinutes(Number(e.target.value))}
                            min={1}
                            max={300}
                        />
                        <span className="WTFCustomLabel">MINUTES</span>
                    </div>

                    <button className="WTFFindBtn" onClick={handleFindAnime}>
                        🔍 FIND ANIME
                    </button>
                </div>

                
            </div>

            {showResults && (
                <div className="WTFResultsSection">
                    <div className="WTFResultsHeader">
                        <div className="WTFResultsLeft">
                            <span className="WTFResultsIcon">⚡</span>
                            <div>
                                <h3 className="WTFResultsTitle">RESULTS FOR {resultMinutes} MINUTES</h3>
                                <p className="WTFResultsSub">You have enough time for one episode.</p>
                            </div>
                        </div>
                        <button className="WTFChangeTimeBtn" onClick={handleChangeTime}>
                            ↻ Change Time
                        </button>
                    </div>
                </div>
            )}

            <div style={{ position: 'relative', zIndex: 10 }}>
                <AnimeSliderCategory title="PERFECT FOR YOU" animeList={perfectForYouList} />
                <AnimeSliderCategory title="HAVE A LITTLE MORE TIME?" animeList={haveMoreTimeList} />
            </div>

            <Footer />
        </div>
    )
}

export default WatchTimeFinder

