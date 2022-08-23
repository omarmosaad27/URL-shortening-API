import React from 'react'
import './States.css'
import brand from './../../images/icon-brand-recognition.png'
import records from './../../images/icon-detailed-records.png'
import custom from './../../images/icon-fully-customizable.png'
const States = () => {
    return (
        <section className="states">
            <h2>Advanced Statistics</h2>
            <p className="desc">
                Track how your links are performing across the web with our advanced statistics dashboard.
            </p>
            <div className="cards">
                <div className="card">
                    <img src={brand} alt="card-img" />
                    <h3 className="card-title">Brand Recognition</h3>
                    <p className="card-desc">Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                </div>
                <div className="card">
                    <img src={records} alt="card-img" />
                    <h3 className="card-title">Detailed Records</h3>
                    <p className="card-desc"> Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </div>
                <div className="card">
                    <img src={custom} alt="card-img" />
                    <h3 className="card-title">Fully Customizable</h3>
                    <p className="card-desc"> Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                </div>
            </div>
            <span className="underline"></span>
        </section>
    )
};

export default States