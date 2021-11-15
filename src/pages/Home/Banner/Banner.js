import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-hyundai-kona-mmp-1-1596819352.jpg?crop=0.873xw:0.738xh;0.00801xw,0.204xh&resize=1200:*"
                        alt="Toyota car"
                    />
                    <Carousel.Caption className="bg-dark">
                        <h3>Toyota car fault prompts massive recall</h3>
                        <p>Japanese car giant Toyota has announced a recall of more than 2.4 million hybrid vehicles worldwide because of a fault in their systems that could cause them to lose power. The recall of Prius and Auris cars includes 1.25 million in Japan, 830,000 in North America and 290,000 in Europe, of which about 55,000 are in the UK.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-kia-soul-mmp-1-1593638236.jpg?crop=0.793xw:0.668xh;0.0801xw,0.300xh&resize=1200:*"
                        alt="Toyota"
                    />

                    <Carousel.Caption className="bg-dark">
                        <h3>Toyota New "Raize"</h3>
                        <p>The new Raize is a compact SUV small passenger car that measures less than four meters in length. It caters to the desires of customers who want to drive an SUV, who want to load their cars with a lot of luggage, but who also wish to have a car that is compact and easy to drive. The car was developed to be "active, useful*5, and compact." </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-bmw-x2-mmp-1-1601402776.jpg?crop=1.00xw:0.849xh;0,0.151xh&resize=1200:*"
                        alt="Nissan Cars"
                    />

                    <Carousel.Caption className="bg-dark">
                        <h3>Nissan Cars</h3>
                        <p>Nissan car price starts at Rs 5.62 Lakh for the cheapest model which is Magnite and the price of most expensive model, which is GT-R starts at Rs 2.12 Crore. Nissan offers 3 car models in India, including 1 car in SUV category, 1 car in Coupe category, 1 car in Compact SUV category.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;