import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './AppRoutes'

import './style.scss'
import { AuthContextProvider } from './Features/Auth/Services/Auth.context'

function App() {
  return (
    <AuthContextProvider>

 <RouterProvider router={router}/>
    </AuthContextProvider>
   
  )
}

export default App