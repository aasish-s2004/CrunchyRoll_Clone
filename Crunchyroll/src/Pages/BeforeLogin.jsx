import React, { useState, useRef } from 'react';
import BgImg from '../assets/background.jpg';
import Logo from '../assets/Logo.png';
import MangaBg from '../assets/manga-upsell-background.webp';
import MangaImage from '../assets/manga-upsell-image.webp';
import PremiumIcon1 from '../assets/PremiumFeatureItem1.png';
import PremiumIcon2 from '../assets/PremiumFeatureItem2.png';
import PremiumIcon3 from '../assets/PremiumFeatureItem3.png';
import PremiumIcon4 from '../assets/PremiumFeatureItem4.png';
import PremiumIcon5 from '../assets/PremiumFeatureItem5.png';
import PremiumIcon6 from '../assets/PremiumFeatureItem6.png';
import { Link, useNavigate } from 'react-router-dom';
import './BeforeLogin.css';

const firstToWatchAnime = [
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
];

const faqList = [
    {
        q: "Does Crunchyroll offer a free trial?",
        a: "Yes! Crunchyroll provides a 7-day free trial for premium plans, letting users experience ad-free streaming and other benefits before subscribing.*Plans may include trailers and promotional messaging for Crunchyroll content and services, or related products."
    },
    {
        q: "How does Crunchyroll's streaming work?",
        a: "Crunchyroll allows users to stream anime anytime, anywhere on various devices, including smartphones, tablets, gaming consoles, and smart TVs. Premium members enjoy higher-quality streaming and faster access to new episodes."
    },
    {
        q: "What anime titles can I watch on Crunchyroll?",
        a: "Crunchyroll features a vast selection of anime, including popular titles such as One Piece, Solo Leveling, Attack on Titan, My Hero Academia, Jujutsu Kaisen, and many more."
    },
    {
        q: "What are the benefits of Crunchyroll Premium?",
        a: "Premium membership includes ad-free streaming, early access to episodes, offline viewing, multi-device streaming, and discounts on anime merchandise. Higher tiers offer additional perks such as exclusive swag bags. *Plans may include trailers and promotional messaging for Crunchyroll content and services, or related products."
    },
    {
        q: "How do I cancel my Crunchyroll subscription?",
        a: "You can cancel your subscription anytime through your account settings. Your access remains active until the end of your billing cycle."
    },
    {
        q: "Does Crunchyroll have dubbed anime?",
        a: "Yes! Crunchyroll offers both subtitled and dubbed anime, allowing viewers to watch anime in their preferred language."
    },
    {
        q: "Can I download anime on Crunchyroll?",
        a: "Yes, but downloading episodes for offline viewing is available only for Mega Fan and Ultimate Fan subscribers"
    },
    {
        q: "How do I activate Crunchyroll on my device?",
        a: "Activating Crunchyroll is simple! Just open the Crunchyroll app on your device and select Activate with Code. A six-character code will appear on your screen. Visit https://www.crunchyroll.com/activate on your computer or phone, enter the code, and you'll be logged in and ready to stream your favorite anime."
    }
];

function BeforeLoginPage(){
    const [billing, setBilling] = useState('monthly');
    const [openFaq, setOpenFaq] = useState(null);
    const firstToWatchRef = useRef(null);
    const navigate = useNavigate();

    const scrollToPlans = () => {
        const el = document.getElementById('plansSection');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollFirstToWatch = () => {
        if (firstToWatchRef.current) {
            firstToWatchRef.current.scrollBy({ left: 450, behavior: 'smooth' });
        }
    };

    const scrollFirstToWatchBack = () => {
        if (firstToWatchRef.current) {
            firstToWatchRef.current.scrollBy({ left: -450, behavior: 'smooth' });
        }
    };

    const toggleFaq = (idx) => {
        setOpenFaq(openFaq === idx ? null : idx);
    };

    return(
        <div className="BeforeLoginPageContainer">

            {/* Background Hero */}
            <div className="HeroBackground" style={{ backgroundImage: `url(${BgImg})` }}></div>

            {/* Navbar */}
            <div className="HeroNavbar">
                <div className="NavbarLogoContainer">
                    <img className="NavbarLogoImg" src={Logo} alt="Logo" />
                    <span className="NavbarLogoText">Crunchyroll</span>
                </div>

                <div className="NavbarAuthButtons">
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        <button className="NavbarLoginBtn">LOG IN</button>
                    </Link>
                    <button className="NavbarTrialBtn" onClick={scrollToPlans}>START FREE TRIAL</button>
                </div>
            </div>

            {/* Hero Main Content */}
            <div className="HeroContent">
                <h1 className="HeroTitle">The world's largest dedicated Anime collection on demand</h1>
                <h2 className="HeroSubtitle">Join Crunchyroll and discover the world of Anime</h2>
                <button className="HeroTrialBtn" onClick={scrollToPlans}>START FREE TRIAL</button>
            </div>

            {/* SECTION 1: Limited Time Offer (Plans) */}
            <div id="plansSection" className="PlansSection">
                <div className="PlansHeader">
                    <h1 className="PlansTitle">Limited Time Offer</h1>
                </div>

                {/* Monthly / Yearly Toggle */}
                <div className="BillingToggleContainer">
                    <div className="BillingPill">
                        <button
                            onClick={() => setBilling('monthly')}
                            className={`BillingBtn BillingBtnMonthly ${billing === 'monthly' ? 'BillingBtnActive' : ''}`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBilling('yearly')}
                            className={`BillingBtn BillingBtnYearly ${billing === 'yearly' ? 'BillingBtnActive' : ''}`}
                        >
                            <span>Yearly</span>
                            <span className="BillingYearlyBadge">OFFER AVAILABLE</span>
                        </button>
                    </div>
                </div>

                {/* 3 Plan Cards */}
                <div className="PlanCardsContainer">
                    {/* Card 1: Fan */}
                    <div className="PlanCard">
                        <h2 className="PlanCardTitle">Fan</h2>
                        <p className="PlanCardPrice">
                            {billing === 'monthly' ? '₹99/mo' : '₹999/yr'}
                        </p>

                        <button className="PlanTrialBtn" onClick={() => navigate('/signup')}>
                            Start 7-Day Free Trial
                        </button>

                        <p className="PlanSkipTrial" onClick={() => navigate('/signup')}>
                            Skip Free Trial
                        </p>

                        <div className="PlanFeaturesList">
                            <div className="FeatureRow"><span className="FeatureCheck">✓</span><span>No ads*</span></div>
                            <div className="FeatureRow"><span className="FeatureCheck">✓</span><span>Complete access to Crunchyroll's library</span></div>
                            <div className="FeatureRow"><span className="FeatureCheck">✓</span><span>New episodes shortly after airing in Japan</span></div>
                            <div className="FeatureRow"><span className="FeatureCheck">✓</span><span>Stream on a total of <span className="FeatureHighlight">1 device</span> at a time</span></div>
                            <div className="FeatureRow"><span className="FeatureCheck">✓</span><span>Offline Viewing</span></div>
                        </div>
                    </div>

                    {/* Card 2: Mega Fan (Featured) */}
                    <div className="PlanCard PlanCardMega">
                        <p className="PopularBadge">
                            ✦ Most Popular ✦
                        </p>
                        <h2 className="PlanCardTitle">Mega Fan</h2>
                        <p className="PlanCardPrice">
                            {billing === 'monthly' ? '₹119/mo' : '₹1,199/yr'}
                        </p>

                        <button className="PlanTrialBtn PlanTrialBtnOrange" onClick={() => navigate('/signup')}>
                            Start 7-Day Free Trial
                        </button>

                        <p className="PlanSkipTrial" onClick={() => navigate('/signup')}>
                            Skip Free Trial
                        </p>

                        <div className="PlanFeaturesList">
                            <div className="FeatureRow"><span className="FeatureCheck">✓</span><span>No ads*</span></div>
                            <div className="FeatureRow"><span className="FeatureCheck">✓</span><span>Complete access to Crunchyroll's library</span></div>
                            <div className="FeatureRow"><span className="FeatureCheck">✓</span><span>New episodes shortly after airing in Japan</span></div>
                            <div className="FeatureRow"><span className="FeatureCheck">✓</span><span>Stream on a total of <span className="FeatureHighlight">4 devices</span> at a time</span></div>
                            <div className="FeatureRow"><span className="FeatureCheck">✓</span><span>Offline Viewing</span></div>
                            <div className="FeatureRow"><span className="FeatureCheck">✓</span><span>Access to Crunchyroll Game Vault</span></div>
                        </div>
                    </div>

                    {/* Card 3: Ultimate Fan */}
                    <div className="PlanCard">
                        <h2 className="PlanCardTitle">Ultimate Fan</h2>
                        <p className="PlanCardPrice">
                            {billing === 'monthly' ? '₹299/mo' : '₹2,999/yr'}
                        </p>

                        <button className="PlanTrialBtn" onClick={() => navigate('/signup')}>
                            Start 7-Day Free Trial
                        </button>

                        <p className="PlanSkipTrial" onClick={() => navigate('/signup')}>
                            Skip Free Trial
                        </p>

                        <div className="PlanFeaturesList">
                            <div className="FeatureRow"><span className="FeatureCheck">✓</span><span>No ads*</span></div>
                            <div className="FeatureRow"><span className="FeatureCheck">✓</span><span>Complete access to Crunchyroll's library</span></div>
                            <div className="FeatureRow"><span className="FeatureCheck">✓</span><span>New episodes shortly after airing in Japan</span></div>
                            <div className="FeatureRow"><span className="FeatureCheck">✓</span><span>Stream on a total of <span className="FeatureHighlight">6 devices</span> at a time</span></div>
                            <div className="FeatureRow"><span className="FeatureCheck">✓</span><span>Offline Viewing</span></div>
                            <div className="FeatureRow"><span className="FeatureCheck">✓</span><span>Access to Crunchyroll Game Vault</span></div>
                            <div className="FeatureRow"><span className="FeatureCheck">✓</span><span>Access to Crunchyroll Manga</span></div>
                        </div>
                    </div>
                </div>

                {/* Footnote */}
                <p className="PlansFootnote">
                    *Plans may include trailers and promotional messaging for Crunchyroll content and services, or related products.
                    Plan automatically renews at the regular price selected in the plan comparison. If you are eligible for the limited-time special
                    offer, your subscription will begin at a promotional price displayed for the selected plan and continue at the regular price until
                    you cancel. You may cancel at any time. Restrictions and other terms apply, including changes to prices, discounts, content
                    and features.
                </p>
            </div>

            {/* SECTION 2: Be the First to Watch */}
            <div className="WatchSection">
                <div className="WatchHeader">
                    <h1 className="WatchTitle">Be the First to Watch</h1>
                    <p className="WatchSubtitle">
                        Stream full seasons of the top anime, simulcasts, Crunchyroll Originals, and more!
                    </p>
                </div>

                {/* Anime Cards Row with Scroll Button */}
                <div className="WatchSliderWrapper">
                    <div ref={firstToWatchRef} className="WatchCardsRow">
                        {firstToWatchAnime.map((anime) => (
                            <div key={anime.id} className="WatchCard">
                                <div className="WatchPosterWrapper">
                                    <img
                                        src={anime.image}
                                        alt={anime.title}
                                        className="WatchPosterImg"
                                        onError={(e) => {
                                            e.currentTarget.onerror = null;
                                            e.currentTarget.src = "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&auto=format&fit=crop";
                                        }}
                                    />
                                </div>
                                <h3 className="WatchCardTitle">{anime.title}</h3>
                                <p className="WatchCardTag">{anime.tag}</p>
                            </div>
                        ))}
                    </div>

                    <button onClick={scrollFirstToWatchBack} className="WatchScrollBtn WatchScrollBtnLeft">
                        ‹
                    </button>

                    <button onClick={scrollFirstToWatch} className="WatchScrollBtn">
                        ›
                    </button>
                </div>
            </div>

            {/* SECTION 3: Already a Member? & Get More with Premium */}
            <div className="MemberSection">
                <h2 className="MemberTitle">Already a Member?</h2>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <button className="MemberLoginBtn">Log In</button>
                </Link>

                <h1 className="PremiumTitle">Get More with Premium</h1>
                <p className="PremiumSubtitle">
                    Enjoy Crunchyroll's entire library ad-free, including episodes shortly after being released in Japan.
                </p>

                <button
                    onClick={() => {
                        const el = document.getElementById('plansSection');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="ComparePlansBtn"
                >
                    <span>Compare All Plans</span>
                    <span style={{ fontSize: '1.1rem' }}>↑</span>
                </button>

                {/* 6 Features */}
                <div className="PremiumFeaturesGrid">
                    <div className="PremiumFeatureItem">
                        <img src={PremiumIcon1} alt="Ad-free streaming" className="PremiumFeatureIcon" />
                        
                    </div>

                    <div className="PremiumFeatureItem">
                        <img src={PremiumIcon2} alt="Complete access" className="PremiumFeatureIcon" />
                        
                    </div>

                    <div className="PremiumFeatureItem">
                        <img src={PremiumIcon3} alt="New episodes" className="PremiumFeatureIcon" />
                        
                    </div>

                    <div className="PremiumFeatureItem">
                        <img src={PremiumIcon4} alt="Game Vault" className="PremiumFeatureIcon" />
                        
                    </div>

                    <div className="PremiumFeatureItem">
                        <img src={PremiumIcon5} alt="Stream on 6 devices" className="PremiumFeatureIcon" />
                        
                    </div>

                    <div className="PremiumFeatureItem">
                        <img src={PremiumIcon6} alt="Download HD videos" className="PremiumFeatureIcon" />
                       
                    </div>
                </div>

                <p className="PremiumNote">
                    Benefits may differ based on the selected subscription tier and the region in which you are located.
                </p>
            </div>

            {/* SECTION 4: Introducing Crunchyroll Manga! */}
            <div className="MangaSection">
                <div className="MangaCard" style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.2) 70%, transparent 100%), url(${MangaBg}) ` }}>
                    <div className="MangaTextContent">
                        <div className="MangaLogoRow">
                            <img src={Logo} alt="Logo" className="MangaLogoImg" />
                            <span className="MangaLogoOrange">Crunchyroll</span>
                            <span className="MangaLogoWhite">manga</span>
                        </div>

                        <h2 className="MangaTitle">Introducing Crunchyroll Manga!</h2>
                        <p className="MangaSubtitle">An entire manga library at your fingertips</p>

                        <button
                            onClick={() => {
                                const el = document.getElementById('plansSection');
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="MangaOptionsBtn"
                        >
                            SEE PLAN OPTIONS
                        </button>
                    </div>

                    <div className="MangaImageWrapper">
                        <img
                            src={MangaImage}
                            alt="Crunchyroll Manga Reader"
                            className="MangaDeviceImg"
                        />
                    </div>
                </div>
            </div>

            {/* SECTION 5: FAQ */}
            <div className="FaqSection">
                <h1 className="FaqTitle">FAQ</h1>

                <div className="FaqListContainer">
                    {faqList.map((item, idx) => (
                        <div key={idx} className="FaqItem">
                            <div onClick={() => toggleFaq(idx)} className="FaqQuestionRow">
                                <span className="FaqQuestionText">{item.q}</span>
                                <span className="FaqToggleIcon">{openFaq === idx ? '−' : '+'}</span>
                            </div>
                            {openFaq === idx && (
                                <p className="FaqAnswerText">{item.a}</p>
                            )}
                        </div>
                    ))}
                </div>

                <div className="QuestionsContainer">
                    <h2 className="QuestionsTitle">Questions?</h2>
                    <p className="QuestionsSubtitle">
                        Visit our <span className="HelpCenterLink">Help Center</span> to learn more.
                    </p>
                </div>

                {/* Device availability footnote */}
                <p className="AvailabilityNote">
                    *Device and content availability vary by country or region.
                </p>
            </div>

            {/* SECTION 6: EXTENDED FOOTER CONTINUATION (Images 1 & 2) */}
            <footer className="ExtendedFooter">
    
                {/* 6 Columns Grid */}
                <div className="FooterColumnsGrid">
                    {/* Column 1: Key Pages */}
                    <div className="FooterNavCol">
                        <h4 className="FooterColHeader">Key Pages</h4>
                        <div className="FooterNavLinksList">
                            <Link to="/new" className="FooterNavLink">Browse New</Link>
                            <Link to="/popular" className="FooterNavLink">Browse Popular</Link>
                            <Link to="/popular" className="FooterNavLink">Browse All (A-Z)</Link>
                            <Link to="/simulcast" className="FooterNavLink">Browse Simulcasts</Link>
                            <span className="FooterNavLink">Release Calendar</span>
                            <span className="FooterNavLink">Music Videos & Concerts</span>
                            <span className="FooterNavLink">Games</span>
                            <span className="FooterNavLink">News</span>
                            <span className="FooterNavLink">Anime Awards</span>
                            <span className="FooterNavLink">Events & Experiences</span>
                        </div>
                    </div>

                    {/* Column 2: Genre */}
                    <div className="FooterNavCol">
                        <h4 className="FooterColHeader">Genre</h4>
                        <div className="FooterNavLinksList">
                            <span className="FooterNavLink">Action</span>
                            <span className="FooterNavLink">Adventure</span>
                            <span className="FooterNavLink">Comedy</span>
                            <span className="FooterNavLink">Drama</span>
                            <span className="FooterNavLink">Fantasy</span>
                            <span className="FooterNavLink">Music</span>
                            <span className="FooterNavLink">Romance</span>
                            <span className="FooterNavLink">Sci-Fi</span>
                            <span className="FooterNavLink">Seinen</span>
                            <span className="FooterNavLink">Shojo</span>
                            <span className="FooterNavLink">Shonen</span>
                            <span className="FooterNavLink">Slice of life</span>
                            <span className="FooterNavLink">Sports</span>
                            <span className="FooterNavLink">Supernatural</span>
                            <span className="FooterNavLink">Thriller</span>
                        </div>
                    </div>

                    {/* Column 3: Top 15 Popular Series */}
                    <div className="FooterNavCol">
                        <h4 className="FooterColHeader">Top 15 Popular Series</h4>
                        <div className="FooterNavLinksList">
                            <span className="FooterNavLink">Apothecary Diaries</span>
                            <span className="FooterNavLink">Attack on Titan</span>
                            <span className="FooterNavLink">Blue Lock</span>
                            <span className="FooterNavLink">Demon Slayer</span>
                            <span className="FooterNavLink">Dragon Ball DAIMA</span>
                            <span className="FooterNavLink">Dragon Ball Super</span>
                            <span className="FooterNavLink">Fire Force</span>
                            <span className="FooterNavLink">Jujutsu Kaisen</span>
                            <span className="FooterNavLink">Kaiju No 8</span>
                            <span className="FooterNavLink">My Hero Academia</span>
                            <span className="FooterNavLink">Naruto</span>
                            <span className="FooterNavLink">Naruto Shippuden</span>
                            <span className="FooterNavLink">One Piece</span>
                            <span className="FooterNavLink">Solo Leveling</span>
                            <span className="FooterNavLink">Spy x Family</span>
                        </div>
                    </div>

                    {/* Column 4: Languages */}
                    <div className="FooterNavCol">
                        <h4 className="FooterColHeader">Languages</h4>
                        <div className="FooterNavLinksList">
                            <span className="FooterNavLink">English / English (US)</span>
                            <span className="FooterNavLink">Indonesian / Bahasa Indonesia</span>
                            <span className="FooterNavLink">German / Deutsch</span>
                            <span className="FooterNavLink">Spanish / Español (América Latina)</span>
                            <span className="FooterNavLink">Spanish / Español (España)</span>
                            <span className="FooterNavLink">French / Français</span>
                            <span className="FooterNavLink">Italian / Italiano</span>
                            <span className="FooterNavLink">Portuguese / Português (Brasil)</span>
                            <span className="FooterNavLink">Portuguese / Português (Portugal)</span>
                            <span className="FooterNavLink">Russian / Русский</span>
                            <span className="FooterNavLink">Arabic / العربية</span>
                            <span className="FooterNavLink">Hindi / हिंदी</span>
                            <span className="FooterNavLink">Korean / 한국어</span>
                            <span className="FooterNavLink">Polish / Polski</span>
                            <span className="FooterNavLink">Thai / ไทย</span>
                            <span className="FooterNavLink">Chinese (Traditional) / 中文 (繁體)</span>
                        </div>
                    </div>

                    {/* Column 5: Crunchyroll */}
                    <div className="FooterNavCol">
                        <h4 className="FooterColHeader">Crunchyroll</h4>
                        <div className="FooterNavLinksList">
                            <span className="FooterNavLink">About</span>
                            <span className="FooterNavLink">Help Center</span>
                            <span className="FooterNavLink">Terms of Service</span>
                            <span className="FooterNavLink">Privacy Policy</span>
                            <span className="FooterNavLink">AdChoices</span>
                            <span className="FooterNavLink">Do Not Sell or Share My Personal Information</span>
                            <span className="FooterNavLink">Cookie Consent Tool</span>
                            <span className="FooterNavLink">Press Inquiries</span>
                            <span className="FooterNavLink">Advertising Inquiries</span>
                            <span className="FooterNavLink">Get the Apps</span>
                            <span className="FooterNavLink">Redeem Gift Card</span>
                            <span className="FooterNavLink">Jobs</span>
                            <span className="FooterNavLink">Start Free Trial / Join Premium / Try Premium</span>
                        </div>
                    </div>

                    {/* Column 6: Account & Connect With Us */}
                    <div className="FooterNavCol">
                        <h4 className="FooterColHeader">Account</h4>
                        <div className="FooterNavLinksList">
                            <Link to="/signup" className="FooterNavLink">Create Account</Link>
                            <Link to="/login" className="FooterNavLink">Log In</Link>
                        </div>

                        <h4 className="FooterColHeader" style={{ marginTop: '24px' }}>Connect With Us</h4>
                        <div className="SocialLinksList">
                            <span className="SocialLinkItem"><span className="SocialIconSpan">▶</span> YouTube</span>
                            <span className="SocialLinkItem"><span className="SocialIconSpan">f</span> Facebook</span>
                            <span className="SocialLinkItem"><span className="SocialIconSpan">𝕏</span> X</span>
                            <span className="SocialLinkItem"><span className="SocialIconSpan">📸</span> Instagram</span>
                            <span className="SocialLinkItem"><span className="SocialIconSpan">♪</span> TikTok</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Sub-bar */}
                <div className="FooterSubBar">
                    <div className="SonyPicturesText">
                        <span className="SonyBold">SONY PICTURES</span> | © Crunchyroll, LLC
                    </div>

                    <button className="LanguageSelectorBtn">
                        <span>▼</span> ENGLISH (US)
                    </button>
                </div>

                {/* Bottom Descriptive Paragraphs */}
                <div className="FooterDescriptiveParagraphs">
                    <div className="FooterDescCol">
                        <p>
                            Welcome to Crunchyroll, your ultimate destination for streaming the best in anime entertainment.
                            Whether you're a lifelong fan or just starting your anime journey, Crunchyroll offers an extensive
                            library of top-tier anime series and movies. From action-packed adventures like Naruto and One Piece
                            to captivating stories...
                        </p>
                        <span className="MoreDetailsBtn">MORE DETAILS</span>
                    </div>

                    <div className="FooterDescCol">
                        <p>
                            With simulcasts straight from Japan, you'll never miss a moment of the latest and greatest anime releases.
                            Our selection goes beyond just series—enjoy a handpicked selection of anime movies that showcase
                            the best in animation and storytelling...
                        </p>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default BeforeLoginPage;
