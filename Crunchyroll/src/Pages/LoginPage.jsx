import './LoginPage.css'
import Logo from '../assets/Logo.png'

function LoginPage () {
    return(
        <div className='LoginBackground'>
            <div className='LoginHead'>
                                <img style={{height:'3.4vh'}} src={Logo} alt="Logo" />
                                <span style={{
                                    color: 'rgb(244, 117, 33)',
                                    fontSize: '1.5rem',
                                    fontFamily: "'Fredoka', 'Comfortaa', sans-serif",
                                    fontWeight: '700',
                                    position:"relative",
                                    top:"-0.8vh",
                                    left:"0.7vh"
                                    
                                }}>Crunchyroll</span>

                                                            
                            </div>

                            <div className='LoginLogin' ><h1 style={{fontWeight:"500"}}>Log In</h1></div>

                            <div className='InputSpace'>
                                <input type="text" placeholder='Email or Phone Number' />
                            </div>

                            <div className='NextButton'><button>NEXT</button></div>


                            <div className='LoginForgot'><h1><span>FORGOT PASSWORD?</span> | <span>CREATE ACCOUNT</span></h1></div>


                            <div className='LoginFooter'><span>Terms of Use</span> | <span>Privacy Policy</span> | <span>Cookie Consent Tool</span></div>

                            <div className='SonyPictures'><span className='SonyPictureLogin'>SONY PICTURES</span> | <span>© Crunchyroll,LLC</span></div>
        </div>
        
    )
    
}


export default LoginPage 