import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { demoData, getData, singleData } from '../apiInstance/apiInstance'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../app/fetchUserData';
import { setInput } from '../../app/inputData';
import { data } from 'autoprefixer';
import { setTable } from '../../app/tableData';




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
  const [Id,setId] = useState('')
  const [details,setDetails] = useState([])
  const [passData,setPassData] = useState({})
  const input = useSelector(state=>state.input.input)
  console.log(input);
  const dispatch = useDispatch()

   useEffect(()=>{
    const fetchData = async()=>{
     const response = await getData()
      if(response.success){
        setDetails(response.data)
      }
    }
    fetchData()
   },[])
  const dataDetails={
    DocDate:date,
    Project:project,
    ProjectDes:projectDetails,
    Location:location,
    Id:Id,
    Body:[
      {
        Observation:Observation,
        RiskLevel:riskLevel,
        ActionReq:actionRequire,
        ActionBy:action,
        TargetDate:targetDate,
        EmployeeCode:employeeCode,
      }
    ]
  }
   
  const handleOption = async(id)=>{
    const response = await singleData(id)
    if(response.success){
      setPassData(response.data)
       dispatch(setUser(response.data.Body))
       dispatch(setTable(''))
    }else{
      dispatch(setUser(''))
      setPassData('')
    }
  }

  const handleAction=async(e)=>{
    try{
    e.preventDefault()
    // dispatch(fetchData(id))
    const response = await demoData(dataDetails)
    if(response.success){
     toast.success(response.message)
      dispatch(setTable(response.data))
    }
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className="container">
  <div className="top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full flex justify-center items-center">
    <div className="relative w-full h-full max-w-2xl md:h-auto rounded" style={{ backgroundColor: '#c9d1dd' }}>
        <div className='container m-3'>
        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a TransId</label>
      <select
  id="countries"
  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  onChange={(e)=>handleOption(e.target.value)}
>
  <option value=""></option>
  {details.map((res) => (
    <option key={res._id} value={res._id}>
      {res.Id}
    </option>
  ))}
</select>


        </div>
    
      <form onSubmit={handleAction}>
        <div className="m-5">

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            HSE Observation Form
          </h3>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project</label>
              <input value={passData.Project} type="text" onChange={(e) => (setProject(e.target.value),setPassData(0))} id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>

            <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Details</label>
              <input value={passData.ProjectDes} type="text" onChange={(e) => (setProjectDetails(e.target.value),setPassData(0))} id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
              <input value={passData.Location}  type="text" onChange={(e) => (setLocation(e.target.value),setPassData(0))} id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>

            <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
              <input value={passData.DocDate} type="date" onChange={(e) => (setDate(e.target.value),setPassData(0))} id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">TransId</label>
              <input value={passData.Id} type="text" onChange={(e) => (setId(e.target.value),setPassData(0))} id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            
          </div>
        </div>

        <div className="m-5">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            General condition
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {input? (
            <>
             <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Observation/Findings</label>
              <input value={input.Observation} type="text" onChange={(e) => (setObservation(e.target.value),dispatch(setInput(0)))} id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>

            <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Risk Level</label>
              <input value={input.RiskLevel} type="text" id="company" onChange={(e) => (setRisklevel(e.target.value),dispatch(setInput(0)))} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>

            <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Action Required</label>
              <input value={input.ActionReq} type="text" id="company" onChange={(e) => (setActionRequire(e.target.value),dispatch(setInput(0)))} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
      <div >
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Action By</label>
            <input value={input.ActionBy} type="text"  id="company" onChange={(e)=>(setAction(e.target.value),dispatch(setInput(0)))}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
      <div >
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Employee Code</label>
            <input value={input.EmployeeCode} type="text"  id="company" onChange={(e)=>(setEmployeeCode(e.target.value),dispatch(setInput(0)))} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div >
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target Date</label>
            <input value={input.TargetDate} type="date"  id="company" onChange={(e)=>(setTargetDate(e.target.value),dispatch(setInput(0)))} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
            </>
            ):(
             <>
              <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Observation/Findings</label>
              <input type="text" onChange={(e) => (setObservation(e.target.value),dispatch(setInput(0)))} id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>

            <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Risk Level</label>
              <input  type="text" id="company" onChange={(e) => (setRisklevel(e.target.value),dispatch(setInput(0)))} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>

            <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Action Required</label>
              <input  type="text" id="company" onChange={(e) => (setActionRequire(e.target.value),dispatch(setInput(0)))} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
      <div >
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Action By</label>
            <input  type="text"  id="company" onChange={(e)=>(setAction(e.target.value),dispatch(setInput(0)))}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
      <div >
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Employee Code</label>
            <input  type="text"  id="company" onChange={(e)=>(setEmployeeCode(e.target.value),dispatch(setInput(0)))} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div >
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target Date</label>
            <input  type="date"  id="company" onChange={(e)=>(setTargetDate(e.target.value),dispatch(setInput(0)))} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
             </>
            )}
           
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
