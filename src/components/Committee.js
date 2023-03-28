import React from 'react'
import img1 from '../images/ACM.png'
import img2 from '../images/CSI.png'
import img3 from '../images/GDSC .png'
import img4 from '../images/IEEE VNRVJIET.png'
import img5 from '../images/ISTE.jpg'
import img6 from '../images/turing hut.jpeg.jpg'
import { useNavigate } from 'react-router-dom'
function Committee() {
    let navigate1=useNavigate()
    let acmpage=()=>{
        navigate1('/acm')
    }
    let navigate2=useNavigate()
    let csipage=()=>{
        navigate2('/csi')
    }
    let navigate3=useNavigate()
    let ieeepage=()=>{
        navigate3('/ieee')
    }
    let navigate4=useNavigate()
    let gdsepage=()=>{
        navigate4('/gdse')
    }
    let navigate5=useNavigate()
    let istepage=()=>{
        navigate5('/iste')
    }
    let navigate6=useNavigate()
    let turinghutpage=()=>{
        navigate6('/turinghut')
    }
  return (
    <div>
        <div class="cards border-0 w-250 p-5">
    <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-4 ">
        <img   src={img1}  width="350px" height="350px" alt=""/>
        </div>
        <div class="col-md-4 col-sm-7">
            <div class="card-body">
                <h2><b >Association for Computing Machinery</b></h2>
                <p>
                ACM is an international student chapter that brings together technology geeks, computer
                 educators, working professionals, among others and gives them a platform to share
                  all things related to the world of rapidly evolving technology</p>
                <button onClick={acmpage} class="bg-black text-white p-2"><b>Know More</b></button>
            </div>
        </div>
        <div class="col-md-2"></div>
    </div>
</div>
<div class="cards border-0 w-75 p-5 ">
    <div class="row">
    <div class="col-md-2"></div>
        <div class="col-md-6">
            <h2><b>Computer Society of India</b></h2>
            <p>
            CSI, a nationwide student chapter that aims at bringing out the innate talents of the 
            students.Introducing many innovative and interactive events which helped the students
             to develop many skills
            </p>
            <button class="bg-black text-white p-2" onClick={csipage}><b>Know More</b></button>
        </div>
        <div class="col-md-4">
            <img src={img2} width="300px" height="300px" alt=""/>
        </div>
       
    </div>
</div>
<div class="cards border-0 w-75 p-5">
    <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-6">
            <img src={img3} width="300px" height="200px" alt=""/>
        </div>
        <div class="col-md-4 col-sm-">
            <h2><b>Google Developer Student Club</b></h2>
            <p>Google Developer Student Club is for students interested in Google developer technologies.
                Students with an interest in growing as a developer are welcome. </p>
                 <button class="bg-black text-white p-2" onClick={gdsepage}><b>Know More</b></button>
        </div>
    </div>
</div>
<div class="cards border-0 w-75 p-5 ">
    <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-6">
            <h2><b>Institute of Electrical and Electronics Engineers</b></h2>
            <p>
            IEEE, an organization dedicated to advancing innovation and technological excellence for the
             benefit of humanity, is the world’s largest technical professional society. It is designed
              to serve professionals involved in all aspects of the electrical, electronic, and
               computing fields and related areas of science and technology that underlie 
               modern civilization.
            </p>
            <button class="bg-black text-white p-2" onClick={ieeepage}><b>Know More</b></button>
        </div>
        <div class="col-md-4 ">
            <img src={img4} width="350px" height="200px" alt=""/>
        </div>
       
    </div>
</div>
<div class="cards border-0 w-75 p-5">
    <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-5">
            <img src={img5} width="300px" height="300px" alt=""/>
        </div>
        <div class="col-md-5 col-sm-6">
            <h2><b>Indian Society for Technical Education </b></h2>
            <p>
The Indian Society for Technical Education (ISTE) is the leading National Professional
 non-profit making Society for the Technical Education System in our country with the
  motto of Career Development of Teachers and Personality Development of Students and 
  overall development of our Technical Education System.
 </p>
                 <button class="bg-black text-white p-2" onClick={istepage}><b>Know More</b></button>
        </div>
    </div>
</div>
<div class="cards border-0 w-75 p-5 ">
    <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-6">
            <h2><b>Turing Hut</b></h2>
            <p>
            Turing Hut is a Non profit organization. We are a group of people working together
             for the improvement of programming culture of VNR VJIET

            </p>
            <button class="bg-black text-white p-2" onClick={turinghutpage}><b>Know More</b></button>
        </div>
        <div class="col-md-4 ">
            <img src={img6} width="350px" height="300px" alt=""/>
        </div>
       
    </div>
</div>
    </div>
    
  )
}

export default Committee