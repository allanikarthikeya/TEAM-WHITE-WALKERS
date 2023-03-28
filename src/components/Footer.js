import React from 'react'
import './Footer.css';
import ima1 from '../images/calendar.png'
import ima2 from '../images/call.png'
import ima3 from '../images/mail.png'
import ima4 from '../images/location.png'
import ima5 from '../images/globe-solid.svg'
function Footer() {
  return (
    <div>
        <div className="footer border  border-2 border-right-0">
        <div className="v">
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src={ima1} width="50px" className='pe-2' />
              <span className="foo">VNR EVENTS</span>
            </a>
            <p className="my-3" style={{ width: '250px' }}>
              We are creating an interface between committees and students to oraganize technical and non-technical events.We help you to assist organizers with the planning, execution, and management of their events.
            </p>
        </div>
        <div>
        <div className="co">
          <h5 className="text-uppercase fw-bold mb-4 ">
            CONTACT
          </h5>
          <p>
          <img src={ima4} height="15px" width="15px"  alt=""/>
            <a href="#!" className="text-reset">VNR VJIET,Bachupally</a>
          </p>
          <p>
          <img src={ima3} height="15px" width="15px"  alt=""/>
            <a href="#!" className="text-reset">vnrevents@gmail.com</a>
          </p>
          <p>
          <img src={ima2} height="15px" width="15px"  alt=""/>
            <a href="#!" className="text-reset">+91 9999999999</a>
          </p>
          <p>
          <img src={ima5} height="15px" width="15px"  alt=""/>
          <a href="#!" className="text-reset">vnrvjiet.ac.in</a>
          </p>
        </div>
        </div>
        </div>
        </div>




  )
}

export default Footer