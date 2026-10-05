import "./HomePage.css"
import BlackTorchSlide from "./SlidingPages/BlackTorchSlide"
import Logo from '../assets/Logo.png'
import Crown from '../assets/crown.png'
import Anger from '../assets/angry.svg'

function HomePage() {
    return(
        <div >
            <div>
                <BlackTorchSlide/>
                <div className="Navbar">
                    <nav>
                        <div className="LogoName" style={{ display:'flex',alignItems:"center", gap:'4px'}}>
                            <img style={{ height:'23px',marginBottom:"3px"}} src={Logo} alt="Logo" />
                            <span style={{
                                color: 'rgb(244, 117, 33)',
                                fontSize: '1.17rem',
                                fontFamily: '"Maven Pro", "Helvetica Neue", Arial, sans-serif',
                                fontWeight: '700',
                                }}>Crunchyroll</span>
                        </div>
                        <div className="NavElements">
                            <button style={{minWidth:"4rem"}}>New</button>
                            <button style={{minWidth:"5.8rem"}}>Popular</button>
                            <button style={{minWidth:"6.5rem"}}>Simulcast</button>
                            <button style={{minWidth:"7.5rem"}}>Categories <span> ▼ </span></button>
                            <p>|</p>
                            <button style={{minWidth:"5rem"}}>Games</button>
                            <button style={{minWidth:"6rem", }}>News <span > ▼</span></button>
                            
                            <button style={{display:"flex" , minWidth:"6.2rem", position:"absolute", right:"10%"}}>
                                <img style={{ height:'37%', marginTop:"15%",marginLeft:"12%" }} src={Crown} alt="Crown" />
                                    <div style={{marginTop:"14%",marginLeft:"7%"}}>
                                            <p style={{ color:"rgb(244, 174, 33)" , fontSize:"70%"}}>TRY FREE</p>
                                            <p style={{color:"white",fontSize:"70%"}}>PREMIUM</p>
                                   </div>
                            </button>
                            <button style={{minWidth:"3rem",fontSize:"150%", position:"absolute", right:"7.7%"}}>🔍︎</button>
                            <button style={{minWidth:"3rem",fontSize:"150%" ,  position:"absolute", right:"5%"}}>⛉</button>
                            <button style={{ position:"absolute", right:"0%"}}><img style={{height:"85%"}} src={Anger} alt="" /> <span style={{position:"relative",bottom:"20px"}}>▼</span></button>


                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default HomePage