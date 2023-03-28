import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Report() {
  let navigate=useNavigate()
    let [reports,setreport]=useState([])
    let otherpage=()=>{
      navigate('/writereport')
    }
    useEffect(()=>{
      axios.get("http://localhost:4000/report")
      .then(res=>setreport(res.data))
      .catch(err=>console.log("err is",err))
    },[])
   
  return (
    <div className='par vh-100 pt-5 text-center'>
    <div className='row row-cols-sm-1 row-cols-md-2 row-cols-lg-4'>
  { reports.map((obj)=>
    <div className='card border border-dark rounded'>
     <div className='card-body'>
     <h6><span className='h5 fw-bold'>Date      : </span>{obj.date}</h6>
     <h6><span className='h5 fw-bold'>Time      : </span>{obj.time}</h6>
     <h6><span className='h5 fw-bold'>Mode      : </span>{obj.mode}</h6>
     <h5 className='fw-bold'>Review:</h5>
     <h6>{obj.review}</h6>
     </div>
     </div>
  )
}
      </div>
      <div>
        <button className='btn mt-3' onClick={otherpage}>Write a report</button>
      </div>
      </div>
  )
}

export default Report
