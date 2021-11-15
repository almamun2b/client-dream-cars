import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer-left col-md-4 col-sm-6">
                    <p className="about">
                        <span>Your Dream Car</span> We offers a new, safe and convenient way of selling your car throughout the Arab world. Use our free car valuation service regardless of make and model to determine the best used car price. Take advantage of the professional and gratis car inspection and the fast car buying service by SellAnyCar.com - the perfect alternative to time-consuming and tiring advertisements.
                    </p>

                </div>
                <div className="footer-center col-md-4 col-sm-6">
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span> 420, Bhooter Goli</span> Dhaka, Bangladesh</p>
                    </div>
                    <div>
                        <i className="fa fa-phone"></i>
                        <p> 01710-000000</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><Link to="/home">office@company.com</Link></p>
                    </div>
                </div>
                <div className="footer-right col-md-4 col-sm-6">
                    <h2><span>Your Dream Car</span></h2>
                    <p className="menu">
                        <Link to="/home">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/home">Products</Link>
                        <Link to="/home">Contact</Link>
                    </p>
                    <p className="name"> Your Dream Car &copy; 2021</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

