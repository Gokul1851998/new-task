import React from 'react'
import Header from '../components/Header'
import Grid from '../components/Grid'
import { useSelector } from 'react-redux'


export default function Main() {
  
  return (
    <div>
     {/* {state?.loading == true ?<Loading/>:null } */}
      <div style={{minHeight:"60vh"}}>
      <Header/>
      </div>
      <Grid/>
    </div>
  )
}
