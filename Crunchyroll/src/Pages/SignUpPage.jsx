import './SignUpPage.css'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

function SignUpPage () {
    return(
        <div className='LoginBackground'>
           <Link to="/"> <div className='LoginHead'>
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

                                                            
                            </div></Link>

                            <div className='SignUpLogin' ><h1 style={{fontWeight:"500"}}>Create Account</h1></div>

                            <div className='InputSpace'>
                                <input type="text" placeholder='Email or Phone Number' />
                            </div>

                            <Link to="/home"><div className='NextButton'><button>NEXT</button></div></Link>


                            <Link to="/login"><div className='SignUpForgot'><h1>Already have an account?<span> LOG IN</span></h1></div></Link>


                            <div className='SignupPara'><p>By creating an account you're agreeing to our <span>Terms of Use</span> & <span>Privacy Policy</span>, and you confirm that you are at least 18 years of age.</p></div>


                            <div className='LoginFooter'><span>Terms of Use</span> | <span>Privacy Policy</span> | <span>Cookie Consent Tool</span></div>

                            <div className='SonyPictures'><span className='SonyPictureLogin'>SONY PICTURES</span> | <span>© Crunchyroll,LLC</span></div>
        </div>
        
    )
    
}


export default SignUpPage