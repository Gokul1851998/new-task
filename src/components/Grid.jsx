import React, { useEffect, useState } from 'react'
import { getData } from '../apiInstance/apiInstance'
import { useDispatch , useSelector} from 'react-redux';
import { fetchData } from '../../slices/fetchUserData';

export default function Grid() {
    const[data,setData] = useState([])
    const dispatch = useDispatch()
    let state = useSelector(state=>state.user)
    useEffect(()=>{
      const fetchData2 = async()=>{
        const response = await getData();
        dispatch(fetchData())
        if(response.success){
            setData(response.data)
        }
    }
    fetchData2()
},[])
console.log(state);
  return (
    <div className='container'>
            <div className=" ">
        <div className="relative  h-full max-w-1xl md:h-auto rounded mb-5" style={{backgroundColor:'#c9d1dd'}}>
      <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Project</th>
      <th scope="col">Project Details</th>
      <th scope="col">Location</th>
      <th scope="col">Date</th>
      <th scope="col">Observation/Findings</th>
      <th scope="col">Risk Level</th>
      <th scope="col">Action Required</th>
      <th scope="col">Action By</th>
      <th scope="col">Employee Code</th>
      <th scope="col">Target Date</th>
    </tr>
  </thead>
  <tbody>
    {state?.data.map((data,index)=>(
        <tr key={data._id}>
      <th scope="row">{index}</th>
      <td>{data.Project}</td>
      <td>{data.ProjectDes}</td>
      <td>{data.Location}</td>
      <td>{data.DocDate}</td>
      <td>{data.Body[0].Observation}</td>
      <td>{data.Body[0].RiskLevel}</td>
      <td>{data.Body[0].ActionReq}</td>
      <td>{data.Body[0].ActionBy}</td>
      <td>{data.EmployeeCode}</td>
      <td>{data.Body[0].TargetDate}</td>
    </tr>
    ))}

  </tbody>
</table>


</div>
    </div>
    </div>
  )
}
