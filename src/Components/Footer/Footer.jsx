import React from 'react'
import './footer.css'
// facebook
import { RiFacebookLine } from "react-icons/ri";
// twitter
import { RiTwitterXLine } from "react-icons/ri";
// deibell
import { FaDribbble } from "react-icons/fa6";
// insta
import { RxInstagramLogo } from "react-icons/rx";

const Footer = () => {
    return (
        <>
            <footer className='footer py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4 col-sm-6 col-xs-12 px-3'>
                            <div className="f-logo">
                                <div className="f-img">
                                    <img src="./imgs/logo.png" alt="" />
                                </div>
                                <p className='py-3 fs-6'>Carrot is the biggest market of grocery products. Get your daily needs from our store.</p>

                            </div>
                            <div className="location">
                                <ul className='d-flex flex-column'>
                                    <li>
                                        51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.
                                    </li>
                                    <li>
                                        <a href="#">example@email.com</a>
                                    </li>
                                    <li>
                                        <a href="#">+91 123 4567890</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-2 col-sm-6 col-xs-12 px-3'>
                            <div className="f-main">
                                <div className="f-title pt-3">
                                    <h4>Catagory</h4>
                                </div>
                                <ul className='f-list d-flex flex-column'>
                                    <li><a href="#">Dairy & Bakery</a></li>
                                    <li><a href="#">Fruits & Vegetable</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Support Center</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-2 col-sm-6 col-xs-12 px-3'>
                            <div className="f-main">
                                <div className="f-title pt-3">
                                    <h4>Company</h4>
                                </div>
                                <ul className='f-list d-flex flex-column'>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Delivery Information</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Support Center</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-4 col-sm-6 col-xs-12 px-3'>
                            <div className="f-main">
                                <div className="f-title pt-3">
                                    <h4>Subscribe Our Newsletter</h4>
                                </div>
                                <div className="search py-2">
                                    <form class="d-flex" role="search w-100">
                                        <input class="form-control w-100" type="search" placeholder="Search" aria-label="Search" />
                                        <button class="btn  " type="submit">Search</button>
                                    </form>
                                </div>
                                <div className="social pt-4">
                                    <span><RiFacebookLine /></span>
                                    <span><RiTwitterXLine /></span>
                                    <span><FaDribbble /></span>
                                    <span><RxInstagramLogo /></span>

                                </div>
                                <div className="payment">
                                    <div class="cr-insta-slider swiper-container swiper-container-initialized swiper-container-horizontal">
                                        <div class="swiper-wrapper" id="swiper-wrapper-11051df98c7dc3098" aria-live="polite">
                                            <a href="#" class="cr-payment-image">
                                                <img src="assets/img/insta/5.jpg" alt="insta" />
                                                <div class="payment-overlay"></div>
                                            </a>
                                        </div><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="5" role="group" aria-label="2 / 16">
                                            <a href="#" class="cr-payment-image">
                                                <img src="assets/img/insta/6.jpg" alt="insta" />
                                                <div class="payment-overlay"></div>
                                            </a>
                                        </div><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="6" role="group" aria-label="3 / 16">
                                            <a href="#" class="cr-payment-image">
                                                <img src="assets/img/insta/7.jpg" alt="insta" />
                                                <div class="payment-overlay"></div>
                                            </a>
                                        </div><div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="7" role="group" aria-label="4 / 16">
                                            <a href="#" class="cr-payment-image">
                                                <img src="assets/img/insta/8.jpg" alt="insta" />
                                                <div class="payment-overlay"></div>
                                            </a>
                                        </div>
                                        <div class="swiper-slide" data-swiper-slide-index="0" role="group" aria-label="5 / 16">
                                            <a href="#" class="cr-payment-image">
                                                <img src="assets/img/insta/1.jpg" alt="insta" />
                                                <div class="payment-overlay"></div>
                                            </a>
                                        </div>
                                        <div class="swiper-slide" data-swiper-slide-index="1" role="group" aria-label="6 / 16">
                                            <a href="#" class="cr-payment-image">
                                                <img src="assets/img/insta/2.jpg" alt="insta" />
                                                <div class="payment-overlay"></div>
                                            </a>
                                        </div>

                                        <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="3" role="group" aria-label="16 / 16">
                                            <a href="#" class="cr-payment-image">
                                                <img src="assets/img/insta/4.jpg" alt="insta" />
                                                <div class="payment-overlay"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                            </div>
                        </div>
                    </div>
                </div>


            </footer>
        </>
    )
}

export default Footer
