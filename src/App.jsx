import { useState } from 'react'
import './App.css'
import { HomeComponent } from './Components/HomeComponent'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import carddataLoader from './loaders/carddataLoader'


const router=createBrowserRouter([
  {
    path:"/",
    element: <HomeComponent/>,
    loader: carddataLoader

  }
],
 { future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionStatusRevalidation: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
  }
}
)

function App() {

  return (
    <RouterProvider router={router} future={{v7_startTransition: true,}} />
  )
}


export default App
