import React from 'react'
import './test.css'
// star
import { IoMdStar } from "react-icons/io";

const Test = () => {
    return (
        <>
            <section className='pt-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 pb-3 ">
                            <div className="title text-center">
                                <h1>Great Words From People</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>
                            </div>
                        </div>
                        <div className="col-12 d-flex flex-wrap justify-content-center">
                            <div className="col-12 col-md-6 col-lg-4  py-5 px-2">
                                <div class="test card text-center">
                                    <div className="test-img">
                                        <img src="imgs/test-1.jpg" alt="" />
                                    </div>
                                    <div className="quot">
                                        <img src="imgs/quot.png" alt="" />
                                    </div>
                                    <div class="ard-body">
                                        <span>Co Founder</span>
                                        <h5 class="card-title pt-2">Stephen Smith</h5>
                                        <p class="card-text py-2">“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”
                                        </p>
                                        <div className="star">
                                          <span className='fs-5'><IoMdStar /></span>
                                          <span className='fs-5'><IoMdStar /></span>
                                          <span className='fs-5'><IoMdStar /></span>
                                          <span className='fs-5'><IoMdStar /></span>
                                          <span className='fs-5'><IoMdStar /></span>
                                       
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4  py-5 px-2">
                                <div class="test card text-center">
                                    <div className="test-img">
                                        <img src="imgs/test-2.jpg" alt="" />
                                    </div>
                                    <div className="quot">
                                        <img src="imgs/quot.png" alt="" />
                                    </div>
                                    <div class="ard-body">
                                        <span>Manager</span>
                                        <h5 class="card-title pt-2">Lorem Robinson</h5>
                                        <p class="card-text py-2">“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”
                                        </p>
                                        <div className="star">
                                          <span className='fs-5'><IoMdStar /></span>
                                          <span className='fs-5'><IoMdStar /></span>
                                          <span className='fs-5'><IoMdStar /></span>
                                          <span className='fs-5'><IoMdStar /></span>
                                          <span className='fs-5'><IoMdStar /></span>
                                       
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4  py-5 px-2">
                                <div class="test card text-center">
                                    <div className="test-img">
                                        <img src="imgs/test-1.jpg" alt="" />
                                    </div>
                                    <div className="quot">
                                        <img src="imgs/quot.png" alt="" />
                                    </div>
                                    <div class="ard-body">
                                        <span>Team Leader</span>
                                        <h5 class="card-title pt-2">Saddika Alard</h5>
                                        <p class="card-text py-2">“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”
                                        </p>
                                        <div className="star">
                                          <span className='fs-5'><IoMdStar /></span>
                                          <span className='fs-5'><IoMdStar /></span>
                                          <span className='fs-5'><IoMdStar /></span>
                                          <span className='fs-5'><IoMdStar /></span>
                                          <span className='fs-5'><IoMdStar /></span>
                                       
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Test
