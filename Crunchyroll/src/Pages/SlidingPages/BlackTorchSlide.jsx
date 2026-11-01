import BlackTorch from'./assets/BlackTorch-S1-KV1-UW-LTR.avif'
import BlackTorchLogo from'./assets/BlackTorch-S1-UW-Logo-EN.avif'
import './BlackTorchSlide.css'
import SlidingNav from './Slidingnav'
import { useNavigate } from 'react-router-dom'

function BlackTorchSlide() {
    const navigate = useNavigate()
    return(
        <div style={{backgroundColor:'black', position:'relative'}}>
            <div className='BlackTorchwrapper'>
            <div className='BlacktorchBgImg' >
                <img src={BlackTorch} alt="" />
             </div>   
             <div>

                        </div>
                        <div className='BlackTorchLogo'>
                            <img src={BlackTorchLogo} alt="LOGO"/>
                            <h2><span style={{backgroundColor:"rgba(69, 67, 67, 0.94)", color:"white", fontStyle:"italic", paddingLeft:"4px"}}>A </span> • Sub | Dub • Action, Supernatural, Adventure, Shonen</h2>
                            <p >Jiro Azuma is no average high schooler. A descendant of ninjas and trained in the ancient warrior art of the shinobi, Jiro is also able to talk with animals. After a mysterious encounter with an injured cat named Rago, Jiro discovers the feline is actually the legendary Black Star of Doom! Joined b..</p>
                        </div>
                        <div className='StartWatching'>
                            <button style={{paddingBottom:"8px"}} onClick={() => navigate('/watch')}><span style={{fontSize:"170%", paddingTop:"10px"}}>▷</span> START WATCHING E1</button>
                            <button style={{fontSize:"100%", backgroundColor:"transparent", color:"rgb(244, 117, 33)", border:"solid rgb(244, 117, 33)"}} className='StartWatchingFav'>⛉</button>
                        </div>
                        <div>{<SlidingNav/>}</div>
                        </div>
        </div>
    )
}

export default BlackTorchSlide
