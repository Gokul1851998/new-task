import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import MainPage from '../public/page/mainPage'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
          <Route path='/' element={<MainPage/>} />
        </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
