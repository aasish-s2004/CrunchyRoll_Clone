import { useState } from 'react'
import './WatchTimeFinder.css'
import Navbar from './Navbar'
import Footer from './Footer'
import AnimeSliderCategory from './AnimeSliderCategory'

const quickTimeOptions = ['20 MIN', '40 MIN', '1 HOUR', '2+ HOURS']

const quickTimeMap = {
    '20 MIN': 20,
    '40 MIN': 40,
    '1 HOUR': 60,
    '2+ HOURS': 120
}

const animeCollection = [
    {
        id: 1,
        title: "Bananya and the Mysterious Kingdom",
        duration: 10,
        genres: "Comedy, Slice of Life",
        tag: "10 min • Comedy, Slice of Life",
        rating: "4.7 ★",
        reviews: "(240K)",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00389311-base_asset_2x3-en-US",
        badge: null,
        synopsis: "Bananya is a cute kitty who lives inside a banana. Discover the whimsical adventures of Bananya and friends in this short, heartwarming series."
    },
    {
        id: 2,
        title: "I Can't Understand What My Husband Is Saying",
        duration: 10,
        genres: "Comedy, Romance",
        tag: "10 min • Comedy, Romance",
        rating: "4.6 ★",
        reviews: "(310K)",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00384000-base_asset_2x3-en-US",
        badge: null,
        synopsis: "A sweet romantic comedy revolving around a hardworking office lady and her otaku husband who spends his days immersed in internet forums and hobbies."
    },
    {
        id: 3,
        title: "TONIKAWA: Over The Moon For You (High School Days)",
        duration: 10,
        genres: "Romance, Comedy",
        tag: "10 min • Romance, Comedy",
        rating: "4.8 ★",
        reviews: "(620K)",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00371881-base_asset_2x3-en-US",
        badge: null,
        synopsis: "Nasa Yuzaki is requested to teach a special class at an all-girls high school. Supported by his loving wife Tsukasa, hilarious new school days unfold."
    },
    {
        id: 4,
        title: "Saiki K: Mini Flash Episodes",
        duration: 10,
        genres: "Comedy, Supernatural",
        tag: "10 min • Comedy, Supernatural",
        rating: "4.9 ★",
        reviews: "(890K)",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00324918-base_asset_2x3-en-US",
        badge: null,
        synopsis: "Kusuo Saiki possesses all manner of psychic abilities. He tries to live a normal, quiet life, but his eccentric classmates constantly pull him into comical chaos."
    },

    {
        id: 5,
        title: "Dragon Ball Super",
        duration: 20,
        genres: "Action, Adventure",
        tag: "20 min • Action, Adventure",
        rating: "4.7 ★",
        reviews: "(1.5M)",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00002182-base_asset_2x3-en-US",
        badge: null,
        synopsis: "After defeating Majin Buu, Goku and friends encounter Beerus the God of Destruction, leading into new cosmic tournaments and god-like transformations."
    },
    {
        id: 6,
        title: "Dr. STONE",
        duration: 20,
        genres: "Sci-Fi, Adventure",
        tag: "20 min • Sci-Fi, Adventure",
        rating: "4.8 ★",
        reviews: "(950K)",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00088715-base_asset_2x3-en-US",
        badge: null,
        synopsis: "Thousands of years after humanity was mysteriously turned to stone, extraordinarily genius scientist Senku wakes up and vows to rebuild civilization with science."
    },
    {
        id: 7,
        title: "Naruto",
        duration: 20,
        genres: "Action, Adventure",
        tag: "20 min • Action, Adventure",
        rating: "4.8 ★",
        reviews: "(2.3M)",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00091370-base_asset_2x3-en-US",
        badge: null,
        synopsis: "Naruto Uzumaki, an ostracized ninja who carries the spirit of the Nine-Tails Fox within him, strives for peer recognition and dreams of becoming Hokage."
    },
    {
        id: 8,
        title: "Black Clover",
        duration: 20,
        genres: "Action, Fantasy",
        tag: "20 min • Action, Fantasy",
        rating: "4.8 ★",
        reviews: "(1.8M)",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00002115-base_asset_2x3-en-US",
        badge: null,
        synopsis: "In a kingdom where magic is paramount, Asta was born completely devoid of magic power. Despite all odds, he receives a five-leaf clover grimoire of anti-magic."
    },
    {
        id: 9,
        title: "Afro Samurai: Resurrection Flash",
        duration: 20,
        genres: "Action, Sci-Fi",
        tag: "20 min • Action, Sci-Fi",
        rating: "4.7 ★",
        reviews: "(450K)",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00198784-base_asset_2x3-en-US",
        badge: null,
        synopsis: "In a futuristic yet feudal Japan, a samurai with the Number Two headband avenges his master while fending off endless assassins chasing the ultimate title."
    },

    {
        id: 10,
        title: "Haikyu!!",
        duration: 30,
        genres: "Sports, Drama",
        tag: "30 min • Sports, Drama",
        rating: "4.9 ★",
        reviews: "(1.4M)",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00111695-base_asset_2x3-en-US",
        badge: null,
        synopsis: "Inspired by the 'Little Giant', short-statured Hinata joins Karasuno High's volleyball club, forming an electric rivalry and partnership with genius setter Kageyama."
    },
    {
        id: 11,
        title: "One-Punch Man",
        duration: 30,
        genres: "Action, Comedy",
        tag: "30 min • Action, Comedy",
        rating: "4.8 ★",
        reviews: "(1.7M)",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00102550-base_asset_2x3-en-US",
        badge: null,
        synopsis: "Saitama is a hero for fun who can defeat any opponent with a single punch. However, being overpowered makes battle utterly boring as he searches for a real thrill."
    },
    {
        id: 12,
        title: "JUJUTSU KAISEN",
        duration: 30,
        genres: "Supernatural, Action",
        tag: "30 min • Supernatural, Action",
        rating: "4.9 ★",
        reviews: "(2.1M)",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00169670-base_asset_2x3-en-US",
        badge: null,
        synopsis: "Yuji Itadori swallows a cursed finger belonging to Ryomen Sukuna, dragging him into the dangerous and mystical world of Tokyo Jujutsu High Sorcerers."
    },
    {
        id: 13,
        title: "Solo Leveling",
        duration: 30,
        genres: "Action, Fantasy",
        tag: "30 min • Action, Fantasy",
        rating: "4.9 ★",
        reviews: "(1.6M)",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00320667-base_asset_2x3-en-US",
        badge: "2026 Winner",
        synopsis: "Sung Jinwoo, known as the weakest hunter of all mankind, is fatally wounded in a double dungeon. Suddenly, an enigmatic quest window appears before his eyes."
    },
    {
        id: 14,
        title: "Demon Slayer: Kimetsu no Yaiba",
        duration: 30,
        genres: "Action, Historical",
        tag: "30 min • Action, Historical",
        rating: "4.9 ★",
        reviews: "(2.5M)",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00058844-base_asset_2x3-en-US",
        badge: "2026 Winner",
        synopsis: "Tanjiro Kamado's peaceful life is shattered when demons slaughter his family. Joining the Demon Slayer Corps, he searches for a cure for his sister Nezuko."
    },

    {
        id: 15,
        title: "My Hero Academia",
        duration: 40,
        genres: "Action, Superhero",
        tag: "40 min • Action, Superhero",
        rating: "4.8 ★",
        reviews: "(2.0M)",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00002328-base_asset_2x3-en-US",
        badge: "2026 Winner",
        synopsis: "Born without a superpower in a society where nearly everyone has one, Izuku Midoriya catches the eye of the legendary All Might, inheriting his power."
    },
    {
        id: 16,
        title: "Chainsaw Man",
        duration: 40,
        genres: "Dark Fantasy, Action",
        tag: "40 min • Dark Fantasy, Action",
        rating: "4.8 ★",
        reviews: "(1.3M)",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00324918-base_asset_2x3-en-US",
        badge: null,
        synopsis: "Denji lives a life of poverty, repaying his deceased father's debt with Pochita. After being betrayed, he merges with Pochita as Chainsaw Man."
    },
    {
        id: 17,
        title: "Spy x Family",
        duration: 40,
        genres: "Comedy, Action",
        tag: "40 min • Comedy, Action",
        rating: "4.9 ★",
        reviews: "(1.7M)",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00384016-base_asset_2x3-en-US",
        badge: null,
        synopsis: "A master spy creates a fake family to infiltrate an elite school, unaware his adopted daughter is a telepath and his fake wife is a lethal assassin."
    },
    {
        id: 18,
        title: "Naruto Shippuden",
        duration: 40,
        genres: "Action, Adventure",
        tag: "40 min • Action, Adventure",
        rating: "4.9 ★",
        reviews: "(3.1M)",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00091371-base_asset_2x3-en-US",
        badge: null,
        synopsis: "Two and a half years after leaving Konoha to train with Jiraiya, Naruto returns stronger and readier than ever to face the Akatsuki organization and save Sasuke."
    },
    {
        id: 19,
        title: "Overgeared",
        duration: 40,
        genres: "Action, Sci-Fi",
        tag: "40 min • Action, Sci-Fi",
        rating: "4.7 ★",
        reviews: "(420K)",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00384004-base_asset_2x3-en-US",
        badge: null,
        synopsis: "Shin Youngwoo, known as Grid in Satisfy, discovers a legendary blacksmith class and transforms from an unlucky player into an unmatched warrior."
    },

    {
        id: 20,
        title: "That Time I Got Reincarnated as a Slime",
        duration: 50,
        genres: "Fantasy, Isekai",
        tag: "50 min • Fantasy, Isekai",
        rating: "4.8 ★",
        reviews: "(1.2M)",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00050707-base_asset_2x3-en-US",
        badge: null,
        synopsis: "Corporate worker Mikami is stabbed and reincarnated as a slime named Rimuru Tempest. He establishes the Jura Tempest Federation for all monsters."
    },
    {
        id: 21,
        title: "The Apothecary Diaries",
        duration: 50,
        genres: "Mystery, Historical",
        tag: "50 min • Mystery, Historical",
        rating: "4.9 ★",
        reviews: "(920K)",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00325113-base_asset_2x3-en-US",
        badge: null,
        synopsis: "Maomao, a pharmacist in the imperial pleasure quarter, is kidnapped and sold to the Imperial Palace, where her sharp medical mind unravels court conspiracies."
    },
    {
        id: 22,
        title: "Wind Breaker",
        duration: 50,
        genres: "Action, Drama",
        tag: "50 min • Action, Drama",
        rating: "4.8 ★",
        reviews: "(680K)",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00378072-base_asset_2x3-en-US",
        badge: null,
        synopsis: "Haruka Sakura wants nothing to do with weaklings and only seeks the strongest opponents. Enrolling at Furin High, he learns its brawlers protect their town."
    },
    {
        id: 23,
        title: "Frieren: Beyond Journey's End",
        duration: 50,
        genres: "Fantasy, Adventure",
        tag: "50 min • Fantasy, Adventure",
        rating: "4.9 ★",
        reviews: "(1.4M)",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00384003-base_asset_2x3-en-US",
        badge: "2026 Winner",
        synopsis: "Elven mage Frieren and her fellow heroes defeated the Demon King. As an elf whose lifespan spans millennia, she embarks on a quest to truly understand human bonds."
    },
    {
        id: 24,
        title: "Attack on Titan: The Final Season",
        duration: 50,
        genres: "Action, Drama",
        tag: "50 min • Action, Drama",
        rating: "4.9 ★",
        reviews: "(2.9M)",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00389311-base_asset_2x3-en-US",
        badge: null,
        synopsis: "The war for Paradis reaches its world-shattering climax as Eren Yeager initiates the Rumbling, unleashing Colossal Titans across the globe."
    }
]

const getAvailableTimeMessage = (minutes) => {
    if (minutes < 20) {
        return "You have enough time for a quick short-form episode."
    }
    if (minutes <= 30) {
        return "You have enough time for one standard episode."
    }
    if (minutes <= 45) {
        return "You have enough time for one full episode or special."
    }
    if (minutes <= 60) {
        return "You have enough time for two back-to-back episodes."
    }
    if (minutes <= 90) {
        return "You have enough time for three episodes or a mini-marathon."
    }
    return "You have plenty of time for an anime movie or a binge session!"
}

function WatchTimeFinder() {
    const [selectedTime, setSelectedTime] = useState(null)
    const [customMinutes, setCustomMinutes] = useState(35)
    const [showResults, setShowResults] = useState(true)
    const [appliedMinutes, setAppliedMinutes] = useState(35)

    const handleQuickSelect = (time) => {
        setSelectedTime(time)
        const mins = quickTimeMap[time] || 20
        setCustomMinutes(mins)
        setAppliedMinutes(mins)
        setShowResults(true)
    }

    const handleCustomChange = (e) => {
        const value = parseInt(e.target.value, 10)
        const mins = isNaN(value) ? '' : value
        setCustomMinutes(mins)
        if (mins === 20) setSelectedTime('20 MIN')
        else if (mins === 40) setSelectedTime('40 MIN')
        else if (mins === 60) setSelectedTime('1 HOUR')
        else if (mins >= 120) setSelectedTime('2+ HOURS')
        else setSelectedTime(null)
    }

    const handleFindAnime = () => {
        const mins = Number(customMinutes) > 0 ? Number(customMinutes) : 20
        setAppliedMinutes(mins)
        setShowResults(true)
        setTimeout(() => {
            const resultsSection = document.getElementById('wtf-results-section')
            if (resultsSection) {
                resultsSection.scrollIntoView({ behavior: 'smooth' })
            }
        }, 50)
    }

    const handleChangeTime = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        const inputElem = document.querySelector('.WTFCustomInput')
        if (inputElem) {
            inputElem.focus()
        }
    }

    const perfectForYouList = animeCollection.filter(anime => anime.duration <= appliedMinutes)

    let haveMoreTimeList = animeCollection.filter(anime => anime.duration > appliedMinutes)
    if (haveMoreTimeList.length === 0) {
        haveMoreTimeList = animeCollection.filter(anime => anime.duration >= 50)
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
                            onChange={handleCustomChange}
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
                <div id="wtf-results-section" className="WTFResultsSection">
                    <div className="WTFResultsHeader">
                        <div className="WTFResultsLeft">
                            <span className="WTFResultsIcon">⚡</span>
                            <div>
                                <h3 className="WTFResultsTitle">RESULTS FOR {appliedMinutes} MINUTES</h3>
                                <p className="WTFResultsSub">{getAvailableTimeMessage(appliedMinutes)}</p>
                            </div>
                        </div>
                        <button className="WTFChangeTimeBtn" onClick={handleChangeTime}>
                            ↻ Change Time
                        </button>
                    </div>
                </div>
            )}

            <div style={{ position: 'relative', zIndex: 10 }}>
                <AnimeSliderCategory
                    title="PERFECT FOR YOU"
                    animeList={perfectForYouList.length > 0 ? perfectForYouList : animeCollection.slice(0, 8)}
                />
                <AnimeSliderCategory
                    title="HAVE A LITTLE MORE TIME?"
                    animeList={haveMoreTimeList}
                />
            </div>

            <Footer />
        </div>
    )
}

export default WatchTimeFinder
