import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img from '../images/battle.jpg'
import img2 from '../images/mega.jpg'
import img3 from '../images/gdscacm.jpg'
import  './Carousel.css'
function Carousel() {
  return (
    <div className="part1">
    <div className='container'>
    <h1 className="display-3 pt-4 pb-4 "><b>Upcoming Events!</b></h1>
    </div>
      <Carousel>
      <Carousel.Item>
        <img src={img3}
          className="d-block w-100"
          height="400px"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" height="400px"
          src={img}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" height="400"
          src={img2}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Carousel