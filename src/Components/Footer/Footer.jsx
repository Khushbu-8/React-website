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
                        <div className="f-top d-flex flex-wrap py-5">
                            <div className='col-12 col-lg-4 d-none d-lg-flex px-3'>
                                <div className="fl">
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

                            </div>
                            <div className="col-12 col-lg-4 px-3 d-lg-none d-flex w-100">
                                <div className="fl w-100">
                                    <div className="f-logo">
                                        <div className="f-img">
                                            <img src="./imgs/logo.png" alt="" />
                                        </div>
                                        <p className='py-3 fs-6'>Carrot is the biggest market of grocery products. Get your daily needs from our store.</p>

                                    </div>
                                    <div class="accordion w-100" id="accordionPanelsStayOpenExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                    Contect us
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                                <div class="accordion-body">
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
                                                    </div>                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* company */}
                            <div className='col-12 col-lg-2 d-none d-lg-flex  px-3'>
                                <div className="f-main ">
                                    <div className="f-title pt-3">
                                        <h4>company</h4>
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
                            <div className='col-12 col-lg-2 d-lg-none d-flex p-3'>
                                <div class="accordion w-100" id="accordionPanelsStayOpenExample">

                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                                Company
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                            <div class="accordion-body">
                                                <ul className='f-list d-flex flex-column'>
                                                    <li><a href="#">Dairy & Bakery</a></li>
                                                    <li><a href="#">Fruits & Vegetable</a></li>
                                                    <li><a href="#">Privacy Policy</a></li>
                                                    <li><a href="#">Terms & Conditions</a></li>
                                                    <li><a href="#">Contact Us</a></li>
                                                    <li><a href="#">Support Center</a></li>
                                                </ul>                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* catagoty */}
                            <div className='col-12 col-lg-2  d-none d-lg-flex  px-3'>
                                <div className="f-main">
                                    <div className="f-title pt-3">
                                        <h4>catagory</h4>
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
                            <div className='col-12 col-lg-2 d-lg-none d-flex p-3 '>
                                <div class="accordion w-100" id="accordionPanelsStayOpenExample">

                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                                Catagory
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                            <div class="accordion-body">
                                                <ul className='f-list d-flex flex-column'>
                                                    <li><a href="#">About Us</a></li>
                                                    <li><a href="#">Delivery Information</a></li>
                                                    <li><a href="#">Privacy Policy</a></li>
                                                    <li><a href="#">Terms & Conditions</a></li>
                                                    <li><a href="#">Contact Us</a></li>
                                                    <li><a href="#">Support Center</a></li>
                                                </ul>                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* subscribe */}
                            <div className='col-12 col-lg-4  px-3'>
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
                                    <div className="payment pt-4 d-flex">
                                        <div className="pay-img p-2">
                                            <img src="./imgs/f1.jpg" className='img-fluid' alt="" />
                                        </div>
                                        <div className="pay-img p-2">
                                            <img src="./imgs/f2.jpg" className='img-fluid' alt="" />
                                        </div>
                                        <div className="pay-img p-2">
                                            <img src="./imgs/f3.jpg" className='img-fluid' alt="" />
                                        </div>
                                        <div className="pay-img p-2">
                                            <img src="./imgs/f4.jpg" className='img-fluid' alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="f-bottom text-center pt-4">
                            <p>
                                ©
                                <span> 2024</span>
                                <a href="#"> Carrot</a>
                                , All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>


            </footer>
        </>
    )
}

export default Footer
