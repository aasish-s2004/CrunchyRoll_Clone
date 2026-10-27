import { useState } from 'react'
import './SearchPage.css'
import Navbar from './Navbar'
import Footer from './Footer'

const allSearchableAnime = [
    
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

