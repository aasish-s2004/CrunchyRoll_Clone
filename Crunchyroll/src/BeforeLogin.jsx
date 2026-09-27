import React from "react" ;
import BgImg from './assets/background.jpg';
import Logo from './assets/Logo.png'

function BeforeLoginPage(){
    return(
        <div style={{backgroundColor:'black'}}>
        <div style={{
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
        minHeight: `100vh`,
        width: `100%`
        }}>
            <img src={BgImg} alt="" />
        </div>
            <div>
                <img style={{width:"1.3%",height:"2.5%",position:'absolute',left:'19.2%',top:'2.5%'}} src={Logo} alt="" />
                <h1 style={{color:'rgb(244, 117, 33)',fontSize:'115%',position:"absolute",top:"-0.3%",left:"20.8%",fontFamily:"'Fredoka', 'Comfortaa', sans-serif",fontWeight:"700",backgroundColor:"rgb(0,0,0,0.8",width:"80%",height:"7%",paddingTop:"1.5%"}}>Crunchyroll</h1>
                
            </div>
            <div>
                <h1 style={{color:"rgb(228, 217, 217)",borderRadius:"20px",borderColor:"rgb(228, 217, 217)",border:"1px solid white",width:"6%",fontSize:"90%",position:"absolute",top:"1.4%",left:"63.3%",fontFamily:"sans-serif",fontWeight:"100vh",padding:"10px 25px 10px 30px"}}>LOG IN</h1>
                <h1 style={{color:"black",borderRadius:"20px",backgroundColor:"rgb(255, 102, 0)",border:"1px solid rgb(225,102,0)",width:"10.3%",fontSize:"90%",position:"absolute",top:"1.4%",left:"70%",fontFamily:"sans-serif",fontWeight:"100vh",padding:"10px 25px 10px 30px"}}>START FREE TRIAL</h1>
            </div>
            <div>
                <h1 style={{color:"white",position:"absolute",top:"13%",left:"23%",fontFamily:"'Outfit', 'Atyp', system-ui, -apple-system, sans-serif",fontSize:"480%",lineHeight:"105%",letterSpacing:"-0.025em",fontWeight:"800",maxWidth:"45%"}}>The world's largest dedicated Anime collection on demand</h1>
                <h1 style={{color:"white",position:"absolute",top:"42.3%",left:"23%",fontFamily:"'Lato', sans-serif",fontSize:"200%",lineHeight:"105%",fontWeight:"500",maxWidth:"45%"}}>Join Crunchyroll and discover the world of Anime</h1>
                <h1 style={{color:"black",borderRadius:"40px",backgroundColor:"rgb(255, 102, 0)",border:"1px solid rgb(255,104,0)",width:"12%", height:"8%" ,fontSize:"108%",position:"absolute",top:"53%",left:"23.5%",fontFamily:"sans-serif",fontWeight:"800vh",padding:"29px 25px 20px 37px"}}>START FREE TRIAL</h1>
            </div>
        </div>
    )
}

export default BeforeLoginPage 