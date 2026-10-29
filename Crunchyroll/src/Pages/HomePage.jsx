import "./HomePage.css"
import BlackTorchSlide from "./SlidingPages/BlackTorchSlide"
import Navbar from "./Navbar"
import AnimeSliderCategory from "./AnimeSliderCategory"
import Footer from "./Footer"

const latestReleasesList = [
    {
        id: 3,
        title: "Overgeared",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00384004-base_asset_2x3-en-US",
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
        id: 13,
        title: "Dr.STONE",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00088715-base_asset_2x3-en-US",
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
        id: 1,
        title: "Black Clover",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00002115-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 8,
        title: "The Apothecary Diaries",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00325113-base_asset_2x3-en-US",
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
        id: 11,
        title: "JUJUTSU KAISEN",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00169670-base_asset_2x3-en-US",
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
        id: 9,
        title: "Haikyu!!",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00111695-base_asset_2x3-en-US",
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
        id: 2,
        title: "Naruto Shippuden",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00091371-base_asset_2x3-en-US",
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
        id: 4,
        title: "Naruto",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00091370-base_asset_2x3-en-US",
        badge: null
    }
]

const mostPopularDubbedList = [
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
        id: 5,
        title: "Solo Leveling",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00320667-base_asset_2x3-en-US",
        badge: "2026 Winner"
    },
    {
        id: 4,
        title: "Naruto",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00091370-base_asset_2x3-en-US",
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
        id: 18,
        title: "One-Punch Man",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00102550-base_asset_2x3-en-US",
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
        id: 1,
        title: "Black Clover",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00002115-base_asset_2x3-en-US",
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
        id: 6,
        title: "That Time I Got Reincarnated as a Slime",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00050707-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 8,
        title: "The Apothecary Diaries",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00325113-base_asset_2x3-en-US",
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
        id: 10,
        title: "Mushoku Tensei:Jobless Reiincarnation",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00102634-base_asset_2x3-en-US",
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
    },
    {
        id: 15,
        title: "The Exilled Heavy Knight Knows How to Game the System",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00378018-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 17,
        title: "Full Clearing Another World under a Goddess with Zero Belivers",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00383992-base_asset_2x3-en-US",
        badge: null
    }
]

const dussheraSpecialList = [
    {
        id: 12,
        title: "Dragon Ball Super",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00002182-base_asset_2x3-en-US",
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
        id: 7,
        title: "My Hero Academia",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00002328-base_asset_2x3-en-US",
        badge: "2026 Winner"
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
    },
    {
        id: 13,
        title: "Dr.STONE",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00088715-base_asset_2x3-en-US",
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
        id: 6,
        title: "That Time I Got Reincarnated as a Slime",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00050707-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 8,
        title: "The Apothecary Diaries",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00325113-base_asset_2x3-en-US",
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
        id: 10,
        title: "Mushoku Tensei:Jobless Reiincarnation",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00102634-base_asset_2x3-en-US",
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
        id: 15,
        title: "The Exilled Heavy Knight Knows How to Game the System",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00378018-base_asset_2x3-en-US",
        badge: null
    }
]

const crunchyrollMangaList = [
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
        id: 16,
        title: "Tomb Raider King",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00378123-base_asset_2x3-en-US",
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
        id: 3,
        title: "Overgeared",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00384004-base_asset_2x3-en-US",
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
        id: 15,
        title: "The Exilled Heavy Knight Knows How to Game the System",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00378018-base_asset_2x3-en-US",
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
        id: 13,
        title: "Dr.STONE",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00088715-base_asset_2x3-en-US",
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
        id: 7,
        title: "My Hero Academia",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00002328-base_asset_2x3-en-US",
        badge: "2026 Winner"
    },
    {
        id: 14,
        title: "Demon Slayer: Kimetsu no Yaiba",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00058844-base_asset_2x3-en-US",
        badge: "2026 Winner"
    },
    {
        id: 9,
        title: "Haikyu!!",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00111695-base_asset_2x3-en-US",
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
        id: 18,
        title: "One-Punch Man",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00102550-base_asset_2x3-en-US",
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
        id: 17,
        title: "Full Clearing Another World under a Goddess with Zero Belivers",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00383992-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 2,
        title: "Naruto Shippuden",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00091371-base_asset_2x3-en-US",
        badge: null
    }
]

const popularHindiDubbedList = [
    {
        id: 4,
        title: "Naruto",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00091370-base_asset_2x3-en-US",
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
        id: 14,
        title: "Demon Slayer: Kimetsu no Yaiba",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00058844-base_asset_2x3-en-US",
        badge: "2026 Winner"
    },
    {
        id: 12,
        title: "Dragon Ball Super",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00002182-base_asset_2x3-en-US",
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
        id: 2,
        title: "Naruto Shippuden",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00091371-base_asset_2x3-en-US",
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
        id: 7,
        title: "My Hero Academia",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00002328-base_asset_2x3-en-US",
        badge: "2026 Winner"
    },
    {
        id: 1,
        title: "Black Clover",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00002115-base_asset_2x3-en-US",
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
        id: 13,
        title: "Dr.STONE",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00088715-base_asset_2x3-en-US",
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
        id: 8,
        title: "The Apothecary Diaries",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00325113-base_asset_2x3-en-US",
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
        id: 3,
        title: "Overgeared",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00384004-base_asset_2x3-en-US",
        badge: null
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
    }
]

const loveBlackCloverList = [
    {
        id: 7,
        title: "My Hero Academia",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00002328-base_asset_2x3-en-US",
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
        id: 5,
        title: "Solo Leveling",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00320667-base_asset_2x3-en-US",
        badge: "2026 Winner"
    },
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
        id: 14,
        title: "Demon Slayer: Kimetsu no Yaiba",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00058844-base_asset_2x3-en-US",
        badge: "2026 Winner"
    },
    {
        id: 12,
        title: "Dragon Ball Super",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00002182-base_asset_2x3-en-US",
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
        id: 6,
        title: "That Time I Got Reincarnated as a Slime",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00050707-base_asset_2x3-en-US",
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
        id: 18,
        title: "One-Punch Man",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00102550-base_asset_2x3-en-US",
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
        id: 15,
        title: "The Exilled Heavy Knight Knows How to Game the System",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00378018-base_asset_2x3-en-US",
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
        id: 17,
        title: "Full Clearing Another World under a Goddess with Zero Belivers",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00383992-base_asset_2x3-en-US",
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
        id: 16,
        title: "Tomb Raider King",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00378123-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 8,
        title: "The Apothecary Diaries",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00325113-base_asset_2x3-en-US",
        badge: null
    }
]

const startAdventureList = [
    {
        id: 6,
        title: "That Time I Got Reincarnated as a Slime",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00050707-base_asset_2x3-en-US",
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
        id: 10,
        title: "Mushoku Tensei:Jobless Reiincarnation",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00102634-base_asset_2x3-en-US",
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
        id: 13,
        title: "Dr.STONE",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00088715-base_asset_2x3-en-US",
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
        id: 1,
        title: "Black Clover",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00002115-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 8,
        title: "The Apothecary Diaries",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00325113-base_asset_2x3-en-US",
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
        id: 11,
        title: "JUJUTSU KAISEN",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00169670-base_asset_2x3-en-US",
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
        id: 7,
        title: "My Hero Academia",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00002328-base_asset_2x3-en-US",
        badge: "2026 Winner"
    },
    {
        id: 18,
        title: "One-Punch Man",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00102550-base_asset_2x3-en-US",
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
        id: 12,
        title: "Dragon Ball Super",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00002182-base_asset_2x3-en-US",
        badge: null
    },
    {
        id: 2,
        title: "Naruto Shippuden",
        tag: "Sub | Dub",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain%2Cformat=auto%2Cquality=85%2Cwidth=480/display/keyart/T00091371-base_asset_2x3-en-US",
        badge: null
    }
]

function HomePage() {
    return(
        <div style={{ backgroundColor: 'black', minHeight: '100vh', overflowX: 'hidden' }}>
            <Navbar active="home" />
            <div>
                <BlackTorchSlide />
                <div style={{ position: 'relative', marginTop: '-60px', zIndex: 10 }}>
                    <AnimeSliderCategory title="Trending Anime in India" />
                    <AnimeSliderCategory title="Latest releases on Crunchyroll" animeList={latestReleasesList} />
                    <AnimeSliderCategory title="Most Popular Dubbed Anime" animeList={mostPopularDubbedList} />
                    <AnimeSliderCategory title="Dusshera Special Watchlist" animeList={dussheraSpecialList} />
                    <AnimeSliderCategory title="Crunchyroll Manga" animeList={crunchyrollMangaList} />
                    <AnimeSliderCategory title="Popular Hindi Dubbed Anime" animeList={popularHindiDubbedList} />
                    <AnimeSliderCategory title="Love Black Clover? Then Watch These Anime" animeList={loveBlackCloverList} />
                    <AnimeSliderCategory title="Start Your Next Adventure Here" animeList={startAdventureList} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage
