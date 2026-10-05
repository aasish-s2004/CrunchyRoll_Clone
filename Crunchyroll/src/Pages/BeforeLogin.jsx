import BgImg from '../assets/background.jpg';
import Logo from '../assets/Logo.png'

function BeforeLoginPage(){
    return(
        <div style={{backgroundColor:'black', position:'relative'}}>

            <div style={{
                backgroundImage: `url(${BgImg})`,
                backgroundSize: `cover`,
                backgroundPosition: `center`,
                backgroundRepeat: `no-repeat`,
                minHeight: `100vh`,
                width: `100%`
            }}>
            </div>

           
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 40px',
                backgroundColor: 'rgba(0,0,0,0.8)',
                zIndex: 10,
                boxSizing: 'border-box'
            }}>

                <div style={{ display:'flex', alignItems:'center', gap:'1px' ,marginRight:"10rem"}}>
                    <img style={{ width:'48px', height:'30px', objectFit:'contain',marginLeft:"19rem"}} src={Logo} alt="Logo" />
                    <span style={{
                        color: 'rgb(244, 117, 33)',
                        fontSize: '1.15rem',
                        fontFamily: "'Fredoka', 'Comfortaa', sans-serif",
                        fontWeight: '700'
                    }}>Crunchyroll</span>
                </div>

                <div style={{ display:'flex', alignItems:'center', gap:'12px',marginRight:"22rem"  }}>
                    <button style={{
                        color: 'rgb(197, 182, 182)',
                        borderRadius: '20px',
                        border: '1px solid white',
                        backgroundColor: 'transparent',
                        fontSize: '0.9rem',
                        fontFamily: 'sans-serif',
                        fontWeight: '600',
                        padding: '10px 28px',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap'
                    }}>LOG IN</button>

                    <button style={{
                        color: 'black',
                        borderRadius: '20px',
                        backgroundColor: 'rgb(255, 102, 0)',
                        border: '1px solid rgb(225,102,0)',
                        fontSize: '0.9rem',
                        fontFamily: 'sans-serif',
                        fontWeight: '600',
                        padding: '10px 28px',
                        cursor: 'pointer',
                    }}>START FREE TRIAL</button>
                </div>
            </div>

            <div style={{
                position: 'absolute',
                top: '12%',
                left: 0,
                width: '100%',
                padding: '0 10%',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                maxWidth: '700px'
            }}>
                <h1 style={{
                    color: 'white',
                    fontFamily: "'Outfit', system-ui, -apple-system, sans-serif",
                    fontSize: '4.8rem',
                    lineHeight: '106%',
                    letterSpacing: '-0.025em',
                    fontWeight: '800',
                    width:"50rem",
                    marginLeft:"14rem"
                }}>The world's largest dedicated Anime collection on demand</h1>

                <h2 style={{
                    color: 'white',
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '2.1rem',
                    width:"50rem",
                    lineHeight: '130%',
                    fontWeight: '500',
                    marginTop:"1.7rem",
                    marginLeft:"14rem"
                }}>Join Crunchyroll and discover the world of Anime</h2>

                <button style={{
                    color: 'black',
                    borderRadius: '40px',
                    backgroundColor: 'rgb(255, 102, 0)',
                    border: '1px solid rgb(255,104,0)',
                    fontSize: '1.2rem',
                    fontFamily: 'sans-serif',
                    fontWeight: '700',
                    padding: '23px 33px',
                    cursor: 'pointer',
                    width: 'fit-content',
                    whiteSpace: 'nowrap',
                    height:"5.5rem",
                    margin:"2rem 14rem "
                }}>START FREE TRIAL</button>
            </div>

            <div style={{
                padding: '60px 10%',
                boxSizing: 'border-box'
            }}>
                <h1 style={{
                    color: 'white',
                    fontSize: '3.4rem',
                    fontFamily: "'Outfit', system-ui, -apple-system, sans-serif",
                    fontWeight: '800',
                    margin:"1rem 1rem 1rem 32rem"
                }}>Pick Your Premium</h1>
            </div>
            <div>
                <div>
                    <h1 style={{color:"white",fontSize:"0.9rem",fontFamily:"sans-serif"}}>Monthly <p style={{backgroundColor:"rgb(255,102,0)" , color:"black",
                        margin:"1rem ",
                        borderRadius:"20px",
                        padding:"5px",
                        width:"15rem",
                        display:"flex",
                        alignItems:"center"
                     }}>Yearly<p style={{fontSize:"0.7rem",margin:"2rem"}}>SAVE UPTO 60%</p></p></h1>
                </div>
            </div>

        </div>
    )
}

export default BeforeLoginPage