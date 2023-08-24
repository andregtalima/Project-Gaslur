import './Container.scss'

const Container = () => {
    return (
        <section className='section-one'>
                <div className='section-div'>
                    <img className='img-mobile' src="./image/image-web-3-mobile.jpg" alt="First image" />
                    <img className='img-desktop' src="./image/image-web-3-desktop.jpg" alt="First image" />
                    <div className='div__txt-btn'>
                        <div className='div-txt'>
                            <h1>The Bright Future of Web 3.0?</h1>
                            <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                        </div>
                        <div className='div-btn'>
                            <button>Read More</button>
                        </div>
                    </div>
                </div>
                <div className="section-div__two">                   
                    <div className='div-txt__two'>
                        <h2>New</h2>
                        <h3>Hydrogen VS Electric Cars</h3>
                        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                    </div>
                    <div className='div-txt__two'>
                        <h3>The Downsides of AI Artistry</h3>
                        <p>What are possible adverse effects of on-demand AI image generation?</p>
                    </div>
                    <div className='div-txt__two'>
                        <h3>Is VC Funding Drying Up?</h3>
                        <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                    </div>
                </div>
        </section>
    )
}

export default Container