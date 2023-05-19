import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { getProject } from '../apiInstance/apiUrl'

 function Header() {
  const [project,setProject] = useState('')
  const [projectDetails,setProjectDetails] = useState('')
  const [location,setLocation] = useState('')
  const [date,setDate] = useState('')
  const [Observation,setObservation] = useState('')
  const [riskLevel,setRisklevel] = useState('')
  const [actionRequire,setActionRequire] = useState('')
  const [action,setAction] = useState('')
  const [employeeCode,setEmployeeCode] = useState('')
  const [targetDate,setTargetDate] = useState('')

  useEffect(()=>{
     const fetchData=async()=>{
      const response = await getProject()
      console.log(response)
     .catch(error => {
        console.error(error,"errr");
      });
      
     }
     fetchData()
  },[])

  const dataDetails={
    DocDate:date,
    Project:project,
    ProjectDes:projectDetails,
    Location:location,
    EmployeeCode:employeeCode,
    Body:[
      {
        Observation:Observation,
        RiskLevel:riskLevel,
        ActionReq:actionRequire,
        ActionBy:action,
        TargetDate:targetDate
      }
    ]
  }
    
  const handleAction=(e)=>{
    try{
    e.preventDefault()
    // axios.post(apiUrlpost,dataDetails).then((response)=>{
    //   console.log(response);
    // })  
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className="container">
    <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full flex justify-center items-center">
        <div className="relative w-full h-full max-w-2xl md:h-auto rounded" style={{backgroundColor:'#c9d1dd'}}>
        <form onSubmit={handleAction}>
    <div className='m-5'>
    
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            HSE Observation Form
           </h3>
        
    <div style={{ display: 'flex', gap: '1rem' }}>
      
         <div >
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project</label>
            <input type="text" onChange={(e)=>setProject(e.target.value)}  id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Details</label>
            <input type="text" onChange={(e)=>setProjectDetails(e.target.value)}  id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div >
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
            <input type="text" onChange={(e)=>setLocation(e.target.value)}   id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div >
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
            <input type="date"  onChange={(e)=>setDate(e.target.value)}  id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
         
      </div>
      </div>


      <div className="  m-5" >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
      General condition
           </h3>
      <div style={{ display: 'flex', gap: '1rem' }}>
         <div >
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Observation/Findings</label>
            <input type="text" onChange={(e)=>setObservation(e.target.value)}   id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Risk Level</label>
            <input type="text" id="company" onChange={(e)=>setRisklevel(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
      <div>
      <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Action Required</label>
        <input type="text" id="company" onChange={(e)=>setActionRequire(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
      </div>
      <div >
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Action By</label>
            <input type="text"  id="company" onChange={(e)=>setAction(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
      <div >
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Employee Code</label>
            <input type="text"  id="company" onChange={(e)=>setEmployeeCode(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div >
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target Date</label>
            <input type="date"  id="company" onChange={(e)=>setTargetDate(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
      </div>
      </div>
      <div className='m-3'>
      <button type="submit" className="btn btn-success">Add</button>
      </div>
     
    </form>
          </div>
        </div>
  
</div>

  )
}

export default Header
