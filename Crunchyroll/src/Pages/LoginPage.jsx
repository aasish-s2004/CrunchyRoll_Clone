import './LoginPage.css'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import { useNavigate } from "react-router-dom";

function LoginPage () {

    
    
    const navigate = useNavigate();

    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')

    



    const emailCheck=(e)=>{
        e.preventDefault()
        let email1 = "aasish@gmail.com"
        if(email===email1){
            
        }
        else{
            alert('email is not valid')
        }
    }

    const passCheck=(e)=>{
        e.preventDefault()
        let pass1 = "1234"
        if(pass===pass1){
            navigate("/home")
        }
        else{
            alert('Invalid Password, Try again later')
        }
    }



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
                            <div className='LoginLogin' ><h1 style={{fontWeight:"500"}}>Log In</h1></div>
                            <form>
                            <div className='InputSpace' onChange={(e)=>setEmail(e.target.value)}>
                                <input type="email" placeholder='Email or Phone Number' />
                            </div>

                            <div className='PasswordSpace'  onChange={(e)=>setPass(e.target.value)}>
                                <input type="password" placeholder='Password' />
                            </div>

                            {/* <Link to="/home">*/}<div className='NextButton'><button type='submit' onClick={passCheck}>NEXT</button></div>{/*</Link>*/} 
                            </form>


                            <div className='LoginForgot'><h1><span>FORGOT PASSWORD?</span> | <Link to="/signup"><span className='spancls'>CREATE ACCOUNT</span></Link></h1></div>


                            <div className='LoginFooter'><span>Terms of Use</span> | <span>Privacy Policy</span> | <span>Cookie Consent Tool</span></div>

                            <div className='SonyPictures'><span className='SonyPictureLogin'>SONY PICTURES</span> | <span>© Crunchyroll,LLC</span></div>
        </div>
        
    )
    
}


export default LoginPage 