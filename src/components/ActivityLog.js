import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './ActivityLog.css'
function ActivityLog() {
  let [activity,setactivity]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:4000/booking")
    .then(res=>setactivity(res.data))
    .catch(err=>console.log("err is",err))
  },[])
  console.log(activity)
  return (
    <div>
      <table className='table table-striped mt-5'>
        <thead>
        <tr>
          <th>Audotorium</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Date</th>
        </tr>
        </thead>
        <tbody>
         { activity.map(obj=>
          <tr>
            <td>{obj.venue}</td>
            <td>{obj.stime}</td>
            <td>{obj.etime}</td>
            <td>{obj.date}</td>
          </tr>
          )
        }
        </tbody>
      </table>
    </div>
  )
}

export default ActivityLog
