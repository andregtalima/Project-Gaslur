import './Container.scss'

const Container = () => {
    return (
        <section className='section-one'>
            <div className='section-one-img'>
                <img src="./image/image-web-3-mobile.jpg" alt="First image" />
            </div>
            <div className='section-one-text'>
                <h1>The Bright Future of Web 3.0?</h1>
                <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fultilling its promise?</p>
            </div>
            <button className='sectio-one-btn'>Read More</button>
        </section>
    )
}

export default Container