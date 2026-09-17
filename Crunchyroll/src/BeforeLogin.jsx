import React from "react" ;
import BgImg from './assets/background.jpg';

function BeforeLoginPage(){
    return(
        <div style={{backgroundImage:`url(${BgImg})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
        minHeight: `100vh`,
        width: `100%`
        }}>


        </div>
    )
}

export default BeforeLoginPage 