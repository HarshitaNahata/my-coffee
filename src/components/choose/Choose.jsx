import React from 'react';
import chooseImg from '../../assets/choose.jpg';
import coffeeMug from '../../assets/coffee-mug.svg';
import coffeeBeans2 from '../../assets/coffee-beans-2.svg';
import coffeeBeans3 from '../../assets/coffee-beans-3.svg';
import './choose.css';
const Choose = () => {
    return (
        <section className="choose section">
            <div className="choose__grid container grid">
                <div className="choose__content">
                    <h2 className="section__title title-left" data-title='Why Choose Us'>
                        BruzzCafe, everyone's favourite coffee cafe!
                    </h2>
                    <p className="choose__description">
                        At BruzzCafe, we blend organic quality with cozy charm. From handpicked beans to a pet-friendly, feel-good space, every detail is designed to make your coffee moments unforgettable. Choose us for the taste, stay for the vibe.
                    </p>
                    <div className="choose_details grid">
                        <div className="choose__details-item">
                            <div className="choose__details-img-wrapper">
                                <img src={coffeeMug} alt="" className="choose__details-img" />
                            </div>

                            <div>
                                <h3 className="choose__details-title">Awesome Aroma</h3>
                                <p className="choose__details-description">
                                    Experience the rich, comforting scent of freshly brewed coffee that awakens your senses and sets the perfect mood.
                                </p>
                            </div>
                        </div>

                        <div className="choose__details-item">
                            <div className="choose__details-img-wrapper">
                                <img src={coffeeBeans2} alt="" className="choose__details-img" />
                            </div>

                            <div>
                                <h3 className="choose__details-title">Pure Grades</h3>
                                <p className="choose__details-description">
                                    We use only premium, organic beans — ethically sourced and roasted to perfection for an uncompromised coffee experience.
                                </p>
                            </div>
                        </div>

                        <div className="choose__details-item">
                            <div className="choose__details-img-wrapper">
                                <img src={coffeeBeans3} alt="" className="choose__details-img" />
                            </div>

                            <div>
                                <h3 className="choose__details-title">Healthy Coffee</h3>
                                <p className="choose__details-description">
                                    Our blends are crafted to be as good for your body as they are for your taste buds — natural, nourishing, and always delicious.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={chooseImg} alt="" className="choose__img" />
            </div>
        </section>
    )
}

export default Choose