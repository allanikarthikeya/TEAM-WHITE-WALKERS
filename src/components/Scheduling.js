import React from 'react'
import {useForm} from 'react-hook-form'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import  axios  from 'axios'
import './Scheduling.css'
function Scheduling() {
  let [conditi,setcondition]=useState("true")
  let navigate=useNavigate()
  
  let {register,handleSubmit,formState:{errors}}=useForm()
  let formsubmit=(userobj)=>{
axios.get("http://localhost:4000/users")
.then(res=>{
  let object = res.data.find(obj => obj.username == userobj.username && obj.password == userobj.password )
  {object===undefined ? setcondition("false") : navigate('/booking')}
})
.catch(err=>console.log("err is",err))
  }
  useEffect(()=>{setcondition("true")},[])
  return (
    <div>
      <h3 className='text-center mt-5'>Schedule a meeting</h3>
      <div className='row mt-5'>
        <div className='col-11 col-sm-8 col-md-5 mx-auto'>
      <form onSubmit={handleSubmit(formsubmit)}>
      {conditi==="false" && <p className='text-danger ps-5 pt-2'>*Incorrect username or password</p>}
        <div className='p-3'>
        <label for="username" className='form-label mt-5'>Username</label>
        <input id="username" type="text" className='form-control mb-3' {...register("username",{required:true})}/>
        {errors.username?.type=="required" && <p className='text-danger'>*Username is required</p>}

      </div>
      <div className='p-3'>
        <label for="password" className='form-label'>Password</label>
        <input id="password" type="password" className='form-control mb-4' {...register("password",{minLength:4})}/>
        {errors.password?.type=="minLength" && <p className='text-danger'>*minLength is 4</p>}

      </div>
      <div className='p-3'>
        <button className='btn' type="submit">Login</button>
        </div>
      </form>
      </div>
      </div>
     
    </div>
  )
}

export default Scheduling
