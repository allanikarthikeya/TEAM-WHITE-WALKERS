import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

function WriteReport() {
  let {register,handleSubmit,formState:{errors}}=useForm()
  let submitform=(data)=>{
axios.post("http://localhost:4000/report",data)
.then(res=>res.data)
.catch(err=>console.log("err is",err))
  }
  return (
    <div>
      <div className='row pt-5'>
<div className='col-11 col-sm-8 col-md-5 mx-auto'>
<form onSubmit={handleSubmit(submitform)} >
  <div className='p-3'>
  <label for="date" className='form-label'>Date</label>
  <input type="date" id="date" {...register("date")} className="form-control" />
  </div>
  <div className='p-3'>
  <label for="time" className='form-label'>Time</label>
  <input type="text" id="time" {...register("time")} className="form-control" />
  </div>
  <div className='p-3'> 
 <label for="mode" className='pe-5'>Mode</label>
 <select {...register("mode")} id="mode">
<option value="offline">Offline</option>
<option value="online">Online</option>
 </select>
  </div>
  <div className='p-3'>
    <label for="review">Minutes of meet</label>
    <textarea {...register("review")} id="review" cols="60" rows="10"></textarea>
  </div>
  <div className='p-3'>
    <button className='btn' type='submit'>Submit</button>
  </div>
</form>
</div>
      </div>
    </div>
  )
}

export default WriteReport
