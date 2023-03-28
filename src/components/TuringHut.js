import axios from 'axios'
import React, { useEffect, useState } from 'react'

function TuringHut() {
    let[turing,setturing]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:4000/TuringHut")
        .then(res=>setturing(res.data))
        .catch(err=>console.log("err is",err))
    },[])
  return (
    <div>
         <h2 className='text-center pt-3'>Turing Hut</h2>
    <table className='table table-striped mt-5'>
   <thead>
   <tr>
     <th>Name</th>
     <th>Designation</th>
     <th>E-mail Id</th>
     <th>Contact No</th>
   </tr>
   </thead>
   <tbody>
    { turing.map(obj=>
     <tr>
       <td>{obj.Name}</td>
       <td>{obj.Designation}</td>
       <td>{obj.email}</td>
       <td>{obj.contact}</td>
     </tr>
     
     )
   }
   </tbody>
 </table>
 </div>
  )
}

export default TuringHut
