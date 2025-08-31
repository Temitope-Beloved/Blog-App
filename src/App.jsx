import React from 'react'
import Homepage from './Pages/Homepage'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Signup from './Pages/Signup'

const App = () => {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route index element={<Homepage/>} />
      <Route path='/signup' element={<Signup/>} />
      </>
      
    )
  )
  
  return (
    <RouterProvider router={route} />
  )
}

export default App