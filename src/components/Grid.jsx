import React, { useEffect, useState } from 'react'
import { getData, inputValue } from '../apiInstance/apiInstance'
import { useDispatch , useSelector} from 'react-redux';
import { setInput } from '../../app/inputData';


export default function Grid() {
    const[data,setData] = useState([])
    const dispatch = useDispatch()
    let state = useSelector(state=>state.users.user)
    let table = useSelector(state=>state.table.table)
    console.log(table);
    useEffect(()=>{
      const fetchData = async()=>{
     
        const response = await getData();
        // dispatch(fetchData())
        if(response.success){
            setData(response.data)
        }
    }
    fetchData()
},[])

const handleAction = async(Id)=>{
  dispatch(setInput(Id))
} 

  return (
    <div className="container">
  <div className="mb-5">
    <div className="relative h-full max-w-1xl md:h-auto rounded" style={{ backgroundColor: '#c9d1dd' }}>
      <div className="table-responsive">
        {state? (
 <table className="table">
 <thead className="thead-dark">
   <tr>
     <th scope="col">#</th>
     <th scope="col">Observation/Findings</th>
     <th scope="col">Risk Level</th>
     <th scope="col">Action Required</th>
     <th scope="col">Action By</th>
     <th scope="col">Employee Code</th>
     <th scope="col">Target Date</th>
   </tr>
 </thead>
 {table? (
 <tbody>
 {table.Body.map((data, index) => (
   <tr onClick={()=>handleAction(data)} key={data._id}>
     <th scope="row">{index}</th>
     <td>{data.Observation}</td>
     <td>{data.RiskLevel}</td>
     <td>{data.ActionReq}</td>
     <td>{data.ActionBy}</td>
     <td>{data.EmployeeCode}</td>
     <td>{data.TargetDate}</td>
   </tr>
 ))}
</tbody>
 ):(
  <tbody>
  {state.map((data, index) => (
    <tr onClick={()=>handleAction(data)} key={data._id}>
      <th scope="row">{index}</th>
      <td>{data.Observation}</td>
      <td>{data.RiskLevel}</td>
      <td>{data.ActionReq}</td>
      <td>{data.ActionBy}</td>
      <td>{data.EmployeeCode}</td>
      <td>{data.TargetDate}</td>
    </tr>
  ))}
</tbody>
 )}

</table>
        ):(
          null
        )}
       
      </div>
    </div>
  </div>
</div>

  )
}
