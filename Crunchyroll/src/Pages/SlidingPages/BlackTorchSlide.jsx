import BlackTorch from'../../assets/BlackTorch-S1-KV1-UW-LTR.avif'

function BlackTorchSlide() {
    return(
        <div style={{backgroundColor:'black', position:'relative'}}>

            <div style={{
                            backgroundImage: `url(${BlackTorch})`,
                            backgroundSize: `cover`,
                            backgroundPosition: `center`,
                            backgroundRepeat: `no-repeat`,
                            minHeight: `100vh`,
                            width: `100%`
                        }}>

                        </div>
        </div>
    )
}

export default BlackTorchSlide