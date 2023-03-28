import React, { useEffect } from 'react'
import {useForm} from 'react-hook-form'
import { useState } from 'react'
import  axios  from 'axios'
import { useNavigate } from 'react-router-dom'
import './Login.css'
function Login() {
  let [conditi,setcondition]=useState("true")
    let {register,handleSubmit,formState:{errors}}=useForm()
    let navigate=useNavigate()
    let formsubmit=(obj)=>{
      console.log(obj)
    axios.get("http://localhost:4000/faculty")
.then(res=>{
   let object=res.data.find(userobj=>userobj.username==obj.username && userobj.password==obj.password)
   console.log(object)
   {object===undefined ? setcondition("false") : navigate('/booking1')}
  })
.catch(err=>console.log("err is",err))
    }
    useEffect(()=>{setcondition("true")},[])
  return (
    <div>
      <h3 className='text-center mt-5'>LOGIN</h3>
        <div className='row pt-5'>
        <div className='col-11 col-sm-8 col-md-5 mx-auto'>
      <form onSubmit={handleSubmit(formsubmit)}>

          {conditi==="false" && <p className='text-danger ps-5 pt-2'>*Incorrect username or password</p>}
      
        <div className='p-3'>
        <label for="username" className='form-label'>Username</label>
        <input id="username" type="text" className='form-control mb-3' {...register("username",{required:true})}/>
      {errors.username?.type=="required" && <p className='text-danger'>*Username is required</p>}
      </div>
      <div className='p-3'> 
        <label for="password" className='form-label'>Password</label>
        <input id="password" type="password" className='form-control mb-4' {...register("password",{minLength:4})}/>
        {errors.password?.type=="minLength" && <p className='text-danger'>*minLength is 4</p>}

      </div>
      <div className='p-3'>
        <button className='btn btn-primary ' type="submit">Login</button>
        </div>
      </form>
      </div>
      </div>
    </div>
  )
}

export default Login
