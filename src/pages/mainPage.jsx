import React from 'react'
import Header from '../components/Header'
import Grid from '../components/Grid'
import { useSelector } from 'react-redux'
import Loading from '../components/Loader'

export default function MainPage() {
    let state = useSelector(state=>state.user)
  return (
    <div>
     {state?.loading == true ?<Loading/>:null }
      <div style={{minHeight:"60vh"}}>
      <Header/>
      </div>
      <Grid/>
    </div>
  )
}
