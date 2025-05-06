import React from 'react';
import aboutImg from '../../assets/about-img.jpg';
import { FiCheck } from 'react-icons/fi';
import './about.css';

const About = () => {
    return (
        <section className="about section" id="about">
            <div className="about__grid container grid">
                <div className="about__img-wrapper">
                    <img src={aboutImg} alt="" className="about__img" />
                </div>

                <div className="about__content">
                    <h2 className="section__title" data-title='About Us'>
                        Fresh, organic coffee made to delight — pure taste in every sip!
                    </h2>

                    <p className="about__description">At bruzzCafé, we pour passion into every cup with fresh, organic beans. Taste the difference in every rich, flavorful sip.</p>

                    <div className="about_details grid">
                        <p className="about__details-description">
                            <FiCheck className='about__details-icon' />
                            Fresh & Organic: We serve only the finest organic coffee, brewed fresh for every cup.
                        </p>

                        <p className="about__details-description">
                            <FiCheck className='about__details-icon' />
                            Cozy Vibes: A warm, pet-friendly space where comfort meets great taste.
                        </p>

                        <p className="about__details-description">
                            <FiCheck className='about__details-icon' />
                            Crafted with Care: Every blend is thoughtfully prepared to give you a perfect, heartwarming sip.
                        </p>
                    </div>

                    <a href="#team" className="btn">Our Experts</a>
                </div>
            </div>
        </section>
    )
}

export default About