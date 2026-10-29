import { useState } from 'react'
import './SearchPage.css'
import Navbar from './Navbar'
import Footer from './Footer'

const allSearchableAnime = [

    {
        id: 1,
        title: "Black Clover",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00002115-base_asset_2x3-en-US",
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
        id: 3,
        title: "Overgeared",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00384004-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 4,
        title: "Naruto",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00091370-base_asset_2x3-en-US",
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
        id: 6,
        title: "That Time I Got Reincarnated as a Slime",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00050707-base_asset_2x3-en-US",
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
        id: 8,
        title: "The Apothecary Diaries",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00325113-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 9,
        title: "Haikyu!!",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00111695-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 10,
        title: "Mushoku Tensei:Jobless Reiincarnation",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00102634-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 11,
        title: "JUJUTSU KAISEN",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00169670-base_asset_2x3-en-US",
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
        id: 13,
        title: "Dr.STONE",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00088715-base_asset_2x3-en-US",
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
        id: 15,
        title: "The Exilled Heavy Knight Knows How to Game the System",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00378018-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 16,
        title: "Tomb Raider King",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00378123-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 17,
        title: "Full Clearing Another World under a Goddess with Zero Belivers",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00383992-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 18,
        title: "One-Punch Man",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00102550-base_asset_2x3-en-US",
        badge: null
    }
    
]

function SearchPage() {
    const [query, setQuery] = useState('')

    const filteredAnime = query.trim()
        ? allSearchableAnime.filter((anime) =>
              anime.title.toLowerCase().includes(query.toLowerCase())
          )
        : []

    return (
        <div className="SearchPageContainer">
            <Navbar active="search" />

            <div>
                <div className="SearchInputArea">
                    <input
                        type="text"
                        className="SearchInputField"
                        placeholder="Search..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        autoFocus
                    />
                </div>

                {filteredAnime.length > 0 && (
                    <div className="SearchResultsGrid">
                        {filteredAnime.map((anime) => (
                            <div key={anime.id} className="AnimeGridCard">
                                <div className="GridPosterWrapper">
                                    <img
                                        src={anime.image}
                                        alt={anime.title}
                                        loading="lazy"
                                        onError={(e) => {
                                            e.currentTarget.onerror = null
                                            e.currentTarget.src = "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&auto=format&fit=crop"
                                        }}
                                    />
                                </div>
                                <h3 className="GridCardTitle">{anime.title}</h3>
                                <p className="GridCardTag">{anime.tag}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <Footer />
        </div>
    )
}

export default SearchPage

