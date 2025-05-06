import React from 'react';
import './home.css';


const Home = () => {
    return (
        <section className="home" id='home'>
            <div className="home__container container">
                <div className="home__content">
                    <span className="home_subtitle">Welcome to BruzzCafe!</span>
                    <h1 className="home__title">Paws, Sip, Repeat — Where Every Cup Feels Like a Hug!</h1>
                    <p className="home__description">BruzzCafé blends the warmth of coffee with the charm of a cozy pup. A perfect spot where comfort meets caffeine, one paw-some cup at a time.</p>
                    <div className="home__btns">
                        <a href="#menu" className="btn">Check Menu</a>
                        <a href="#reservation" className="btn home__btn">Book Table</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home;
