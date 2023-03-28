import React from 'react'
import "./ContactUs.css"
import im1 from '../images/ACM.png'
import im2 from '../images/CSI.png'
import im3 from '../images/GDSC .png'
import im4 from '../images/IEEE VNRVJIET.png'
import im5 from '../images/ISTE.jpg'
import im6 from '../images/turing hut.jpeg.jpg'
import im7 from '../images/globe-solid.svg'
import im8 from '../images/instagram.svg'
function ContactUs() {
  return (
    <div className="parent" >
         <div className="child" >
            <img src={im1} width="150px" height="150px" alt=""/>
            <h5>Association for Computing Machinery</h5>
            <img src={im7} height="15px" width="15px"  alt=""/>
            <a className='a1' href="https://www.acm.org/" >https://www.acm.org/</a>
            <div><img src={im8} height="15px" width="15px"  alt=""/>
            <a className='a1' >acm_vnrvjiet</a></div>
         </div>

         <div className="child">
            <img src={im2} width="150px" height="150px" alt=""/>
            <h5>Computer Society of India</h5>
            <br></br>
            <img src={im7} height="15px" width="15px"  alt=""/>
            <a className='a1' href="https://vnrvjietcsi.com/">https://vnrvjietcsi.com/</a>
            <div><img src={im8} height="15px" width="15px"  alt=""/><a className='a1'>csi_vnrvjiet</a></div>
            
         </div>
         <div className="child">
            <img src={im3} width="150px" height="150px" alt=""/>
            <h5>Google Developer Student Clubs</h5>
            <br></br>
            <img src={im7} height="15px" width="15px"  alt=""/>
            <a className='a1' href="https://gdsc.community.dev/">https://gdsc.community.dev/</a>
            <div><img src={im8} height="15px" width="15px"  alt=""/><a className='a1'>gdsc.vnrvjiet</a></div>
         </div>
         <div className="child">
            <br></br>
            <img src={im4} width="200px" height="100px" />
            <h5 class="i">Institute of Electrical and Electronics Engineers</h5>
            <img src={im7} height="15px" width="15px"  alt=""/>
            <a className='a1'  href="https://ieee-icmacc.org/vnrvjiet/">https://ieee-icmacc.org/vnrvjiet/</a>
            <div><img src={im8} height="15px" width="15px"  alt=""/><a className='a1'>ieeevnrvjiet</a></div>
            
         </div>
         <div className="child">
            <img src={im5} width="150px" height="150px" alt=""/>
            <h5>Indian Society for Technical Education</h5>
            <img src={im7} height="15px" width="15px"  alt=""/>
            <a className='a1' href="http://www.vnrvjiet.ac.in/iste.pdf">http://www.vnrvjiet.ac.in/iste.pdf</a>
            <div><img src={im8} height="15px" width="15px"  alt=""/><a className='a1'>iste_vnrvjiet</a></div>
         </div>
         <div className="child">
            <img src={im6} width="150px" height="150px" alt=""/>
            <h5>Turing Hut</h5>
            <br></br>
            <br></br>
            <img src={im7} height="15px" width="15px"  alt=""/>
            <a className='a1' href="https://turinghut.org/">https://turinghut.org/</a>
            <div><img src={im8} height="15px" width="15px"  alt=""/><a className='a1' padding-top="10px">turing.hut</a></div>
         </div>
    </div>

  )
}

export default ContactUs