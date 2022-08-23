import React from 'react'
import heroImg from '../../images/illustration-working.png'
import './Hero.css'
const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-info">
                <h1 className="title">
                    More than just shorter links
                </h1>
                <p className="desc">
                    Build your brand’s recognition and get detailed insights 
                    on how your links are performing.
                </p>
                <div className="btn">Get started</div>
            </div>
            <div className="hero-img">
                <img src={heroImg} alt="hero" />
            </div>
        </section>
    )
}

export default Hero