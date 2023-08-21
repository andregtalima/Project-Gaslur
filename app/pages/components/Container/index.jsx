import './Container.scss'

const Container = () => {
    return (
        <>
            <section className='section-one'>
                <img className='section-one-img' src="./image/image-web-3-mobile.jpg" alt="First image" />
                <div className='section-one-txt'>
                    <h1 className='text'>The Bright Future of Web 3.0?</h1>
                    <p className='text'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fultilling its promise?</p>
                </div>
            </section>
            <div className='sectio-one-btn'>
                <button>Read More</button>
            </div>
        </>
    )
}

export default Container