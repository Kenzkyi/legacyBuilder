import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/kenz/Home'

const routes = createBrowserRouter([
  {path:'*',
    element: <div>404 error</div>
  },
  {path:'',
    element:<Home/>
  },
  {path:'auth/login',
    element: <div>Login</div>
  },
  {path:'auth/sign-up',
    element: <div>Sign Up</div>
  },
])

const App = () => {
  return (
    <RouterProvider router={routes}/>
  )
}

export default App
