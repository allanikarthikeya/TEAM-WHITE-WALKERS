import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

function Booking1() {
    let [condi,setcondi]=useState("")
    let {register,handleSubmit,formState:{errors}}=useForm()
    let formsubmit=(data)=>{
axios.post("http://localhost:4000/timings",data)
.then(res=>
    {res.data && setcondi("s")}
    )
.catch(err=>console.log("err is",err))

    }
    useEffect(()=>{setcondi("")},[])
  return (
    <div>
      <div className='row mt-5'>
 <div className='col-11 col-sm-8 col-md-5 mx-auto'>
<form onSubmit={handleSubmit(formsubmit)}>
<div className='p-3'> 
 <label for="venue" className='pe-5'>Venue</label>
 <select {...register("venue")} id="venue">
<option value="KS Auditorium">KS Auditorium</option>
<option value="APJ Auditorium">APJ Auditorium</option>
<option value="Seminar Hall">Seminar Hall</option>
<option value="PEB Block">PEB Block</option>
 </select>
  </div>
    <div className='p-3'>
        <label for="stime" className='form-label'>Start Time</label>
        <input type="time" id="stime" className=" form-control mb-3" {...register("stime",{required:true})}/>
        {errors.stime?.type=="required" && <p className='text-danger'>*Start time is required</p>}
    </div>
    <div className='p-3'>
        <label for="etime" className='form-label'>End Time</label>
        <input type="time" id="etime" className=" form-control mb-3" {...register("etime",{required:true})}/>
        {errors.etime?.type=="required" && <p className='text-danger'>*End time is required</p>}

    </div>
    <div className='p-3'>
        <label for="date" className='form-label'>Date</label>
        <input type="date" id="date" className=" form-control mb-4" {...register("date",{required:true})}/>
        {errors.date?.type=="required" && <p className='text-danger'>*Date is required</p>}

    </div>
    <div className='p-3'>
        <button className='btn btn-success' type='submit'>Add The Slot</button>
    </div>
    {condi.length!=0 && <p className='text-success text-center'>Slot scheduled successfully</p>}
</form>
 </div>
      </div>
    </div>
  )
}

export default Booking1
