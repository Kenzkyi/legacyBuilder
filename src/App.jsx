import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/kenz/Home'
import MainHolder from './routes/MainHolder'

const routes = createBrowserRouter([
  {
    path:'*',
    element: <div>404 error</div>
  },
  {
    path:'auth/login',
    element: <div>Login</div>
  },
  {
    path:'',
    element: <MainHolder/>,
    children:[
    {
      path:'',
      element:<Home/>
    },
  ]}
])

const App = () => {
  return (
    <RouterProvider router={routes}/>
  )
}

export default App
