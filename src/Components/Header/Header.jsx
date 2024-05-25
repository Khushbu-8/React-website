import React from 'react'
import './Header.css'
// search
import { IoSearch } from "react-icons/io5";
// User
import { FaRegUser } from "react-icons/fa";
// heart
import { FaRegHeart } from "react-icons/fa";
// cart
import { BsCart3 } from "react-icons/bs";
// manubar
import { FaBarsStaggered } from "react-icons/fa6";
// phone
import { MdLocalPhone } from "react-icons/md";
// down errow 
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
    return (
        <div>
            {/* navbar */}
            <div className="container">
                <div className="row">
                    <div className="nav p-3 d-flex flex-wrap">
                        <div className="col-12 col-md-6 col-lg-3 ">
                            <div className="logo d-flex justify-content-center justify-content-xl-start ">
                                <img src="imgs/logo.png" alt="" />
                            </div>
                        </div>
                        <div className=" col-12 col-md-6 col-lg-4">
                            <div className="search-box">
                                <input type="text" className=" w-100 ps-3" placeholder="Search For items..." />
                                <div class="dropdown d-none d-sm-flex " border={0}>
                                    <button class="btn dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        All catagories
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <div className="search-icon fs-5">
                                    <span><IoSearch /></span>
                                </div>

                            </div>
                        </div>
                        <div className="col-5 d-none d-lg-flex ">
                            <div className="cart-bar w-100 d-flex justify-content-end align-items-center fw-700 fs-5">
                                <ul className='d-flex align-items-center'>
                                    <li>
                                        <div class="dropdown">
                                            <span className='me-2'><FaRegUser /></span>
                                            <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                account
                                            </a>
                                            <ul class="dropdown-menu mt-3 shadow bg-white">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                        </li>
                                    <li><a href="#">
                                        <span className='me-2'><FaRegHeart /></span>
                                        wishlist</a>
                                        </li>
                                    <li>
                                        <a href="#">
                                        <span className='me-2'> <BsCart3 /></span>
                                        cart</a>
                                        </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    {/* header */}
                    <div className="header p-3 d-flex align-items-center fw-bold">
                        <div className="col-12 d-flex">
                            <div className="col-6 col-lg-2">
                                <div className="catagory-manu">
                                    <button className='btn'><FaBarsStaggered /></button>
                                </div>
                            </div>

                            <div className="col-6 col-lg-10 col-xl-6 d-flex align-items-center">
                                <div className="manu d-flex justify-content-end  w-100 d-none d-lg-flex">
                                    <ul>
                                        <li><a href="#">Home <FaAngleDown /></a></li>
                                        <li><a href="#">Catagory <FaAngleDown /></a></li>
                                        <li><a href="#">Product <FaAngleDown /></a></li>
                                        <li><a href="#">Pages <FaAngleDown /></a></li>
                                        <li><a href="#">Bloge <FaAngleDown /></a></li>
                                        <li><a href="#">Element <FaAngleDown /></a></li>

                                    </ul>
                                </div>
                                <div className="cart-bar w-100 d-flex justify-content-end align-items-center fw-700 fs-5 d-flex d-lg-none">
                                    <ul className='d-flex align-items-center p-0 justify-content-end w-100'>
                                        <li><a href="#">
                                            <span className='me-2'><FaRegUser /></span>
                                        </a></li>
                                        <li><a href="#">
                                            <span className='me-2'><FaRegHeart /></span>
                                        </a></li>

                                        <li><a href="#">
                                            <span className='me-2'> <BsCart3 /></span>
                                        </a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-4 d-flex align-items-center justify-content-end d-none d-xl-flex">
                                <div className="contect
                        "><span className='fs-5 m-2'><MdLocalPhone /></span>+123 ( 456 ) ( 7890 )</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
