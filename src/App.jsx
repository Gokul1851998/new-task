import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import MainPage from './pages/mainPage'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Toaster/>
     <Routes>
          <Route path='/' element={<MainPage/>} />
        </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
