import React from 'react'
import './news.css'
// arrow
import { FaArrowRight } from "react-icons/fa6"; 
const News = () => {
    return (
        <>
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 ">
                            <div className="news-title text-center pb-3">
                                <h1>Latest News</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>

                            </div>
                        </div>
                        <div className="col-12 d-flex flex-wrap justify-content-center">
                            <div className="col-12 col-md-6 col-lg-4 p-2 ">
                                <div class="news-card card">
                                
                                    <div class="news-body card-body">
                                        <span>
                                            <small>By Admin</small>|
                                            <a href="#">Snacks</a>
                                        </span>
                                        <p class="card-text pt-2 fw-bold">Best guide to Shopping for organic ingredients.</p>
                                        <a href="#" class="btn p-0 fw-bold fs-6 ">Read More <span><FaArrowRight /></span>
                                        </a>
                                    </div>
                                    <div className="date py-1 px-3 text-center">
                                        <span className='d-flex flex-column fs-3'>10
                                            <small className='fs-6'>oct</small>
                                        </span>
                                    </div>
                                   <div className="img">
                                   <img src="imgs/news-1.jpg" class="card-img-top" alt="..." />
                               
                                   </div>
                                    </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 p-2 ">
                                <div class="news-card card">
                                
                                    <div class="news-body card-body">
                                        <span>
                                            <small>By Admin</small>|
                                            <a href="#">Food</a>
                                        </span>
                                        <p class="card-text pt-2 fw-bold">Urna pretium elit mauris cursus at elit Vestibulum.</p>
                                        <a href="#" class="btn p-0 fw-bold fs-6 ">Read More <span><FaArrowRight /></span>
                                        </a>
                                    </div>
                                    <div className="date py-1 px-3 text-center">
                                        <span className='d-flex flex-column fs-3'>09
                                            <small className='fs-6'>sep</small>
                                        </span>
                                    </div>
                                  <div className="img">
                                  <img src="imgs/news-2.jpg" class="card-img-top" alt="..." />
                                
                                  </div>
                                  </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 p-2 ">
                                <div class="news-card card">
                                
                                    <div class="news-body card-body">
                                        <span>
                                            <small>By Admin</small>|
                                            <a href="#">Snacks</a>
                                        </span>
                                        <p class="card-text pt-2 fw-bold">Cursus at elit vestibulum urna pretium elit mauris.</p>
                                        <a href="#" class="btn p-0 fw-bold fs-6 ">Read More <span><FaArrowRight /></span>
                                        </a>
                                    </div>
                                    <div className="date py-1 px-3 text-center">
                                        <span className='d-flex flex-column fs-3'>12
                                            <small className='fs-6'>oct</small>
                                        </span>
                                    </div>
                                   <div className="img">
                                   <img src="imgs/news-3.jpg" class="card-img-top" alt="..." />
                                
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

export default News
