import React from 'react'
import './Cards.css'
import img from '../images/about.png'
import img1 from '../images/success.png'
function Cards() {
  return (
    <div>
        <div class="parent">
         <div class="child">
            <img src={img} width="100px" alt=""/>
            
            <h2>About Us</h2>
            <p>We team VNR EVENTS organize with the planning, execution, and management of their events.
                We coordinate with the users about the schedules and determine details abut the events.
            </p>
         </div>

         <div class="child">
            <img src={img1} width="100px" alt=""/>
            
            <h2>Successful Events</h2>
            <p>Team VNR EVENTS has conducted many successful events like Convergence 2k23, ACM Winter Coding
                Contest 2.0, VJ Hacakthon, Ted talks and many more...
            </p>
         </div>
         
    </div>
    </div>
  )
}

export default Cards