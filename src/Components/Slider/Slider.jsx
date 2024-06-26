import React from 'react'
import './Slider.css'

const Slider = () => {
  return (
    <div  className="container-fluid p-0">
<div className='slider'>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000" >
      <img src="imgs/banner.jpg" class="d-block w-100" alt="..."/>
    
    <div class="col-4 text-start carousel-caption">
        <h5><span>100%</span> Organic Vegetable</h5>
        <h1>The best way to stuff your wallet.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.</p>
        <button className='btn '>Shop Now</button>
      </div>
  
    
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="imgs/banner-2.jpg" class="d-block w-100" alt="..."/>
      <div class="col-4 text-start carousel-caption ">
        <h5><span>100%</span> Organic Fruits</h5>
        <h1>Explore fresh & juicy fruits.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.</p>
        <button className='btn '>Shop Now</button>
      </div>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

    </div>
</div>
    </div>
  )
}

export default Slider

