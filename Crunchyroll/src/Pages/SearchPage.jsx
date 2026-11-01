
import './SearchPage.css'
import Navbar from './Navbar'
import Footer from './Footer'



function SearchPage() {
    

    return (
        <div className="SearchPageContainer">
            <Navbar active="search" />

            <div className="SearchMainContent">
                <div className="SearchInputArea">
                    <input
                        type="text"
                        className="SearchInputField"
                        placeholder="Search..."
                        autoFocus
                    />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default SearchPage

