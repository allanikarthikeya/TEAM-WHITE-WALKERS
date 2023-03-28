import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Gdse() {
    let[gdse,setgdse]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:4000/GDSC")
        .then(res=>setgdse(res.data))
        .catch(err=>console.log("err is",err))
    },[])
  return (
    <div>
         <h2 className='text-center pt-3'>GDSC</h2>
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
    { gdse.map(obj=>
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

export default Gdse
