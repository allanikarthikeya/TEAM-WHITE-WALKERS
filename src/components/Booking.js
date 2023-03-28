import axios from 'axios'
import React, { useState ,useEffect} from 'react'
import './Booking.css'
function Booking() {

  let [arr,setArr] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:4000/timings")
.then(res=>setArr(res.data))
.catch(err=>console.log("err is",err))
  },[])
  
  let setbook=(object)=>{
axios.post("http://localhost:4000/booking",object)
.then(res=>console.log(res.data))
.catch(err=>console.log("err is",err))
  }
  let setbooks=()=>{
axios.delete("http://localhost:4000/timings")
.then(res=>console.log(res.data))
.catch(err=>console.log("err is",err))
  }
  return (
    <div className='par pb-5 pt-5'>
     <div className='row row-cols-sm-1 row-cols-md-2 row-cols-lg-4'>
   { arr.map((obj)=>
     <div className='card border border-dark rounded mt-3'>
      <div className='card-body'>
      <h6 className='fw-bold'><span className='h5 fw-bold'>Venue      : </span>{obj.venue}</h6>
      <h6 className='fw-bold'><span className='h5 fw-bold'>Start Time : </span>{obj.stime}</h6>
      <h6 className='fw-bold'><span className='h5 fw-bold'>End Time   : </span>{obj.etime}</h6>
      <h6 className='fw-bold'><span className='h5 fw-bold'>Date       : </span>{obj.date}</h6>
      <div>
      <button className='btn mt-4' onClick={()=>setbook(obj) && setbooks}  type='click'>Book Now</button>
      </div>
      </div>
      </div>
    )
  }
     </div>
    </div>
  )
}

export default Booking
