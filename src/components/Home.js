import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img from '../images/battle.jpg'
import img2 from '../images/mega.jpg'
import img3 from '../images/gdscacm.jpg'
import ge1 from '../images/about.png'
import ge2 from '../images/success.png'
import  './Home.css'
import Cards from './Cards'
function Home() {
  return (
    <div className="part1 pt-5">
    <div className='container'>
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
    <div>
        <div className="parent1">
         <div className="child3">
            <img src={ge1} width="100px" alt=""/>
            
            <h2>About Us</h2>
            <p>We team VNR EVENTS organize with the planning, execution, and management of their events.
                We coordinate with the users about the schedules and determine details abut the events.
            </p>
         </div>

         <div className="child3">
            <img src={ge2} width="100px" alt=""/>
            
            <h2>Successful Events</h2>
            <p>Team VNR EVENTS has conducted many successful events like Convergence 2k23, ACM Winter Coding
                Contest 2.0, VJ Hacakthon, Ted talks and many more...
            </p>
         </div>
         
    </div>
    </div>
  </div>
    </div>
  )
}

export default Home