import React from 'react';
import Banner from '../Banner/Banner';
import FeaturesProducts from '../FeaturesProducts/FeaturesProducts';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturesProducts></FeaturesProducts>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;