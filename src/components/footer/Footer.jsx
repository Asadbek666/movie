import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='Footer'>
            <footer className="wrap__footer">
                <div className="footer">
                    <div className="footer__icons">
                        <div>
                            <i className="fa-brands fa-square-facebook"></i>
                        </div>
                        <div>
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                        <div>
                            <i className="fa-brands fa-twitter"></i>
                        </div>
                        <div>
                            <i className="fa-brands fa-youtube"></i>
                        </div>
                    </div>
                    <div className="footer__titles">
                        <div className="first__title">Conditions of Use</div>
                        <div className="first__title">Privacy & Policy</div>
                        <div className="first__title">Press Room</div>
                    </div>
                    <div className="footer__product">
                        <div className="footer__text">© 2021 MovieBox by Adriana Eka Prayudha  </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};


export default Footer;